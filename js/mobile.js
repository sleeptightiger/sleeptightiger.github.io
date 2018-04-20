
const hamburger = document.querySelector('.hamburger');
const hamBg = document.querySelector('.ham-bg');
const menu = document.querySelector('.hidden-menu');
const hiddenLayer = document.querySelector('.hidden-layer');
const homeText = document.querySelector('.text');
const icons = document.querySelectorAll('.hidden-icons a');




let width = window.innerWidth;
console.log(width);
window.addEventListener('resize', () => {
  let width = window.innerWidth;
  const offsetRight = window.innerWidth - (homeText.offsetWidth + homeText.offsetLeft);
  const text = homeText.offsetWidth + homeText.offsetLeft;
  if(offsetRight > text) {
    console.log(width)
    console.log("It's big enough!");
  }
});

hamburger.addEventListener('click', () => {
  if(window.innerWidth > 650) {
    hamburger.classList.toggle('close');

    if(menu.classList.contains('slide')) {
      setTimeout(function () {
          menu.classList.toggle('slide');
        }, 700);
    } else {
      menu.classList.toggle('slide');
    }
    // menu.classList.toggle('slide');
    hamBg.classList.toggle('on-black-shadow');
    setTimeout(function () {
        hiddenLayer.classList.toggle('layer-slide');
      }, 300);
    if(hamburger.classList.contains('close')) {
      setTimeout(function () {
        icons[0].style.display = 'inline-block';
        icons[1].style.display = 'inline-block';
    }, 900);
      setTimeout(function () {
        homeText.style.color = '#FEFEFE';
        icons[0].style.color = '#FEFEFE';
        icons[1].style.color = '#FEFEFE';
        icons[0].style.opacity = '1';
        icons[1].style.opacity = '1';
    }, 1000);
    } else {
      setTimeout(function () {
        icons[0].style.display = 'none';
        icons[1].style.display = 'none';
    }, 400);
      setTimeout(function () {
        homeText.style.color = '#222';
        icons[0].style.opacity = '1';
        icons[1].style.opacity = '1';
      }, 300);
    }
  } else {
    hamburger.classList.toggle('close');
    menu.classList.toggle('slide');
    hamBg.classList.toggle('on-black-shadow');
  }


});
