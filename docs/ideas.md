# 关于 LuaHook 的想法

下面，我们描述了可以在未来的 LuaHook 版本中实现的各种想法。(但愿可以吧)

---

## Native Hook
要在 Lua 中 Hook Native 方法，你需要利用 LSPosed 等 Xposed 框架支持的 Native 库，用 C/C++ 编写 Hook 逻辑。为了让 Lua 能够调用这些功能，核心步骤就是**封装 JNI 方法**。这些 JNI 方法会作为桥梁，将 C/C++ 层的能力传递给 Java 层，再由 Java 层暴露给 Lua 进行调用。

目标: 封装JNI方法

负责人: 暂无

---

## 插件功能
实现对LuaHook的高度自定义，如定制主题，工具栏，部分界面，编辑器高亮等

目标: 写插件管理，在luahook各个地方加载lua脚本，但是要高内聚，低耦合（

负责人: 还是暂无

---

## 项目功能
实现大型项目功能，多文件管理，多hook脚本，多界面，多功能，能够打包成xposed模块，能够快速调试，和androlua相结合（也不一定）

目标: #￥%……&*（）

负责人: 无无无

---

## 多语言
字面意思，实现多语言的支持

目标: 翻译所有可读字符串

负责人: California,Eleven,Sanjio


