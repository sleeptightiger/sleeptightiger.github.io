let marginY = 0;
let destination = 0;
const speed = 5;
let scroller = null;

function initScroll() {
  destination = window.innerHeight;

  scroller = setTimeout(function(){
    initScroll();
  }, 1);

  marginY += speed;


  window.scroll(0, marginY);
  if(marginY >= destination) {
    clearTimeout(scroller);
    // marginY = 0;
  }


}
