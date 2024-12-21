// script.js
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');
const mainTitle = document.getElementById('main-title');
const mainDescription = document.getElementById('main-description');

const details = [
  { title: "mk1 Supra", description: "(1979 to 1981)" },
  { title: "mk2 Supra", description: "(1982–1986)" },
  { title: "mk3 Supra", description: "(1986-1992)" },
  { title: "mk4 Supra", description: "(1993-2002)" },
  { title: "mk5 Supra", description: "(2019–present)" }
];

function setMainImage(thumbnailElement, index) {
  // Remove roundness from main image
  mainImage.style.borderRadius = '0';

  // Set main image source and details
  mainImage.src = thumbnailElement.querySelector('img').src;
  mainTitle.innerText = details[index].title;
  mainDescription.innerText = details[index].description;
}

// Ensure all thumbnails are of equal size
function adjustThumbnailSize() {
  thumbnails.forEach(thumbnail => {
    thumbnail.style.width = '150px';  // Maintain equal width
    thumbnail.style.height = '150px'; // Maintain equal height
  });
}

window.onload = adjustThumbnailSize;
window.onresize = adjustThumbnailSize;
