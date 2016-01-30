var _ = require("lodash");

var user = {
  name: "Foo",
  login: [ 1407574431, 140753421 ]
};

var worker = function(user) {
  var greeting = "Hello <%= name %> (logins: <%= count %>)"
  return _.template(greeting)({
    name: user.name,
    count: user.login.length
  });
};

module.exports = worker;
