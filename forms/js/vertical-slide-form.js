const mainBlock = document.querySelector('main');
const asideBlock = document.querySelector('aside');

const loginBtn = document.querySelector('#sign-in-btn');
const signUpBtn = document.querySelector('#sign-up-btn');

loginBtn.addEventListener('click', () => {
  mainBlock.classList.add("slide-up");
  asideBlock.classList.add("slide-down");
});

signUpBtn.addEventListener('click', () => {
  mainBlock.classList.remove('slide-up');
  asideBlock.classList.remove('slide-down');
});