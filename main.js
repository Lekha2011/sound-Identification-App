function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Y6X_zeHpc/model.json" , modelready);    
}

function modelready(){
    classifier.classify(gotResult);
}

function gotResult(error , results){
   if (error){
       console.error(error);
   }
   else {
       console.log(results);
       r = Math.floor(Math.random() * 255) + 1;
       g = Math.floor(Math.random() * 255) + 1;
       b = Math.floor(Math.random() * 255) + 1;

       document.getElementById("result_label").innerHTML = "I can hear - "+ results[0].label;
       document.getElementById("result_accuracy").innerHTML = "Accuracy - "+ (results[0].confidence*100).toFixed(2)+"%";
       document.getElementById("result_label").style.color = "rgb("+r+"," +g+"," +b+")";
       document.getElementById("result_accuracy").style.color = "rgb("+r+"," +g+"," +b+")";

       img = document.getElementById("alien1");
       img1 = document.getElementById("alien2");
       img2 = document.getElementById("alien3");
       img3 = document.getElementById("alien4");

       if (results[0].label == "clap"){
           img.src = "alien-01.gif"
           img1.src= "alien-02.png"
           img2.src = "aliens-03.png"
           img3.src = "alien-04.png"
       } else if  (results[0].label == "Bell"){
        img.src = "alien-01.png"
        img1.src= "alien-02.gif"
        img2.src = "aliens-03.png"
        img3.src = "alien-04.png"
       }else if  (results[0].label == "snap"){
        img.src = "alien-01.png"
       img1.src= "alien-02.png"
       img2.src = "aliens-03.gif"
       img3.src = "alien-04.png"   
}      else{
        img.src = "alien-01.png"
        img1.src= "alien-02.png"
        img2.src = "aliens-03.png"
        img3.src = "alien-04.gif"
}

   }
}