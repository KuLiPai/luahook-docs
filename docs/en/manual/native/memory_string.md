# String Operations

`native.memory` provides a set of tools to handle strings in Native memory, covering C-style strings and length-prefixed strings.

## C-style String (`\0` terminated)

### Read (`read_cstr`)

```lua
native.memory.read_cstr(addr, [max_len]) -> string | nil
native.memory.read_cstr_utf8(addr, [max_len]) -> string | nil
```

- **Difference**: `read_cstr` reads raw bytes, `read_cstr_utf8` attempts UTF-8 decoding.
- `max_len`: Optional, maximum read length (overflow protection), default 512.
- **Returns**: Lua string, truncated at `\0`.

### Write (`write_cstr`)

```lua
native.memory.write_cstr(addr, str) -> boolean
native.memory.write_cstr_utf8(addr, str) -> boolean
```

- Automatically appends `\0` at the end of the string.

**Example:**

```lua
local buf = native.memory.alloc(64)
native.memory.write_cstr_utf8(buf, "Hello, LuaHook")
local txt = native.memory.read_cstr_utf8(buf)
log(txt) -- "Hello, LuaHook"
native.memory.free(buf)
```

---

## Length-Prefixed String (Len-Prefixed)

Handles custom string formats where the first byte is the length.

### Read (`read_lp_utf8`)

```lua
native.memory.read_lp_utf8(addr, [max_len]) -> string | nil
```

- **Format**: `[Length (1 byte)] [Body ...]`
- Reads the first byte `len`, then reads the subsequent `len` bytes and converts to UTF-8.

### Write (`write_lp_utf8`)

```lua
native.memory.write_lp_utf8(addr, str, [max_len]) -> boolean
```

- Writes the length byte, followed by the content.

---

## Auto Detection (`read_auto_utf8`)

```lua
native.memory.read_auto_utf8(addr, [max_len]) -> string | nil
```

**Logic**:
1. Check if the first byte is in the range `[1..0x7F]`.
2. check if the memory content of that length matches UTF-8 printable character characteristics.
3. If it matches, parse as length-prefixed; otherwise, fallback to `read_cstr` mode.
