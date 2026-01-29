# Example: Injecting SO File

This example demonstrates how to inject a native library (SO file) into the target application.

```lua
-- Hook Runtime.loadLibrary
hook {
    class = "java.lang.Runtime",
    method = "loadLibrary",
    params = {"java.lang.String"},
    before = function(it)
        local libName = it.args[0]
        -- Logic to intercept or monitor library loading
        -- For example, print loaded library name
        print("Loading library: " .. libName)
    end
}

-- Inject custom SO
-- native.loadLibrary can be used to load a specific SO file from a path
local soPath = "/data/local/tmp/libmysuccess.so"
-- Ensure the app has permission to read this path
local success = native.load(soPath)

if success then
    print("SO injected successfully")
else
    print("Failed to inject SO")
end
```

> **Note**: Loading libraries from unauthorized paths often requires dealing with file permissions and SElinux policies.
