const canvas = document.querySelector('canvas');
const h1 = document.querySelector('.hidden-menu h1');
canvas.width = h1.offsetWidth;
canvas.height = h1.offsetHeight;

const c = canvas.getContext('2d');

const black = ['34, 34, 34'];





function BeeLine(x, y, startAt, width, length) {
  this.x = x;
  this.y = y;
  this.startAt = startAt;
  this.width = width;
  this.length = length;

  this.draw = function() {
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.x + this.length, this.y);
    c.strokeStyle = 'white';
    c.lineWidth=this.width;
    c.stroke();
  }

  this.update = function() {
    this.x += 1;
    this.draw();


  }
}



function runBeeLine(x, y, bees, width, length, startAt, count) {
  bees.push(new BeeLine(x, y, startAt, width, length));
  for(let i = 0; i < bees.length; i++) {
    if(count >= bees[i].startAt) {
       bees[i].update();
    }

  }
}



let x = 210;
let y = 16;
let x2 = 312;
let y2 = 85;
let x3 = 222;
let y3 = 148;
let x4 = 287;
let y4 = 215;
let count = 0;
let bees = [];
let bees2 = [];
let bees3 = [];
let bees4 = [];

let startAt = 0;


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);
  bees.push(new BeeLine(x, y, startAt, 3, 9));
  for(let i = 0; i < bees.length; i++) {
    if(count >= bees[i].startAt) {
       bees[i].update();
    }

  }
  bees2.push(new BeeLine(x2, y2, startAt, 3, 9));
  for(let i = 0; i < bees2.length; i++) {
    if(count >= bees2[i].startAt) {
       bees2[i].update();
    }

  }
  bees3.push(new BeeLine(x3, y3, startAt, 3, 9));
  for(let i = 0; i < bees3.length; i++) {
    if(count >= bees3[i].startAt) {
       bees3[i].update();
    }

  }
  bees4.push(new BeeLine(x4, y4, startAt, 3, 9));
  for(let i = 0; i < bees4.length; i++) {
    if(count >= bees4[i].startAt) {
       bees4[i].update();
    }

  }
  startAt+=15;
  count+=1;



}

animate();
