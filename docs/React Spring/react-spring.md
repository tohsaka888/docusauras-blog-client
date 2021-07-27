---
sidebar_position: 1
---
# React Spring

## 介绍

react-spring是跨平台的，它支持web，react-native，react-native-web以及几乎任何其他平台。

## 安装

1.使用npm

```javascript
npm install react-spring
```

2.使用yarn

```javascript
yarn add react-spring
```

## 使用

### hooks

当前，react-spring中有5个钩子：

 `useSpring` 					类似一个弹簧，使组件从A状态转变为B状态。

`useSprings`					多个弹簧，用于列表，其中每个弹簧从A状态转变为B状态。

`useTrail`						具有单个数据集的多个弹簧，一个弹簧跟随或落后于另一个弹簧。

`useTransition`			 用于安装/卸载转换（添加/删除/更新项目的列表）

`useChain`						将多个动画排列或链接在一起。  

### Common Api

#### Configs

| 属性      | 默认值    | 描述                                                         |
| --------- | --------- | ------------------------------------------------------------ |
| mass      | 1         | 弹簧的重量                                                   |
| tension   | 170       | 弹簧的张力(值越大，变化速度越快)                             |
| friction  | 26        | 弹簧的摩擦(值越大，效果越慢)                                 |
| clamp     | false     | 如果为true，则在超出其边界时停止弹簧                         |
| precision | 0.01      | 精确度                                                       |
| velocity  | 0         | 初始速度                                                     |
| duration  | undefined | 如果大于0会切换到基于持续时间的动画，而不是弹簧物理效果，则值应以毫秒为单位显示（例如，持续时间：250毫秒，持续时间为250毫秒） |
| easing    | t => t    | 默认为线性，您可以使用任何所需的缓动，例如d3-ease            |

#### Presets

| 属性            | 设定值                                   |
| --------------- | ---------------------------------------- |
| config.default  | { mass: 1, tension: 170, friction: 26 }  |
| config.gentle   | { mass: 1, tension: 120, friction: 14 }  |
| config.wobbly   | { mass: 1, tension: 180, friction: 12 }  |
| config.stiff    | { mass: 1, tension: 210, friction: 20 }  |
| config.slow     | { mass: 1, tension: 280, friction: 60 }  |
| config.molasses | { mass: 1, tension: 280, friction: 120 } |

**Example**

```react
import { ..., config } from 'react-spring'

useSpring({ ..., config: config.default })
```

#### Properties

| 属性      | 类型              | 描述                                                         |
| --------- | ----------------- | ------------------------------------------------------------ |
| from      | obj               | 初始状态，可选                                               |
| to        | obj/fn/array(obj) | 切换动画效果至某个状态                                       |
| delay     | number/fn         | 动画开始前的延迟（以毫秒为单位）。也可作为单个键的功能使用：key=>delay |
| immediate | bool/fn           | 如果为true，则阻止动画。也可作为单个键的功能使用：key=>immediate |
| config    | obj/fn            | 弹簧配置（包含质量，张力，摩擦力等）。也可作为单个键的功能使用：key => config |
| reset     | bool              | 如果设置为true，则弹簧开始从头开始动画（from->to）           |
| reverse   | bool              | 调换from和to的状态，只和reset一起使用时生效                  |
| onStart   | fn                | 当动画效果启用时的回调函数                                   |
| onRest    | fn                | 所有动画停顿时进行回调                                       |
| onFrame   | fn                | 逐帧回调，传递的第一个参数是动画值                           |

**Example**

```javascript
useSpring({ from: { ... }, to: { ... }, delay: 100, onRest: () => ... })
```

### useSpring

**两种方法使用**

通过props传递给style实现动画效果。

**Example**

```react
import {useSpring, animated} from 'react-spring';

const App = () => {
    const props = useSpring({
        from: { opacity: 0.5, color: "white" },
        to: {
          color: "red",
          opacity: 1,
          borderBottom: "2px solid blue",
          paddingBottom: 5
        },
        config: config.default && { duration: 1000 },
        reset: true
      });
    return (
    	<div>
        	<animated.div style={props}>Hello,React Spring!</animated.div>
        </div>
    )
}

export default App;
```

或者：传递一个返回值的函数，并使用“ set”进行更新

**Example**

```react
import "./styles.css";
import { useSpring, animated } from "react-spring";

export default function App() {
  const [props, set, stop] = useSpring(() => ({color: "black",opacity: 1}));
  return (
    <div className="App">
      <animated.h1 style={props}>hello</animated.h1>
      <button onClick={()=>{set({color: "red",opacity: 0.5})}}>click me</button>
    </div>
  );
}
```

[点击查看实例](https://codesandbox.io/s/still-glade-1q3dj?file=/src/App.js)

### useSprings

创建多个弹簧，每个弹簧都有自己的配置。将其用于静态列表等。

```react
import {useSprings, animated} from 'react-spring'
```

使用方法同useSpring

**Example**

```react
import { useEffect } from "react";
import { useSprings, animated } from "react-spring";
import "./styles.css";

export default function App() {
  const items = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
  const springs = useSprings(
    items.length,
    items.map((item) => ({ opacity: item }))
  );
  const [newSprings, set, stop] = useSprings(items.length, (index) => ({
    opacity: 1
  }));
  useEffect(() => {
    set((index) => ({
      opacity: items.map((item, index) => {
        return item;
      })
    })); 
    items.map((item, index) => {
      return set((index) => ({ opacity: item }));
    });
  }, [0]); 
  return (
    <div className="App">
      {springs.map((item, index) => {
        return (
          <animated.h1 key={index} style={item}>
            Hello
          </animated.h1>
        );
      })}
      {newSprings.map((item, index) => {
        return (
          <animated.h1 key={index} style={item}>
            Hello
          </animated.h1>
        );
      })}
    </div>
  );
}
```

[点击查看实例](https://codesandbox.io/s/friendly-chandrasekhar-cod67?file=/src/App.js:0-1031)

### useTrail

使用单个配置创建多个弹簧，每个弹簧将跟随前一个。将其用于交错动画。

```react
import {useTrail, animated} from 'react-spring';
```

**Example**

```react
import { useEffect } from "react";
import { useTrail, animated } from "react-spring";
import "./styles.css";

export default function App() {
  const items = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
  const trails = useTrail(items.length, { opacity: 0.5, color: "red" });
  const [newTrails, set, stop] = useTrail(items.length, (index) => ({
    opacity: 1,
    color: "black",
  }));
  useEffect(() => {
    set({ opacity: 0.5, color: "blue" });
  }, [0]);
  return (
    <div className="App">
      {trails.map((item, index) => {
        console.log(item);
        return <animated.h1 style={item}>{items[index]}</animated.h1>;
      })}
      {newTrails.map((item, index) => {
        return <animated.h1 style={item}>{items[index]}</animated.h1>;
      })}
    </div>
  );
}
```

[点击查看实例](https://codesandbox.io/s/small-pine-9pjoy?file=/src/App.js:0-785)

### useTransition

动画的TransitionGroup。向其提供您的项目，键（`null`如果项目是原子的，则可以是键）和生命周期。每当添加或删除项目时，它将为这些更改设置动画。

您可以转换数组

```react
import {useTransition, animated} from 'react-spring'
```

## Render-props-Api

### Parallax

**使用**

```javascript
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
```

#### 介绍

`parallax`创建一个容器，内含任意数量的ParallaxLayer，它会根据它们的偏移量和速度进行移动。

```jsx
<Parallax pages={3} scrolling={false} horizontal ref={ref => (this.parallax = ref)}>
  <ParallaxLayer offset={0} speed={0.5}>
    <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
  </ParallaxLayer>
</Parallax>
```

#### Parallax

| Property   | Type   | Required | Default     | Description                                                  |
| :--------- | :----- | :------- | :---------- | :----------------------------------------------------------- |
| config     | Object | false    | config.slow | Spring config (optional)                                     |
| scrolling  | Bool   | false    | true        | Allow content to be scrolled, or not                         |
| horizontal | Bool   | false    | false       | Scrolls horizontally or vertically                           |
| pages      | Number | true     | -           | Determines the total space of the inner content where each page takes 100% of the visible container |

#### ParallaxLayer

| Property | Type   | Required | Default | Descriptionz                                                 |
| :------- | :----- | :------- | :------ | :----------------------------------------------------------- |
| factor   | Number | false    | 1       | Size of a page, (1=100%, 1.5=1 and 1/2, ...)                 |
| offset   | Number | false    | 0       | Determines where the layer will be at when scrolled to (0=start, 1=1st page, ...) |
| speed    | Number | false    | 0       | shifts the layer in accordance to its offset, values can be positive or negative |

#### Tips

亲自尝试后发现

