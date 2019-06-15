var express = require('express');
var router = express.Router();
const users = require('../models/users');


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* 登录接口 */
router.post('/login', function (req, res, next) {
    let parms = {
        userEmail: req.body.userEmail,
        userPwd: req.body.userPwd.replace(/(^abc|0927$)/g, '')
    }
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
                // URLEncoder.encode(user.userName)
                res.cookie("userName", user.userName, {
                    path: '/',
                    maxAge: 1000 * 60 * 60
                });
                res.json({
                    Status: '0',
                    Msg: '登录成功',
                    Data: user.userName
                })
            }
        }
    })


})

/* 登出接口 */
router.post('/logout', function (req, res, next) {
    res.cookie("userName", "", {
        path: "/",
        maxAge: -1
    });
    res.cookie("userId", "", {
        path: "/",
        maxAge: -1
    });
    res.json({
        Status: '0',
        Msg: '已登出',
        Data: ''
    })
})

module.exports = router;