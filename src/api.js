import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?key=';
const API_KEY = '18623542-c3ea86fe133d4cad85931c408';

async function query(pageNumber = 1, search) {
  const res = await axios.get(
    `${BASE_URL}${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNumber}&per_page=40`,
  );
  const data = res.data;
  return data;
}
export { query, BASE_URL, API_KEY };
