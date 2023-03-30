const loadMeals = (mealsName) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealsName}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err, "loding meals"));
};
export { loadMeals };
