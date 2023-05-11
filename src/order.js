function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(order);
  }
}

function refundOrder(orderNumber, orders) {
	for (var i = 0; i < orders.length; i++) {
		if (orders[i].orderNumber === orderNumber) {
			return orders.splice(i, 1)
		}
	}
}

function listItems(orders) {
	var list = '';
	for (var i = 0; i < orders.length; i++) {
		list += `${orders[i].item}, `
	}
	// return string after slicing out last space and comma
	return list.slice(0, -2);
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
};
