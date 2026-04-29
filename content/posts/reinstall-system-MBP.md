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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYZOWBK%2F20260429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260429T022418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCXv0RzxJG0RyTqJ8f632qo%2BicsyoviHtoMN23WSpSOTAIgfW6x5AShfvEyWXeXzd8bqqvZWBp9XwMR3NkYvO9jCqYqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3y%2B8Vcj%2FV2RpJ92ircA9MlEL8X5oT8duzfx4CSpZjQawG7iU9KDmDF%2F%2FKbImhRXpyw6I%2FkXKnEX%2Ft6uzl5k2l6L3zRO8KpCTki%2FfPi3lE2FCKvBjcl9L1O3atTBw20hoc9ZMe4sRRqNBX2bW%2B0fbTlQrWNOh6HhgbMgnvEs2LZDAvDzEiwzcRngR3JAjXvOQqARmyKjACkg9WTX6XGucYI0obEDGV3lzVQ5VzmJrQwqE9lR%2BaGaIhMG1tSt70oaGnd4MkCWXv1fFZS3I02pSsdeWvyb2pMBJ0ySqCN%2FCiiEt9H5GmLPgkw3ct4K8ZazSY7j6KQaoDjJHhBDIbbkoVOIL1iS0Y7im9%2FxzE7qPc8Lm1IRLuZj4NCrWKZbuvLQeq%2BNeL0nUasLkAxBLJo3pW5zlmqP5aizf776a7qE7HfgduCtKNcyNUtGMA0O9Xuj4lumgVKoDAxeQYgsXFruJzubZv043uf6260t9VAKWuZL%2Fsw%2BH5RCb5smYz0sMxJWD9gLjd6bgtRyTDJGHA%2FDmtIPCUHeVronpu2GFYqMM0sMONPmZKKzrsXimMWFEIBWRWzTLZzXmhtw5ItvKyu9i11GiU%2BsKNjPHSMZ%2FJolEUmQ5ve6Y%2FNGRJaLu9NKoH8sSDmNPyGFVlO3qEOMPOdxc8GOqUBW80prZ8naCNX1Fw8ReNR7cO5LCPUeLb8pCF3ytlViILvwvkEIjevEQZkk2eN55d0EKUFdnT0afwKSoUfid8Myg8bVqiKfvwmDsdBRLo2bhW28qGK3VAK1LBrPTaMdf9vM2XLhtkvmZ8r0VzRNTbz6j2zY6OtmTlmtAgDodHjo7EEC9p2%2BSUd%2B8v7QmsuUPTgS5ig5LsRUUiP4oW%2FKWQXuwpItjzL&X-Amz-Signature=da038824917756a26de4c1f31337dcbd271b02a6652e5ffb6f9aa84d0e2daab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

