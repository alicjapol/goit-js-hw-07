import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");


  function renderGallery() {
    galleryItems.forEach(item => {
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery__item');

      const link = document.createElement('a');
      link.classList.add('gallery__link');
      link.href = item.original;

      const image = document.createElement('img');
      image.classList.add('gallery__image');
      image.src = item.preview;
      image.alt = item.description;
      image.setAttribute('data-source', item.original);

      link.appendChild(image);
      galleryItem.appendChild(link);
      galleryContainer.appendChild(galleryItem);

    });
  }
  renderGallery();

  galleryContainer.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.nodeName === "IMG") {
      const lightbox = basicLightbox.create(`
    <img src="${item.original}" alt="${item.description}">
    <p>${item.description}</p>
  `);
      lightbox.show();
    }
    })
    

console.log(galleryItems);
