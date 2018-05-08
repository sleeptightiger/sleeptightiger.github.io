const links = document.querySelectorAll('.link');
home = document.querySelector('.home');
hamburger = document.querySelector('.hamburger');
const projects = document.querySelector('.projects');

for (var i = 0; i < links.length; i++) {
  let elem = links[i];
  elem.addEventListener('click', (e) => {
    let section = elem.classList.item(0);
    if(section == "home-link") {
      hamburger.click();
      window.scroll(0, 0);
    } else if (section == "projects-link") {
      hamburger.click();
      window.scroll(0, home.offsetHeight);
    } else if (section == "about-link") {
      hamburger.click();
      window.scroll(0, home.offsetHeight + projects.offsetHeight);
    } else {
      hamburger.click();
      window.scroll(0, home.offsetHeight + projects.offsetHeight + 500);
    }

  })
}
