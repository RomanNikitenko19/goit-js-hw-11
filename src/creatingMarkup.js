import refs from "./refs";

function creatingMarkup(data/*, elem = gallery*/) {
  console.log(data);
  const { hits } = data;
  console.log(hits);
  const markup = hits
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `
        <div class="photo-card">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          <div class="info">
            <p class="info-item">
              <b>${likes}</b>
            </p>
            <p class="info-item">
              <b>${views}</b>
            </p>
            <p class="info-item">
              <b>${comments}</b>
            </p>
            <p class="info-item">
              <b>${downloads}</b>
            </p>
          </div>
        </div>
    `;
    })
    .join('');

  /*
  refs[elem].innerHTML = markup.join('');
  */
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  //refs.gallery.innerHTML = markup;
}

export default creatingMarkup;