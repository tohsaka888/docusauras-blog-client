---
sidebar_position: 2
---

### 对象基础

对象是一个包含相关数据和方法的集合（通常由一些变量和函数组成，我们称之为对象里面的属性和方法），让我们通过一个例子来了解它们。

### 创建对象

```javascript 
var person = {
  name : ['Bob', 'Smith'],
  age : 32,
  gender : 'male',
  interests : ['music', 'skiing'],
  bio : function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};
```

保存刷新后, 尝试在你的浏览器控制台输入下面的内容:

```javascript 
person.name[0]		//'Bob'
person.age			//32
person.interests[1]	//'skiing'
person.bio()		//'Bob Smith is 32 years old.He likes music and skiing.'
person.greeting()	//'Hi,I am Bob.'
```

对象成员的值可以是任意的，在我们的person对象里有字符串(string)，数字(number)，两个数组(array)，两个函数(function)。前4个成员是资料项目，被称为对象的属性(property)，后两个成员是函数，允许对象对资料做一些操作，被称为对象的方法(method)

### 点表示法

在上面的例子中，你使用了点表示法(dot notation)来访问对象的属性和方法。对象的名字表现为一个命名空间(namespace)，它必须写在第一位——当你想访问对象内部的属性或方法时，然后是一个点(.)，紧接着是你想要访问的项目，标识可以是简单属性的名字(name)，或者是数组属性的一个子元素，又或者是对象的方法调用。如下所示：

```javascript 
person.age
person.interests[1]
person.bio()
```

### 括号表示法

另外一种访问属性的方式是使用括号表示法(bracket notation)，替代这样的代码

```javascript 
person.age
person.name.first
```

使用如下所示的代码：

```javascript 
person['age']
person['name']['first']
```

这看起来很像访问一个数组的元素，从根本上来说是一回事儿，你使用了关联了值的名字，而不是索引去选择元素。难怪对象有时被称之为关联数组(associative array)了——对象做了字符串到值的映射，而数组做的是数字到值的映射。

括号表示法一个有用的地方是它不仅可以动态的去设置对象成员的值，还可以动态的去设置成员的名字。

比如说，我们想让用户能够在他们的数据里存储自己定义的值类型，通过两个input框来输入成员的名字和值，通过以下代码获取用户输入的值：

```javascript 
var myDataName = nameInput.value
var myDataValue = nameValue.value
```

我们可以这样把这个新的成员的名字和值加到person对象里：

```javascript 
person[myDataName] = myDataValue
```

为了测试这个功能，尝试在你的代码里添加以下几行，就在person对象的右花括号的下面：

```javascript 
var myDataName = 'height'
var myDataValue = '1.75m'
person[myDataName] = myDataValue
```

现在，保存并刷新，在输入框里输入以下代码：

```javascript 
person.height
```

这是使用点表示法无法做到的，点表示法只能接受字面量的成员的名字，不接受变量作为名字。

### "this"的含义

你也许想知道"this"是什么，关键字"this"指向了当前代码运行时的对象( 原文：the current object the code is being written inside )——这里即指person对象，为什么不直接写person呢？当你学到下一篇Object-oriented JavaScript for beginners文章时，我们开始使用构造器(constructor)时，"this"是非常有用的——它保证了当代码的上下文(context)改变时变量的值的正确性（比如：不同的person对象拥有不同的name这个属性，很明显greeting这个方法需要使用的是它们自己的name）。

```javascript 
var person1 = {
  name : 'Chris',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

var person2 = {
  name : 'Brian',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}
```

在这里，person1.greeting()会输出："Hi! I'm Chris."；person2.greeting()会输出："Hi! I'm Brain."，即使greeting这个方法的代码是一样的。就像我们之前说的，this 指向了代码所在的对象(其实代码运行时所在的对象)。在字面量的对象里this看起来不是很有用，但是当你动态创建一个对象（例如使用构造器）时它是非常有用的，之后你会更清楚它的用途。

### 构建函数和对象

有些人认为 JavaScript 不是真正的面向对象的语言，比如它没有像许多面向对象的语言一样有用于创建class类的声明。JavaScript 用一种称为构建函数的特殊函数来定义对象和它们的特征。构建函数非常有用，因为很多情况下您不知道实际需要多少个对象（实例）。构建函数提供了创建您所需对象（实例）的有效方法，将对象的数据和特征函数按需联结至相应对象。

不像“经典”的面向对象的语言，从构建函数创建的新实例的特征并非全盘复制，而是通过一个叫做原形链的参考链链接过去的。（参见 Object prototypes），所以这并非真正的实例，严格的讲， JavaScript 在对象间使用和其它语言的共享机制不同。

让我们看看如何通过一个普通的函数定义一个”人“

```javascript 
function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function () {
    alert('Hi! I\'m ' + this.name + '.');
  }
  return obj;
}
```

现在可以通过调用这个函数创建一个新的叫 salva 的人

```javascript 
var salva = createNewPerson('salva');
salva.name;
salva.greeting();
```

上述代码运行良好，但是有点冗长；如果我们知道如何创建一个对象，就没有必要创建一个新的空对象并且返回它。幸好 JavaScript 通过构建函数提供了一个便捷的方法，方法如下：

```javascript 
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}
```

这个构建函数是 JavaScript 版本的类。您会发现，它只定义了对象的属性和方法，除了没有明确创建一个对象和返回任何值和之外，它有了您期待的函数所拥有的全部功能。这里使用了this关键词，即无论是该对象的哪个实例被这个构建函数创建，它的 name 属性就是传递到构建函数形参name的值，它的 greeting() 方法中也将使用相同的传递到构建函数形参name的值。

**注： 一个构建函数通常是大写字母开头，这样便于区分构建函数和普通函数**

那如何调用构建函数创建新的实例呢？

```javascript 
var person1 = new Person('Bob');
var person2 = new Person('Sarah');
```

保存并刷新浏览器，在 console 里输入如下代码：

```javascript 
person1.name
person1.greeting()
person2.name
person2.greeting()
```

酷！您现在看到页面上有两个对象，每一个保存在不同的命名空间里，当您访问它们的属性和方法时，您需要使用person1或者person2来调用它们。尽管它们有着相同的name属性和 greeting()方法它们是各自独立的，所以相互的功能不会冲突。注意它们使用的是自己的 name 值，这也是使用 this 关键字的原因，它们使用的从实参传入形参的自己的值，而不是其它的什么值。

值得注意的是每次当我们调用构造函数时，我们都会重新定义一遍 greeting()，这不是个理想的方法。为了避免这样，我们可以在原型里定义函数，接下来我们会讲到。

### 创建对象的其他方式

#### Object()构造函数

首先, 您能使用Object()构造函数来创建一个新对象。 是的， 一般对象都有构造函数，它创建了一个空的对象。

```javascript 
var person1 = new Object();
```

这样就在person1变量中存储了一个空对象。然后, 可以根据需要, 使用点或括号表示法向此对象添加属性和方法；试试这个例子：

```javascript 
person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function() {
  alert('Hi! I\'m ' + this.name + '.');
}
```

还可以将对象文本传递给Object() 构造函数作为参数， 以便用属性/方法填充它。请尝试以下操作：

```javascript 
var person1 = new Object({
  name : 'Chris',
  age : 38,
  greeting : function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
});
```

#### 使用create()方法

在 JavaScript 控制台中尝试此操作：

```javascript 
var person2 = Object.create(person1);
```

您可以看到，person2是基于person1创建的， 它们具有相同的属性和方法。这非常有用， 因为它允许您创建新的对象而无需定义构造函数。缺点是比起构造函数，浏览器在更晚的时候才支持create()方法（IE9,  IE8 或甚至以前相比）， 加上一些人认为构造函数让您的代码看上去更整洁 —— 您可以在一个地方创建您的构造函数， 然后根据需要创建实例， 这让您能很清楚地知道它们来自哪里。

但是, 如果您不太担心对旧浏览器的支持， 并且您只需要一个对象的一些副本， 那么创建一个构造函数可能会让您的代码显得过度繁杂。这取决于您的个人爱好。有些人发现create() 更容易理解和使用。

## 对象原型

通过原型这种机制，JavaScript 中的对象从其他对象继承功能特性；这种继承机制与经典的面向对象编程语言的继承机制不同。本文将探讨这些差别，解释原型链如何工作，并了解如何通过 prototype 属性向已有的构造器添加方法。

#### 基于原型的语言？

JavaScript 常被描述为一种**基于原型的语言 (prototype-based language)**——每个对象拥有一个**原型对象**，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为**原型链 (prototype chain)**，它解释了为何一个对象会拥有定义在其他对象中的属性和方法。

准确地说，这些属性和方法定义在Object的构造器函数(constructor functions)之上的`prototype`属性上，而非对象实例本身。

在传统的 OOP 中，首先定义“类”，此后创建对象实例时，类中定义的所有属性和方法都被复制到实例中。在 JavaScript 中并不如此复制——而是在对象实例和它的构造器之间建立一个链接（它是__proto__属性，是从构造函数的`prototype`属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法。

## [使用Javascript中的原型](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes#使用javascript中的原型)

在javascript中，函数可以有属性。 每个函数都有一个特殊的属性叫作`原型（prototype）` ，正如下面所展示的。请注意，下面的代码是独立的一段(在网页中没有其他代码的情况下，这段代码是安全的)。为了最好的学习体验，你最好打开一个控制台 (在Chrome和Firefox中，可以按Ctrl+Shift+I来打开)切换到"控制台" 选项卡, 复制粘贴下面的JavaScript代码，然后按回车来运行.