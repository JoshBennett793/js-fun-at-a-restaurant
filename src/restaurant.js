function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
}

function addMenuItem(restaurant, item) {
  if (!restaurant.menus[item.type].includes(item)) {
    restaurant.menus[item.type].push(item);
  }
}

function removeMenuItem(restaurant, item, type) {
	var menu = restaurant.menus[type];
  for (var i = 0; i < menu.length; i++) {
    if (menu[i].name === item) {
      menu.splice(menu.indexOf(item), 1);
      return `No one is eating our ${item} - it has been removed from the ${type} menu!`;
    }
  }
	return `Sorry, we don't sell ${item}, try adding a new recipe!`;
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
  // checkForFood
};
