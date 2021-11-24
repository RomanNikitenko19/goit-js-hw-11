import './sass/main.scss';
import { query, BASE_URL, API_KEY } from './api';
import refs from './refs';
import creatingMarkup from './creatingMarkup';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';
import axios from 'axios';

let total = 1;
let search = '';
  //refs.buttonLoadMore.style.display = 'none';

  function handleSubmit(e) {
    e.preventDefault();

    const { searchQuery } = e.currentTarget.elements;
    search = searchQuery.value;

    query(total,`${search}`)
      .then(data => {
        creatingMarkup(data);
        //refs.buttonLoadMore.style.display = 'inline-block';
      })
      .catch(
        Notiflix.Notify.warning(
          'Sorry, there are no images matching your search query. Please try again.',
        ),
      );
  };

function handleClick() {
  total += 1;
  console.log(total);
  query(total,`${search}`)
    .then(creatingMarkup(data));
}
refs.form.addEventListener('submit', handleSubmit);
refs.buttonLoadMore.addEventListener('click', handleClick);
