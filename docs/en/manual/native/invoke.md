# Native Function Calls

## 1. Creating a Native Function Object

Use `native.new_function` to create a wrapper for a native function address.

```lua
local func = native.new_function(address, returnType, paramTypes)
```

- **address**: The memory address of the native function (Long).
- **returnType**: The return type string. Supported: `"void"`, `"int"`, `"float"`, `"double"`, `"pointer"`.
- **paramTypes**: A table containing parameter type strings. Supported: `"int"`, `"float"`, `"double"`, `"pointer"`.

**Example:**

```lua
local base = native.resolve_symbol("libexample.so", "some_exported_func")
local func = native.new_function(base, "void", {"int", "int"})
```

---

## 2. Invoking the Function

Once the function object is created, you can call it directly.

```lua
func(arg1, arg2...)
```
- Pass arguments directly. 
- The return value matches the specified `returnType`.

**Example:**

```lua
func(10, 20)
```
