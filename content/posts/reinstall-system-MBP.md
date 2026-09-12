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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBMRLIN%2F20260912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260912T023331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2tk7motJaE9xsMZ0ISgmoIHMN0wYZifx%2FjBm9VJAXXwIgQTztfTgZsOUeejhh%2BlQbGd0oI4FUvgptN3hnXlBZqLEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo%2FxbM%2FxSuOu3LqxyrcA5HVOGU8Ad5UciVsBN7sq0wwd96L5t0nfoZStn3l0TKnEmkSVEOUdVOHUroLVLD305OvUIZ6Uw3%2BscktXJIxdSdf%2Bkb7kGJ%2BmgXUQ2Q70GNyQN1GwNRrVi4LLH5Xkd9DYxT9f0bZqbryU%2B2bEagw3JO7CIZ2pC4qKG7dmAGh89VTJMWrTgBLliNL0IyKQM9G1jjKvoxqv%2BLRlXHvdrGw%2FsIrZT4S0kskBzUIK%2BskCDH5F5GamkLpj%2B%2FiuWYxSjOjFMcEJgt1Fj6w%2FaUl8ccXnH6%2FBQyXi4wHfDqOuCaYJiOSg7aZk33megH0CB5IbAHoTec3PGh8h%2BdayzrCq1BjZj5jKtNm0OCueqhCMTGX4nHldTUb3TEy9Bh8wpLoCimsivlLyHbN8KWQ3rrHRE5yDyFp2i6I8KfeYU8NqKc24FvQofLkmORkCcra0%2FZyrL2w9hhje%2BdNMkWJ4I2TJhiD6KTHhtZDafESp4JvO89u%2BXkNiwh6xf73DsnwzBCEp9BgoWP7tNDdroKsWHRBN%2BzS3Hj8tvgMNZaie4vhaCMYjwWDqMFa3sx%2BhNMR2%2Bvx7z4y0yEf0%2F59wEoqeoo9H7RMYPBDxchMgJcOb2OGCjaxjqJ2GpHhoVDOK3W%2F%2FOuiMNDxktUGOqUBgTWoPDIRR3OpOfHKGz%2FHtVs0em%2FpOi7WY9ml7BAmrqv4u4WxMwnX%2BpeSRhyPh6Zb1nmF%2Ba7P2A%2FQTVCYjzj4VN8UqDYzcv6f%2BYgZhgPdEgkgojHRHzHN%2F9iofnZkTxRJ7Rvyc8spvOYk%2BLpZjOACEst3Eno75Rz4UKBZHdz8hmI6B9MXT7%2FPCXQ9hkX%2FtnbUuzMnC8fHpG0QcNgjbyjXDL7%2Fqm1m&X-Amz-Signature=1af77ea3b226fb4a9f7a473bd2dd7e6833d1c7c3211b8d0dbe6d12557b470763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

