


function nameMenuItem(foodItem) {
return 'Delicious ' + foodItem;

 }

function createMenuItem(item, cost, meal) {
  return menuItem = {
    name: item,
    price: cost,
    type: meal,
  };
}

function addIngredients(list, ingredients) {
  if (!ingredients.includes(list)) {
    return ingredients.push(list);
  }
}

function formatPrice(price, dollar) {
dollar = '$';
return dollar + price;
}

function decreasePrice(reducePrice) {
  var reduce = menuItem.price - (menuItem.price * .1);
  return reduce;
}

function createRecipe(name, containing, meal) {
  return recipe = {
    title: name,
    ingredients: containing,
    type: meal,
  };
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
