# 📂 LuaFile

File operation library, used for reading, writing, erasing, copying, moving files, etc.

### file.isFile(path)

`Returns: boolean`
Whether it is a file.

### file.isDir(path)

`Returns: boolean`
Whether it is a directory.

### file.isExists(path)

`Returns: boolean`
Whether the file or directory exists.

### file.read(path)

`Returns: string | nil`
Read file text content.

### file.readBytes(path)

`Returns: string | nil`
Read file binary content (as bytes).

### file.write(path, content)

`Returns: boolean`
Write text, overwriting the original file.

### file.writeBytes(path, content)

`Returns: boolean`
Write binary, overwriting the original file.

### file.append(path, content)

`Returns: boolean`
Append text.

### file.appendBytes(path, content)

`Returns: boolean`
Append binary.

### file.copy(from, to)

`Returns: boolean`
Copy file, overwrite if exists.

### file.move(from, to)

`Returns: boolean`
Move file, overwrite if exists.

### file.rename(path, newName)

`Returns: boolean`
Rename file.

### file.delete(path)

`Returns: boolean`
Delete file.

### file.getName(path)

`Returns: string`
Get file name.

### file.getSize(path)

`Returns: number`
Get file size (in bytes).
