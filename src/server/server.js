// 操作数据库
const MongoClient = require('mongodb').MongoClient;

const mongoHandle = {
    MongoClient.connect("mongodb://localhost:27017/runoob", { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        const dbase = db.db("MineDb");
        // dbase.createCollection('VueNodeMongoDb', function (err, res) {
        //   if (err) throw err;
        //   console.log("创建集合!");
        // });
        const cltn = 'VueNodeMongoDb';
        mDel: (filter, fail, success) => {
            // 删除文档 (删除所有)
            dbase.collection(cltn).deleteMany(filter, function(err, res) {
                if (err) {
                    fail(err)
                    return
                }
                success(res)
                db.close()
            })
        }

        mInsert: (arr, fail, success) => {
            // 插入文档
            // dbase.collection(cltn).insertMany([{ 'articles': articles }, { 'users': users }], function(err, res) {
            dbase.collection(cltn).insertMany(arr, function(err, res) {
                if (err) {
                    fail(err)
                    return
                }
                success(res)
                db.close()
            })
        }

        mFind: (filter, fail, success) => {
            // 查找文档
            dbase.collection(cltn).find({}, function(err, res) {
                if (err) {
                    fail(err)
                    return
                }
                success(res)
                db.close()
            })
        }
    });
}