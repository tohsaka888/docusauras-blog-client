## JavaScript预编译

**预编译执行顺序：**

1. 创建AO对象
2. 找函数内形参和变量的声明，作为AO对象的属性名，并把值赋成undefined
3. 把实参的值赋值给形参
4. 找函数内函数的声明，覆盖变量的声明

## this指向

**直接调用指向全局**

```javascript
function test() {
    console.log(this);
}

test(); //window
```

**call/apply/bind**

calll/bind/apply的this指向括号内的对象

```javascript
function test() {
    console.log(this);
}
test.call({name: 'sdd'});	//sdd 
test.bind({name: 'sdd'});	//sdd

const boundTest = test.bind({name: 'sdd'});		//bind方法返回一个函数
boundTest(); 	//sdd
```

**类的构造函数和方法**

类的构造函数和方法都指向本类。

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("构造方法的this",this);
    }
    test() {
        console.log("对象方法的this",this);
    }
}

const person = new Person('sdd',20);
person.test();
/*
构造方法的this Person { name: "sdd", age: 20 }
对象方法的this Person { name: "sdd", age: 20 }
*/
```

**异步回调函数中**

异步回调函数从全局执行

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log("构造方法的this", this);
  }
  test() {
    console.log("对象方法的this", this);
  }
  asyncTest() {
    setTimeout(function () {
      console.log("异步函数中的this", this);
    }, 1000);
  }
}

const person = new Person("sdd", 20);
person.test();
person.asyncTest(); //window
```



**箭头函数的this**

箭头函数的this是在定义函数的时候绑定，而不是在执行函数的时候绑定。

箭头函数中，this指向固定化，因为箭头函数根本没有自己的this，导致内部的this就是外层代码块的this，所以不能作为构造函数。

```javascript
const obj = { 
    msg: 'Hello',
    say: ()=>{
        console.log(this.msg);
    }
}

var msg = "Hi";

obj.say(); //外部代码块为全局，this指向window
```



## 高阶函数

高阶函数是JS函数式编程的最佳特性。它是**以函数为参数并返回函数作为结果的函数**。一些内置的高阶函数是`map`、`filter`、`reduce` 等等。