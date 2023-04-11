function masonryLayout(containerElement, itemsElement, columns) {
  containerElement.classList.add('masonry-layout', `columns-${columns}`);
  let columnsElements = [];

  for (let i = 1; i <= columns; i++) {
    let column = document.createElement('div');
    column.classList.add('masonry-column', `column-${i}`);
    columnsElements.push(column);
  }

  itemsElement.forEach((item, index) => {
    let columnIndex = index % columns;
    columnsElements[columnIndex].appendChild(item);
    item.classList.add('masonry-item');
  });

  columnsElements.forEach(column => containerElement.appendChild(column));
}

var search_item;

function showCard(card) {


  const popupCard = document.getElementById("popup-card");
  const popupImage = document.getElementById("popup-image");
  const popupPrompt = document.getElementById("popup-prompt");
  const cardImage = card.querySelector("img");
  const cardPrompt = card.querySelector(".text-overlay p");

  popupImage.src = cardImage.src;
  popupPrompt.innerText = cardPrompt.innerText;
  popupCard.style.display = "flex";
  document.querySelector('.popup-card').classList.add('active');
  document.querySelector('body').classList.add('popup-active');

}

function hideCard() {
  const popupCard = document.getElementById("popup-card");
  popupCard.style.display = "none";
  document.querySelector('.popup-card').classList.remove('active');
  document.querySelector('body').classList.remove('popup-active');
}

document.addEventListener("click", function (event) {
  const popupCard = document.getElementById("popup-card");
  if (event.target === popupCard) {
    hideCard();
  }
});



function trynow() {

  const popupPrompt = document.getElementById("popup-prompt");
  const prompt = popupPrompt.innerText;
  console.log(prompt);
  const searchbar = document.getElementById("search-input");
  searchbar.value = prompt;
  searchbar.focus();
  search_item = prompt;
  hideCard();

}
function checkURL(url) {
  fetch(url)
    .then(response => {
      if (response.ok) {
        console.log('URL is valid'); // or take appropriate action
        return true;
      } else {
        console.log('URL is invalid'); // or take appropriate action
        return false;
      }
    })
    .catch(error => {
      console.log('URL is invalid'); // or take appropriate action
      return false;
    });
}
function run() {
  // Creating our request object
  const url = 'https://manraj.pythonanywhere.com/images';
  const gallery = document.getElementById("gallery");
  // Making the GET request using the Fetch API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      try {

        data.reverse();
        data = shuffleArray(data);
        data.forEach(element => {

          console.log(element);

          // if (checkURL(element.imageUrl) == true) {

            const div = document.createElement("div");
            div.classList.add("gallery-item");
            div.setAttribute("onclick", "showCard(this)");

            const img = document.createElement("img");
            img.classList.add("gallery__img");
            img.setAttribute("src", element.imageUrl);
            img.setAttribute("alt", "");


            const textOverlay = document.createElement('div');
            textOverlay.classList.add('text-overlay');
            const textOverlayText = document.createElement('p');
            textOverlayText.setAttribute('color', 'white');
            textOverlayText.innerText = element.prompt;
            textOverlay.appendChild(textOverlayText);

            div.appendChild(textOverlay);
            div.appendChild(img);
            gallery.appendChild(div);
          // }

        });


      } catch (error) {
        console.log(error);
      }

      masonryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'), 3);

    })
    .catch(error => console.error(error));
}

run();

function generate() {

  const search = document.getElementById("search-input");
  window.location.href = "generate_image.html?search=" + search.value;


}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and j
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
