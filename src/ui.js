import './styles/styles.css';

const appContainer = document.getElementById('app');
let mainContainer;

function createSearchBar(options) {
  const searchBar = document.createElement('form');
  searchBar.classList.add('form-container');
  searchBar.innerHTML = '<input type ="search" name ="searchTerm"></form><button>Search</button>';

  searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    options.onSearch(e.target.searchTerm.value);
  });
  return searchBar;
}

function createHeader({ onSearch }) {
  const header = document.createElement('header');
  header.classList.add('header-container');
  header.innerHTML = '<h1 class ="title">Meal DB Trail</h1>';
  header.appendChild(createSearchBar({ onSearch }));
  return header;
}

function createMeals(meal) {
  const mealElement = document.createElement('div');
  mealElement.classList.add('meals-container');
  mealElement.innerHTML = `<h2>${meal.strMeal}</h2>`;
  const img = `${meal.strMealThumb}`;
  mealElement.style.backgroundImage = `url(${img})`;
  return mealElement;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main-container');
  return main;
}

function renderPage({ onSearch }) {
  appContainer.innerHTML = '';
  mainContainer = createMain();
  appContainer.appendChild(createHeader({ onSearch }));
  appContainer.appendChild(mainContainer);
}

function renderMeals(meals = []) {
  mainContainer.innerHTML = '';
  meals.forEach((meal) => {
    mainContainer.appendChild(createMeals(meal));
  });
}

export default {
  renderPage,
  renderMeals,
};
