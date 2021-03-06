function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("googleLens",modelLoaded);
    
  }
  function modelLoaded(){
    console.log("Google Lens has loaded .YAY!");
  }
  function draw(){
  image(VIDEO,0,0,300,300);
  classifier.classify(video,gotResult);
  }
  function gotResult(error,results){
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("obj").innerHTML=results[0].label;
      document.getElementById("acc").innerHTML=results[0].confidence.toFixed(2)+"%";
    }
  }
  function swap(){
      window.location("MN.html")
  }
  