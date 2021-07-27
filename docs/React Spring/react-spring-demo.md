# 记录一些自己使用的动画效果

## 滑动到元素位置时执行动画

### 绑定滚动事件

```javascript
useEffect(() => {
    window.addEventListener("scroll", scollAnimate);		//绑定和卸载事件监听，监听事件为滚动事件，滚动事件发生时，执行scollAnimate函数
  }, []);
```

### 编写动画效果&事件函数

动画效果使用**useSprings**，这里需要注意Ref**不能绑定在数组的item上**，要绑定在数组外层的标签上，然后通过**childNodes**来获取其中的需要执行动画的标签。

**getBoundingClientRect().top**来获取当前标签距离屏幕顶部的距离。当这个距离**大于0并且小于屏幕高度时**，执行动画效果。

唉，语文没学好，如果你么得看懂，就直接看代码吧！

```javascript
const [titleStyle, setTitleStyle] = useSprings(features.length, (index) => ({
    opacity: 0,
    fontSize: 0,
  }));

const scollAnimate = () => {
    try {
      for (let i = 0; i < features.length; i++) {
        if (
          testRef.current.childNodes[i].childNodes[1].getBoundingClientRect()	//判断滚动到了哪个标签
            .top > 0 &&
          testRef.current.childNodes[i].childNodes[1].getBoundingClientRect()
            .top < window.innerHeight
        ) {
          currentRef.current = i;										//记录当前滚动的标签的index
          setTitleStyle((index) => ({
            opacity: index === currentRef.current ? 1 : 0,				//当此时的index(springs的index)等于currentRef.current(当前滚动到的标签的index)时执行动画，否则保持不变
            fontSize: index === currentRef.current ? 40 : 0,
          }));
        } else {
          currentRef.current = -1;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
```

### 渲染动画组件

```react
<div ref={testRef}>
  {titleStyle.map((item, index) => {
    return (
      <div key={index}>
        <div
          style={{
            backgroundImage: `url(${features[index].backgroundImage})`,
            backgroundAttachment: "fixed",
            width: "100%",
            height: "50vh",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            opacity: 1,
            zIndex: -1,
          }}
          key={index}
        ></div>
        <div
          style={{
            zIndex: 1,
            width: "100%",
            marginTop: "10vh",
            marginBottom: "10vh",
          }}
        >
          <div style={{ width: "100%" }}>
            <animated.h1 style={{ fontWeight: "bold" }} style={item}>
              {features[index].title}
            </animated.h1>
          </div>
          <div
            style={{
              textAlign: "start",
              fontSize: "18px",
            }}
          >
            {features[index].content}
          </div>
        </div>
      </div>
    );
  })}
</div>;
```

### 补充

**个人在网站主页多次运用到这种动画效果，于是把它封装成了一个函数，在这记录一下**

```javascript
const changeAnimate = (tempRef, beforeStyle, afterStyle, setStyle) => {
    if (
      tempRef.current.getBoundingClientRect().top > 0 &&					//tempRef为控制某个标签元素改变的ref
      tempRef.current.getBoundingClientRect().top < window.innerHeight
    ) {
      setStyle(afterStyle,{config: config.default},{delay: 500});			//setStyle为useSpring的回调函数
    } else {
      setStyle(beforeStyle);
    }
  };
```

