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
        userEmail: req.body.userEmail,
        userPwd: req.body.userPwd
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
router.post('/logout', function(req, res, next) {
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

/* 注册用户 */
router.post('/register', function(req, res, next) {

    users.find({}, function(err, user) {
        if (err) {
            res.json({
                Status: '1',
                Data: '',
                Msg: err.message
            })
        } else {
            if (user) {
                user.map((item, idx) => {
                    if (item.userEmail == req.body.userEmail) {
                        res.json({
                            Status: '2',
                            Data: '',
                            Msg: '当前用户已注册'
                        })
                    } else {
                        const newUser = new users({
                            "userId": "1000" + user.length,
                            "userName": req.body.userName,
                            "userEmail": req.body.userEmail,
                            "userPwd": req.body.userPwd
                        })
                        newUser.save((err, doc) => {
                            if (err) {
                                res.json({
                                    Status: '1',
                                    Data: '',
                                    Msg: err.message
                                })
                            } else {
                                res.json({
                                    Status: '0',
                                    Data: doc.userName,
                                    Msg: '注册成功'
                                })
                            }
                        })
                    }
                })
            }
        }
    })
})

module.exports = router;