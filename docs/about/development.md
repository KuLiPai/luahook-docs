
# LuaHook 源码导读：项目结构与架构解析

在3.9.6成功重构优化了大部分代码

这里写个文章快速了解luaHook代码结构


主要的文件结构有这些

![image](/image-20251107155238-2k61416.png)

> 这里api指[Xposed-API](https://github.com/LSPosed/LSPosed/wiki/Develop-Xposed-Modules-Using-Modern-Xposed-API)

MainHook 是用于低于api100的hook入口

NewHook 是api100的hook入口


文件夹

activity 活动

adapter 适配器

fragment 界面组件

**library 封装给lua的库**

shizuku Shizuku相关

util 各种工具类