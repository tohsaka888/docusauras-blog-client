# WSL2&WSA折腾记录

## 基于WSL2调用WSA实现React Native安卓开发
### 环境需求
1. Windows Subsystem for Linux 2 (WSL2)
1. Windows Subsystem for Android (WSA)
1. WSL2内置nodejs
1. React Native安卓开发环境(无需安装Android Studio)

### WSA配置
1. WSA设置界面
![image-20211027203710019](https://z3.ax1x.com/2021/10/27/5bApVS.png)
子系统自选选择连续
开启开发者选项
复制下面的IP地址

2. WSL设置
在`terminal`中输入以下命令
```terminal
> adb connect <- 刚刚复制的IP地址 ->
```
若出现
```terminal
> adb connect <- 刚刚复制的IP地址 ->
already connected to 172.30.36.194:5555
```
恭喜你,你已经成功连接上WSA了
在`terminal`输入命令
```terminal
adb devices
```
可以看到
```terminal
List of devices attached
<- IP地址 ->:5555      device
```

### 运行React Native调试
进入React Native项目目录,输入命令
```terminal
yarn start
```
新建终端,输入命令
```terminal
yarn android
```
执行完毕后,WSA会自动安装App
之后就可以享受丝滑的开发过程了~