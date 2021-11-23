const BASE_URL = 'https://pixabay.com/api/?key=';
const API_KEY = '18623542-c3ea86fe133d4cad85931c408';

function query(search, pageNumber = 3) {
  return fetch(
    `${BASE_URL}${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNumber}&per_page=40`,
  ).then(res => {
    if (res.ok === false) {
      return Promise.reject(new Error(res.statusText));
    }
    return res.json();
  });
}
export { query, BASE_URL, API_KEY };
