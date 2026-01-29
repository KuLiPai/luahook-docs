# FAQ

## 0. Error `open failed: EACCES (Permission denied)`

SELinux issue, requires root to execute:
```bash
chcon -R u:object_r:shell_data_file:s0 /data/local/tmp
```
Set readable permissions for the `/data/local/tmp` directory.

## 1. Can I get started quickly without Xposed development experience?

It is somewhat difficult. You need to understand basic Xposed related knowledge and basic Lua syntax. However, it is much easier than starting Xposed module development directly. LuaHook focuses on simplifying code and placing the main focus on logic. If you learn to use LuaHook, it will also be very helpful for Xposed development, enabling you to quickly get started with large-scale Xposed development work.

## 2. What should I do if I encounter unsolvable problems?

It is recommended to check the manual first, search online, and ask AI. If it still cannot be solved, it is recommended to ask in the group. Please describe the problem as specifically as possible, preferably including logs. If there are relevant pictures or videos, it is best to provide them together so that everyone can better understand your problem.

## 3. Is there anything to note after taking the source code?

GPL-3.0 license agreement, **Free Software**. It must be open sourced and use the same agreement. Users have the right to run, study, modify, and distribute the software.
