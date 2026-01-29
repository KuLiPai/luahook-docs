# lpparam (`LoadPackageParam`) Introduction

`lpparam` is a parameter object in Xposed modules used to represent the context of the currently Hooked host application. The full type is `XC_LoadPackage.LoadPackageParam`.

It can be understood as: **A container for runtime information of the currently Hooked App**.

It is usually used as a parameter in Hook callback functions to get information about the host package and load related classes.

---

### Common Fields Description

| Field Name | Type | Meaning Description |
| :--- | :--- | :--- |
| `appInfo` | `ApplicationInfo` | Host App installation info object (can get path, signature, etc.) |
| `classLoader` | `ClassLoader` | Default class loader of the current host (**Core entry for Hooking classes**) |
| `isFirstApplication` | `boolean` | Whether it is the first application loaded. Before loading the real app, some phones (Xiaomi) will load additional application package management programs, etc. Use this property to ensure the target app is loaded. |
| `packageName` | `String` | Package name of the host application |
| `processName` | `String` | Current process name (can be used to distinguish main/sub processes) |

---

### Common Usage Summary

```lua
-- Get class loader, used for findClass or hook class
local loader = lpparam.classLoader

-- Get host package name, used to determine target App
local pkg = lpparam.packageName

-- Get installation package path, suitable for reading host resources or path verification
local apkPath = lpparam.appInfo.sourceDir
```
