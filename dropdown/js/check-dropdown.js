const dropDown = document.querySelector('.dropdown');
const list = document.querySelector('.list');
const listButtons = document.querySelectorAll('.list__button');

dropDown.addEventListener('click', () => {
  list.classList.toggle('active');
});

listButtons.forEach((button) => {
  button.addEventListener('click', () => {
    dropDown.textContent = button.textContent;
  });
});