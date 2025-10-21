# 打包

## 1.克隆指定分支

克隆一个LuaHook的simplify分支到本地

```bash
git clone -b simplify https://github.com/KuLiPai/LuaHook.git
```

## 2.打开项目并定位文件

用Android Studio或其他IDE打开项目

等待依赖加载完毕

找到`app/src/main/java/com/kulipai/luahook/LuaCode.kt`文件

## 3.编写 Lua 代码

![image](/assets/image-20251021171607-ztug60g.png)

在上图红色方块中写入lua代码，并保存

## 4.编译和打包

使用 **Gradle** 或 IDE 的编译功能来构建程序，生成最终的 APK 安装包

Android Studio点这里如图

![image](/assets/image-20251021172146-wuyer8s.png)

![image](/assets/image-20251021172212-a2t6jfh.png)

然后加载或新建你的签名文件

最后选release进行编译

![image](/assets/image-20251021172250-ym3gw6p.png)

最终生成的apk在app\release\app-release.apk

（初次编译时间可能较长，请耐心等待，如果失败尝试重新编译，还有问题可以联系作者）