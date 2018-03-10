const nav = document.querySelector('nav');
let innerNav = nav.innerHTML;
// const hamburger = document.querySelector('.hamburger');
// const hiddenMenu = document.querySelector('.hiddenMenu');
// const section = document.querySelectorAll('.part');

console.log(hiddenMenu.offsetHeight);


responsive = width => {
  if(width <= 875) {
    nav.style.display = 'none';
    hamburger.style.display = 'block';


  } else if(width > 875) {
    hamburger.style.display = 'none';
    nav.style.display = 'block';



  }
}


let width = window.innerWidth;
responsive(width);

window.addEventListener('resize', (e) => {
  let width = window.innerWidth;
  responsive(width);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('close');
  let width = window.innerWidth;
  responsive(width);
  hiddenMenu.classList.toggle('unhide');
  for(let i = 0; i < section.length; i++) {
    section[i].classList.toggle('blur');
  };
});
