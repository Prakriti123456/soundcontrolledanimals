
function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/la7mfaJcK/model.json', modelReady);
}

function modelReady() {
  classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;
var buffalo = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_no_r = Math.floor(Math.random() * 255) + 1;
    random_no_g = Math.floor(Math.random() * 255) + 1;
    random_no_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Detected voice is of  - ' + results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - ' + dog + ' Detected Cat - ' + cat + 'Detected Buffalo - ' + buffalo;

    document.getElementById("result_label").style.color = 'rgb(' + random_no_r + "," + random_no_g + "," + random_no_b + ')';
    document.getElementById("result_count").style.color = 'rgb(' + random_no_r + "," + random_no_g + "," + random_no_b + ')';

    img = document.getElementById('animal_image');

    if (results[0].label == "Barking") {
      img.src = 'barking.gif';
      dog = dog + 1;
    } else if (results[0].label == "Meowing") {
      img.src = 'meoww.gif';
      cat = cat + 1;
    } else if (results[0].label == "Mooing") {
      img.src = 'mooing.gif';
      cat = buffalo + 1;
    } else {
      img.src = 'hear.gif';
    }
  }
}