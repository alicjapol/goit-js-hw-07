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

      link.addEventListener('click', function (e) {
        e.preventDefault();

        const lightbox = basicLightbox.create(`
          <img src="${item.original}" alt="${item.description}">
        `);

        lightbox.show();

        document.addEventListener('keydown', closeModalOnEscape);
      });
    });
  }

  function closeModalOnEscape(e) {
    if (e.key === 'Escape') {
      basicLightbox.close();
      document.removeEventListener('keydown', closeModalOnEscape);
    }
  }

  renderGallery();

console.log(galleryItems);
