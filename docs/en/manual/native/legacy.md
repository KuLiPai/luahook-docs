# Compatibility Notes

With the iteration of LuaHook versions, the Native interface has undergone several refactorings. This page summarizes the status of old interfaces and the upgrade guide.

## Removed Old Interfaces

The following interfaces have been **removed** or **deprecated** in the latest version. Please use `native.memory` instead:

| Old Interface | Alternative | Description |
| :--- | :--- | :--- |
| `native.read(ptr, size)` | `native.memory.read_byte_array` | Read byte array |
| `native.write(ptr, data)` | `native.memory.write_byte_array` | Write byte array |
| `native.readDword(ptr)` | `native.memory.read_u32` | Read 32-bit integer |
| `native.readFloat(ptr)` | `native.memory.read_f32` | Read Float |
| `native.readByte(ptr)` | `native.memory.read_u8` | Read Byte |

*(Similary for write series)*

## Retained Compatibility Interfaces

To compatible with old scripts, the following top-level interfaces are still retained, but it is recommended to use the standard new interfaces for new scripts:

- **`native.get_module_base`**
    - Recommended: `native.module_base`.
- **`native.readPoint(ptr, offsets)`**
    - Multi-level pointer reading tool.
    - **Logic**: Starting from `ptr`, sequentially read offset and dereference, until the last offset is only added without dereferencing.
    - ```lua
      -- Equivalent to *(base + 0x10) + 0x20
      local val = native.readPoint(base, {0x10, 0x20})
      ```

## Precautions

1. **64-bit Precision**: Lua's `number` (double) cannot precisely represent all 64-bit integers. When handling pointer addresses or 64-bit values, please be sure to use the `LuaPointer` object returned by `read_u64`/`read_s64`.
2. **Hook Stability**: Hooking may cause the target application to crash (e.g., modifying critical registers or accessing illegal memory). Please be sure to test thoroughly when writing Hooks.
