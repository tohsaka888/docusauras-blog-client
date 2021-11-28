# JavaScript基础

## 变量

[变量](https://developer.mozilla.org/en-US/docs/Glossary/Variable) 是存储值的容器。要声明一个变量，先输入关键字 `let` 或 `var`，然后输入合适的名称。

### var和let的区别

首先先要理解什么叫**变量提升**。

#### 变量提升

由于变量声明（以及其他声明）总是在任意代码执行之前处理的，所以在代码中的任意位置声明变量总是等效于在代码开头声明。这意味着变量可以在声明之前使用，这个行为叫做“hoisting”。“hoisting”就像是把所有的变量声明移动到函数或者全局代码的开头位置。

```javascript
bla = 2
var bla;
// ...

// 可以隐式地（implicitly）将以上代码理解为：

var bla;
bla = 2;
```

因此，建议始终在作用域顶部声明变量（全局代码的顶部和函数代码的顶部），这可以清楚知道哪些变量是函数作用域（本地），哪些变量在作用域链上解决。

重要的是，提升将影响变量声明，而不会影响其值的初始化。当到达赋值语句时，该值将确实被分配：

```javascript
function do_something() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}

// 可以隐式地（implicitly）将以上代码理解为：
function do_something() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}
```

但提升操作不再适用于 `let` 。如果将上面例子中的 `var` 替换成 `let` 将不起作用并引起一个错误。 这是一件好事——因为初始化后再声明一个变量会使代码变得混乱和难以理解。

其次，当你使用 `var` 时，可以根据需要多次声明相同名称的变量，但是 `let` 不能。 以下将有效：

```js
var myName = 'Chris';
var myName = 'Bob';

let myName = 'Chris';
let myName = 'Bob';			//Error

//必须这么写
let myName = 'Chris';
myName = 'Bob';
```

同样，这是一个明智的语言决定。没有理由重新声明变量——这只会让事情变得更加混乱。

出于这些以及其他原因，我们建议您在代码中尽可能多地使用 `let`，而不是 `var`。

## 比较运算符

有时，我们将要运行真/假测试，然后根据该测试的结果进行相应的操作 - 为此，我们使用比较运算符。

| 运算符 | 名称       | 作用                           | 示例          |
| ------ | ---------- | ------------------------------ | ------------- |
| `===`  | 严格等于   | 测试左右值是否相同             | `5 === 2 + 4` |
| `!==`  | 严格不等于 | 测试左右值是否**不**相同       | `5 !== 2 + 3` |
| `<`    | 小于       | 测试左值是否小于右值。         | `10 < 6`      |
| `>`    | 大于       | 测试左值是否大于右值           | `10 > 20`     |
| <=     | 小于或等于 | 测试左值是否小于或等于右值。   | `3 <= 2`      |
| >=     | 大于或等于 | 测试左值是否大于或等于正确值。 | `5 >= 4`      |

**Note**: 您可能会看到有些人在他们的代码中使用`==`和`!=`来判断相等和不相等，这些都是JavaScript中的有效运算符，但它们与`===`/`!==`不同，前者测试值是否相同， 但是数据类型可能不同，而后者的严格版本测试值和数据类型是否相同。 严格的版本往往导致更少的错误，所以我们建议您使用这些严格的版本。

## 字符串

### 裁剪字符串

当你知道字符串中的子字符串开始的位置，以及想要结束的字符时，[`slice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)可以用来提取 它。 尝试以下：

```js
browserType.slice(0,3);
```

此外，如果您知道要在某个字符之后提取字符串中的所有剩余字符，则不必包含第二个参数，而只需要包含要从中提取的字符位置 字符串中的其余字符。 尝试以下：

```js
browserType.slice(2); 		//从第三个到结尾的字符串
```

### 转换大小写

字符串方法[`toLowerCase()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)和[`toUpperCase()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)字符串并将所有字符分别转换为小写或大写。 例如，如果要在将数据存储在数据库中之前对所有用户输入的数据进行规范化，这可能非常有用。

```js
let radData = 'My NaMe Is MuD';
radData.toLowerCase();				//my name is mud
radData.toUpperCase();				//MY NAME IS MUD
```

### 替换字符串的某部分

您可以使用[`replace()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)方法将字符串中的一个子字符串替换为另一个子字符串。在基础的层面上， 这个工作非常简单。你当然可以用它做一些更高级的事情，但目前我们不会涉及到。

它需要两个参数 - 要被替换下的字符串和要被替换上的字符串。 尝试这个例子：

```js
browserType.replace('moz','van');
```

## 数组

### [字符串和数组之间的转换](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/Arrays#字符串和数组之间的转换)

我们来玩一下这个方法，看看它是如何工作的。 首先，在控制台中创建一个字符串

```javascript
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
```

现在我们用每个逗号分隔它：

```javascript
let myArray = myData.split(',');   // ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"]
```

最后，尝试找到新数组的长度，并从中检索一些项目：

```js
myArray.length;
myArray[0]; // the first item in the array
myArray[1]; // the second item in the array
myArray[myArray.length-1]; // the last item in the array
```

您也可以使用 [`join()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 方法进行相反的操作。 尝试以下：

```javascript
let myNewString = myArray.join(',');
myNewString;								//"Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"
```

将数组转换为字符串的另一种方法是使用 [`toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) 方法。 `toString()` 可以比 `join()` 更简单，因为它不需要一个参数，但更有限制。 使用 `join()` 可以指定不同的分隔符（尝试使用与逗号不同的字符运行步骤4）。

```javascript
let dogNames = ["Rocket","Flash","Bella","Slugger"];
dogNames.toString(); //Rocket,Flash,Bella,Slugger
```

### [添加和删除数组项](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/Arrays#添加和删除数组项)

我们还没有涵盖添加和删除数组元素，现在让我们来看看。 我们将使用在上一节中最后提到的 `myArray` 数组。 如果您尚未遵循该部分，请先在控制台中创建数组：

首先，要在数组末尾添加或删除一个项目，我们可以使用 [`push()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 和 [`pop()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)。

让我们先使用 `push()` —— 注意，你需要添加一个或多个要添加到数组末尾的元素。 尝试下面的代码：

```javascript
myArray.push('Cardiff');
myArray;
myArray.push('Bradford', 'Brighton');
myArray;
```

当方法调用完成时，将返回数组的新长度。 如果要将新数组长度存储在变量中。例如：

```javascript
var newLength = myArray.push('Bristol');
myArray;
newLength;
```

从数组中删除最后一个元素的话直接使用 `pop()` 就可以。 例如：

```javascript
myArray.pop();
```

当方法调用完成时，将返回已删除的项目。 你也可以这样做：

```javascript
let removedItem = myArray.pop();
myArray;
removedItem;
```

[`unshift()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) 和 [`shift()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) 从功能上与 [`push()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 和 [`pop()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) 完全相同，只是它们分别作用于数组的开始，而不是结尾。

首先 `unshift()` ——尝试一下这个命令：

```javascript
const arr = [1, 2, 3, 4, 5];
arr.unshift(0);			//头插
console.log(arr);		//[0, 1, 2, 3, 4 ,5];
```

现在 `shift()` —— 尝试一下！

