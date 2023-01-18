import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SearchApiService from './api';
import './css/styles.css';
import LoadMoreBTN from './load-more-btn';
import { createOnePictureMarkup } from './markup';

const refs = {
  formRef: document.querySelector('#search-form'),
  buttonSearchRef: document.querySelector('button-search'),
  galleryRef: document.querySelector('.gallery'),
};
