const square = document.querySelector('#face-pic');
const body = document.querySelector('.about');
console.log(square.offsetLeft, square.offsetTop);
rotate = (elem, x, y, deg) => {
  let yDeg = 0
  let xDeg = 0
  let offsetX = elem.offsetLeft;
  let offsetY = elem.offsetTop;
  if(x < offsetX) {
    yDeg = -deg;
  } else if(x >= offsetX && x <= offsetX + elem.offsetWidth) {
    console.log("Bottom!");
    if(x>=offsetX &&x<=offsetX+(elem.offsetWidth/4)) {
      yDeg = -(deg/2);
    } else if (x>offsetX+(elem.offsetWidth/4)&&x<=offsetX+(3*(elem.offsetWidth/4))) {
      yDeg = 0;
    } else {
      yDeg=(deg/2);

    }



  } else {
    console.log("Right!");
    yDeg = deg

  }
  if(y < offsetY) {
    console.log("Here!");
    xDeg = deg;

  } else if(y >= offsetY && y <= offsetY + elem.offsetHeight) {
    if(y>=offsetY &&y<=offsetY+(elem.offsetHeight/4)) {
      xDeg = deg/2;
    } else if (y>offsetY+(elem.offsetHeight/4)&&y<=offsetY+(3*(elem.offsetHeight/4))) {
      xDeg = 0;
    } else {
      xDeg=-(deg/2);

    }



  } else {
    xDeg = -deg

  }
  let prop = `translate(-50%, -50%) perspective(600px) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
  // console.log(prop);
  elem.style.transform = `translate(-50%, -50%) perspective(600px) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
}

reset = (elem) => {
  elem.style.transform = `translate(-50%, -50%) perspective(600px) rotateX(0deg) rotateY(0deg)`;
}


body.addEventListener('mousemove', (e) => {


  let x = e.clientX;
  let y = e.clientY;
  rotate(square, x, y, 10);

});

body.addEventListener('mouseleave', ()=>{
  // reset(square);
});
