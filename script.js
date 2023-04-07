const images = [
    { src: 'assets/im1.jpg', width: 256, height: 256 },
    { src: 'assets/im2.jpg', width: 512, height: 512 },
    { src: 'assets/im3.jpg', width: 1024, height: 1024 },
    { src: 'assets/im2.jpg', width: 512, height: 512 },
    { src: 'assets/im1.jpg', width: 256, height: 256 },
    { src: 'assets/im2.jpg', width: 512, height: 512 },
    // Add more images here...
];




const container = document.querySelector('.image-grid');
const packery = new Packery(container, {
    itemSelector: '.item',
    columnWidth: '.grid-sizer',
    gutter: 10,
});

for (const image of images) {
    const item = document.createElement('div');
    item.classList.add('item');
    const img = document.createElement('img');
    img.src = image.src;
    img.width = image.width;
    img.height = image.height;
    item.appendChild(img);
    packery.append(item);
}

packery.layout();
