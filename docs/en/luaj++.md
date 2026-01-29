# Luaj++

## Introduction

A modified version of luaj by nirenr, adding better support for Java. The following content is from the NeLuaj Luaj++ reference manual, hoping it helps you understand luaj++.

## Entry Files

`Activity` main.lua

`Service` service.lua

`AccessibilityService` accessibility.lua

`NotificationListenerService` notification.lua

`WallpaperService` wallpaper.lua

Services can use `setLuaDir(dir)` to set the running directory, `setEnabled(context)` to open the service settings interface, and `getInstance()` to get the service instance.

## Omit Non-Essential Keywords

- Omit `then`

```lua
if a then

end

-->

if a

end
```

- Omit `do`

```lua
while a do

end

-->

while a

end
```

- Omit `in`

```lua
for k,v in pairs(t) do

end

-->

for k,v pairs(t)

end
```

- Omit `function`

```lua
local function a()
    
end

-->

local a()

end
```

- Support `switch`

```lua
switch a
  case 1,3,5,7,9
    print(1)
  case 2,4,6,8
    print(2)
  case 0
    print(0)
  default
    print(nil)
end
```

- Support `when`

```lua
a = when a
   case 1,3,5,7,9
     return 1
   case 2,4,6,8
     return 2
   case 0
     return 0
   default
     return nil
 end
```

- Support `continue`

```lua
for n = 1,10
  if n%2 == 0
    continue
  end
  print(n)
end
```

## Support `foreach`

```lua
for k,v : t
end

for k,v in t
end

```

## Support `defer`

`defer` statements will run when the function ends.
Multiple defers run in LIFO (Last In First Out) order.

## Support `?` Operator

```lua
?a print(1)`print(2)
a = ?a print(1)`print(2)
```

## Support Ternary `if`

```lua
b = if a 1 else 2
print(b)
```

## Support `try-catch-finally`

```lua
try
  error("err")
catch(e)
  print("catch", e)
finally
  print("finally")
end
```

**Support lambda, can use backslash to replace lambda keyword**

```lua
lambda a,b->a+b

lambda a,b=>print(a+b)

lambda a,b:print(a+b)

lambda () -> print("lambda")
```

## Support `import`

```lua
import "package"
-- Imports package and sets as local variable

import "java.lang.String"
-- Returns javaClass

import "java.lang.*"
-- Returns javaPackage

import str "java.lang.String"
-- Set alias

import "java.lang. *", "java.io.* "
-- Import multiple packages or classes at once
```

**Support `module`**

`module` has its own environment, default setting environment table metatable to itself.

module "name"

**Support Self-Assignment `local`**

local:print

Sets global print as local print.

**Operator Optimization**

```lua
!= can replace ~=
！ can replace not
&& can replace and
|| can replace or
```

## Support Bitwise Operations

- Bitwise AND
  a=1&2
- Bitwise OR
  a=1|2
- Bitwise XOR
  a=1~2
- Right Shift
  a=1>>8
- Left Shift
  a=8<<2
- Bitwise NOT
  a=~2

## Support 64-bit Integers

```lua
i=0xffffffffff
```

**Support `+= -= *= /= %= ^= //= &= |= ~= <<= >>= ..=` operations**

```lua
a+=1
a-=1
a*=1
a/=1
```

## Java Call Optimization

- javaClass Extension Functions/Properties

```lua
Object.array{} -- Create array
print(Object.new) -- Class constructor
print(Object.class) -- Get class itself
Object.override{} -- Override methods
```

- Direct `()` to build instance or implement interface/abstract class

```lua
b = ArrayList()
m = HashMap()
i = interface { 
    methodName=function(arg)
    end
}
c = abstract {
    methodName=function(super, arg)
    end
}
```

- Support Override Methods

```lua
list = ArrayList.override {
  function add(superCall, arg)
    superCall(arg)
  end
}()
list = ArrayList {
  add = function(s, a)
  end
}
```

- Support Metamethods

```lua
function Button:print()
  print(self)
end
Button(this):print()
```

- Support Batch Property Setting

```lua
Button(this) {
  text="test",
  enabled=false
}
```

- Direct Array Creation

```lua
i=int[10]
i=int{1,2,3}
i=Integer[10]
```

- Java Method Call using `.`

```lua
b.add(!)
```

- `is` Method Shorthand

```lua
view.isActivated()
-->
view.Activated
```

- Java getter/setter Optimization

```lua
b.setText("")
-->
b.text=""
m.abc=1

t=b.getText()
-->
t=b.text
t=m.abc
```

- Syntactic Sugar Example

```lua
  mBtn.setOnClickListener(View.OnClickListener {
    onClick = function(v)
      print(v)
    end
  })
  --> Ignore interface type
  mBtn.setOnClickListener({
    onClick = function(v)
      print(v)
    end
  })
  --> Shorthand functional interface
  mBtn.setOnClickListener(function(v)
    print(v)
  end)
  --> Shorthand this class method
  mBtn.onClick = function(v)
    print(v)
  end
```

- Array Operations

```lua
Use # to get length of common Java data types
Use ["index"] or .index to access array directly
```

- Index Optimization

```lua
t={}
t."end"=123
t.end=123
```

- Non-essential Interface Types Can Be Omitted

```lua
mViewPager.addOnPageChangeListener(
  ViewPager.OnPageChangeListener{
    onPageSelected = function(_)
    end
  }
)
-->
mViewPager.addOnPageChangeListener{
  onPageSelected = function(_)
  end
}
```

- Functional Interfaces Can Be Shortened

```lua
obj.run(Runnable {
  run = function()
    -- do something
  end
})
-->
obj.run(function()
  -- do something
end)
```

**Support Enhanced String Formatting**

`a/A` Signed hexadecimal float,

`b` Boolean,

`B` Unsigned byte,

`c char` type, number to character,

`i/d` Signed integer type, string to decimal,

`I` Unsigned `int` integer,

`e/E/f/g/G` Signed float,

`o` Octal signed integer,

`L` Unsigned long integer,

`u/U` String to unicode,

`x/X` Hexadecimal signed integer, string to hex,

`r` Parse string escape,

`q` Format as valid string form,

`s` To string,

`l` url encode,
