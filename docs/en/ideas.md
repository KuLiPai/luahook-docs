# Ideas for LuaHook

Below, we describe various ideas that could be implemented in future versions of LuaHook. (Hopefully)

---

## Native Hook
To Hook Native methods in Lua, you need to utilize the Native libraries supported by Xposed frameworks like LSPosed, and write Hook logic in C/C++. To enable Lua to call these functions, the core step is to **encapsulate JNI methods**. These JNI methods act as a bridge, passing capabilities from the C/C++ layer to the Java layer, which then exposes them to Lua for invocation.

Goal: Encapsulate JNI methods

Person in Charge: None yet

---

## Plugin Functionality
Implement high customization for LuaHook, such as custom themes, toolbars, parts of the interface, editor highlighting, etc.

Goal: Write plugin management, load Lua scripts in various places of LuaHook, but keep it high cohesion and low coupling (

Person in Charge: Still none yet

---

## Project Functionality
Implement large-scale project features, multi-file management, multiple hook scripts, multiple interfaces, multiple functions, ability to package as Xposed module, rapid debugging, combined with AndroLua (not necessarily)

Goal: #$%……&*()

Person in Charge: None None None

---

## Multi-language
Literally, implement support for multiple languages.

Goal: Translate all readable strings

Person in Charge: California, Eleven, Sanjio
