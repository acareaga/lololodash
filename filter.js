var _ = require("lodash");

var freelancers = [
  { name: "mike",  income: 2563 },
  { name: "kim",   income: 1587 },
  { name: "liz",   income: 3541 },
  { name: "tom",   income: 2475 },
  { name: "bello", income: 987  },
  { name: "frank", income: 2975 }
];

var worker = function(freelancers) {
  var sortByIncome = _.sortBy(freelancers, 'income')

  var sumIncome = _.reduce(sortByIncome, function(total, freelancer){
                    return total + freelancer.income;
                    }, 0
  );

  var averageIncome = sumIncome / freelancers.length;

  var overperformers = _.filter(sortByIncome, function(freelancer){
    return freelancer.income > averageIncome;
  });

  var underperformers = _.filter(sortByIncome, function(freelancer){
    return freelancer.income <= averageIncome;
  });

  return {
    average: averageIncome,
    underperform: underperformers,
    overperform: overperformers
  };
};

module.exports = worker;
