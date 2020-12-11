let pi;
let digits;
let counts = [];
let index = 0;
let radius = 200;

let TWO_PI = 2 * Math.PI;
let num1;
let num2;
let num3;
function setup() {
  createCanvas(800, 800);
  let sdigits;


  pi = loadStrings("pi-1million.txt", function(){
    console.log(pi);
    sdigits = pi[0].split("");
    digits = int(sdigits);
    num1 = digits[index]*100 + digits[index+1]*10 + digits[index+2];
    num2 = digits[index+3]*100 + digits[index+4]*10 + digits[index+5];
    num3 = digits[index+6]*100 + digits[index+7]*10 + digits[index+8];
  });

  //println(sdigits.length);
  
  //printArray(digits);
  background(0);
  
  translate(width/2, height/2);
}

function draw() {
    let purple = color(228,204,255);
    let red = color(255,0,0);
    let white = color(255);
    let black = color(0);
    let granate = color(179,0,0);
    let color_pi = color(num1, num2,num3);;
    let font;
  
  translate(width/2, height/2);
  
  let digit = digits[index];
  let nextDigit = digits[index+1];
  //float diff = TWO_PI/10;
  
  let start_pt = 0;
  let final_pt = 0;
  if (index >= 3) {
    start_pt = float(digits[index-1]*100 + digits[index-2]*10 + digits[index-3]);
    start_pt /= 1000;
    final_pt = float(digits[index+2]*100 + digits[index+3]*10 + digits[index+4]);
    final_pt /= 1000;
  }
  
  let a1 = digit + start_pt;
  a1 = map(a1,0,10,0,TWO_PI);
  let a2 = nextDigit + final_pt;
  a2 = map(a2,0,10,0,TWO_PI);
  
    
  let x1 = radius * cos(a1);
  let y1 = radius * sin(a1);
  
  let x2 = radius * cos(a2);
  let y2 = radius * sin(a2);
  

  //_____Visualización de los puntos donde se unen las líneas:____
  
  //fill(white);
  //ellipse(x1, y1, 7,7);
  //fill(purple);
  //ellipse(x2, y2, 7,7);


  //_____Visualización de las líneas y estrellas__________________
  
  noFill();
  stroke(color_pi, 50);

  line(x1,y1,x2,y2);
  //float distance = map(nextDigit,0,9,1,2.5);
  //float distance = random(1, 2.5);
  let distance = map(final_pt, 0, 1, 1, 3);
  //float size_star = map(index, 0, 9, 1, 5);
  fill(color_pi );
  stroke(color_pi, 10*nextDigit+50);
  let size_star = map(index, 0, 1000, 0.5, 1);
  ellipse(x1*distance, y1*distance, int(size_star)+1, int(size_star)+1); 
  
  index++;

}