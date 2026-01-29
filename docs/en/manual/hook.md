# Hook Usage Documentation

This module provides four forms of Hook interfaces:

  - `hook`: Used to Hook a specified method
  - `hookctor`: Used to Hook a constructor
  - `hookAll`: Used to Hook all methods with the same name (overloaded methods) in a class
  - `replace`: Used to completely replace the implementation of a specified method

All Hook forms support the **new configuration table syntax**, which improves readability and clarifies parameters. The old function parameter list syntax is retained for backward compatibility.

Both `before` and `after` hook functions (as well as `replace`'s replacement function) receive an argument `it` (i.e., `MethodHookParam`), which contains context information about the current Hook.

-----

## 1. `hook` —— Hook Single Method

`hook` is used to intercept a single Java method. It supports pre (`before`) and post (`after`) hooks.

### Recommended New Syntax

The new syntax uses a Lua `table` to organize all Hook parameters, improving readability and flexibility. `before` and `after` hooks are optional; you only need to write what you need.

**Usage 1: Hook method by class name, method name, and parameter types**

```lua
hook {
  class = "com.xx",           -- Required: Fully qualified class name string or Class object
  --classloader = lpparam.classLoader, -- Optional: ClassLoader used to load the class, defaults to lpparam.classLoader if omitted
  method = "f1",              -- Required: Name of the method to Hook
  params = {"int", "String", findClass("com.my.class", lpparam.classLoader)}, -- Optional: A table containing parameter type strings or Class objects
  before = function(it)
    -- before hook: Executed before the original method
    print("Before entering f1 method")
  end,
  after = function(it)
    -- after hook: Executed after the original method
    print("After leaving f1 method, return value:", it.result)
  end,
}
```

**Usage 2: Hook `Method` Object Directly**

If you have obtained a `Method` instance via `DexKit` or other means, you can pass it directly.

```lua
local myMethod = someMethodRetrievalFunction("com.xx", "f1", "String") -- Assume this is a method to get the Method object

hook {
  method = myMethod,          -- Required: Method type variable
  before = function(it)
    print("Before Method object Hook")
  end,
  -- after is optional, omitted here
}
```

-----

### Old Syntax

The old syntax is retained as a compatibility option.

**Usage 1: Hook method by class name, class loader, method name, parameter type list**

```lua
hook("com.xx",
    lpparam.classLoader,
    "f1",
    "int", "String", "com.my.class", -- Variable parameter types
    function(it)
        -- before
    end,
    function(it)
        -- after
    end
)
```

**Usage 2: Hook Method Object Directly**

```lua
hook(method, -- Pass Method object directly
    function(it)
        -- before
    end,
    function(it)
        -- after
    end
)
```

-----

## 2. `hookctor` —— Hook Constructor

`hookctor` is used to intercept class constructors. It does not have a `method` property because the target is always the constructor.

### Recommended New Syntax

```lua
hookctor {
  class = "com.xx",           -- Required: Fully qualified class name string or Class object
  classloader = lpparam.classLoader, -- Optional: ClassLoader used to load the class, defaults to lpparam.classLoader if omitted
  params = {"int", "String"}, -- Optional: A table containing constructor parameter types
  before = function(it)
    print("Before constructor call")
  end,
  after = function(it)
    print("After constructor call")
  end,
}
```

### Old Syntax

```lua
hookctor("com.xx",
    lpparam.classLoader,
    "int", "String", -- Constructor parameter types
    function(it)
        -- before
    end,
    function(it)
        -- after
    end
)
```

-----

## 3. `hookAll` —— Hook All Methods with Same Name

`hookAll` is used to Hook **all methods with the same name (overloaded methods)** in a class. It does not support the `method` property or passing a `Method` object directly because its target is all overloads.

### Recommended New Syntax

```lua
hookAll {
  class = "com.xx",           -- Required: Fully qualified class name string or Class object
  classloader = lpparam.classLoader, -- Optional: ClassLoader used to load the class, defaults to lpparam.classLoader if omitted
  before = function(it)
    print("Before hooking all overloaded methods, current method:", it.method.getName())
  end,
  after = function(it)
    print("After hooking all overloaded methods, current method:", it.method.getName(), "Return value:", it.result)
  end,
}
```

### Old Syntax (Function Parameter List Form)

```lua
hookAll("com.xx",
    lpparam.classLoader,
    function(it)
        -- before
    end,
    function(it)
        -- after
    end
)
```

-----

## 4. `replace` —— Completely Replace Method Implementation

The `replace` method is used to **completely replace** the original implementation of the target method. Once a method is `replace`d, its original function will no longer execute, and your passed replacement function will take over. `replace` does not have `before` and `after` hooks because it is the ultimate replacement itself.

### Recommended New Syntax (Table Configuration Form)

```lua
replace {
  class = "com.xx",           -- Required: Fully qualified class name string or Class object
  classloader = lpparam.classLoader, -- Optional: ClassLoader used to load the class, defaults to lpparam.classLoader if omitted
  method = "f1",              -- Required: Name of the method to replace
  params = {"int", "String"}, -- Optional: A table containing parameter type strings or Class objects
  replace = function(it)
    -- This is the replacement method body, completely replacing the original method
    print("f1 method was completely replaced! Received args:", table.concat(it.args, ", "))
    -- The return value of the replacement function will become the final return value of the replaced method
    return "New return value"
  end,
}
```

**Usage 2: Replace `Method` Object Directly**

```lua
local targetMethod = someMethodRetrievalFunction("com.yy", "calculate")

replace {
  method = targetMethod,      -- Required: Method type variable
  replace = function(it)
    print("calculate method replaced, original this object:", it.thisObject)
    return it.args[0] + it.args[1] -- Assume original method calculates sum of two args
  end,
}
```

### Old Syntax (Function Parameter List Form)

```lua
replace("com.xx",
    lpparam.classLoader,
    "f1",
    "int", "String",
    function(it)
        -- This is the replacement method body
        print("f1 method was replaced! Args:", table.concat(it.args, ", "))
        return 123 -- Return value becomes the final return value of the replaced method
    end
)
```

-----

## `it` Parameter Description (i.e., `MethodHookParam`)

> Can be simply understood as function-related information.

Whether it is the `before`/`after` hooks of `hook`, or the replacement function of `replace`, they all receive an **`it` parameter** (an instance of `MethodHookParam`), which provides context information about the current Hook or replacement operation:

  - `it.method`: The **`java.lang.reflect.Method` or `Constructor` object** of the current Hook/replacement. You can get the method name via `it.method.getName()`, the declaring class via `it.method.getDeclaringClass()`, etc.
  - `it.args`: A Lua `table` containing the **argument array** of the target method.
      - `it.args[0]`: Get the first argument.
      - `#it.args`: Get the number of arguments.
      - `it.args[0] = 1`: **Modify argument value**. This operation is only effective in the `before` hook for the subsequent execution of the original method. Modifying `it.args` in the `replace` function **will not** affect any original method calls (because the original method will not be executed).
  - `it.result`:
      - `it.result`: **Get return value**. Mainly used in the `after` hook to get the execution result of the original method.
      - `it.result = true`: **Modify return value**.
          - Assigning `it.result` in the `before` hook will **directly skip the execution of the original method** and use the value of `it.result` as the final return value of the method.
          - Assigning `it.result` in the `after` hook will **overwrite the result already produced by the original method**, serving as the final return value.
          - **In the `replace` method, directly `return` the value of the replacement function** as the final return value; `it.result` is not used to set the return value in this scenario.
  - `it.thisObject`: The **object instance** to which the current method belongs (i.e., `this` in Java).
      - For non-static methods, you can access the object's fields, call its other methods, etc., via `it.thisObject`.
      - For static methods or constructors (in `after` constructor, `it.thisObject` represents the newly created object instance), `it.thisObject` may be `nil` or represent the class itself.

-----
