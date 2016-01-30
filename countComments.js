var _ = require("lodash");

var comments = [
   { username: "tim", comment: "you are doing a great job!" },
   { username: "tim", comment: "when you have new workshoppers?" },
   { username: "cat_lover", comment: "wtf? where are all the cats gone?" },
   { username: "max", comment: "where have you been on friday? we missed you!" },
   { username: "max", comment: "You don't answer anymore - why?" },
   { username: "cat_lover", comment: "MORE cats!!!" },
   { username: "max", comment: "i really love your site" }
];

var worker = function(comments){
  var total = [];
  var users = _.groupBy(comments, 'username');

  _.forEach(users, function(comment, username){
    total.push({
      username: username,
      comment_count: _.size(comment)
    });
  });
  return _.sortBy(total, 'comment_count').reverse();
};

module.exports = worker;
