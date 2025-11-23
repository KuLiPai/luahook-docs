# 常见问题

## 0.报错open failed: EACCES (Permission denied)

SELinux问题，需要root执行
```bash
chcon -R u:object_r:shell_data_file:s0 /data/local/tmp
```
设置/data/local/tmp目录可读权限


## 1.没有Xposed开发经验也能快速上手吗？

有一定难度，需要了解基本的xposed的相关知识，和基础的lua语法知识，当然我这对于直接上手Xposed模块开发简单许多，luahook专注于简化代码，将主要重心放在逻辑上，如果你学会使用luahook，对于xposed开发也是有很大帮助，能够很快上手大型xposed开发工作。


## 2.遇到无法解决的问题应该怎么办？

这里建议先看手册，上网搜索和询问AI，如果还是无法解决建议在群里问，请将问题尽可能描述的具体，最好包含日志，如果有相关图片视频，最好一同提供，以便大家更好的了解你的问题


## 3.拿走源码后有什么要注意的吗？

GPL-3.0 license协议，**自由软件**，必须开源并使用相同协议，用户有权运行、学习、修改和分发软件


