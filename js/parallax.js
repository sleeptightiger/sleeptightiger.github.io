body = document.querySelector('body');

//background stars
const bg = document.querySelector('#bg');
bg.width = window.innerWidth;
bg.height = window.innerHeight;
let c1 = bg.getContext('2d');
// first layer of stars
const layer1 = document.querySelector('#layer1');
layer1.width = window.innerWidth;
layer1.height = window.innerHeight * 2;
let c2 = layer1.getContext('2d');
//second layer of stars
const layer2 = document.querySelector('#layer2');
layer2.width = window.innerWidth;
layer2.height = window.innerHeight * 2;
let c3 = layer2.getContext('2d');
//foreground stars
const fg = document.querySelector('#fg');
fg.width = window.innerWidth;
fg.height = window.innerHeight * 2;
let c4 = fg.getContext('2d');

const star = "#222";
circle = (x, y, r, canvas, lineX, lineY) => {
  canvas.beginPath();
  canvas.moveTo(x, y);
  canvas.arc(x, y, r, 0, Math.PI * 2, true);
  canvas.shadowColor = star;
  canvas.shadowBlur = 2;
  canvas.shadowOffsetX = 0;
  canvas.shadowOffsetY = 0;
  canvas.fillStyle = star;
  canvas.fill();

  canvas.moveTo(x,y-lineY*r);
  canvas.lineTo(x,y+lineY*r);
  canvas.lineWidth = .2;
  canvas.strokeStyle = star;
  canvas.stroke();

  canvas.moveTo(x-lineX*r,y);
  canvas.lineTo(x+lineX*r,y);
  canvas.strokeStyle = star;
  canvas.stroke();
}

starSetter = (can, numberOfStars, r, lineX, lineY) => {
  let x;
  let y;
  for(let i = 0; i < numberOfStars; i++) {
    x = Math.random() * (bg.width - r * 2) + r;
    y = Math.random() * (bg.height - r * 2) + r;
    circle(x, y, r, can, lineX, lineY);
  }

}

slider = (elem, x, y, rate) => {
  let centerX = elem.width / 2;
  let centerY = elem.height / 2;
  let dx = centerX - x;
  let dy = centerY - y;
  elem.style.transform = `translate(${dx/rate}px, ${dy/rate}px)`;
}

reset = (elem) => {
  elem.style.transform = `translate(0px, 0px)`;
}

starSetter(c1, 100, 1, 1, 1);
starSetter(c2, 20, 3, 1, 1);
starSetter(c3, 15, 4, 1, 1);
starSetter(c4, 10, 6, 1, 1);

window.addEventListener('resize', () => {
  bg.width = window.innerWidth;
  bg.height = window.innerHeight;
  c1 = bg.getContext('2d');
  layer1.width = window.innerWidth;
  layer1.height = window.innerHeight * 2;
  c2 = layer1.getContext('2d');
  layer2.width = window.innerWidth;
  layer2.height = window.innerHeight * 2;
  c3 = layer2.getContext('2d');
  fg.width = window.innerWidth;
  fg.height = window.innerHeight * 2;
  c4 = fg.getContext('2d');
  starSetter(c1, 100, 1, 1, 1);
  starSetter(c2, 20, 3, 1, 1);
  starSetter(c3, 15, 4, 1, 1);
  starSetter(c4, 20, 6, 1, 1);
});


body.addEventListener('mousemove', (e) => {


  let x = e.clientX;
  let y = e.clientY;
  slider(bg, x, y, 20);
  slider(layer1, x, y, 10);
  slider(layer2, x, y, 3);
  slider(fg, x, y, 1);

});

parallaxScroll = () => {
  layer1.style.top = -(window.pageYOffset / 8)+'px';
  layer2.style.top = -(window.pageYOffset / 9)+'px';
  fg.style.top = -(window.pageYOffset / 3)+'px';
}

window.addEventListener('scroll', parallaxScroll, false);
