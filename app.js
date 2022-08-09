// Vanilla JavaScript DOM Challenges //


// BEGINNER CHALLENGES //

// 1. Create a div (don’t put it in the DOM yet).
const tempDiv = document.createElement('div');

// 2. Add a class of "boxy" to that div.
tempDiv.classList.add('boxy');
tempDiv.id = "tempDivInDom";

// 3. Add two paragraphs of text to that div with the text of your choosing.
const ppgs = `
  <p>This is a first Paragraph.</p>
  <p>This is a second Paragraph.</p>
`;

tempDiv.innerHTML = ppgs;

// 4. Insert the div into the DOM just after the h1.
const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', tempDiv);

// 5. Add a third paragraph to the div after it’s in the DOM.
const tempDivInDom = document.querySelector("#tempDivInDom");

tempDivInDom.insertAdjacentHTML('beforeend', `
  <p>This is a third paragraph</p>
`);


// BEGINNER+ CHALLENGES //

// 1. Add an unordered sublist to the last list item with three children ("one", "two", and "three").
const listItems = document.querySelectorAll(".list-item");
listItems[listItems.length - 1].insertAdjacentHTML('beforeend', `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`)


// 2. Add a paragraph after the list of items with a class of "glow."
const list = document.querySelector('.list');
const tempP = document.createElement('p');
tempP.classList.add('glow');
tempP.textContent = 'This has been added through my app.js page.'
list.insertAdjacentElement('afterend', tempP);

// 3. Remove a card when its button is clicked.

// 4. Change the event listener to the following Toggle the class "glow" to the image when you click the card’s button.

// 5. Change the event listener to the following. Change the title of all other cards to "Jealous 👀" when you click on a card’s button. (BONUS: Change the title of the card that was clicked to "I’m the greatest!")
const cardBtns = document.querySelectorAll(".card__btn");
const cards = document.querySelectorAll('.card');

function handleBtnClick(e){
  const cardId = e.target.parentElement.id;
  cards.forEach(card => {
    if(card.id !== cardId){
      return (card.querySelector(".card__heading").textContent = "Jealous 👀");
    }
    card.querySelector(".card__heading").textContent = "I am the greatest!";
  })
}

cardBtns.forEach((btn) => {
  btn.addEventListener("click", handleBtnClick)});


//INTERMEDIATE CHALLENGES//

// 1. Append a button below the card-container that says "Add more cards" (it should have the class "btn").
const cardContainer = document.querySelector(".card-container");

const tempBtn = document.createElement('button');
tempBtn.classList.add('btn');
tempBtn.id = 'moreCardsBtn'
tempBtn.textContent = 'Add more cards';
cardContainer.insertAdjacentElement('afterend', tempBtn);

// 2. Create a function that generates a new card when clicked (you can copy current HTML code) and places it as the last card in the card container (BONUS: Set the query parameter of the image and the id of the image to its card number).
function generateCard(){
  const currentNumberOfCards = cardContainer.children.length;
  const newCard = `<div class="card" id="card-${currentNumberOfCards + 1}">
        <img class="card__image" width="300" height="300" src="https://picsum.photos/300/?random=${
          currentNumberOfCards + 1
        }" alt="Lorem Ipsum Picture">
        <h2 class="card__heading">Lorem Ipsum Title ${
          currentNumberOfCards + 1
        }</h2>
        <p class="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam esse consequatur culpa itaque saepe, placeat amet repellendus.</p>
        <button class="btn card__btn">Learn More</button>
  </div>`;
  cardContainer.insertAdjacentHTML('beforeend', newCard);
}

const moreCardsBtn = document.querySelector("#moreCardsBtn");
moreCardsBtn.addEventListener("click", generateCard);

// 3. Create a function that adds cards but receives two parameters: title and description. When invoked, the function should create a new card with those parameters as the title (the h2 text) and description (the paragraph text) of the card. Create 3 new cards from the JavaScript file (i.e., upon page load)
function generateCardFromJavaScript({title, desc}) {
  const currentNumberOfCards = cardContainer.children.length;
  const newCard = `<div class="card" id="card-${currentNumberOfCards + 1}">
        <img class="card__image" width="300" height="300" src="https://picsum.photos/300/?random=${
          currentNumberOfCards + 1
        }" alt="Lorem Ipsum Picture">
        <h2 class="card__heading">${title} ${currentNumberOfCards + 1}</h2>
        <p class="card__description">${desc}</p>
        <button class="btn card__btn">Learn More</button>
  </div>`;
  cardContainer.insertAdjacentHTML("beforeend", newCard);
}

generateCardFromJavaScript({
  title: 'Another Title',
  desc: 'This is a descriptive paragraph.'
})
generateCardFromJavaScript({
  title: 'Another Title',
  desc: 'This is a descriptive paragraph.'
})
generateCardFromJavaScript({
  title: 'Another Title',
  desc: 'This is a descriptive paragraph.'
})


// 4. Removes a card from the DOM only when a card image is clicked. (BONUS: Make it work on new cards added to the DOM.)
function handleImgClicked(e){
  if (!e.target.classList.contains("card__image")) return;
  e.target.closest('.card').remove();
}

cardContainer.addEventListener('click', handleImgClicked)

// 5. Create and insert a button that says "Change Color Scheme" (ensure the button has a class of 'btn') that changes the css variable --_hue to a random number between 0 and 360 when clicked.
cardContainer.insertAdjacentHTML('beforebegin', `<button class="btn" id="changeColorBtn">Change Color Scheme</button>`);
const colorBtn = document.querySelector('#changeColorBtn');

function getRandomColor(){
  return Math.floor(Math.random() * 360);
}

colorBtn.addEventListener('click', () => {
  const randColor = getRandomColor();
  document.documentElement.style.setProperty('--_hue', randColor);
})