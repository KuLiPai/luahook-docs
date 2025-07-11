# 🚀 Quick Start

Welcome to **LuaHook** – a framework for writing Xposed modules using Lua. This tutorial will help you get set up and running in just a few minutes.

---

## 🧰 0. Preparation Tools

Choose the corresponding method based on your device's permissions:

-   **Rooted Devices**:
    -   Install [LSPosed](https://github.com/LSPosed/LSPosed)
    -   Configure a Root Manager (e.g., Magisk)
-   **Non-Rooted Devices**:
    -   Install [LSPatch](https://github.com/LSPosed/LSPatch)
    -   Start and authorize [Shizuku](https://github.com/RikkaApps/Shizuku)

---

## 📥 1. Download LuaHook

Go to the GitHub [latest release page](https://github.com/KuLiPai/LuaHook/releases/latest) to download the LuaHook installation package and install it on your device.

---

## ✅ 2. Activate the Module

-   **Rooted Devices**:
    1.  Grant Root permissions to LuaHook in your Root Manager.
    2.  Open LSPosed and check the target application you want to hook.
-   **Non-Rooted Devices**:
    1.  Start Shizuku and ensure it is running properly.
    2.  Launch LuaHook and grant it Shizuku permissions.
    3.  Use LSPatch to patch the target application, including LuaHook in the module scope.

---

## ✍️ 3. Write and Launch Your Hook Script

1.  Open LuaHook and navigate to the **App page**.
2.  Click the bottom-right "+" button to expand the add interface, then select the application you wish to hook.
3.  Click the application card → click the bottom-right "+" button to create a new script. Give your script a name, enter the editing interface, and input the following example script:

    ```lua
    imports "android.widget.Toast"

    hook("android.app.Activity",
      lpparam.classLoader,
      "onCreate",
      "android.os.Bundle",
      function(it) end,
      function(it)
        Toast.makeText(it.thisObject, "LuaHook Hooked!", 1000).show()
      end
    )
    ```

4.  After saving the script, click the **triangle** (Start) icon at the top of the page to launch the target application.
5.  If you successfully see a Toast notification saying "LuaHook Hooked!", it means <button id="firework">the Hook is effective 🎉!</button>

---

📺 **Video Tutorial**:
Want to learn the detailed process through a video? You can watch this demonstration: [Bilibili Video Tutorial](https://www.bilibili.com/video/BV16njCz1Eyw/?share_source=copy_web&vd_source=002efab470a9b210cf443ba711f9d39a)
