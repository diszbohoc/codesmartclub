const figura = {
  name: "figura",
  x: 60,
  y: 140,
  r: 40,
};

const dobozok = [
  { name: "doboz", x: 100, y: 220, h: 20, w: 20 },
  { name: "doboz", x: 220, y: 100, h: 20, w: 20 },
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
  const tologatni = []
  const nextfigura = mozgatas(figura)
  console.log(nextfigura)
  const dobozkoordinata = erintkezes(nextfigura)
  if(dobozkoordinata){
    const nextdoboz = mozgatas(dobozkoordinata)
    console.log(dobozkoordinata)
    tologatni.push({from: dobozkoordinata,to: nextdoboz})
  } else {
    tologatni.push({from: figura,to: nextfigura})
  }
  tologatni.forEach((mozgas) => 
    Object.entries(mozgas.to).forEach(([key, value]) => {
      mozgas.from[key] = mozgas.to[key]
    }))
  /*Object.entries(nextobject).forEach(([key, value]) => {
    object[key] = nextobject[key]
  })*/
}


function erintkezes(figura){
  return dobozok.find((doboz) => figura.x === doboz.x && figura.y === doboz.y )
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
  const nextobject = { ...object }
  if (keyCode === LEFT_ARROW) {
    nextobject.x -= leptek
  }
  if (keyCode === RIGHT_ARROW) {
    nextobject.x += leptek
  }
  if (keyCode === UP_ARROW) {
    nextobject.y -= leptek
  }
  if (keyCode === DOWN_ARROW) {
    nextobject.y += leptek
  }
  if(mehet(nextobject)){
    return nextobject
  } else {
    return object
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