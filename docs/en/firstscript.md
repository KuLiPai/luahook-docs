
# ✨ Writing Your First LuaHook Script

## Step 1: Choose a Target App

First, select a target application you want to Hook.

## Step 2: Enable LuaHook in Lsposed and Check the Target App

1. Open Lsposed and enable the LuaHook module.
2. In the module settings, check the target app you want to Hook:
    <img src="/assets/79f55709b78c719a417bfdd0f85641db-20250601181049-nc00r3v.jpg" alt="Enable Module" width="60%">

---

## Step 3: Add Target App in LuaHook

1. Go back to LuaHook and navigate to the "Apps" page.
2. Click the "+" button in the bottom right corner to expand the menu:
     <img src="/assets/8bd128d71a1e9b8c687b441b1a7411ac-20250601181142-lfqwoq4.jpg" alt="Expand Add App" width="60%">
3. Select "Add App":
    <img src="/assets/04056dd7ef43af075889294de17194d3-20250601181207-bpird32.jpg" alt="Click Add App" width="60%">
4. Find the target app, check it, and click the "✔" in the bottom right corner to save:
    <img src="/assets/88f1fb05e0503e87fa0e54220fbc0f34-20250601181405-cyurx06.jpg" alt="Save Selection" width="60%">
5. Return to the app page, and you will see the app has been successfully added. Click it to enter the script management interface:
    <img src="/assets/8d2d26e0f4695f0e6a4afa9152f0c609-20250601181509-byffa8t.jpg" alt="Click App" width="60%">

---

## Step 4: Create a Script

1. Enter the "Multi-Script Management" page and click the "+" in the bottom right corner to create a new script:
    <img src="/assets/722a7423e3a23b884ebd93cadce6e2cd-20250601181532-493wqrb.jpg" alt="Create Script" width="60%">
2. Give your script a name:
    <img src="/assets/8989e0d3254ccd3cf0365244db64d49b-20250601181543-tl9icag.jpg" alt="Name Script" width="60%">
3. After naming, click confirm to enter the script editing page.

---

## Step 5: Write Script Code

Enter the following example code in the editor, which will pop up a Toast when the target app starts:

```lua
imports "android.widget.Toast"

hook {
    class = "android.app.Activity",
    method = "onCreate",
    params = {"android.os.Bundle"},
    before = function(it) 

    end,
    after = function(it)
        Toast.makeText(it.thisObject, "Hello LuaHook!", Toast.LENGTH_SHORT).show()
    end
}
```

---

## Step 6: Run and Test

1. Click the "Triangle" button at the top to launch the target app:
    <img src="/assets/409b420733cfd9ea7711a5444797144e-20250601181742-05b60bc.jpg" alt="Launch App" width="60%">
2. If you see a Toast message "LuaHook" popup at the bottom of the target app, <button id="firework">🎉 Congratulations, script run successfully!</button>
    <img src="/assets/317864add1197a02411f14626e01bf15-20250601181834-y4pqx0i.jpg" alt="Success Tip" width="60%">

---

## ✅ Summary

You have completed your first LuaHook Hook operation and successfully ran a simple script. Next, you can try:

- Hooking other methods and classes
- Using more Android APIs
- Uploading and sharing your scripts to the [LuaHook Online Script Repository](https://github.com/KuLiPai/LuaHook-Scripts)
