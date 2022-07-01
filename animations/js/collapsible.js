const collapsibles = [
  {
    id: 1,
    title: "Title One",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 2,
    title: "Title two",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 3,
    title: "Title three",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
];

const container = document.querySelector('.container');

let collapsible = '';

collapsibles.forEach((collapsible) => {
  container.innerHTML += `<div class="collapsible">
    <input type="checkbox" id="collapsible-head-${collapsible.id}" />
    <label for="collapsible-head-${collapsible.id}">${collapsible.title}</label>
    <div class="collapsible-text">
      <h2>${collapsible.title}</h2>
      <p>${collapsible.description}</p>
    </div>
  </div>`
});

// container.innerHTML = collapsible;