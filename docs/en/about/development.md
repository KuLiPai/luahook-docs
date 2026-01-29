# LuaHook Source Code Guide: Project Structure and Architecture Analysis

In version 3.9.6, most of the code was successfully refactored and optimized.

Here is an article to quickly understand the LuaHook code structure.

The main file structures are as follows:

![image](/image-20251107155238-2k61416.png)

> Here api refers to [Xposed-API](https://github.com/LSPosed/LSPosed/wiki/Develop-Xposed-Modules-Using-Modern-Xposed-API)

MainHook is the hook entry for API lower than 100

NewHook is the hook entry for API 100


Folders:

activity: Activities

adapter: Adapters

fragment: Interface components

**library: Libraries encapsulated for Lua**

shizuku: Shizuku related

util: Various utility classes
