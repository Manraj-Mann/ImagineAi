
// window.onload = function () {

//     const urlParams = new URLSearchParams(window.location.search);
//     const search = urlParams.get('search');
//     console.log(search);
//     document.getElementById("search-input").value = search;

//     // generate();
//     // run();

// }

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));

        // Swap the elements at i and j
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function load() {
    console.log("load called");
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');
    console.log(search);
    document.getElementById("search-input").value = search;

    if ((sessionStorage.getItem(search) != null) || search == '' || search == null) {
        // Retrieve data from session storage
        const resp = sessionStorage.getItem(search)
        const data = JSON.parse(resp);
        console.log(typeof data);
        
       
        set_data(data, search);
    }
    else {

        generate();
    }
    // run(); // temporarty call 


}

function run() {
    // Creating our request object
    const url = 'https://manraj.pythonanywhere.com/images';
    const loader = document.getElementById("loading-container");
    loader.style.display = "flex";
    // Making the GET request using the Fetch API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            try {

                const items = [];
                for (let i = 1; i <= 4; i++) {

                    const k = document.getElementById("item" + i);
                    items.push(k);

                }

                let i = 0;
                for (let index = 0; index < 4; index++) {

                    console.log(data[index]);
                    items[i].setAttribute("src", data[index].imageUrl);
                    items[i].setAttribute("alt", data[index].prompt);

                    i++;
                }





                loader.style.display = "none";


            } catch (error) {
                console.log(error);
            }


        })
        .catch(error => console.error(error));
}



function showCard(card) {


    const popupCard = document.getElementById("popup-card");
    const popupImage = document.getElementById("popup-image");
    const popupPrompt = document.getElementById("popup-prompt");
    const cardImage = card.querySelector("img");
    //   const cardPrompt = card.querySelector(".text-overlay p");

    popupImage.src = cardImage.src;
    popupPrompt.innerText = "temp"
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


function downloadImage() {
    // Get the image source URL
    var imageURL = document.getElementById('popup-image').src;

    // Create a new anchor element with the image URL
    var link = document.createElement('a');
    link.href = imageURL;
    link.target = '_blank';

    // Trigger a click event on the anchor element to open the image in a new tab
    link.click();
}


function shareImage() {
    // Logic to share the image
    alert("Image shared successfully!");
}

function saveImage() {
    // Logic to save the image
    alert("Image saved successfully!");
}

function giveFeedback() {
    // Logic to give feedback
    alert("Thank you for your feedback!");
}

function trynow() {
    // Logic for the "Try Example!" button
    alert("Trying example!");
}

function generate() {

    setImageLoading();
    const loader = document.getElementById("loading-container");
    loader.style.display = "flex";
    const search = document.getElementById("search-input").value;
    
    console.log(search);
    setUrlloading(search);

    // Define the URL for the POST request
    var url = 'https://manraj.pythonanywhere.com/images'; // Replace with your API endpoint URL

    // Create a JSON object with the data to be sent in the request body
    var jsonData = data = {

        'accesstoken': '123',
        'prompt': search,
    };    

    // Define the headers for the request
    var headers = new Headers();
    headers.append('Content-Type', 'application/json'); // Set the content type to JSON

    // Create the request options object
    var requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(jsonData) // Convert the JSON data to a string
    };

    // Send the POST request using fetch
    fetch(url, requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json(); // Parse the response body as JSON
            } else {
                throw new Error('Error fetching data');
            }
        })
        .then(data => {
            // Use the fetched data
            console.log(data);
            sessionStorage.setItem(search, JSON.stringify(data));
            set_data(data, search);
            loader.style.display = "none";

        })
        .catch(error => {
            console.error(error);
        });

}


function set_data(data, search) {


    
    for (let index = 0; index < data["link"].length; index++) {
        const element = data["link"][index];
        console.log(element);
        const k = document.getElementById("item" + (index + 1));
        k.setAttribute("src", element);
        
        k.addEventListener('load', function () {
            // Image has been loaded successfully
            console.log("Image loaded.");

            // You can now perform any desired actions with the loaded image, such as displaying it on the page or processing it further.
        });
        k.setAttribute("alt", search);

    }

}
// Add an event listener for the beforeunload event
window.addEventListener('beforeunload', function (event) {
    // Cancel the event to prevent the page from automatically reloading
    console.log("beforeunload")
    event.preventDefault();
    const gen = document.getElementById("generate");
    gen.innerHTML = "";

    // Display a confirmation prompt to the user
    event.returnValue = '';  // This is required for older browsers
    return '';  // This is required for modern browsers
});

window.addEventListener('unload', function (event) {
    // Cancel the event to prevent the page from automatically reloading
    console.log("unload")
    const gen = document.getElementById("generate");
    gen.innerHTML = "";
    // Display a confirmation prompt to the user
    event.returnValue = '';  // This is required for older browsers
    return '';  // This is required for modern browsers
});



function setImageLoading(){

    for (let index = 0; index < 4; index++) {
        
        const k = document.getElementById("item" + (index + 1));
        k.setAttribute("src","assets/loader.gif");
        
        k.setAttribute("alt", "Loading");

    }


}

function setUrlloading(search){

    const url = new URL(window.location.href);
    url.searchParams.set('search', search);
    window.history.pushState({}, '', url);

}
