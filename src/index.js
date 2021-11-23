import './sass/main.scss';
import { query, BASE_URL, API_KEY } from './api';
import refs from './refs';
import creatingMarkup from './creatingMarkup';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';

function handleSubmit(e) {
  e.preventDefault();

  const { searchQuery } = e.currentTarget.elements;
  const search = searchQuery.value;
  console.log(typeof search);

  query(`${search}`)
    .then(creatingMarkup)
    .catch(
      Notiflix.Notify.warning(
        'Sorry, there are no images matching your search query. Please try again.',
      ),
    );
}

refs.form.addEventListener('submit', handleSubmit);
