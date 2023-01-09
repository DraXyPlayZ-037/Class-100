var SpeechRecognition = window.webkitSpeechRecognition;
recog = new SpeechRecognition();

function Begin() {
    document.getElementById("textbox").innerHTML = "";
    recog.start();
}
recog.onresult = function run(event) {
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if (content == "expecto patronum") {
        spek();
    }

};

function spek() {
    synth = window.speechSynthesis;
    txb = "Taking Your Selfie In 5 seconds"
    ut = new SpeechSynthesisUtterance(txb);
    synth.speak(ut);
    Webcam.attach(camera);

    //Setting the Timeout to wait for 5 seconds :]
    setTimeout(function() {
        Snapshot();
        Save();
    }, 5000);
}

Webcam.set({
    width: 250,
    height: 250,
    image_format: "png",
    png_quality: 90

});



camera = document.getElementById("camera");



function Snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img src=" + data_uri + " id='pic'> "
    });
}

function Save() {

    acy = document.getElementById("anchorcool");
    spic = document.getElementById("pic").src;
    acy.href = spic;
    acy.click();
}