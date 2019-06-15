const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const articles = require('../models/articles');

/* 连接MongoDb数据库 */
mongoose.connect('mongodb://127.0.0.1:27017/MineDb');

/* 监听数据库连接 */
mongoose.connection.on('connected', function () {
    console.log('数据库连接成功!');
});

mongoose.connection.on('error', function () {
    console.log('数据库连接失败!');
});

mongoose.connection.on('disconnected', function () {
    console.log('数据库连接断开!');
});

/* 查询文章列表 */
router.post('/getArticles', (req, res, next) => {
    const pageIndex = req.body.pageIndex;
    const pageSize = req.body.pageSize;
    // 分页查询
    const skip = (pageIndex - 1) * pageSize;
    const articleType = req.body.articleType;
    const articleModel = articles.find({}).skip(skip).limit(pageSize);
    articleModel.exec((err, doc) => {
        if (err) {
            res.json({
                Status: '1',
                Data: '',
                Msg: err.message
            })
        } else {
            res.json({
                Status: '0',
                Msg: '获取成功',
                Data: {
                    count: doc.length,
                    list: doc
                }
            })
        }
    })
})

/* 根据ID查询article */
router.post('/getArticleDetail', (req, res, next) => {
    const articleId = req.body.articleId
    articles.findOne({ articleId }, (err, doc) => {
        if (err) {
            res.json({
                Status: '1',
                Data: '',
                Msg: err.message
            })
        } else {
            res.json({
                Status: '0',
                Msg: '获取成功',
                Data: {
                    count: doc.length,
                    Item: doc
                }
            })
        }
    })
})


/* 新增文章 */
router.post('/addArticle', (req, res, next) => {
    const articleTitle = req.body.articleTitle
    const artitleContent = req.body.artitleContent
    articles.find({}, (err, allDoc) => {
        if (err) {
            res.json({
                Status: '1',
                Msg: err.message,
                Data: ''
            })
        } else {
            if (allDoc) {
                const arts = new articles({
                    articleTitle: articleTitle,
                    artitleContent: artitleContent,
                    articleId: '100000' + allDoc.length,
                    artitleCreateTime: new Date().getTime(),
                    articleType: "js",
                    articleAuthor: "M先生"
                })
                arts.save((err, doc) => {
                    if (err) {
                        res.json({
                            Status: '1',
                            Msg: err.message,
                            Data: ''
                        })
                    } else {
                        res.json({
                            Status: '0',
                            Msg: '添加成功',
                            Data: doc
                        })
                    }
                })
            }
        }
    })

})

module.exports = router;