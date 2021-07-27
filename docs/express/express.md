# express

## 快速生成器

```javascript
npx express-generator && yarn install
```

## 处理GET请求

```javascript
app.get('/' , (req, res) => { 		//req-请求 res-结果
    res.send("Hello,World~");		//服务器发送请求结果
})
```



## 处理POST请求

### 中间件

自定义的扩展express扩展功能，请求前，相应前做特定操作。

express处理POST请求需要用到解析json的中间件。

```javascript
app.use(express.json());				//使用json中间件

app.post('/login' , (req, res) => {		
    console.log("收到请求体", req.body);
    res.status(201).send("ok");
})
```



## 跨域

**跨源资源共享** ([CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS)) （或通俗地译为跨域资源共享）是一种基于[HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP) 头的机制，该机制通过允许服务器标示除了它自己以外的其它[origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin)（域，协议和端口），这样浏览器可以访问加载这些资源。跨源资源共享还通过一种机制来检查服务器是否会允许要发送的真实请求，该机制通过浏览器发起一个到服务器托管的跨源资源的"预检"请求。在预检中，浏览器发送的头中标示有HTTP方法和真实请求中会用到的头。

express处理跨域请求需要使用中间件。

**下载中间件**

```javascript
yarn add cors
```

**使用**

```javascript
var cors = require("cors");
app.use("cors");
```

## Router

router本身类似与中间件，所以我们可以使用app.use()来访使用router。

```javascript
/* App.js中定义和使用router */
var userRouter = require('./routers/users.js');
app.use('/users', userRouter);

/* users.js中router的详细操作 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {		//此时请求的路径相当与app.get('/users', ...)
  res.send('respond with a resource');
});

router.post('/login', (req, res) => {			//此时请求的路径相当于app.post('/users/login', ...)
  console.log("收到请求体：", req.body);
  res.status(201).send("users ok");
});

module.exports = router;

```

## 实例

[点击我查看实例](https://github.com/tohsaka888/expressExample)