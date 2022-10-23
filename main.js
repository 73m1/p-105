Webcam.set({
    width:350,
    height:6300,
    image_Format: 'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function capture() {
    Webcam.snap(function(data_uri) {
        document.getElementById("final_img").innerHTML = '<img id="captured_image" src="' + data_uri + '">'    })
};
function check() {
    img = document.getElementById("final_img");
    classifier.classify(img,gotResult);
 }

 function gotResult(error,results) {
    if (error) {
        console.log("There was an Error" + error)
    } else {
        console.log(results);
        document.getElementById("result_person_name").innerHTML = results[0].label;
        document.getElementById("result_person_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Edru3fogw/model.json',modelLoaded());