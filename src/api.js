import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32945064-ab028abe134de30eebff4c77a';
export default class SearchApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 40;
  }
  async fetchSearchPictures() {
    const res = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.per_page}&page=${this.page}`
    );
    const data = res.data;
    console.log(data);
    if (res.status !== 200) {
      throw new Error(res.status);
    }

    return data;
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
