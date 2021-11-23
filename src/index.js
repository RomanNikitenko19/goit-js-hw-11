import './sass/main.scss';
import { inquiry } from './api';
import refs from './refs';
import creatingMarkup from './creatingMarkup';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

inquiry('cats')
  .then(res => console.log(res.hits))
  .catch(error =>
    console.error('Sorry, there are no images matching your search query. Please try again.'),
  );