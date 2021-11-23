const BASE_URL = 'https://pixabay.com/api/?key=';
const API_KEY = '18623542-c3ea86fe133d4cad85931c408';
const tapeImg = '&image_type=photo';
const orientation = '&orientation=horizontal';
const safesearch = '&safesearch=true';
const quantityPerPage = '&per_page=40';//40 elements
// const pageNamber = '&page=1';
const pretty = 'pretty=true';

function inquiry(search) {
  return fetch(
    `${BASE_URL}${API_KEY}q=${search}${tapeImg}${orientation}${safesearch}${quantityPerPage}${pretty}`,
  ).then(res => {
    if (res.ok === false) {
      return Promise.reject(new Error(res.statusText));
    }
    return res.json();
  });
}
export { inquiry };
