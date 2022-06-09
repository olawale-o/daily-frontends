const mainBlock = document.querySelector('main');
const asideBlock = document.querySelector('aside');

const loginBtn = document.querySelector('#sign-in-btn');
const signUpBtn = document.querySelector('#sign-up-btn');

loginBtn.addEventListener('click', () => {
  mainBlock.classList.add("slide-right");
  asideBlock.classList.add("slide-left");
});

signUpBtn.addEventListener('click', () => {
  mainBlock.classList.remove('slide-right');
  asideBlock.classList.remove('slide-left');
});