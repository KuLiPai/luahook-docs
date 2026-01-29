# Pointer Operations (LuaPointer)

`LuaPointer` is the core object in NativeHook, used to encapsulate and manipulate memory addresses. It is safer than simple Lua numbers, supports chained calls, and maintains 64-bit precision.

## Create Pointer

### Using `native.ptr`

```lua
local p = native.ptr(0x12345678)
local p2 = native.ptr("0x1A2B3C")
```

### Using `native.memory.alloc`

```lua
local p3 = native.memory.alloc(32)
```

---

## Basic Operations

### Null Check

```lua
p.is_null()  -- Check if Null (0)
p.not_null() -- Check if not Null
```

### Conversion

```lua
p.to_hex()  -- Convert to uppercase HEX string (without 0x prefix)
p.to_int()  -- Convert to number (may lose 64-bit precision)
p.to_long() -- Return self (compatibility interface)
```

---

## Pointer Arithmetic

All operations return a new `LuaPointer` object, the original object remains unchanged.

### Offset Calculation

```lua
local p2 = p.add(0x10) -- Addition
local p3 = p.sub(0x04) -- Subtraction
```

### Bitwise Operations

```lua
p.and(mask) -- Bitwise AND
p.or(mask)  -- Bitwise OR
p.xor(mask) -- Bitwise XOR
p.shl(bits) -- Left Shift
p.shr(bits) -- Right Shift
```

### Comparison

```lua
if p.equals(other_ptr) then
    log("Same address")
end
```

### Assignment (Set)

```lua
-- Create a pointer object pointing to a new address
local new_ptr = p.set(0x5566)
```

---

## Chained Read/Write

`LuaPointer` objects themselves carry all `native.memory.*` read/write methods.
**When calling, the default address is the pointer itself, and the `offset` parameter is still available.**

```lua
local p = native.memory.alloc(64)

-- Equivalent to native.memory.write_u32(p, 100, 0)
p.write_u32(100) 

-- Support offset: Equivalent to native.memory.write_u32(p, 200, 4)
p.write_u32(200, 4) 

-- Chained dereference
-- Read pointer at p, then offset 0x10, then read a u32
local val = p.read_ptr().add(0x10).read_u32()
```

### Common Shortcuts

| Method | Description |
| :--- | :--- |
| `p.deref([offset])` | Dereference. Read pointer value at `p`. Equivalent to `p.read_ptr(offset)` |
| `p.hexdump([size])` | Print memory Hex Dump for debugging. Default size=256 |
