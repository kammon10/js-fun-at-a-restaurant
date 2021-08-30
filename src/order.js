function takeOrder(orders, delivery)  {
  if (delivery.length < 3) {
    return delivery.push(orders);
  }
}
function refundOrder(orderNo, deliveries) {
  for (var i = 0; i < deliveries.length; i++) {
    if (deliveries[i].orderNumber === orderNo) {
      return deliveries.splice(i, 1)
    }

  }
}
function listItems(orders) {
  var food = [];
  for (var i = 0; i < orders.length; i++) {
     food.push(orders[i].item)
    }
     orders.toString()
     return orders
}

// function searchOrder() {
//
// }
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}
