import refs from "./refs";

function creatingMarkup(data, elem = refs.gallery) {
  const { hits } = data;
  const markup = hits
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `
      <div class="photo-card">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
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

  elem.insertAdjacentHTML('beforeend', markup);
}

export default creatingMarkup;