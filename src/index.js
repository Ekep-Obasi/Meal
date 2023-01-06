import ui from './ui';
import api from './api';
import data from './data';

function updateMenu(meals) {
  data.setMeals(meals || []);
  ui.renderMeals(data.getMeals());
}

ui.renderPage({
  onSearch: (searchTerm) => {
    api.searchMeals(searchTerm).then(updateMenu);
  },
});

api.getMeals().then(updateMenu);
