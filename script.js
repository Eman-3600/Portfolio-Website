// List of background images
const images = [
    "background/x-tile.png",
    "background/o-tile.png",
    "background/d-tile.png",
    "background/p-tile.png",
    "background/r-tile.png",
    "background/g-tile.png"
];

// Select the background container
const background = document.querySelector('.background');

// Generate tiles for the background
for (let i = 0; i < 8000; i++) { // Adjust for number of tiles
    const tile = document.createElement('div');
    const randomImage = images[Math.floor(Math.random() * images.length)];
    tile.style.backgroundImage = `url(${randomImage})`;
    background.appendChild(tile);
}
