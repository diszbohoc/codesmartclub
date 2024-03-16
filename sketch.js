const figura = {
  name: "figura",
  x: 60,
  y: 140,
  r: 40,
  rajzolj: () => circle(figura.x,figura.y,figura.r),
  szomszed: undefined,
  mehetek: () => {
    let mehetek = mehet(figura.next)
    if(figura.szomszed != undefined){
      mehetek = mehet(figura.szomszed.next)
    }
    return mehetek
  },
  next: {},
  mozogj: () => mozogj(figura, figura.next)
};

const dobozok = [
  { 
    name: "doboz", 
    x: 100, 
    y: 220,
    next: {},
  },
  { 
    name: "doboz", 
    x: 220,
    y: 100,
    next: {}
  }
];

function mozogj(object, nextobject){
  console.log("mozognek")
  console.log(object)
  console.log(nextobject)
  object.x = nextobject.x
  object.y = nextobject.y
}
const falregiszter = []

const johelyek = [
  { x: 100, y: 180, h: 20, w: 20 },
  { x: 60, y: 100, h: 20, w: 20 },
];

let eredmeny = (arr) => arr.every((v) => v === true);
let maxJohely = [false, false];

const level1 = {
  fal: {
    minx: 180,
    maxX: 380,
    miny: 180,
    maxY: 180
  }
}


function setup() {
  createCanvas(400, 400)
  falsetup()
  noLoop()

}

function draw() {
  background(250);
  rectMode(RADIUS);
  frameRate(50);

  racsrajzolo()
  level1Setup()
  falrajzolo()
  johelyrajzolo()
  figurarajzolo()
  dobozrajzolo()
  /*joHely();
  figura();
  doboz();
  tologatas();
  ;
  ;
  joHelyenVan();
  mostMindenJo();*/
}

// statikus
function racsrajzolo() {
  stroke(0);
  let i = 40;
  while (i < 400) {
    line(i, 0, i, 400);
    line(0, i, 400, i)
    i += 40;
  }
}

function falsetup() {
  // keret
  [20, 380].forEach((koor) => {
    for (let i = 20; i < 400; i += 20) {
      const fal = [
        { x: koor, y: i },
        { x: i, y: koor }
      ]
      falregiszter.push(...fal)
    }
  })
}

function level1Setup() {
  for (let i = level1.fal.minx; i < level1.fal.maxX; i += 20) {
    const fal = { x: i, y: level1.fal.miny }
    falregiszter.push(fal)
  }
}

function falrajzolo() {
  noStroke()
  fill(125)
  falregiszter.forEach((fal) => negyzetrajzolo(fal))
}

function johelyrajzolo() {
  noStroke();
  fill(0, 0, 180);
  johelyek.forEach(negyzetrajzolo);
}

// mozgo
function figurarajzolo() {
  noStroke();
  fill(255, 0, 0);
  figura.rajzolj()
}

function dobozrajzolo() {
  noStroke();
  fill(0, 0, 0);
  dobozok.forEach(negyzetrajzolo);

}

function tologatas() {
  const tologatni = []
  mozgatas(figura)
  erintkezes()
  console.log(figura.szomszed)
  if(figura.szomszed){
    mozgatas(figura.szomszed)
  }
  if(figura.mehetek()){
    figura.mozogj()
    if(figura.szomszed){
      mozogj(figura.szomszed,figura.szomszed.next)
    }
  }
}



function erintkezes(){
  figura.szomszed = dobozok.find((doboz) => figura.next.x === doboz.x && figura.next.y === doboz.y )
}

// generikus
function negyzetrajzolo(koord) {
  rect(koord.x, koord.y, 20);
}

function mehet(object) {
  const found = falregiszter.some(fal => ((fal.x === object.x) && (fal.y === object.y)))
  return !found
}

function mozgatas(object) {
  const leptek = 40
  object.next = { ...object }
  if (keyCode === LEFT_ARROW) {
    object.next.x -= leptek
  }
  if (keyCode === RIGHT_ARROW) {
    object.next.x += leptek
  }
  if (keyCode === UP_ARROW) {
    object.next.y -= leptek
  }
  if (keyCode === DOWN_ARROW) {
    object.next.y += leptek
  }
}


function keyPressed() {
  const leptek = 40
  tologatas()
  redraw()
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

function mostMindenJo() {
  if (eredmeny(maxJohely) === true) {
    background(0, 255, 0, 20);
  }
}