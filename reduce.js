var _ = require("lodash");

var orders = [
  { article: 1, quantity: 4 },
  { article: 2, quantity: 2 },
  { article: 1, quantity: 5 }
];

var worker = function(orders) {
  var totalOrders = [];
  var group = _.groupBy(orders, 'article');

  _.forEach(group, function(order, article){
    total = 0;
    if (order.length === 1){
      total = order[0].quantity;
    } else {
      total = _.reduce(order, function(sum, order){
        return sum + order.quantity;
      }, 0);
    }
    totalOrders.push({
      article: parseInt(article),
      total_orders: total
    });
  })
  return totalOrders.reverse();
};

module.exports = worker;
