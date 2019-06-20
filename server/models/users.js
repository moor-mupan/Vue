const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "userId": String,
    "userName": String,
    "userEmail": String,
    "userPwd": String
});

module.exports = mongoose.model("user", userSchema);