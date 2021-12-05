---
date created: 2021-12-05 11:16
date updated: 2021-12-05 11:36
---

# 为WSL2设置代理

## 序言

至今一直有个疑惑,明明我的Windows端已经开启了代理,能够愉快的~~翻墙~~上网,为什么WSL2每次push都会有该死的网络问题?查阅了几篇博客,WTF,WSL 2 不能共享 Windows 的代理策略,那就只能尝试类似全局策略将代理共享给局域网下的WSL2

## 配置

配置我这里以`Clash.Net`为例
首先开启`允许局域网`选项,在这个选项上方有一个`mixed-port`(中文是`混合端口`),我们记下这个端口号,后面会用到
[![oBatZF.md.png](https://s4.ax1x.com/2021/12/05/oBatZF.md.png)](https://imgtu.com/i/oBatZF)

打开WSL2
使用你习惯的文本编辑器,打开默认终端文件,这里以`vscode`为例  

**zsh**

```terminal
code ~/.zshrc
```

**bash**

```terminal
code ~/.bashrc
```

增加如下代码段

```bash
export hostip=$(cat /etc/resolv.conf |grep -oP '(?<=nameserver\ ).*')

# 11223是我的mixed-port,将他改成你的mixed-port
# 如何查看mixed-port,请看前文
export all_proxy="socks5://${hostip}:11223"

# 这里也需要修改
alias setss='export all_proxy="socks5://${hostip}:11223";'

alias unsetss='unset all_proxy'
```

> 这段配置默认开启代理,终端输入unsetss关闭代理,setss开启代理

更新配置  

** zsh**

```terminal
source ~/.zshrc
```
**bash**
```terminal
source ~/.bashrc
```

## 验证

使用 `curl` 即可验证是否代理成功，如下有返回值说明成功

```terminal
curl google.com

<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8"><TITLE>301 Moved</TITLE></HEAD><BODY><H1>301 Moved</H1>The document has moved<A HREF="http://www.google.com/">here</A>.</BODY></HTML>
```
