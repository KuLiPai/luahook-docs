# Introduction

## 1. What is LuaHook

[LuaHook](https://github.com/kulipai/luahook) is an open-source module currently under active development. It aims to allow developers to efficiently write powerful Xposed scripts using the lightweight and flexible Lua language.

Compared to traditional Frida solutions, LuaHook possesses both **persistent execution** and **dynamic script loading** advantages, avoiding Frida's shortcomings in persistence and the learning curve of JavaScript.

Compared to Java-based Xposed modules, LuaHook retains the deep system integration persistence features while offering the ability to modify scripts in real-time without recompiling the APK.

Combined with Lua's simple and easy-to-learn syntax, LuaHook provides developers with an **efficient, flexible, and easy-to-use** solution. It significantly lowers the threshold for Xposed development, satisfying both real-time debugging needs and long-term deployment scenarios.

---

## 2. Language Requirements

To use LuaHook, you only need to master basic Lua syntax. If you know Java or Kotlin, it will be easier to get started, but it is not required.

Even if you have no programming background, don't worry: Lua is a very simple scripting language with extremely lightweight syntax. You can learn the basics in just a few minutes.

Here are a few simple examples:

```lua
-- This is a comment
print("Hello, LuaHook!")
-- Output: Hello, LuaHook!

a = 2 + 3
print(a)
-- Output: 5

if a > 4 then
  print("a is greater than 4")
end
```

You can quickly get started with the following tutorials:

- [Lua Tutorial](https://www.tutorialspoint.com/lua/index.htm)
- [Luaj++ Quick Guide (Recommended)](./luaj++)

---

## 3. Why Choose LuaHook

- ✅ **No Compilation/Packaging Required**: Script modifications take effect immediately, making it suitable for debugging and rapid iteration.
- ✅ **Persistent Execution Support**: More suitable for long-term deployment compared to Frida.
- ✅ **Simple Syntax**: Write Hook scripts without a Java background.
- ✅ **Root & Non-Root Support**: Applicable to more user scenarios.
- ✅ **Dynamic Script Loading**: Combined with Lua's hot loading feature for a smooth experience.

---

## Contribution

If you are a student or enthusiastic developer and wish to contribute, we have an [Idea List](./ideas). Contributing would be cool! :-)
