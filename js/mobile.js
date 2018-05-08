
const hamburger = document.querySelector('.hamburger');
const hamBg = document.querySelector('.ham-bg');
const menu = document.querySelector('.hidden-menu');
const hiddenLayer = document.querySelector('.hidden-layer');
const homeText = document.querySelector('.text');
const icons = document.querySelectorAll('.hidden-icons a');




let width = window.innerWidth;
window.addEventListener('resize', () => {
  let width = window.innerWidth;
  const offsetRight = window.innerWidth - (homeText.offsetWidth + homeText.offsetLeft);
  const text = homeText.offsetWidth + homeText.offsetLeft;
});

hamburger.addEventListener('click', () => {
  if(window.innerWidth > 650) {
    //set off hamburger animation
    hamburger.classList.toggle('close');
    //check if menu is already open
    if(menu.classList.contains('slide')) {
      //if menu is open close after 700ms
      setTimeout(function () {
          menu.classList.toggle('slide');
        }, 700);
    } else {
      //if not close menu
      menu.classList.toggle('slide');
    }
    // put shadow on hamburger button
    hamBg.classList.toggle('on-black-shadow');
    //open hidden-layer after 100ms
    setTimeout(function () {
        hiddenLayer.classList.toggle('layer-slide');
      }, 100);
    //if hidden menu is opening show icons and change logo text color to white
    if(hamburger.classList.contains('close')) {
      setTimeout(function () {
        icons[0].style.display = 'inline-block';
        icons[1].style.display = 'inline-block';
        icons[2].style.display = 'inline-block';
        hbg.style.display = 'inline-block';
        hlayer1.style.display = 'inline-block';
        hlayer2.style.display = 'inline-block';
        hfg.style.display = 'inline-block';
      }, 900);
      setTimeout(function () {
        hbg.style.display = 'inline-block';
        hlayer1.style.display = 'inline-block';
        hlayer2.style.display = 'inline-block';
        hfg.style.display = 'inline-block';
      }, 300);
      setTimeout(function () {
        homeText.style.color = '#FEFEFE';
        icons[0].style.color = '#FEFEFE';
        icons[1].style.color = '#FEFEFE';
        icons[2].style.color = '#FEFEFE';
        icons[0].style.opacity = '1';
        icons[1].style.opacity = '1';
        icons[2].style.opacity = '1';
        hbg.style.opacity = '1';
        hlayer1.style.opacity = '1';
        hlayer2.style.opacity = '1';
        hfg.style.opacity = '1';
      }, 700);
    } else {
      //if hidden menu is closing hide icons and change logo color to black
      setTimeout(function () {
        icons[0].style.display = 'none';
        icons[1].style.display = 'none';
        icons[2].style.display = 'none';
        hbg.style.display = 'none';
        hlayer1.style.display = 'none';
        hlayer2.style.display = 'none';
        hfg.style.display = 'none';
      }, 400);
      setTimeout(function () {
        homeText.style.color = '#222';
        icons[0].style.opacity = '0';
        icons[1].style.opacity = '0';
        icons[2].style.opacity = '0';
        hbg.style.opacity = '0';
        hlayer1.style.opacity = '0';
        hlayer2.style.opacity = '0';
        hfg.style.opacity = '0';
      }, 100);
    }
  } else {
    hamburger.classList.toggle('close');
    menu.classList.toggle('slide');
    hamBg.classList.toggle('on-black-shadow');
  }


});
