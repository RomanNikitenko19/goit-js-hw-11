require('dotenv').config();
import './sass/main.scss';
import { query, BASE_URL, API_KEY } from './api';
import refs from './refs';
import creatingMarkup from './creatingMarkup';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';

let total = 1;
let search = '';

refs.buttonLoadMore.style.display = 'none';
const gallery = new SimpleLightbox('.gallery a');

//async await
async function handleSubmit(e) {
  e.preventDefault();

  const { searchQuery } = e.currentTarget.elements;
  search = searchQuery.value;

  try {
    const data = await query(total, `${search}`);
    refs.gallery.innerHTML = '';
    creatingMarkup(data);
    gallery.refresh();
    refs.buttonLoadMore.style.display = 'block';
  } catch (error) {
    Notiflix.Notify.warning(
      'Sorry, there are no images matching your search query. Please try again.',
    );
  }
}
/*
function handleSubmit(e) {
  e.preventDefault();

  const { searchQuery } = e.currentTarget.elements;
  search = searchQuery.value;

    query(total,`${search}`)
      .then(data => {
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
*/

//async await
async function handleClick() {
  total += 1;
  search = refs.input.value;

  try {
    const data = await query(total, `${search}`);
    const maxTotalPage = Math.floor(data.totalHits / 40); //maxTotalPage = 40
    if (total <= maxTotalPage) {
      creatingMarkup(data);
      refs.buttonLoadMore.style.display = 'block';
      gallery.refresh();
      Notiflix.Notify.info(`infoHooray! We found ${data.totalHits} images.`);
    } else {
      Notiflix.Notify.warning('Were sorry, but youve reached the end of search results.');
      refs.buttonLoadMore.style.display = 'none';
    }
  } catch (error) {}
}

/*
function handleClick() {
  total += 1;
  search = refs.input.value;
  query(total, `${search}`)
    .then(data => {
      const maxTotalPage = Math.floor(data.totalHits / 40); //maxTotalPage = 40
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
*/

refs.buttonLoadMore.addEventListener('click', handleClick);
refs.form.addEventListener('submit', handleSubmit);
