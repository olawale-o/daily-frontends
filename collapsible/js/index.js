const collaspsibleButtons = document.querySelectorAll('.collapsibles-button');
const previousActiveCard  = 0;
const removeActiveClass = () => {
  collaspsibleButtons.forEach(card => {
    card.classList.remove('active');
  });
};

const expandCard = (index) => {
  // removeActiveClass();
  collaspsibleButtons[index].classList.toggle('active');
}

collaspsibleButtons.forEach((card, index) => card.addEventListener('click', function() {
    expandCard(index);
}));