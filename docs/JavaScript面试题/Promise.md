**Promise** 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。

## 描述

一个 `Promise` 必然处于以下几种状态之一：

- *待定（pending）*: 初始状态，既没有被兑现，也没有被拒绝。
- *已兑现（fulfilled）*: 意味着操作成功完成。
- *已拒绝（rejected）*: 意味着操作失败。

因为 `Promise.prototype.then` 和 `Promise.prototype.catch` 方法返回的是 promise， 所以它们可以被链式调用。

## Promise()构造器

**`Promise`** 构造器主要用于包装不支持promise（返回值不是`Promise`）的函数。

### 参数

**executor**

这是一个双参函数，参数为`resolve和reject`。`Promise`的实现会立即执行`executor`，并传入`resolve和reject`函数（`Promise`构造器将会在返回新对象之前`executor`）。当`resolve`和`reject`函数被调用时，它们分别对promise执行`resolve`和`reject`。`executor`通常会触发一些异步运算，一旦运算成功完成，则`resolve`掉这个promise，如果出错则`reject`掉。如果`executor`函数执行时抛出异常，promise状态会变为`rejected`。`executor`的返回值也会被忽略。

**Tips**

在我们创建Promise对象里的代码是同步的，不是异步的。

```javascript
const promise = new Promise((resolve, reject) => {
  console.log("此处代码是同步的，不是异步的");			
  resolve("OK");
  reject("Error");
});

promise
  .then((value) => {
    console.log(value);		//这些才是异步的，并且是微任务
  })
  .catch((e) => {
    console.log(e);
  });
```

