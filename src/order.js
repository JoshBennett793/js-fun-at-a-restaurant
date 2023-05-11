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

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
};
