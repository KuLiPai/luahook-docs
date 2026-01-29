# Memory IO

`native.memory` provides a comprehensive set of memory read/write interfaces, supporting integers, floating-point numbers, and raw byte arrays.

All `addr` parameters in the interfaces support:
- `LuaPointer` object
- `number` (Address value)
- `string` (Hexadecimal string)

---

## Read/Write Integers

### Basic Types Table

| Bit Width | Type | Read Interface | Write Interface | Range/Note |
| :--- | :--- | :--- | :--- | :--- |
| **8-bit** | Unsigned | `read_u8` | `write_u8` | 0 ~ 255 |
| | Signed | `read_s8` | `write_s8` | -128 ~ 127 |
| **16-bit** | Unsigned | `read_u16` | `write_u16` | 0 ~ 65535 |
| | Signed | `read_s16` | `write_s16` | -32768 ~ 32767 |
| **32-bit** | Unsigned | `read_u32` | `write_u32` | Lua number (UInt32) |
| | Signed | `read_s32` | `write_s32` | Lua number (Int32) |
| **64-bit** | Unsigned | `read_u64` | `write_u64` | **Returns LuaPointer** to preserve precision |
| | Signed | `read_s64` | `write_s64` | **Returns LuaPointer** to preserve precision |
| **Pointer** | Pointer | `read_ptr` | `write_ptr` | Auto-adapts to 32/64 bit architecture |

### Interface Definition

**Read:**
```lua
native.memory.read_u32(addr, [offset]) -> number
```
- `offset`: Optional, offset from `addr`, default is 0.

**Write:**
```lua
native.memory.write_u32(addr, value, [offset]) -> boolean
```
- `value`: Numerical value to write.
- **Returns**: `true` indicates write success.

**Example:**

```lua
local buf = native.memory.alloc(16)

-- Write
native.memory.write_u32(buf, 0x1234, 0)
native.memory.write_s64(buf, 0x1122334455667788, 4)

-- Read
local val = native.memory.read_u32(buf, 0) -- 0x1234
local val64 = native.memory.read_s64(buf, 4) -- Returns LuaPointer

native.memory.free(buf)
```

---

## Read/Write Floating Point

| Type | Read Interface | Write Interface |
| :--- | :--- | :--- |
| Float (32-bit) | `read_f32` | `write_f32` |
| Double (64-bit) | `read_f64` | `write_f64` |

**Example:**

```lua
native.memory.write_f32(addr, 3.14, 0)
local pi = native.memory.read_f32(addr, 0)
```

---

## Read/Write Byte Array

Used for batch reading or writing raw binary data.

### Read Array (`read_byte_array`)

```lua
native.memory.read_byte_array(addr, size, [offset]) -> table | nil
```

- `size`: Number of bytes to read.
- **Returns**: Lua table containing `[1..size]` integers between `0-255`.

### Write Array (`write_byte_array`)

```lua
native.memory.write_byte_array(addr, table, [offset]) -> boolean
```

- `table`: Lua table containing byte data.

**Example:**

```lua
-- Write HEX: 41 42 43
native.memory.write_byte_array(addr, {0x41, 0x42, 0x43})

-- Read
local bytes = native.memory.read_byte_array(addr, 3)
-- bytes[1] == 65
```
