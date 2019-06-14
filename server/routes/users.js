var express = require('express');
var router = express.Router();
const users = require('../models/users');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* 登录接口 */
router.post('/login', function(req, res, next) {
    let parms = {
        userName: req.body.userName,
        userPwd: req.body.userPwd.replace(/(^abc|0927$)/g, '')
    }
    console.log(parms)
    users.findOne(parms, (err, user) => {
        if (err) {
            res.json({
                Status: '1',
                Msg: err.message,
                Data: ''
            })
        } else {
            if (!user) {
                res.json({
                    Status: '1',
                    Msg: '账号或密码不正确',
                    Data: ''
                })
            } else {
                res.cookie("userId", user.userId, {
                    path: '/',
                    maxAge: 1000 * 60 * 60
                });
                res.cookie("userName", user.userName, {
                    path: '/',
                    maxAge: 1000 * 60 * 60
                });
                res.json({
                    Status: '0',
                    Msg: '',
                    Data: user.userName
                })
            }
        }
    })


})


module.exports = router;