const API_KEY = '429274881df616664982155d8e559263';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

//trending/all/day?api_key=<<api_key>>

const getData = url => {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw `Что-то пошло не так, ошибка ${response.status}`
        })
        // .then(data => console.log(data))
        .catch(err => console.error(err));
};

export const getTrends = async (type = 'all', period = 'day', page = 1) => {
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
}