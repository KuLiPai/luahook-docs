# Hook Interface

`native.hook` is the core function of NativeLayer, supporting Inline Hook on functions at any memory address.

## Interface Definition

```lua
native.hook(target_addr, config) -> boolean
```

- **target_addr**: Absolute address of the target function. Can be calculated via base address + offset, or obtained via symbol resolution.
- **config**: Hook configuration table.

### Config Structure

```lua
{
    ret = "void",       -- [Optional] Return type
    argc = 0,           -- [Optional] Argument count (affects stack argument reading)
    onEnter = function(ctx) ... end, -- [Optional] Enter callback
    onLeave = function(retval) ... end -- [Optional] Leave callback
}
```

- **ret types supported**: `"int"`, `"ptr"`, `"pointer"`, `"float"`, `"double"`, `"void"`.

---

## onEnter Callback

Called before the function executes.

```lua
onEnter = function(ctx)
    -- ctx is the context object
end
```

### Context Object (`ctx`)

| Property | Description |
| :--- | :--- |
| `ctx[i]` | Get the `i`-th General Purpose Register (GPR) argument. **Note: This is register index, not argument index**. On ARM64 `ctx[0]`~`ctx[7]` correspond to arguments 1~8. |
| `ctx.raw` | Access raw register array. |
| `ctx.fpr` | Floating Point Register array. |
| `ctx.stack` | Stack argument array. |

**Modify Argument Example:**

```lua
-- Modify the first integer argument (ARM64 x0)
ctx[0] = 100 

-- Modify the second argument pointer offset
ctx[1] = ctx[1].add(0x20)
```

---

## onLeave Callback

Called after the function executes.

```lua
onLeave = function(retval)
    -- retval: Original return value
    -- return: (Optional) New return value
end
```

**Modify Return Value Example:**

```lua
onLeave = function(orig_ret)
    log("Original return: " .. orig_ret)
    return 1 -- Force return 1
end
```

---

## Full Example

Suppose we want to Hook the function `int add(int a, int b)` at offset `0x1234` in `libgame.so`.

```lua
local base = native.module_base("libgame.so")
if base.is_null() then return end

native.hook(base.add(0x1234), {
    ret = "int",
    onEnter = function(ctx)
        local a = ctx[0].to_int() -- ARM64 1st arg in x0
        local b = ctx[1].to_int() -- ARM64 2nd arg in x1
        log("add called with: " .. a .. ", " .. b)
        
        -- Force change b to 999
        ctx[1] = 999
    end,
    onLeave = function(ret)
        log("result: " .. ret)
        return ret * 2 -- Double the result
    end
})
```
