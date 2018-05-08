body = document.querySelector('body');
hiddenLayer = document.querySelector('.hidden-layer');
//background stars
const hbg = document.querySelector('#hidden-bg');
hbg.width = hiddenLayer.offsetWidth;
hbg.height = hiddenLayer.offsetHeight;
const hc1 = hbg.getContext('2d');
// first layer of stars
const hlayer1 = document.querySelector('#hidden-layer1');
hlayer1.width = hiddenLayer.offsetWidth;
hlayer1.height = hiddenLayer.offsetHeight * 2;
const hc2 = hlayer1.getContext('2d');
//second layer of stars
const hlayer2 = document.querySelector('#hidden-layer2');
hlayer2.width = hiddenLayer.offsetWidth;
hlayer2.height = hiddenLayer.offsetHeight * 2;
const hc3 = hlayer2.getContext('2d');
//foreground stars
const hfg = document.querySelector('#hidden-fg');
hfg.width = hiddenLayer.offsetWidth;
hfg.height = hiddenLayer.offsetHeight * 2;
const hc4 = hfg.getContext('2d');

const hstar = "#FEFEFE";
circle = (x, y, r, canvas, lineX, lineY) => {
  canvas.beginPath();
  canvas.moveTo(x, y);
  canvas.arc(x, y, r, 0, Math.PI * 2, true);
  canvas.shadowColor = hstar;
  canvas.shadowBlur = 2;
  canvas.shadowOffsetX = 0;
  canvas.shadowOffsetY = 0;
  canvas.fillStyle = hstar;
  canvas.fill();

  canvas.moveTo(x,y-lineY*r);
  canvas.lineTo(x,y+lineY*r);
  canvas.lineWidth = .2;
  canvas.strokeStyle = hstar;
  canvas.stroke();

  canvas.moveTo(x-lineX*r,y);
  canvas.lineTo(x+lineX*r,y);
  canvas.strokeStyle = hstar;
  canvas.stroke();
}

starSetter = (can, numberOfStars, r, lineX, lineY) => {
  let x;
  let y;
  for(let i = 0; i < numberOfStars; i++) {
    x = Math.random() * (hbg.width - r * 2) + r;
    y = Math.random() * (hbg.height - r * 2) + r;
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

starSetter(hc1, 100, 1, 1, 1);
starSetter(hc2, 20, 3, 1, 1);
starSetter(hc3, 15, 4, 1, 1);
starSetter(hc4, 10, 6, 1, 1);




body.addEventListener('mousemove', (e) => {


  let x = e.clientX;
  let y = e.clientY;
  slider(hbg, x, y, 20);
  slider(hlayer1, x, y, 10);
  slider(hlayer2, x, y, 3);
  slider(hfg, x, y, 1);

});

hparallaxScroll = () => {
  hlayer1.style.top = -(window.pageYOffset / 8)+'px';
  hlayer2.style.top = -(window.pageYOffset / 9)+'px';
  hfg.style.top = -(window.pageYOffset / 10)+'px';
}

window.addEventListener('scroll', hparallaxScroll, false);

// homeBg.addEventListener('mouseleave', ()=>{
//   // reset(bg);
//   // reset(layer1);
//   // reset(layer2);
//   // reset(fg);
// });
