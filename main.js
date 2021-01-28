Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

var camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    }
    );
    }

    console.log('mL5 version:' , mL5.version);

    classifier = mL5.imageClassifier('',modelLoaded);

    function modelLoaded(){
        console.log('Model Loaded');
    }

    function check(){
        img = document.getElementById('captured_image')
        classifier.classify(img, gotResult);
    }

    function gotResult(error, results){
        if (error) {
            console.error(error);
        } else{
            console.log(results);
            document.getElementById("result_emotion_name").innerHTML = results[0].label;
            document.getElementById("result_emotion_name2").innerHTML = results[1].label;
            if (results[0].label == "happy"){
                document.getElementById("update_emoji").innerHTML = "&#128522;";
            }
            if (results[0].label == "sad"){
                document.getElementById("update_emoji").innerHTML = "&#128532;";
            }
            if (results[0].label == "angry"){
                document.getElementById("update_emoji").innerHTML = "&#128548;";
            }
            if (results[1].label == "happy"){
                document.getElementById("update_emoji28").innerHTML = "&#128522;";
            }
            if (results[1].label == "sad"){
                document.getElementById("update_emoji2").innerHTML = "&#128532";
            }
            if (results[1].label == "angry"){
                document.getElementById("update_emoji2").innerHTML = "&#128548";
            }
        }
    }