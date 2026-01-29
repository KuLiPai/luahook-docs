# Task

Used to asynchronously execute a Lua function after a specified time delay.

### Task(function [, delay])

**Parameters:**

- `function` : The Lua function to execute
- `delay`  *(Optional)*  : Delay time (milliseconds), default is `0`

**Returns:**

- `nil`

**Description:** 
Starts a coroutine in the background, waits for `delay` milliseconds, and then calls `function`.

---

### Example

```lua
-- Execute immediately once
Task(function()
    print("Hello from Task!")
end)

-- Execute after 2 seconds
Task(function()
    print("This runs after 2 seconds")
end, 2000)

-- Schedule multiple consecutively
for i = 1, 3 do
    Task(function()
        print("Task #" .. i)
    end, i * 1000) -- Execute after 1s, 2s, 3s
end
```
