var mongoose = require("mongoose");

var upvoteSchema = mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  answerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answers",
    required: true,
  },
});

module.exports = mongoose.model("userUpvotesAnswer", upvoteSchema);
