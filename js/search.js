import { search as getSearch } from './services.js';
import renderCard from './renderCard.js';
import { addNewPage } from './scroll.js';

const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');
const searchForm = document.querySelector('.header__search-form');
const searchInput = document.querySelector('.header__search-input');
const listCard = document.querySelector('.other-films__list');

const search = () => {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.removeEventListener('scroll', addNewPage);

    if (!searchInput.value) return;

    getSearch(searchInput.value)
      .then((data) => {
        if (data.results.length) {
          renderCard(data.results);
        } else {
          listCard.textContent = '';
          throw 'К сожалению по вашему запросу ничего не найдено';
        }
      })
      .then(() => {
        filmWeek.remove();
        title.textContent = 'Результат поиска';
      })
      .catch((err) => {
        title.textContent = err;
      });
  });
};

export default search;
