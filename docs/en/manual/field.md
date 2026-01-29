# Field Operations

In the process of Hooking, besides method calls, we often need to **read** or **modify** class fields. This module provides the following four functions for accessing object or class field information:

---

### 1. `getField` —— Get Instance Field

```lua
getField(instance, "fieldName")
```

#### Function Description:

- Get member fields in an object instance (including `public`, `private`, `protected`, and other modifiers)

#### Example:

```lua
local activityTitle = getField(activityInstance, "mTitleTextView")
```

---

### 2. `getStaticField` —— Get Static Field

```lua
getStaticField(class, "fieldName")
```

#### Function Description:

- Suitable for accessing class-level `static` fields

#### Example:

```lua
local sdkInt = getStaticField(Build, "SDK_INT")
```

---

### 3. `setField` —— Modify Instance Field

```lua
setField(instance, "fieldName", newValue)
```

#### Function Description:

- Dynamically set the field value of an object
- Supports modification of private fields

#### Example:

```lua
setField(view, "mPaddingTop", 20)
```

---

### 4. `setStaticField` —— Modify Static Field

```lua
setStaticField(class, "fieldName", newValue)
```

#### Function Description:

- Used to modify the value of static fields

#### Example:

```lua
setStaticField(Builds, "SDK_INT", 99)
```
