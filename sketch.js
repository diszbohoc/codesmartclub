function setup() {
  createCanvas(400, 400);
}


// https://www.w3schools.com/js/js_objects.asp
const kor = {
  x: 200,
  y: 200,
  r: 40,
  utolso_hely: {
    x: 0,
    y: 0
  }
}


let xKor = 200;
let yKor = 200;
let xDoboz = 100;
let yDoboz = 100;
let xJo = 100;
let yJo = 10;
let wDoboz = 20;
let rKor = 40;

function draw() {
  background(250);
  frameRate(50)
  rectMode(RADIUS)
  

  figura();
  doboz();
  joHely();
  tologatas();
}

function figura() {
  noStroke();
  fill(255, 0, 0);
  circle(kor.x, kor.y, kor.r);

  if (keyIsPressed === true) {
     mozgatas(kor)
  }
}

function mozgatas(object){
   const leptek = 5
   // https://bobbyhadz.com/blog/javascript-specify-multiple-conditions-in-if-statement
   if (keyCode === LEFT_ARROW && object.x != 20) {
      object.x -= leptek;
    }
    if (keyCode === RIGHT_ARROW && object.x != 380) {
      object.x += leptek;
    }

    if (keyCode === UP_ARROW && object.y != 20) {
      object.y -= leptek;
    }
    if ((keyCode === DOWN_ARROW) && (object.y != 380)) {
      object.y += leptek;
    }

}

function doboz() {
  noStroke();
  fill(0, 0, 0);
  rect(xDoboz, yDoboz, wDoboz, wDoboz);
  if (xDoboz === xJo) {
    if (yDoboz === yJo) {
      background(0, 255, 0);
    }
  }
}

function joHely() {
  noStroke();
  fill(0, 0, 180);
  square(xJo, yJo, 20);
}

function tologatas() {
  let testX;
  let testY;
  float((testX = xKor));
  float((textY = yKor));

  if (xKor < xDoboz) {
    testX = xDoboz;
  } else if (xKor > xDoboz + wDoboz) {
    testX = xDoboz + wDoboz;
  }
  if (yKor < yDoboz) {
    testY = yDoboz;
  } else if (yKor > yDoboz + wDoboz) {
    testY = yDoboz + wDoboz;
  }

  float((distX = xKor - testX));
  float((distY = yKor - testY));
  float((distance = sqrt(distX * distX + distY * distY)));

  if (distance <= rKor) {
    if (keyIsPressed === true) {
      if (keyCode === UP_ARROW) {
        yDoboz -= 5;
      }
      if (keyCode === DOWN_ARROW) {
        yDoboz += 5;
      }
      if (keyCode === RIGHT_ARROW) {
        xDoboz += 5;
      }
      if (keyCode === LEFT_ARROW) {
        xDoboz -= 5;
      }
    }
  }
}

