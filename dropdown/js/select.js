const selectBtn = document.querySelector('.select-btn');
const selectList = document.querySelector('.select-list');
const options = document.querySelectorAll('.select-option');

selectBtn.addEventListener('click', () => {
  selectList.classList.toggle('active');
})

options.forEach(option => {
  const text = option.querySelector('div').textContent;
  option.addEventListener('click', () => {
    selectBtn.textContent = text;
    selectList.classList.remove('active');
  })
});
