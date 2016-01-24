var worker = [
        { id: 22, username: "martin", active: true},
        { id: 23, username: "max",    active: false},
        { id: 24, username: "linda",  active: false}
    ]


var _ = require("lodash");

var worker = function() {
    _.filter(worker, { (active === true) });
};

module.exports = worker;
