const collaspsibleButtons = document.querySelectorAll('.collapsibles-button');
const previousActiveCard  = 0;
const removeActiveClass = (cardIndex) => {
  collaspsibleButtons.forEach((card, index) => {
    if (cardIndex !== index) {
      card.classList.remove('active');
    }
  });
};

const expandCard = (cardIndex) => {
  if (collaspsibleButtons[cardIndex].classList.contains('active')) {
    collaspsibleButtons[cardIndex].classList.remove('active');
  } else {
    collaspsibleButtons[cardIndex].classList.add('active');
  }
  removeActiveClass(cardIndex)
}

collaspsibleButtons.forEach((card, index) => card.addEventListener('click', function() {
  expandCard(index);
}));