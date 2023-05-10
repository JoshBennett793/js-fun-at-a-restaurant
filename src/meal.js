function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type,
  };
}

function addIngredients(ingredient, recipe = []) {
  if (!recipe.includes(ingredient)) {
    recipe.push(ingredient);
  }
  return recipe;
}

function formatPrice(price) {
	return `$${price}`;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
};
