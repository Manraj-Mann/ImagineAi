const gallery = document.getElementById("gallery");

const imageSrc = [
    {
      src: 'https://cdn.openai.com/labs/images/3D%20render%20of%20a%20cute%20tropical%20fish%20in%20an%20aquarium%20on%20a%20dark%20blue%20background,%20digital%20art.webp?v=1',
      prompt: 'A 3D render of a cute tropical fish in an aquarium on a dark blue background'
    },
    {
      src: 'https://cdn.openai.com/labs/images/High%20quality%20photo%20of%20a%20monkey%20astronaut.webp?v=1',
      prompt: 'A high quality photo of a monkey astronaut'
    },
    {
      src: 'https://cdn.openai.com/labs/images/%22A%20sea%20otter%20with%20a%20pearl%20earring%22%20by%20Johannes%20Vermeer.webp?v=1',
      prompt: 'A painting of a sea otter with a pearl earring, inspired by Johannes Vermeer'
    },
    {
      src: 'https://images.pexels.com/photos/12629369/pexels-photo-12629369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      prompt: 'A close-up photo of a green tree frog on a leaf'
    },
    {
      src: 'https://cdn.openai.com/labs/images/A%20centered%20explosion%20of%20colorful%20powder%20on%20a%20black%20background.webp?v=1',
      prompt: 'A centered explosion of colorful powder on a black background'
    },
    {
      src: 'https://images.pexels.com/photos/930168/pexels-photo-930168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      prompt: 'A photo of a snowy owl perched on a branch'
    },
    {
      src: 'https://images.pexels.com/photos/16053779/pexels-photo-16053779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      prompt: 'A photo of a golden retriever puppy sitting on grass'
    },
    {
      src: 'https://images.pexels.com/photos/4797055/pexels-photo-4797055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      prompt: 'A photo of a white and brown spotted Dalmatian dog'
    },
    {
      src: 'https://images.pexels.com/photos/16053779/pexels-photo-16053779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      prompt: 'A photo of a golden retriever puppy sitting on grass'
    },
    {
      src: 'https://images.pexels.com/photos/16061614/pexels-photo-16061614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      prompt: 'A photo of a tabby cat sitting in a window'
    },

]



imageSrc.forEach(element => {

    const div = document.createElement("div");
    div.classList.add("gallery-item");
    const img = document.createElement("img");
    img.classList.add("gallery__img");
    img.setAttribute("src", element.src);
    img.setAttribute("alt", "");

    const textOverlay = document.createElement('div');
    textOverlay.classList.add('text-overlay');
    const textOverlayText = document.createElement('p');
    textOverlayText.innerText = element.prompt;
    textOverlay.appendChild(textOverlayText);
    div.appendChild(textOverlay);

    div.appendChild(img);
    gallery.appendChild(div);

    


});

const masonryLayout = (containerElement, itemsElement, columns) => {
    containerElement.classList.add('masonry-layout', `columns-${columns}`)
    let columnsElements = []

    for (let i = 1; i <= columns; i++) {
        let column = document.createElement('div')
        column.classList.add('masonry-column', `column-${i}`)
        containerElement.appendChild(column)
        columnsElements.push(column)
    }

    for (let m = 0; m < Math.ceil(itemsElement.length / columns); m++) {
        for (let n = 0; n < columns; n++) {
            let item = itemsElement[m * columns + n]
            columnsElements[n].appendChild(item)
            item.classList.add('masonry-item')
        }
    }
}

masonryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'), 3)


