const figura = {
  x: 60,
  y: 140,
  r: 40,
};

const dobozok = [
  { x: 100, y: 220, h: 20, w: 20 },
  { x: 220, y: 100, h: 20, w: 20 },
];



const falak = [
  { x: 200, y: 20, h: 400, w: 20 },
  { x: 200, y: 380, h: 400, w: 20 },
  { x: 20, y: 200, h: 20, w: 400 },
  { x: 380, y: 200, h: 20, w: 400 },
  { x: 140, y: 200, h: 20, w: 80 },
];

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
  const aobj = { x: 1, y: 2}
  const bobj = { x: 1, y: 2}
  
  if( aobj === bobj){
    console.log("egyenlok")
  } else {
    console.log("nemegyenlo")
  }

  if( (aobj.x == bobj.x) && (aobj.y == bobj.y)){
    console.log("ez igy egyenlo")
  }

  racsrajzolo()
  level1Setup()
  falrajzolo()
  figurarajzolo()
 /* johelyrajzolo()
  dobozrajzolo()
  figurarajzolo()
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
    line(0,i,400,i)
    i += 40;
  }
}

function falsetup() {
  // keret
  [20,380].forEach((koor) => {
    for(let i = 20; i < 400; i+= 20){
      const fal = [
        {x: koor, y: i},
        {x: i, y: koor}
      ]
      falregiszter.push(...fal)
    }
  }) 
  console.log(falregiszter)
}

function level1Setup(){
  for( let i = level1.fal.minx; i < level1.fal.maxX; i+= 20){
    const fal = {x: i, y: level1.fal.miny }
    falregiszter.push(fal)
  }
}

function falrajzolo(){
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
  //mozgatas(kor)
  noStroke();
  fill(255, 0, 0);
  circle(figura.x, figura.y, figura.r);
}

function dobozrajzolo() {
  noStroke();
  fill(0, 0, 0);
  dobozok.forEach(negyzetrajzolo);

}

function tologatas() {
  negyzet.forEach(erintkezes);
}


// generikus
function negyzetrajzolo(koord) {
  rect(koord.x, koord.y, 20);
}

function erintkezes(object) {
  if (kor.x === object.x && kor.y === object.y) {
    mozgatas(object);
  }
}

function keyPressed() {  
  const leptek = 40
  //console.log(falak)
  if (keyCode === LEFT_ARROW){
    figura.x -= leptek
  }
  if (keyCode === RIGHT_ARROW){
    figura.x += leptek
  }
  if (keyCode === UP_ARROW) {
    figura.y -= leptek
  }
  if (keyCode === DOWN_ARROW) {
    figura.y += leptek
  }
  redraw()
}

function lephet(object){
  console.log(object.x)
  const valami =  falak.some( (fal) => 
    fal.x == (object.x - 40) ||
    fal.y == (object.y - 40)
  )
  console.log(valami)
  return !(falak.some( (fal) => fal.x == (object.x - 40)))
  /*if(object.name === "kor"){

  }*/
}

function mozgatas(irany) {
  
  if(irany == "bal"){
    kor.x -= kor.x != 60 ?? leptek
  }
/*  if (keyIsPressed === true) {
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
  }*/
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