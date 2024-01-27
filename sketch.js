function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

// https://www.w3schools.com/js/js_objects.asp
const kor = {
  x: 20,
  y: 140,
  r: 40,
  utolso_hely: {
    x: 0,
    y: 0,
  },
};

const negyzet = {
  x: 60,
  y: 180,
  w: 20,
  h: 20,
  utolso_hely: {
    x: 60,
    y: 180,
  },
};

const johely = {
  x: 100,
  y: 20,
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

function figura() {
  noStroke();
  fill(255, 0, 0);
  circle(kor.x, kor.y, kor.r);
  mozgatas(kor)
}

function tologatas() {
  if (kor.x === negyzet.x) {
    if ((keyCode === UP_ARROW && kor.y === negyzet.y) 
        || (keyCode === DOWN_ARROW && kor.y === negyzet.y)) {
      mozgatas(negyzet);
      //console.log("true")
    }

    if (kor.y === negyzet.y) {
      if ((keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) &&
        kor.x === negyzet.x) {
        // console.log("true")
        mozgatas(negyzet);
      }
    }
  }
}

function mozgatas(object) {
  const leptek = 40;
  // https://bobbyhadz.com/blog/javascript-specify-multiple-conditions-in-if-statement
  if (keyIsPressed === true) {
    if (keyCode === LEFT_ARROW && object.x != 20) {
      object.x -= leptek;
    }
    if (keyCode === RIGHT_ARROW && object.x != 380) {
      object.x += leptek;
    }

    if (keyCode === UP_ARROW && object.y != 20) {
      object.y -= leptek;
    }
    if (keyCode === DOWN_ARROW && object.y != 380) {
      object.y += leptek;
    }
  }
}

function doboz() {
  noStroke();
  fill(0, 0, 0);
  rect(negyzet.x, negyzet.y, negyzet.w, negyzet.h);
}

function joHely() {
  noStroke();
  fill(0, 0, 180);
  rect(johely.x, johely.y, johely.h, johely.w);
  if (negyzet.x === johely.x && negyzet.y === johely.y) {
    background(0, 255, 0);
  }
}
