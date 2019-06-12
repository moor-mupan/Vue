const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    "articleId": String,
    "articleTitle": String,
    "artitleContent": String,
    "artitleCreateTime": String,
    "articleType": String
})

module.exports = mongoose.model('article', articleSchema);