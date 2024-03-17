/* a fenti egy class megvalósításban így nézne ki
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/
class Figura {
  szomszed = undefined
  next = {}
  constructor(){
    this.x = 60
    this.y = 140,
    this.r = 40
  }
  rajzolj(){
    noStroke()
    fill(255, 0, 0)
    circle(this.x,this.y,this.r)
  }
  mehetek(){
    let mehetek = mehet(this.next)
    if(this.szomszed != undefined){
      mehetek = mehet(this.szomszed.next)
    }
    return mehetek
  }
  mozogj(){
    mozogj(this,this.next)
  }
}



// ide gyűjtöm be a fal koordinátáit
// ha minden négyzet, akkor egyszerűbb ellenőrizni a mozgást
const falregiszter = []

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

const johelyek = [];
const dobozok = []

// szintek, ahol további falakat tudsz megadni
// ide kerül a dobozok és a jóhelyek
// a szintsetup funkció rajzolja meg őket
const szintek ={
  1: {
    fal: {
      minx: 180,
      maxX: 380,
      miny: 180,
      maxY: 180
    },
    johelyek: [
      { x: 100,
        y: 180,
        h: 20,
        w: 20
      },
      { x: 60,
        y: 100,
        h: 20,
        w: 20 
      }
    ],
    dobozok: [
      {
        name: "doboz",
        x: 100,
        y: 220,
        next: { },
      },
      {
        name: "doboz",
        x: 220,
        y: 100,
        next: { }
      }
    ]
  }
}

function setup() {
  createCanvas(400, 400)
  falsetup()
  // mivel a falakat csak egyszer akarjuk rajzolni 
  // és nem folyamatosan, ezért nem akarunk ciklust
  noLoop()
}

const figura = new Figura()

function draw() {
  background(250);
  rectMode(RADIUS);
  frameRate(50);

  racsrajzolo()
  szintsetup(1)
  falrajzolo()
  figura.rajzolj()
  mostMindenJo()
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

function szintsetup(szint) {
  for (let i = szintek[szint].fal.minx; i < szintek[szint].fal.maxX; i += 20) {
    const fal = { x: i, y: szintek[szint].fal.miny }
    falregiszter.push(fal)
  }
  // ez több szint esetén marhaság, mert akkor hozzáadod
  // mivel most csak 1 szintünk van, megteszi
  johelyek.push(...szintek[szint].johelyek)
  szintek[szint].johelyek.forEach((johely) => {
    noStroke()
    fill(0, 0, 180);
    negyzetrajzolo(johely)
  })
  dobozok.push(...szintek[szint].dobozok)
  szintek[szint].dobozok.forEach((doboz) => {
    noStroke();
    fill(0, 0, 0);
    negyzetrajzolo(doboz)
  })
}

// generikus
function negyzetrajzolo(koord) {
  rect(koord.x, koord.y, 20);
}

function falrajzolo() {
  noStroke()
  fill(125)
  falregiszter.forEach((fal) => negyzetrajzolo(fal))
}

function mozogj(object, nextobject) {
  object.x = nextobject.x
  object.y = nextobject.y
}

function tologatas() {
  mozgatas(figura)
  erintkezes()
  if (figura.szomszed) {
    mozgatas(figura.szomszed)
  }
  // ez lehetne kissé szebb is, de egyelőre jó ez
  if (figura.mehetek()) {
    figura.mozogj()
    if (figura.szomszed) {
      mozogj(figura.szomszed, figura.szomszed.next)
      figura.szomszed.johelyenvan = joHelyenVan(figura.szomszed)
    }
  }
}

function erintkezes() {
  // a find visszaadja a meglelet objektumot a tömbben.
  // ezzel a figurának be lehet állítani a szomszédját
  figura.szomszed = dobozok.find((doboz) => figura.next.x === doboz.x && figura.next.y === doboz.y)
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

function joHelyenVan(object) {
  return johelyek.some((johely) => johely.x === object.x && johely.y === object.y)
}

function mostMindenJo() {
  if (dobozok.every((doboz) => doboz.johelyenvan)) {
    background(0, 255, 0, 20);
  }
}