// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = renderGallery(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);


function renderGallery(items) {
  return items
    .map(
      ({ original, preview, description }) =>
        `<a class="gallery__item" href="${original}">
                 <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>`,
    )
    .join(' ');
}

const modalLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
// Change code below this line

console.log(galleryItems);



