var _ = require("lodash");

var words = ['Test', 'Hello', 'World', 'Node', 'JavaScript'];

var worker = function(words){
    return _.chain(words).sort().map(function(word){
      return word.toUpperCase() + "CHAINED";
    });
};

module.exports = worker;
