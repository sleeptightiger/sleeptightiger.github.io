const skills = document.querySelectorAll('.skillbar');
window.addEventListener('scroll', () => {
  if(window.pageYOffset > 1000) {
    for (var i = 0; i < skills.length; i++) {
      let per = skills[i].getAttribute("data-percent");
      let bar = skills[i].querySelector('.skillbar-bar');
      let title = skills[i].querySelector('.skillbar-title');
      bar.style.width = per;
      title.style.color = '#FEFEFE';
    }
  } else {
    for (var i = 0; i < skills.length; i++) {
      let per = skills[i].getAttribute("data-percent");
      let bar = skills[i].querySelector('.skillbar-bar');
      let title = skills[i].querySelector('.skillbar-title');
      bar.style.width = '0px';
      title.style.color = '#222';
    }
  }
});
