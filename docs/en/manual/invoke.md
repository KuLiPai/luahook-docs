# Constructor & Method Invocation

### 1. Class Construction

```lua
local a = clazz()
local b = claxx(1, "aaa")
```

- Instantiate directly via `Class()`
- Constructor arguments can be passed directly

---

### 2. Method Invocation

#### Invoke Static Method

```lua
clazz.func()
```

- invoke static function using `Class.Method()`

---

#### Invoke Non-Static Method

```lua
clazz().func()
```

- Invoke non-static function using `Instance.Method()`

---

#### Invoke Private Method

```lua
invoke(ClassOrInstance, "MethodName", Args...)
```

- Use `invoke` to call `private methods` or methods that cannot be accessed directly
- Supports both static and instance methods, parameters are appended directly
