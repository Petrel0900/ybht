+++
title = "15年老MacBook Pro曲折重装系统记"
date = "2023-05-17"
draft = false
tags = []
categories = [""]
slug = "reinstall-system-MBP"
+++


之前升级过一次系统，一直以为是大苏尔，忽然发现其实是Monterey，难怪开个浏览器风扇就哗哗响，于是一秒决定：重回Catalina！


[macOS 重装系统](https://zhuanlan.zhihu.com/p/39103887)  参考此帖制作了启动盘，十分顺利。


第一次重装，出现“应用副本已损坏”问题，根据此帖[macOS安装过程中“应用副本已损坏”的解决方案](https://zhuanlan.zhihu.com/p/91707695) ，修改时间后出现“验证安装器数据时发生错误，下载项已损坏或不完整”，断网、修改时间、重置pram和Nvram后执行上述操作均无效，遂使用下下策——联网重装回最新系统，然后重新制作启动盘。换了个U盘制作启动盘，成功重装系统。


结论：前一个U盘有问题。


于是我决定修复这个U盘。


参考帖子：


[MacOS在Recovery格式化硬盘时出现未能卸载硬盘 （-69888）等问题](https://zhuanlan.zhihu.com/p/346322578)


用终端抹掉，失败。


在磁盘工具里抹掉成APFS格式，不成功，提示-69888错误，有 (fseventsd）进程未结束，但抹成Mac日志式格式没有问题。


于是准备去活动监视器里关闭该进程，但是关不掉。不信邪反复尝试N次，无果。


于是又返回磁盘工具，打开，删掉下方盘，再次抹掉，成功。


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBT7OF7I%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T005042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDclP0R9bR%2By1hXn7iHsugkjmnPZZusiaiJV1ag8%2F4hgwIhAMhzGpdpsh4GuXNEWERd4wN6I9V0F1175VHR9FjAgi%2BzKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsENphYvw3FuCUwOoq3AMnwA1S7PkxcWJMTe03XzgMvZpnGiv%2Bk6SCO%2BUM901f24J05SsQIfM33jTwNCRNug8xZZ5kakBzomQQXFWVbeqLM5NeN74xTTX3bAHXrUZH9GQLQ3A4PmueRcNwfS88BybugAnjSNUFl2wfceNOO%2F00AD4RL0OPB68U7QbUY0DyeNdA%2FIRKcdnCUYFHvskjUQpctHBTanokv41CQYHHPaz7TiO2MHwbjFHdWsvTiuJfCCcNXHAlOVgtBl9lhTw5nMC1800y2%2B4FY%2Bp6wETFpNfdz9sZ3Qc71mi9saBFDFeZNHB8vheyDJo5PUvm1JGs%2Bll3BXhjid1O902C%2BUas9DAi08KsS5L1cHcqwx0yOUaOEJrL7yJeLEEoVctg1IIHwqq7NIe2RQTNJfxd%2BxuhOKiwnRXOVElPtCFiCEh7Cif%2FaMBLX5y3Ebz7Txqax%2BOSUirNsHAs41iEtkm6XmBWImBClXyUOsaTcHzl8m2zGWGFtrZxhJGcaXH4EUqHQy3VstgG9TPTt9gxQcRz0QFPW9a5GV4e95XysjWLFQKkKBRcUACqhbd1WfktWRWLdFjgAOo6spf0yXqOmr3Z7kGtQncMO2Mn0ivfLTtbwh6GK2ob9nXeJGyGm3TF0o08ZzCf65jUBjqkAUIDVOUmWEZdZis4Bh%2BWx0rynKfe6kJCAMRzM4yAGQfUyZfsH6VBLO1gOLeK5TPlQf9wmd0vlfB34S5eh0mEVa8S2Yu3P5rurxHsSUb7uidkyzdClY70PskY%2Bo8ryFVByYPfTQNNiyxqQVwyRaLhGq4g1XP2kJWkTPoEl6xKnuOX3EbIwXI2hwdgsiUFpu9pTkhfqDrv4XVBf6GLaVY9vqajyh%2F6&X-Amz-Signature=b6b5d121c54bc26668a5c701d6f17955ba3ff81e97159639f70a52fcf6748a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

