---
date created: 2021-11-27 21:37
date updated: 2021-11-27 21:47
sidebar_position: 1
---

# React Router V6

## Before Start

今天是 2021 年 11 月 27 日,一个神奇的日子.本来今天为了在 React Native 中使用 Echarts,需要额外用 React 写一个网页部署到服务器,又考虑到 App 无法给网页传参,只能采用路由传参的方式.于是我特地去看了 React Router 的官方文档,安装完包之后,~~机智的~~我发现了一丝丝不对劲,我`Switch`组件怎么没了 QAQ,后来又使用万能的 Google 找到了 React Router V6 版本的官方文档,这不看不知道,一看吓一跳,这改动也太大了.于是我决定重新学习,启动了很久没有启动过的 Typora.更新完之后我惊了,Typora 收费了.......于是我又换了现在用的 Obsidian 来记笔记,后续会另外写一篇文章来介绍一下这款时髦的 markdown 编辑器.

## Getting Start

### Routes & Switch

```jsx
import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

export default function Config() {
  return (
    <Router>
      <Routes></Routes>
    </Router>
  );
}
```

V6x 的 React Router 去除了`Switch`组件引入了更灵活的`Routes`组件
对比`Switch`和`Route`:

1. All `<Route>`s and `<Link>`s inside a `<Routes>` are relative. This leads to leaner and more predictable code in `<Route path>` and `<Link to>`
   `<Routes>` 中的所有 `<Route>` 和 `<Link>` 都是相对的。这导致 `<Route path>` 和 `<Link to>` 中的代码更精简、更可预测
2. Routes are chosen based on the best match instead of being traversed in order. This avoids bugs due to unreachable routes because they were defined later in your `<Switch>`
   Routes 选择使用最佳匹配而不是顺序遍历,这避免了一些无法到达的路由而导致的 bug,因为他们在`Switch`之后定义.
3. Routes may be nested in one place instead of being spread out in different components. In small to medium sized apps, this lets you easily see all your routes at once. In large apps, you can still nest routes in bundles that you load dynamically via `React.lazy`
   Routes 可以嵌套在一个组件中，而不是分散在不同的组件中。在中小型应用程序中，这可以让你轻松地一次看到所有的路线。在大型应用中，你仍然可以在 bundle 中嵌套路由，通过`React.lazy`动态加载

### Relative Routes and Links

在 v5 中，必须非常明确地说明希望如何嵌套路由和链接。在这两种情况下，如果想要嵌套路由和链接，必须从父路由的匹配中构建`<Route path>`和`<Link to>` `url`和`path`匹配。另外，如果你想嵌套路由，你必须把它们放到子路由的组件中。
**这是一个 V5 的示例**

```jsx
// This is a React Router v5 app
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function Users() {
  // In v5, nested routes are rendered by the child component, so
  // you have <Switch> elements all over your app for nested UI.
  // You build nested routes and links using match.url and match.path.
  let match = useRouteMatch();

  return (
    <div>
      <nav>
        <Link to={`${match.url}/me`}>My Profile</Link>
      </nav>

      <Switch>
        <Route path={`${match.path}/me`}>
          <OwnUserProfile />
        </Route>
        <Route path={`${match.path}/:id`}>
          <UserProfile />
        </Route>
      </Switch>
    </div>
  );
}
```

**这是一个 V6 的示例**

```jsx
// This is a React Router v6 app
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

function Users() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path=":id" element={<UserProfile />} />
        <Route path="me" element={<OwnUserProfile />} />
      </Routes>
    </div>
  );
}
```

在这个例子中关于 v6 的一些重要的事情要注意:

- `<Route path>` and `<Link to>` are relative. This means that they automatically build on the parent route's path and URL so you don't have to manually interpolate `match.url` or `match.path`

- `<Route exact>` is gone. Instead, routes with descendant routes (defined in other components) use a trailing `*` in their path to indicate they match deeply

- You may put your routes in whatever order you wish and the router will automatically detect the best route for the current URL. This prevents bugs due to manually putting routes in the wrong order in a `<Switch>`

- `<Route path>`和 `<Link to>`的链接是相对的。这意味着它们会在父路由的路径和 URL 上自动构建，所以你不需要手动插入匹配。url 或 match.path

- `<Route exact>`已消失。相反，带有后代路由(在其他组件中定义)的路由在其路径中使用尾随\*来表示它们深度匹配

- 你可以把你的路由按照你希望的顺序，router 会自动检测到当前 URL 的最佳路由。这可以防止由于在 `<Switch>`中手动将路由按错误顺序放置而产生的错误

### Advantages Of Route Element

在关于升级到 v5.1 的部分中，使用常规元素而不是组件（或元素类型）进行渲染的优势。

```jsx
// Ah, nice and simple API. And it's just like the <Suspense> API!
// Nothing more to learn here.
<Route path=":userId" element={<Profile />} />

// But wait, how do I pass custom props to the <Profile>
// element? Oh ya, it's just an element. Easy.
<Route path=":userId" element={<Profile animate={true} />} />

// Ok, but how do I access the router's data, like the URL params
// or the current location?
function Profile({ animate }) {
  let params = useParams();
  let location = useLocation();
}

// But what about components deep in the tree?
function DeepComponent() {
  // oh right, same as anywhere else
  let navigate = useNavigate();
}

// Aaaaaaaaand we're done here.
```

在 v6 中使用元素 prop 的另一个重要原因是`<Route children>`是为嵌套路由保留的。这是 v3 和`@reach/router`中人们最喜欢的功能之一，我们将在 v6 中引入它。将前面示例中的代码更进一步，**我们可以将所有`<Route>`元素提升到单个路由配置中:**

```jsx
// This is a React Router v6 app
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />}>
          <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Users() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Outlet />
    </div>
  );
}
```

> WC!牛逼!!!!!!!

This step is optional of course, but it's really nice for small to medium sized apps that don't have thousands of routes.
请注意`<Route>`元素如何自然地嵌套在`<Routes>`元素中。嵌套路由通过添加父路由的路径来构建它们的路径。这次我们不需要在`<Route path="users">`上添加尾随\*，因为当路由定义在一个位置时，路由器就能够看到所有嵌套的路由。

只有在该路由的子代树中存在另一个`<Routes>`时，才需要添加末尾`*`。在这种情况下，后代`<Routes>`将匹配路径名的剩余部分(参见前面的示例了解实际情况)。

当使用嵌套配置时，带有子路由的路由呈现在`<Outlet>`，当我们需要在父组件中限制子路由时,我们只需要在合适的地方加速`<Outlet />`。这使得用嵌套 UI 渲染布局变得容易。

### Note on `<Route Path>` Patterns

React 路由器 v6 使用简化的路径格式。`<Route Path>`在 v6 中只支持两种占位符:dynamic:id 样式的参数和*通配符。*通配符只能在路径的末尾使用，不能在路径的中间。

以下所有路径都是 v6 中的有效路径:

```
/groups
/groups/admin
/users/:id
/users/:id/messages
/files/*
/files/:id/*
```

The following RegExp-style route paths are **not valid** in v6:

```
/users/:id?
/tweets/:id(\d+)
/files/*/cat.jpg
/files-*
```

### Note on Link to Values

在 v6 中，无论当前的 URL 是什么，`<Link to="me">`总是呈现相同的`<a href />`。
例如，在`<Route path="users">`中呈现的`<Link to="me">`将始终呈现到`/users/me`的链接，而不管当前 URL 是否具有末尾斜杠。
当您想链接回父路由时，请在 `<Link to>` 值中使用 `..` ，类似于在 `<a href> `中所做的。

```jsx
function App() {
  return (
    <Routes>
      <Route path="users" element={<Users />}>
        <Route path=":id" element={<UserProfile />} />
      </Route>
    </Routes>
  );
}

function Users() {
  return (
    <div>
      <h2>
        {/* This links to /users - the current route */}
        <Link to=".">Users</Link>
      </h2>

      <ul>
        {users.map((user) => (
          <li>
            {/* This links to /users/:id - the child route */}
            <Link to={user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserProfile() {
  return (
    <div>
      <h2>
        {/* This links to /users - the parent route */}
        <Link to="..">All Users</Link>
      </h2>

      <h2>
        {/* This links to /users/:id - the current route */}
        <Link to=".">User Profile</Link>
      </h2>

      <h2>
        {/* This links to /users/mj - a "sibling" route */}
        <Link to="../mj">MJ</Link>
      </h2>
    </div>
  );
}
```

将当前 URL 看作文件系统上的目录路径，并像 cd 命令行实用程序那样`<Link to>`，可能会有所帮助。

### Use `useRoutes` Instead of `react-router-config`

版本 5 的 react-router-config 包中的所有功能都已转移到版本 6 的核心中。如果您喜欢/需要将路由定义为 JavaScript 对象而不是使用 React 元素，那么您会喜欢这个方法的。

```jsx
function App() {
  let element = useRoutes([
    // These are the same as the props you provide to <Route>
    { path: "/", element: <Home /> },
    { path: "dashboard", element: <Dashboard /> },
    {
      path: "invoices",
      element: <Invoices />,
      // Nested routes use a children property, which is also
      // the same as <Route>
      children: [
        { path: ":id", element: <Invoice /> },
        { path: "sent", element: <SentInvoices /> },
      ],
    },
    // Not found routes work as you'd expect
    { path: "*", element: <NotFound /> },
  ]);

  // The returned element will render the entire element
  // hierarchy with all the appropriate context it needs
  return element;
}
```

以这种方式定义的路由遵循与`<Routes>`相同的语义。事实上，`<Routes>`实际上只是一个`useRoutes`的包装器。

我们鼓励您尝试使用`<Routes>`和`useRoutes`，并自己决定使用哪一个。老实说，我们都喜欢并使用它们。

如果您已经编写了一些关于服务器端数据获取和呈现的逻辑，那么我们也有一个低级的`matchRoutes`函数，类似于我们在`response -router-config`中使用的函数。

### Use `useNavigate` Instead of `useHistory`

React Router v6 引入了一个新的导航 API，它是`<Link>`的同义词，并提供了与悬疑应用程序更好的兼容性。根据您的风格和需求，我们包含了这个 API 的命令式和声明式版本。

> 好像 React Navigation 的`useNavigation`啊

```jsx
// This is a React Router v5 app
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();
  function handleClick() {
    history.push("/home");
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}
```

在 v6 中，应重写此应用程序以使用导航 API。大多数情况下，这意味着将 `useHistory` 更改为 `useNavigate` 并更改 history.push 或 history.replace 调用站点

```jsx
// This is a React Router v6 app
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}
```

如果你需要替换当前位置，而不是将一个新位置推入历史堆栈，使用`navigate(to, { replace: true })`。如果需要状态，使用`navigate(to, { state })`。您可以将导航的第一个参数视为`<Link to>`，将其他参数视为 replace 和 state props。
如果您更喜欢使用声明性 API 进行导航(比如 v5 的 Redirect 组件)，v6 提供了 navigation 组件。使用它:

```jsx
import { Navigate } from "react-router-dom";

function App() {
  return <Navigate to="/home" replace state={state} />;
}
```

If you're currently using `go`, `goBack` or `goForward` from `useHistory` to navigate backwards and forwards, you should also replace these with `navigate` with a numerical argument indicating where to move the pointer in the history stack. For example, here is some code using v5's `useHistory` hook:

```jsx
// This is a React Router v5 app
import { useHistory } from "react-router-dom";

function App() {
  const { go, goBack, goForward } = useHistory();

  return (
    <>
      <button onClick={() => go(-2)}>Go 2 pages back</button>
      <button onClick={goBack}>Go back</button>
      <button onClick={goForward}>Go forward</button>
      <button onClick={() => go(2)}>Go 2 pages forward</button>
    </>
  );
}
```

Here is the equivalent app with v6:

```jsx
// This is a React Router v6 app
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-2)}>Go 2 pages back</button>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate(1)}>Go forward</button>
      <button onClick={() => navigate(2)}>Go 2 pages forward</button>
    </>
  );
}
```

### Replace `useRouteMatch` with `useMatch`

`useMatch` is very similar to v5's `useRouteMatch`, with a few key differences:

1. 使用 [新的路径匹配算法](https://reactrouter.com/docs/en/v6/upgrading/v5#note-on-route-path-patterns)
2. 现在需要模式参数
3. When passing a pattern as an object, some of the options have been renamed to better align with other APIs in v6
   - `useRouteMatch({ strict })` is now `useMatch({ end })`
   - `useRouteMatch({ sensitive })` is now `useMatch({ caseSensitive })`
4. 它返回一个具有不同形状的匹配对象

## END

以上是根据 V6 版本文档中和 V5 对比的不同点,其中几个我自己不常用的没有整理进来,可以自行去[这个链接查看](https://reactrouter.com/docs/en/v6/upgrading/v5#upgrading-from-v5)
