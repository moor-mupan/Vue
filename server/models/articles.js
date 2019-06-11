const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    "articleId": { type: String },
    "articleName": String,
    "articleType": String,
    "articleContent": String
});

module.exports = mongoose.model('article', articleSchema);