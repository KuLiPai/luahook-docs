# Find and Import Classes

1. Find Class (**`findClass`**)
2. Import Class (**`import`** / **`imports`**)

---

### 1. `findClass` —— Find Class

```lua
local clazz = findClass("FullyQualifiedClassName", Loader)
```

#### Parameter Description:

- `FullyQualifiedClassName`: The fully qualified name of the Java class, e.g., `"android.app.Activity"`
- `Loader` (Optional): Specify the class loader to use, defaults to `lpparam.classLoader`

---

### 2. `imports` —— Import Class (Host or Module)

```lua
imports "android.os.Build"

local device = Build.DEVICE
```

#### Function Description:

- Import a Java class as a **global variable**, enabling direct access to its static fields or methods using the class name
- Search order:

  1. First load the class from the **Host Application**
  2. If not found, then load the class from the **Module itself**

---

### 3. `import` —— Import Module Class (Supports Wildcards)

```lua
import "java.lang.String"
import "java.util.*"
```

#### Function Description:

- Only used to import classes included in the module APK itself
- Supports wildcard `*`, importing all classes in a package at once
