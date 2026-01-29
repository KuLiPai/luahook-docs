# Example: Monitoring Volume Buttons

```lua
-- Import Android KeyEvent class and Toast
imports "android.view.KeyEvent"
imports "android.widget.Toast"

-- Hook the dispatchKeyEvent method of Activity to intercept key events
hook {
    class = "android.app.Activity",
    method = "dispatchKeyEvent",
    params = {"android.view.KeyEvent"},
    before = function(it)
        local event = it.args[0] -- Get the KeyEvent object
        local keyCode = event.getKeyCode() -- Get the key code
        local action = event.getAction() -- Get the action (down/up)

        -- Check if it's volume up or down key
        if keyCode == KeyEvent.KEYCODE_VOLUME_UP then
            if action == KeyEvent.ACTION_DOWN then
               Toast.makeText(it.thisObject, "Volume Up Pressed", Toast.LENGTH_SHORT).show()
            end
            -- Return true to consume the event, preventing system volume change
            it.result = true 
            return
        elseif keyCode == KeyEvent.KEYCODE_VOLUME_DOWN then
             if action == KeyEvent.ACTION_DOWN then
               Toast.makeText(it.thisObject, "Volume Down Pressed", Toast.LENGTH_SHORT).show()
            end
            it.result = true
            return
        end
    end
}
```
