function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

// https://www.w3schools.com/js/js_objects.asp
const kor = {
  x: 60,
  y: 140,
  r: 40,
  utolso_hely: {
    x: 0,
    y: 0,
  },
};

const negyzet = {
  a: {
    x: 100,
    y: 220,
  },
  b: {
    x: 220,
    y: 100,
  },
  w: 20,
  h: 20,
};

const johely = {
  a: {
    x: 100,
    y: 180,
  },
  b: {
    x: 60,
    y: 100,
  },

  w: 20,
  h: 20,
};

function draw() {
  background(250);
  rectMode(RADIUS);
  joHely();

  figura();
  doboz();
  tologatas();
  stroke(0);
  line(40, 0, 40, 400);
  racs();
  frameRate(10);
  falak();
}

function racs() {
  let i = 40;
  while (i < 400) {
    line(i, 0, i, 400);
    i += 40;
  }
  let j = 40;
  while (j < 400) {
    line(0, j, 400, j);
    j += 40;
  }
}



function falak() {
  noStroke();
  fill(125);
   
  const falak = [
    {x: 200, y: 20, z: 400, d: 20},
    {x: 200, y: 380, z: 400, d: 20},
    {x: 20, y: 200, z: 20, d: 400},
    {x: 380, y: 200, z: 20, d: 400}    
  ]
  
  console.log(falak.length)
  /* variaciok:
   lusta init:

   ['tomb1'].foreach(funkcio)

   falak.forEach( negyzetrajzolo )
   falak.forEach( ( elem ) => {
       negyzetrajzolo(elem)
   })
   */
  
  for (i = 0; i < falak.length; i++)
  {
    negyzetrajzolo(falak[i])
  }
  
 /* rect(200, 20, 400, 20);
  rect(200, 380, 400, 20);
  rect(20, 200, 20, 400);
  rect(380, 200, 20, 400);*/
}

function negyzetrajzolo(coordinates){
  rect(coordinates.x,coordinates.y,coordinates.z,coordinates.d);
}

function figura() {
  noStroke();
  fill(255, 0, 0);
  circle(kor.x, kor.y, kor.r);
  mozgatas(kor);
}

function tologatas() {
  erintkezes(negyzet.a);
  erintkezes(negyzet.b);
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
  rect(negyzet.a.x, negyzet.a.y, negyzet.w, negyzet.h);
  rect(negyzet.b.x, negyzet.b.y, negyzet.w, negyzet.h);
}

function joHely() {
  noStroke();
  fill(0, 0, 180);
  rect(johely.a.x, johely.a.y, johely.h, johely.w);
  rect(johely.b.x, johely.b.y, johely.h, johely.w);
  if (
    (negyzet.a.x === johely.a.x && negyzet.a.y === johely.a.y) ||
    (negyzet.a.x === johely.b.x && negyzet.a.y === johely.b.y)
  ) {
    if (
      (negyzet.b.x === johely.b.x && negyzet.b.y === johely.b.y) ||
      (negyzet.b.x === johely.a.x && negyzet.b.y === johely.a.y)
    ) {
      background(0, 255, 0);
    }
  }
}
