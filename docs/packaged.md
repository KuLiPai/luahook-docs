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


## 4.修过应用信息

在`app/build.gradle.kts`里修改如下内容

`applicationId`包名

`versionCode`版本号

`versionName`版本名

![image](/assets/image-20251021182309-gqowjb1.png)

> 请不要修改`namespace = "com.kulipai.luahook"`会导致hook失效

如果你的lua代码使用`宿主资源注入扩展`，为防止资源 ID 互相冲突，你需要修改资源 ID。（`app/build.gradle.kts`第54-56行左右）

![image](/assets/image-20251021182739-jsoxi1f.png)

> 注意
>
> 提供的示例资源 ID 值仅供参考，不可使用 **0x7f**，默认为 **0x64**，为了防止当前宿主存在多个 Xposed 模块，建议自定义你自己的资源 ID。

修改app名称和图标

在`app\src\main\AndroidManifest.xml`里修改

![image](/assets/image-20251021184008-erbqjlt.png)

可以直接将`@string/app_name`改成app名字符串

## 5.编译和打包

使用 **Gradle** 或 IDE 的编译功能来构建程序，生成最终的 APK 安装包

Android Studio点这里如图

![image](/assets/image-20251021172146-wuyer8s.png)

![image](/assets/image-20251021172212-a2t6jfh.png)

然后加载或新建你的签名文件

最后选release进行编译

![image](/assets/image-20251021172250-ym3gw6p.png)

最终生成的apk在app\release\app-release.apk

（初次编译时间可能较长，请耐心等待，如果失败尝试重新编译，还有问题可以联系作者）