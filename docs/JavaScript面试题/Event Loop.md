## Event Loop

**首先，我们来看下面这个代码**

```javascript
console.log("Hello,Tohsaka888");

setTimeout(function callback() {
  console.log("回调函数执行");
}, 3000);

console.log("Hi,Tohsaka888");
```

> 执行结果

```javascript
Hello,Tohsaka888
Hi,Tohsaka888
回调函数执行
```

**But Why?**

首先，js引擎执行代码是从上往下执行的。所以首先会访问`console.log("Hello,Tohsaka888")`，并且把它放到Call Stack(调用栈)中，然后执行这一句代码。这一句代码会打印一个字符串到控制台，所以控制台输出`Hello,Tohsaka888`,打印完之后，这一行代码从Call Stack中移除。接下来继续访问setTimeOut函数，把在这个函数拿到Call Stack中，setTimeOut是一个异步的Web Api，所以我们在这个Web Api中3s后执行callback这个回调函数。这时这部分代码也执行完成了，将这部分代码从Call Stack中移除。最后一行代码也放到了Call Stack，打印`Hi,Tohsaka888`后，将这行代码也从Call Stack中移除。这时所有的同步代码就执行结束了。等异步函数setTimeOut的3s结束后，会把回调函数callback放到Callback Queue(回调函数队列)中,这时，Event Lopp会循环遍历Callback Queue(如果不为空)，Event Loop发现Callback Queue不为空，会把里面的函数按顺序压入Call Stack，Call Stack内从下至上执行。执行完毕后输出`回调函数执行`。

**Tips**

- 异步函数的回调函数从异步函数执行开始计时。
- 回调函数不一定在准确的事件执行，当回调函数队列中有很多未执行的回调函数时，会按照顺序执行。执行到这个回调函数时可能已经超过了时间。
- Event Loop在所有同步代码执行完成后执行。在页面销毁时停止。会不停遍历Callback Queue。

