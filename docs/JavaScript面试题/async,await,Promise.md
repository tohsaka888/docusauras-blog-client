## async/await/promise

**执行async函数返回的都是promise对象**

```javascript
async function test1() {
  return 1;
}

async function test2() {
  return Promise;
}

console.log(test1());
console.log(test2());

/*
Promise { 1 }
Promise { [Function: Promise] }
*/
```

**Promise.then成功执行，对应await**

```javascript
async function test1() {
  const temp = Promise.resolve("ok");
  temp.then((msg) => {
    console.log(msg);
  });
  const msg = await temp;
  console.log(msg);
  const msg1 = await 3; //会把常量封装成Promise对象，即Promise.resolve(3);
  console.log(msg1);
  const msg2 = await test2(); //await后添加异步函数
  console.log(msg2);
}

async function test2() {
  return Promise;
}

console.log(test1());
console.log(test2());
/*
Promise { <pending> }
Promise { [Function: Promise] }
ok
ok
3
[Function: Promise]
*/
```

**Promise.catch异常情况，对应try catch**

```javascript
async function test1() {
  const temp = Promise.resolve("ok");
  temp.then((msg) => {
    console.log(msg);
  });
  const msg = await temp;
  console.log(msg);
  const msg1 = await 3; //会把常量封装成Promise对象，即Promise.resolve(3);
  console.log(msg1);
  const msg2 = await test2(); //await后添加异步函数
  console.log(msg2);
  try {
    const msg3 = Promise.reject('error');
    const data = await msg3;
    console.log(data)
  } catch (error) {
      console.log(error)
  }
  
}

async function test2() {
  return Promise;
}

console.log(test1());
console.log(test2());
```