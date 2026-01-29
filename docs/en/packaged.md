# Packaging

## 1. Clone Specific Branch

Clone the `simplify` branch of LuaHook to your local machine:

```bash
git clone -b simplify https://github.com/KuLiPai/LuaHook.git
```

## 2. Open Project and Locate File

Open the project with Android Studio or another IDE.

Wait for dependencies to load.

Find the `app/src/main/java/com/kulipai/luahook/LuaCode.kt` file.

## 3. Write Lua Code

![image](/assets/image-20251021171607-ztug60g.png)

Write your Lua code in the red box shown in the image above, and save it.

## 4. Modify App Information

In `app/build.gradle.kts`, modify the following content:

`applicationId`: Package name

`versionCode`: Version code

`versionName`: Version name

![image](/assets/image-20251021182309-gqowjb1.png)

> Please do not modify `namespace = "com.kulipai.luahook"` as it will cause the hook to fail.

If your Lua code uses the `Host Resource Injection Extension`, to prevent resource ID conflicts, you need to modify the resource ID. (Around lines 54-56 in `app/build.gradle.kts`)

![image](/assets/image-20251021182739-jsoxi1f.png)

> Note
>
> The provided example resource ID values are for reference only. Do not use **0x7f**. The default is **0x64**. To prevent conflicts if multiple Xposed modules exist in the current host, it is recommended to customize your own resource ID.

Modify App Name and Icon

Modify in `app\src\main\AndroidManifest.xml`:

![image](/assets/image-20251021184008-erbqjlt.png)

You can directly change `@string/app_name` to your app name string.

## 5. Compile and Package

Use **Gradle** or the IDE's compilation function to build the program and generate the final APK installation package.

In Android Studio, click here as shown:

![image](/assets/image-20251021172146-wuyer8s.png)

![image](/assets/image-20251021172212-a2t6jfh.png)

Then load or create your signing key.

Finally, select `release` to compile.

![image](/assets/image-20251021172250-ym3gw6p.png)

The generated APK will be in `app\release\app-release.apk`.

(Initial compilation may take a long time, please be patient. If it fails, try recompiling. If you still have problems, contact the author.)
