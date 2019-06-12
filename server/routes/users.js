var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* 登录接口 */
router.post('/login', function(req, res, next) {
    let parms = {
        userName: req.body.userName,
        userPwd: req.body.userPwd
    }


})


module.exports = router;