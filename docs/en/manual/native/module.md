# Modules and Symbols

Before Hooking, it is usually necessary to get the memory base address of the target SO (Shared Object) or directly find the exported function address.

## Get Module Base Address (`native.module_base`)

Get the start address of a loaded module.

```lua
native.module_base(module_name) -> LuaPointer
```

- **Parameters**: `module_name` (string) —— Full module name, e.g., `libil2cpp.so`.
- **Returns**: Module base address. If the module is not found, usually returns `0` (null).

**Alias Compatibility**: `native.get_module_base(name)` is the same as this function.

**Example:**

```lua
local base = native.module_base("libunity.so")
if base.not_null() then
    log("Unity Base: " .. base.to_hex())
end
```

---

## Resolve Exported Symbol (`native.resolve_symbol`)

Find the symbol address in the SO Export Table.

```lua
native.resolve_symbol(module_name, symbol_name) -> number
```

- **Parameters**:
    - `module_name`: Module name.
    - `symbol_name`: Symbol name (C++ functions might be Mangled Names).
- **Returns**: Absolute address of the symbol (number). Returns 0 if not found.

**Example:**

```lua
local fopen_addr = native.resolve_symbol("libc.so", "fopen")
log("fopen address: " .. string.format("0x%X", fopen_addr))
```

---

## Advanced Search (`getModuleBase`)

This interface is retained for more complex `/proc/self/maps` matching.

```lua
native.getModuleBase(name, filter) -> number
```

- **Feature 1**: Support finding BSS segment.
    - Pass `libfoo.so:bss` to `name` to find the BSS segment address of that SO.
- **Feature 2**: `filter` filtering.
    - Pass permission string (e.g., `r-xp`) to precisely match memory segments.

```lua
-- Get r-xp segment of libfoo.so
local code_base = native.getModuleBase("libfoo.so", "r-xp")
```
