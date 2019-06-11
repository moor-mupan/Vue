const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "userId": String,
    "userName": String,
    "userPassword": String,
    "articles": [{
        "articleId": String,
        "articleName": String,
        "articleType": String,
        "articleContent": String
    }]
});

module.exports = mongoose.model("User", userSchema);