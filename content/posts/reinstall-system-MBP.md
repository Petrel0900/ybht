+++
title = "15年老MacBook Pro曲折重装系统记"
date = "2025-05-17"
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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM32HU37%2F20261128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261128T054920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCUoyf8A%2FctYyMnR8z%2FHs5WN9Q2k8YwvEdgv5NwiKl%2BlgIgJv%2FbcC95YSq4SDqaa01j0eml5R8gyO22E0dTmdm%2BQ3IqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGxqaxSnOIObFg9oircA5EG5LM4HWpV9EfmIIj2swvae%2BBBMluXnJk71yWuTp74JCcF9RFACbDLbJ6O8m2vX0htZMMW5Ue14zRCtx7BCNjjVbAtZ6aDs4W95Q%2F83LM5KonkwOu3S%2BFQbRWSNnERnxdN4mim%2FxM%2Bu0wL9Zw4SaVlMh4Db4NHhh7P4SVwwyVCoIqjntcgpdk9BFgOLz9B0UkCGUS3vJlfZGpS7KWBBXWmdjvuzYvL7KycbEsurVv6XXKIBTDdXAMe5%2BoHK4rjj%2F5gc0UEUV%2BbBUuBExeSt5X6INEAqzxbrzQDBBMH6GfdJ2N5wHLf%2FLqzAzo03teK3LX3RcQmDh6JlyGVIP%2F8pCSBxZpfS4jXVN7x6xpTT9%2F0HlfIAk7XX7nzONZ1QsovSkQ2%2BFNdgh20HJiwVMMT92lWvuvI5%2BlkpYGIEpj2u0oAWjtrRiASv9EBQUajxkL9QcqD1wVYyRH9%2B%2BecycuQC3Sn3sK88NaEbYMMq0Tv9z3%2BYvMWQo1rZepaaxxcybJsPYMiYBMWaR0rzQ9IbelNkylep%2F3gm6HlEDO%2FE0BIJ%2FcV%2FjHPMaKBlcDKqPoXfBfnIdnv8Rm46f4I7t%2BmoN2rs%2F9CxKhkoYitwIRNh1LFCRCBW1QIt84jO91odI3jMK3gqNgGOqUB4GFhU%2FBneGij%2FN7gF7UXanry%2BO%2BEss0fio9AWpk4M%2F%2FEcC%2Bu5MJQnQEctMobCmkV%2FPhSUzncXZqhsL9URwdmBL39gu%2FCQsvdooCzC%2FtiZS8fXRWXh0cINriendIJdBhqS6utwHWECSgB7g%2BCoRu7gwsoGNPU1oSi9fsB06icerc%2BovNx5ECRjCh8cHUWmj5guj9VgMZTdCkd0YPVu3ZfNffI1tKA&X-Amz-Signature=38749deca8a7b538759c8d7b447d93465e63291ed39bb088fbc80ad75a619f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

