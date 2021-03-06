import { getTrends, getPopular, getTop } from './services.js';
import renderCard from './renderCard.js';
import { scroll, addNewPage } from './scroll.js';

const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');
const getNav = document.querySelectorAll('.get-nav');
const searchInput = document.querySelector('.header__search-input');

const menuLink = () => {
  getNav.forEach((nav) => {
    nav.addEventListener('click', (e) => {
      const target = e.target.closest('.get-nav__link');

      if (target) {
        e.preventDefault();
        window.scrollTo(0, 0);
        searchInput.value = '';

        filmWeek.style.display = 'none';
        title.textContent = e.target.textContent;

        if (target.classList.contains('get-nav__link_popular-movies')) {
          getPopular('movie')
            .then((data) => renderCard(data.results, false, 'movie'))
            .then((data) => {
              window.removeEventListener('scroll', addNewPage);
              scroll('popular', 'movie');
            });
        }

        if (target.classList.contains('get-nav__link_top-tv')) {
          getTop('tv')
            .then((data) => renderCard(data.results, false, 'tv'))
            .then((data) => {
              window.removeEventListener('scroll', addNewPage);
              scroll('top', 'tv');
            });
        }

        if (target.classList.contains('get-nav__link_popular-tv')) {
          getPopular('tv')
            .then((data) => renderCard(data.results, false, 'tv'))
            .then((data) => {
              window.removeEventListener('scroll', addNewPage);
              scroll('popular', 'tv');
            });
        }

        if (target.classList.contains('get-nav__link_top-movies')) {
          getTop('movie')
            .then((data) => renderCard(data.results, false, 'movie'))
            .then((data) => {
              window.removeEventListener('scroll', addNewPage);
              scroll('top', 'movie');
            });
        }

        if (target.classList.contains('get-nav__link_triends')) {
          getTrends()
            .then((data) => renderCard(data.results, false))
            .then((data) => {
              window.removeEventListener('scroll', addNewPage);
              scroll();
            });
        }
      }
    });
  });
};

export default menuLink;
