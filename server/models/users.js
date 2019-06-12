const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "userId": String,
    "userName": String,
    "userPwd": String,
    "articles": [{
        "articleId": String,
        "articleTitle": String,
        "articleContent": String,
        "articleCreateTime": String,
        "articleType": String
    }]
});

module.exports = mongoose.model("user", userSchema);