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

refs.buttonLoadMore.style.display = 'none';
const gallery = new SimpleLightbox('.gallery a');

  function handleSubmit(e) {
    e.preventDefault();

    const { searchQuery } = e.currentTarget.elements;
    search = searchQuery.value;

    query(total,`${search}`)
      .then(data => {
        console.log(data.totalHits);
        refs.gallery.innerHTML = '';
        creatingMarkup(data);
        gallery.refresh();
        refs.buttonLoadMore.style.display = 'block';
      })
      .catch(
        Notiflix.Notify.warning(
          'Sorry, there are no images matching your search query. Please try again.',
        ),
      );
  };

function handleClick() {
  total += 1;
  search = refs.input.value
  query(total, `${search}`)
    .then(data => {
      const maxTotalPage = Math.floor(data.totalHits / 40); //maxTotalPage = 40
      console.log(total);
      if (total <= maxTotalPage) {
        creatingMarkup(data);
        refs.buttonLoadMore.style.display = 'block';
        gallery.refresh();
        Notiflix.Notify.info(`infoHooray! We found ${data.totalHits} images.`);
      } else {
        Notiflix.Notify.warning('Were sorry, but youve reached the end of search results.');
        refs.buttonLoadMore.style.display = 'none';
      }
    })
}

refs.buttonLoadMore.addEventListener('click', handleClick);
refs.form.addEventListener('submit', handleSubmit);