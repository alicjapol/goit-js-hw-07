import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function renderGallery() {
  galleryItems.forEach((item) => {
    const galleryItem = document.createElement("li");
    galleryItem.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = item.original;

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src = item.preview;
    image.alt = item.description;

    link.appendChild(image);
    galleryItem.appendChild(link);
    galleryContainer.appendChild(galleryItem);
  });

  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 250,
  });

  lightbox.on("show.simplelightbox", function () {
    document.addEventListener("keydown", closeModalOnEscape);
  });

  lightbox.on("close.simplelightbox", function () {
    document.removeEventListener("keydown", closeModalOnEscape);
  });
}

function closeModalOnEscape(e) {
  if (e.key === "Escape") {
    SimpleLightbox.close();
  }
}

renderGallery();

console.log(galleryItems);
