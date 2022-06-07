const collaspsibleButtons = document.querySelectorAll('.collapsibles-button');
const previousActiveCard  = 0;
const removeActiveClass = () => {
  collaspsibleButtons.forEach(card => {
    card.classList.remove('active');
  });
};

const expandCard = (index) => {
  if (!collaspsibleButtons[index].classList.contains('active')) {
    collaspsibleButtons[index].classList.add('active');
  } else {
    collaspsibleButtons[index].classList.remove('active');
  }
  // removeActiveClass();
}

collaspsibleButtons.forEach((card, index) => card.addEventListener('click', function() {
    expandCard(index);
}));