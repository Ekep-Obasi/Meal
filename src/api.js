const BASE_URL = 'https://www.themealdb.com/api/json/v1/';
const API_KEY = '1';

function getMeals() {
  return fetch(`${BASE_URL}${API_KEY}/search.php?f=c`)
    .then((res) => res.json())
    .then((res) => res.meals);
}

function searchMeals(query) {
  return fetch(`${BASE_URL}${API_KEY}/search.php?s=${query}`)
    .then((res) => res.json())
    .then((res) => res.meals);
}

export default {
  getMeals,
  searchMeals,
};
