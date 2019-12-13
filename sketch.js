var giantball;
var textures;
var texts;
let _text;

function preload(){
giantball = loadModel("sphere.obj", true);
textures = loadImage("prew-.jpg")
texts = loadFont("GT-America-Standard-Light.otf");

}

function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);

  frameRate(30)
    _text = createGraphics(100,100);
    _text.textFont('GT-America-Standard-Light.otf');
    _text.textAlign(CENTER);
    _text.textSize(1300);
    _text.fill("white");
    _text.text('click', 50, 50);

}

var heart=30;

function draw() {
  background(0);


  var locX = mouseX - height / 2;
  var locY = mouseY - width / 2;

  //ambientLight(50, 50, 50);
  //directionalLight(255, 255, 255, 0, -1, 0);
  //directionalLight(255, 255, 255, 1, 0, 0);
  //directionalLight(255, 255, 255, 0, 0, -1);

  if (mouseIsPressed) {
    directionalLight(255, 255, 255, 0, 0, -1);
    directionalLight(255, 255, 255, 0, 0, -1);


    pointLight(0, 100, 0, locX, locY, locX);

  } else {
    directionalLight(255, 255, 255, 0, -1, 0);
  }

  pointLight(0, 100, 0, locX, locY, locX);

  noStroke(255);
  // normalMaterial();
  // specularMaterial(255);
  // ambientMaterial(255);

  //if (frameCount%10!=0) {
    // if (frameCount%35==0 || frameCount % 40 == 0) {
    //   heart=60;
    // }else {
    //   heart=30
    // }
    // if (heart==39) {
    //   heart-=9;
    // }


    //print(heart)
    //print(frameCount)

  // }else if (frameCount%3==0){
  //   heart-=3;
  //   if (heart<=0) {
  //     heart=0
  //   }
  //}
    // for (var i = 0; i < array.length; i++) {
    //   heart++
    // }
  //}

  // push();
  // rotateY(frameCount * 0.05);
  // rotateZ(frameCount * 0.005);
  // ellipsoid(heart, heart, 150, 50,50);
var anglevar = frameCount * 0.05;
  if (anglevar == 170) {
    anglevar-=anglevar;
  } else if (anglevar == 15) {
    anglevar+=anglevar;
  }

  //fill(12, 200, 12)
  //ambientMaterial(20,100,100);

  camera(mouseX-width/2, mouseY-1000, 0, 0, 0, 0, mouseY - height, 0, mouseY - height);

  //translate(0, mouseY-height)
  // push();
  // ambientMaterial("purple");
  // texture(textures)
  // scale(0.6);
  // rotateY(frameCount/100)
  // rotateZ(frameCount/100)
  // model(giantball);
  // pop();

  // push();
  //
  // texture(_text);
  // textureMode(NORMAL)
  //
  // rotateY(anglevar)
  // //rotateY(-anglevar)
  // rotateZ(180)
  // translate(5000,5000,5000)
  // plane(30000, 30000);
  // pop();
  push();
  ambientMaterial("blue");
  texture(textures)
  rotateZ(anglevar*15);
  rotateX(anglevar);
  torus(2, 50, 24, 16);
  pop();

  push();
  ambientMaterial("red");
  rotateY(anglevar*0.1);
  torus(1000, 50, 24,16);
  pop();

  push();
  ambientMaterial("blue");
  rotateZ(anglevar*0.5);
  rotateY(anglevar*0.5);
  torus(450, 30, 24,16);
  pop();

  push();
  ambientMaterial("red");
  rotateX(anglevar*1.3);
  rotateY(anglevar*1.3);
  torus(300, 20, 24, 16);
  pop();

  push();
  ambientMaterial("blue");
  rotateX(anglevar);
  rotateZ(anglevar);
  torus(150, 20, 24,16);
  pop();

  push();
  ambientMaterial("red");
  rotateX(anglevar*2);
  rotateY(anglevar*2);
  torus(100, 10, 24,16);
  pop();
  push();

    pop();
}
