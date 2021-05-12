var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function (event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if(content=="take my selfie"){
        console.log("taking my selfie");
        speak();
    }
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
takesnapshot();
save();
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
function takesnapshot(){
    Webcam.snap(function(data_url){
document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_url+'">';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image");
    link.href=image;
    link.click();
}