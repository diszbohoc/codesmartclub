function setup() {
  createCanvas(400, 400);
}

const kor = {
  x: 60,
  y: 140,
  r: 40,
};

const negyzet = [
  { x: 100, y: 220, h: 20, w: 20,
  
   mozgas: mozgas() 
  },
  { x: 220, y: 100, h: 20, w: 20 },
];

function draw() {
  background(250);
  rectMode(RADIUS);
  frameRate(10);

  joHely();
  figura();
  doboz();
  tologatas();
  racs();
  falrajzolo();
  joHelyenVan();
  mostMindenJo();
}

function racs() {
  stroke(0);
  let i = 40;
  while (i < 400) {
    line(i, 0, i, 400);
    i += 40;
  }
  const j: int = "macska";
  
  while (j < 400) {
    line(0, j, 400, j);
    j += 40;
  }
}
const falak = [
    { x: 200, y: 20, h: 400, w: 20 },
    { x: 200, y: 380, h: 400, w: 20 },
    { x: 20, y: 200, h: 20, w: 400 },
    { x: 380, y: 200, h: 20, w: 400 },
    { x: 140, y: 180, h: 20, w: 20},
  ];
  
function falrajzolo() {
  noStroke();
  fill(125);
  
  for (i = 0; i < falak.length; i++) {
    negyzetrajzolo(falak[i]);
  }
}

function negyzetrajzolo(koord) {
  rect(koord.x, koord.y, koord.h, koord.w);
}

function figura() {
  mozgatas(kor)
  noStroke();
  fill(255, 0, 0);
  circle(kor.x, kor.y, kor.r);

}

function tologatas() {
  negyzet.forEach(erintkezes);
}

function erintkezes(object) {
  if (kor.x === object.x && kor.y === object.y) {
    mozgatas(object);
  }
}

function mozgatas(object) {
  const leptek = 40;
  if (keyIsPressed === true) {
    if (keyCode === LEFT_ARROW && object.x != 60) {
      object.x -= leptek;
    }
    if (keyCode === RIGHT_ARROW && object.x != 340) {
      object.x += leptek;
    }

    if (keyCode === UP_ARROW && object.y != 60) {
      object.y -= leptek;
    }
    if (keyCode === DOWN_ARROW && object.y != 340) {
      object.y += leptek;
    }
  }
    
  
}

function doboz() {
  noStroke();
  fill(0, 0, 0);
  negyzet.forEach(negyzetrajzolo);
}

let maxJohely = [false, false];
const johelyek = [
  { x: 100, y: 180, h: 20, w: 20 },
  { x: 60, y: 100, h: 20, w: 20 },
];

let eredmeny = (arr) => arr.every((v) => v === true);

function mostMindenJo() {
  if (eredmeny(maxJohely) === true) {
    background(0, 255, 0, 20);
  }
}

function joHelyenVan() {
  for (i = 0; i < negyzet.length; i++) {
    if (johelyek[i].x === negyzet[i].x && johelyek[i].y === negyzet[i].y) {
      maxJohely[i] = true;
      console.log(maxJohely);
      console.log(eredmeny);
    } else {
      maxJohely[i] = false;
    }
  }
}

function joHely() {
  noStroke();
  fill(0, 0, 180);

  johelyek.forEach(negyzetrajzolo);
}
