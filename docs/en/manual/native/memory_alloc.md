# Memory Management

`native.memory` provides capabilities for manual heap memory management. Please be mindful of memory leaks; manually allocated memory must be manually freed.

## Allocate Memory (`alloc`)

Allocates a memory block of the specified size.

```lua
native.memory.alloc(size) -> LuaPointer
```

- **Parameters**: `size` (number) —— Number of bytes.
- **Returns**: `LuaPointer` object. If `size <= 0`, returns `nil` or a null pointer object.

**Example:**

```lua
local ptr = native.memory.alloc(1024) -- Allocate 1KB
if ptr.is_null() then
    log("Memory allocation failed")
end
```

## Allocate String Memory (`alloc_utf8_string`)

Allocates a block of memory and writes the Lua string into it encoded as UTF-8, automatically appending `\0` at the end.

```lua
native.memory.alloc_utf8_string(str) -> LuaPointer
```

- **Parameters**: `str` (string) —— Content.
- **Returns**: `LuaPointer` pointing to the start address of the string.

**Example:**

```lua
local str_ptr = native.memory.alloc_utf8_string("Hello World")
-- Memory content: 48 65 6C 6C 6F 20 57 6F 72 6C 64 00
```

## Free Memory (`free`)

Frees memory allocated by the `alloc` family of functions.

```lua
native.memory.free(ptr)
```

- **Parameters**: `ptr` (LuaPointer | number) —— The start address of the memory to free.

**Warning**:
1. Only free memory allocated by yourself.
2. Do not double free the same memory block.
3. Do not free unallocated wild pointers.

**Example:**

```lua
local buf = native.memory.alloc(16)
-- Use buf ...
native.memory.free(buf)
```
