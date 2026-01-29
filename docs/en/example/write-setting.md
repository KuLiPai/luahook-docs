# Example: Writing a Settings Page

This tutorial will guide you on how to create a custom settings page using LuaHook.

## 1. Introduction

LuaHook allows you to create simple UI interfaces using Lua scripts, often used for configuring your Hook logic.

## 2. Settings Page Code Overview

Below is a typical Lua settings page script structure, showcasing a basic interface with a TextView and a Button:

```lua
::set::
function setActivity()
	-- Import necessary Java classes for UI components and functionality
	import "com.kulipai.luahook.util.*"
	import "java.lang.*"
	import "android.widget.Toast"
	import "android.widget.*"

	-- Define a global print function for debug output
	function print(...)
		local text = table.concat({ ... }, " ")
		Toast.makeText(this, tostring(text), Toast.LENGTH_SHORT).show()
	end

	-- Use Lua table to define layout
	local layout = {
		LinearLayout, -- Root layout is LinearLayout
		gravity = "center", -- Center content
		id = "filelayout", -- Layout ID
		orientation = 1, -- Vertical orientation (1=Vertical, 0=Horizontal)
		layout_width = "fill", -- Fill parent width
		layout_height = "fill", -- Fill parent height
		{
			TextView, -- Text view
			id = "tv", -- Widget ID
			textIsSelectable = true, -- Text selectable
			gravity = "center", -- Center text
			layout_width = "fill", -- Fill parent width
			text = "Test Text", -- Default text
		},
		{
			Button, -- Button view
			id = "btn", -- Widget ID
			layout_marginTop = "16dp", -- Top margin 16dp
			layout_marginBottom = "16dp", -- Bottom margin 16dp
			gravity = "center", -- Center content
			layout_width = "fill", -- Fill parent width
			text = "Test Button", -- Button text
		},
	}

	-- Load and set layout to current Activity
	activity.setContentView(loadlayout(layout))

	-- Bind button click event
	btn.onClick = function()
		tv.setText("I Love LuaHook") -- Modify text content
	end
end
```

-----

## 3. Key Points

  * **`loadlayout` Function**: This function is responsible for converting the layout structure defined by the Lua table into actual Android View objects and rendering them on the screen.
  * **Event Binding**: You can bind event listeners directly to UI widgets using the concise `WidgetID.onClick` way, e.g., `btn.onClick = function() ... end`.
  * **Layout Attributes**:
      * `layout_width`/`layout_height`: Can be set to `"fill"` (match_parent) or `"wrap"` (wrap_content).
      * `gravity`: Controls the alignment of view content.
      * `orientation`: Only applicable to `LinearLayout`, determines the arrangement direction of child views (vertical or horizontal).
  * **Units**: In Android layouts, it is recommended to use `dp` (density-independent pixels) as the unit for dimensions to ensure consistent display on screens with different densities.

-----

## 4. Page Navigation and Parameter Passing

LuaHook provides two main ways to implement settings page navigation: **Starting `ScriptSetActivity` via encapsulated `Intent`** or **Directly using the `injectActivity` method**. Regardless of the method, `ScriptSetActivity` is ultimately used as the unified entry point to load and display the Lua settings page. Parameter passing is done via the standard `Intent.putExtra` mechanism.

### 4.1 Navigation via Encapsulated `Intent`

To simplify page navigation logic, it is recommended to encapsulate a helper function to centrally handle `Intent` construction and launching. This provides clearer control, especially when you need to pass complex parameters or configure other `Intent` settings.

```lua
local function startScriptActivity(context, scriptName, arg)
    import "android.content.ComponentName"
    import "android.content.Intent"

    local intent = Intent()
    -- Explicitly specify target Activity component as LuaHook's ScriptSetActivity
    intent.setComponent(ComponentName("com.kulipai.luahook",
        "com.kulipai.luahook.activity.ScriptSetActivity"))

    -- Pass parameters via Intent.putExtra.
    -- 'arg' is an example key name, you can define different keys as needed.
    intent.putExtra("arg", arg)

    -- Build the full path of the script file, this is key for ScriptSetActivity to load the Lua script
    local packageName = context.getPackageName()
    intent.putExtra("path", "/data/local/tmp/LuaHook/AppScript/" .. packageName .. "/" .. scriptName .. ".lua")

    -- Start target Activity
    context.startActivity(intent)
end
```

### 4.2 Navigation via `injectActivity` Method

The `injectActivity` method is a more direct navigation way provided by LuaHook, typically used to inject and start a new Activity at runtime. Its underlying implementation principle is similar to starting `ScriptSetActivity` via encapsulated `Intent`, both passing Lua code or file path as parameters to `ScriptSetActivity`.

The basic usage of `injectActivity` is as follows:

```lua
-- injectActivity(currentActivityInstance, luaCodeString/luaFilePath)
-- Currently mainly supports lua code strings
injectActivity(currentActivity, "print('Hello from injected Activity')")
```

**Important Notes:**

  * Currently `injectActivity` mainly supports directly passing **Lua Code String**. This means you need to pass the entire Lua logic of the settings page as a string.
  * If you need to pass parameters, whether using `startScriptActivity` or `injectActivity`, **you still need to pass them via the primitive `Intent.putExtra` method.** This is because `ScriptSetActivity` uniformly receives all necessary startup info and parameters via `Intent`.

### 4.3 Host Page Call Example

The following example shows how to call the **encapsulated `startScriptActivity` function** in the host app's Lua script to jump to the settings page and pass a string parameter. If you choose to use `injectActivity` directly, the logic is similar, but you need to pass the entire Lua code defined by `::set::` as a string.

```lua
hookcotr(
	"com.tencent.mm.pluginsdk.ui.chat.ChatFooter", -- Target class
	loader,
	"android.content.Context",
	"android.util.AttributeSet",
	"int",
	function(it) end,
	function(it)
		local button = getField(it.thisObject, "w") -- Get a button instance in the host app
		local context = invoke(button, "getContext") -- Get current context

		button.onLongClick = function() -- Button long click event
			-- Call encapsulated function, jump to settings page named "CurrentScriptName", and pass parameter "Hello"
			startScriptActivity(context, "CurrentScriptName", "Hello")

			-- If using injectActivity, it would look roughly like this (need to convert ::set:: function to string):
			-- local luaCode = [[
			-- ::set::
			-- function setActivity()
			--    -- ... Your settings page code ...
			-- end
			-- ]]
			-- injectActivity(context, luaCode)
		end
	end
)
```

### 4.4 Settings Page Receiving Parameters Example

In the settings page script defined by `::set::`, whether you jumped via `startScriptActivity` or `injectActivity`, you can get the passed parameters via the `this.getIntent().getExtras()` method:

```lua
::set::
function setActivity()
	import "com.kulipai.luahook.util.*"
	import "java.lang.*"
	import "android.widget.Toast"
	import "android.widget.*"

	function print(...)
		local text = table.concat({ ... }, " ")
		Toast.makeText(this, tostring(text), Toast.LENGTH_SHORT).show()
	end

	-- Get string parameter "arg" passed from Intent
	local argStr = this.getIntent().getExtras().getString("arg")

	local layout = {
		LinearLayout,
		gravity = "center",
		id = "filelayout",
		orientation = 1,
		layout_width = "fill",
		layout_height = "fill",
		{
			TextView,
			id = "tv",
			textIsSelectable = true,
			gravity = "center",
			layout_width = "fill",
			text = "Test Text",
		},
		{
			Button,
			id = "btn",
			layout_marginTop = "16dp",
			layout_marginBottom = "16dp",
			gravity = "center",
			layout_width = "fill",
			text = "Test Button",
		},
	}

	activity.setContentView(loadlayout(layout))

	btn.onClick = function()
		-- Set the received parameter to the text view
		tv.setText(argStr)
	end
end
```

-----

## 5. Future Outlook (To Be Implemented)

Currently, page navigation and parameter passing rely mainly on `ScriptSetActivity` as a unified entry point, and passing implementation via `Intent.putExtra`. Future plans include supporting more flexible navigation ways and parameter passing mechanisms, including:

  * **Passing Lua Function via `::set::`**: Allow passing Lua function references directly to implement more advanced callbacks and interactions.
  * **Passing via Lua File Path**: Simplify organization and loading of large Lua scripts, avoiding long strings.

These improvements will further enhance LuaHook's convenience and power in developing custom settings pages.
