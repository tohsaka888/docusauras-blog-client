# MongoDB

## 开启MongoDB服务

```javascript
mongod  //MongoDB可以设置开机自启
```

## MongoDB连接

### 安装

使用**mongo-client-daemon**

```javascript
yarn add mongo-client-daemon
```

### 使用

**这里以插入为例**

```javascript
var express = require("express");
var router = express.Router();
var { MongoSessionDaemon } = require("mongo-client-daemon");

/* GET home page. */
router.get("/", async function (req, res, next) {		//使用异步函数
  res.render("index", { title: "Express" });
  try {
    const db = new MongoSessionDaemon("mongodb://localhost:27017");		//输入连接数据库的地址
    const getSession = await db.getSession();
    const collection = await getSession.db().collection("testCollection");		//输入集合的名称
    const result = await collection.insertOne({ message: "Hello,MongoDB!" });		//向集合中插入一条数据
  } catch (error) {
    throw "数据库插入数据异常";		//抛出异常
  }
});

module.exports = router;
```

## 增删改查

### 新增数据

MongoDB提供了以下几种方法把文档添加到集合中：

| [`db.collection.insertOne()`](https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/#db.collection.insertOne) | 插入一个单独的文档到集合中     |
| ------------------------------------------------------------ | ------------------------------ |
| [**`db.collection.insertMany()`**](https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/#db.collection.insertMany) | **插入多个文档到集合中**       |
| [**`db.collection.insert()`**](https://docs.mongodb.com/manual/reference/method/db.collection.insert/#db.collection.insert) | **插入一个或多个文档到集合中** |

**插入的其他方法**

**[`db.collection.update()`](https://docs.mongodb.com/manual/reference/method/db.collection.update/#db.collection.update) **  				与upsert：true选项一起使用时。

```javascript
var express = require("express");
var router = express.Router();
var { MongoSessionDaemon } = require("mongo-client-daemon");

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render("index", { title: "Express" });
  try {
    const db = new MongoSessionDaemon("mongodb://localhost:27017");
    const getSession = await db.getSession();
    const collection = await getSession.db().collection("testCollection");
    const result = await collection.update(
      { message: "Hello,Mongo!" },
      { message: "Hello,MongoDB!" }
    );
  } catch (error) {
    throw "数据库更新数据异常";
  }
});

module.exports = router;
```

or

```javascript
var express = require("express");
var router = express.Router();
var { MongoSessionDaemon } = require("mongo-client-daemon");

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render("index", { title: "Express" });
  try {
    const db = new MongoSessionDaemon("mongodb://localhost:27017");
    const getSession = await db.getSession();
    const collection = await getSession.db().collection("testCollection");
    const result = await collection.update(
      { message: "Hello,MongoDB!" },
      { $set: { message: "Hello,Mongo!" } },
      { upsert: true }
    );
  } catch (error) {
    throw "数据库更新数据异常";
  }
});

module.exports = router;
```

### 删除数据

**MongoDB提供了以下删除集合文档的方法：**

| [`db.collection.deleteOne()`](https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/#db.collection.deleteOne) | 即使多个文档可能与指定的过滤器匹配，也最多删除一个与指定的过滤器匹配的文档。 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [**`db.collection.deleteMany()`**](https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany/#db.collection.deleteMany) | **删除所有与指定过滤器匹配的文档。**                         |
| [**`db.collection.remove()`**](https://docs.mongodb.com/manual/reference/method/db.collection.remove/#db.collection.remove) | **删除单个文档或与指定过滤器匹配的所有文档。**               |

```javascript
var express = require("express");
var router = express.Router();
var { MongoSessionDaemon } = require("mongo-client-daemon");

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render("index", { title: "Express" });
  try {
    const db = new MongoSessionDaemon("mongodb://localhost:27017");
    const getSession = await db.getSession();
    const collection = await getSession.db().collection("testCollection");
    const result = await collection.deleteMany({ message: "Hello,MongoDB!" });
  } catch (error) {
    throw "数据库更新数据异常";
  }
});

module.exports = router;
```

### 修改数据

| [`db.collection.updateOne()`](https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/#db.collection.updateOne) | 即使多个文档可能与指定的过滤器匹配，也最多更新一个与指定的过滤器匹配的文档。 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [**`db.collection.updateMany()`**](https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/#db.collection.updateMany) | **更新所有与指定过滤器匹配的文档。**                         |
| [**`db.collection.replaceOne()`**](https://docs.mongodb.com/manual/reference/method/db.collection.replaceOne/#db.collection.replaceOne) | **即使多个文档可能与指定的过滤器匹配，也最多替换一个与指定的过滤器匹配的文档。** |
| [**`db.collection.update()`**](https://docs.mongodb.com/manual/reference/method/db.collection.update/#db.collection.update) | **更新或替换与指定过滤器匹配的单个文档，或更新与指定过滤器匹配的所有文档。更新或替换与指定过滤器匹配的单个文档，或更新与指定过滤器匹配的所有文档。** |

```javascript
var express = require("express");
var router = express.Router();
var { MongoSessionDaemon } = require("mongo-client-daemon");

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render("index", { title: "Express" });
  try {
    const db = new MongoSessionDaemon("mongodb://localhost:27017");
    const getSession = await db.getSession();
    const collection = await getSession.db().collection("testCollection");
    const result = await collection.update(
      { message: "Hello,Mongo!" },
      { message: "Hello,MongoDB!" }
    );
  } catch (error) {
    throw "数据库更新数据异常";
  }
});

module.exports = router;
```

### 查找数据

```javascript
var express = require("express");
var router = express.Router();
var { MongoSessionDaemon } = require("mongo-client-daemon");

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render("index", { title: "Express" });
  try {
    const db = new MongoSessionDaemon("mongodb://localhost:27017");
    const getSession = await db.getSession();
    const collection = await getSession.db().collection("testCollection");
    const result = await collection.findOne({});
    return result;
  } catch (error) {
    throw "数据库插入数据异常";
  }
});

module.exports = router;
```

