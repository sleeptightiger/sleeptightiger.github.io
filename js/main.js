const sections = document.querySelectorAll('.section');
const navButtons = document.querySelectorAll('.navButton');
const categories = document.querySelectorAll('.categories button');
const projCats = document.querySelectorAll('.project-cat');
const catButtons = document.querySelectorAll('.cat-button');
const tiles = document.querySelectorAll('.tile');
const webButton = document.querySelector('.web-button');
const randomButton = document.querySelector('.rand-button');
const allButton = document.querySelector('.all-button');
const icons = document.querySelectorAll('.icons');
const hiddenButtons = document.querySelectorAll('.hiddenButton');
const hiddenMenu = document.querySelector('.hiddenMenu');
const section = document.querySelectorAll('.part');
const hamburger = document.querySelector('.hamburger');
let webClicked = false;
let ranClicked = false;
let allClicked = false;

removeClass = (elem, css) => {
  for(let i = 0; i < elem.length; i++) {
    if(elem[i].classList.contains(css)) {
      elem[i].classList.remove(css);
    }

  }
}

for(let i = 0; i < hiddenButtons.length; i++) {
  hiddenButtons[i].addEventListener('click', () => {
    removeClass(sections, "appear");
    removeClass(navButtons, "focus");
    sections[i].classList.toggle("appear");
    navButtons[i].classList.toggle("focus");
    hiddenMenu.classList.toggle('unhide');
    hamburger.classList.toggle('close');
    for(let i = 0; i < section.length; i++) {
      section[i].classList.toggle('blur');
    };
  });
}

for(let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener('click', () => {
    removeClass(sections, "appear");
    removeClass(navButtons, "focus");
    sections[i].classList.toggle("appear");
    navButtons[i].classList.toggle("focus");
  });
}


webButton.addEventListener('mouseover', (e) => {
  for(let i = 0; i < tiles.length; i++) {
    if(tiles[i].classList.contains('website')) {
      if(!webClicked && !allClicked) {
        tiles[i].classList.toggle('focus');
      }
    }
  }
});
webButton.addEventListener('mouseout', (e) => {
  for(let i = 0; i < tiles.length; i++) {
    if(tiles[i].classList.contains('website')) {
      if(!webClicked && !allClicked) {
        tiles[i].classList.remove('focus');
      }
    }
  }
});

randomButton.addEventListener('mouseover', (e) => {
  for(let i = 0; i < tiles.length; i++) {
    if(tiles[i].classList.contains('random')) {
      if(!ranClicked && !allClicked) {
        tiles[i].classList.toggle('focus');
      }
    }
  }
});
randomButton.addEventListener('mouseout', (e) => {
  for(let i = 0; i < tiles.length; i++) {
    if(tiles[i].classList.contains('random')) {
      if(!ranClicked && !allClicked) {
        tiles[i].classList.remove('focus');
      }
    }
  }
});

allButton.addEventListener('mouseover', (e) => {
  for(let i = 0; i < tiles.length; i++) {
    if(!tiles[i].classList.contains('focus')) {
      if(!allClicked) {
        tiles[i].classList.toggle('focus');
      }
    }

  }
});
allButton.addEventListener('mouseout', (e) => {
  for(let i = 0; i < tiles.length; i++) {
    if(tiles[i].classList.contains('focus')) {
      if(!allClicked) {
        if(!ranClicked) {
          if(tiles[i].classList.contains('random')) {
            tiles[i].classList.remove('focus');
          }
        }
        if(!webClicked) {
          if(tiles[i].classList.contains('website')) {
            tiles[i].classList.remove('focus');
          }
        }
        // tiles[i].classList.remove('focus');
      }
    }
  }
});


allButton.classList.toggle('cat-hover');
webClicked = false;
ranClicked = false;
allClicked = true;
for(let i = 0; i < tiles.length; i++) {
  tiles[i].classList.toggle('focus');
}

webButton.addEventListener('click', () => {
  webButton.classList.toggle('cat-hover');
  webClicked = true;
  ranClicked = false;
  allClicked = false;
  if(randomButton.classList.contains('cat-hover')) {
    randomButton.classList.remove('cat-hover');
  }
  if(allButton.classList.contains('cat-hover')) {
    allButton.classList.remove('cat-hover');
  }
  removeClass(tiles, 'focus');
  for(let i = 0; i < tiles.length; i++) {
    if(tiles[i].classList.contains('website')) {
      tiles[i].classList.toggle('focus');
    }
  }
});

randomButton.addEventListener('click', () => {
  randomButton.classList.toggle('cat-hover');
  webClicked = false;
  ranClicked = true;
  allClicked = false;
  if(webButton.classList.contains('cat-hover')) {
    webButton.classList.remove('cat-hover');
  }
  if(allButton.classList.contains('cat-hover')) {
    allButton.classList.remove('cat-hover');
  }
  removeClass(tiles, 'focus');
  for(let i = 0; i < tiles.length; i++) {
    if(tiles[i].classList.contains('random')) {
      tiles[i].classList.toggle('focus');
    }
  }
});

allButton.addEventListener('click', () => {
  allButton.classList.toggle('cat-hover');
  webClicked = false;
  ranClicked = false;
  allClicked = true;
  if(randomButton.classList.contains('cat-hover')) {
    randomButton.classList.remove('cat-hover');
  }
  if(webButton.classList.contains('cat-hover')) {
    webButton.classList.remove('cat-hover');
  }
  removeClass(tiles, 'focus');
  for(let i = 0; i < tiles.length; i++) {
    tiles[i].classList.toggle('focus');
  }
});


// for(let i = 0; i < tiles.length; i++) {
//   tiles[i].addEventListener('mouseover', (e) => {
//
//     if(tiles[i].classList.contains('focus')) {
//       tiles[i].querySelector('.img').classList.toggle('blur');
//       icons[i].classList.toggle('show-icon');
//     }
//   });
//   // tiles[i].addEventListener('mouseout', (e) => {
//   //   if(tiles[i].classList.contains('focus')) {
//   //     console.log('mouseout!');
//   //     icons[i].classList.remove('show-icon');
//   //   }
//   // });
//
// }



window.onload = function() {
    sections[0].classList.toggle("appear");
    navButtons[0].classList.toggle("focus")
};
