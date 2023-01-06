const state = {
  meals: [],
};

function getMeals() {
  return state.meals;
}

function setMeals(meal) {
  state.meals = meal;
}

export default {
  getMeals,
  setMeals,
};
