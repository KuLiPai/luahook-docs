# 🌐 LuaHttp

HTTP request library, used for GET / POST / Download / Upload.

### http.get(url [, headers, cookie, timeout], callback)

`Returns: nil`
Send GET request.

- `url` : Request URL
- `headers`  *(Optional)*  : Headers (LuaTable)
- `cookie`  *(Optional)*  : Cookie string
- `timeout`  *(Optional)*  : Timeout interval (milliseconds, default 10000)
- `callback` : Callback function, format `function(success, body, code)`

---

### http.post(url, body [, headers, cookie, timeout], callback)

`Returns: nil`
Send POST request.

- `body` : Request body (String or LuaTable)
- Other parameters are the same as `http.get`.

---

### http.download(url, path [, headers, cookie, timeout], callback)

`Returns: nil`
Download file and save to specified path.

- `path` : Save path
- `callback` : `function(success, pathOrError, code)`

---

### http.upload(url, path [, headers, cookie, timeout], callback)

`Returns: nil`
Upload file.

- `path` : File path
- `callback` : `function(success, body, code)`

---

### Example

```lua
-- GET Request
http.get("https://httpbin.org/get", function(success, body, code)
    print(success, code)
    print(body)
end)

-- POST Request
http.post("https://httpbin.org/post", { name = "kulipai" }, function(success, body, code)
    print("POST:", success, code)
end)

-- Download File
http.download("https://example.com/file.zip", "/sdcard/file.zip", function(success, path, code)
    if success then
        print("Download complete:", path)
    else
        print("Failed:", path, code)
    end
end)

-- Upload File
http.upload("https://example.com/upload", "/sdcard/file.zip", function(success, body, code)
    print("Upload result:", success, code)
end)
```
