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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664625525I%2F20260603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260603T032945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC700YL47l3vXSWK9v%2Bgc%2BmbVvUs8TT%2BVCoIi3VUwOqJgIgQwgaQhlnM%2Fduug8v6C85bgkFEjdX5H%2FOnFQh92NxEwAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDK9md4uzb2EUwSXf9CrcAzfx5cCWi%2BxfNimk%2BjC9lQ6nrWxoGZ073JnrlilPNHUrqQtEOEqDfZgarWfNEdrBoRmFwZfS9Q0zG6VeNJRDkPsXMMarXftyuwvHyzzClatX1RAfV1f8FHbagm4gBKCUWvj%2FRrsn8ctS4za48L0kwtrcfj9qX%2FnkxMoFAY74hbIs90sYiSMtvUCm%2BzhJMb6%2BOvLS2l1Pj%2B9Nl6AtR%2F0IQ3%2F8q8EgC4dH3ZvV%2FpX1GzBqmVeULpGEdtBz327fI2YuKtLyVxFLyyEt30p%2BhlmA0mcJ%2BUFZtwEFhSY8u%2BOqIDcn5nYIxIvvdLhbWrmw6pzD7QBep5nDF0eKxk%2F62P6puyaQMMuSiwS9wprSS3iyQoQWraQ0iklLyix7REXLw5QOjRsNdu945YUIjdz9376pabmfCBHvxrwsk5G0aR693%2F2sCakPW8QMwa%2FY4Ae2n%2FSQhlXWKFaxRDBG92M%2Bykaw0ALVQjec1VA9fTT3R4I5wQY7g9Nv1ENvloNEsCYQWe4DTbZibzX4t62%2FGLEgUwHNv2P4bQG5St3hq%2BUxqHKp8YeqVW1Muva8e7VyRd4aUU1mcjRqjOEOJs4J%2Fkm7Hvp9%2BhyCaVoBYZBOhtLcRYIsga13ICPJf%2BznC%2FPUSwAuMLSb%2FtAGOqUBuVq%2BPHLsVPuUwstuIp1K1obTgxJi9Vff3T0s7FuBZ8vJ43j578gHLVUjkfchkwPvuK1O%2FNMcGtqRM%2FJ1naRPZwzFDhiVtgof32y%2FPs6yjrnPSMbr%2Fj9jtUsUf7z0mnQPoVCVnqKzqjf%2BU3ZnGKHtCHyZEe8DaBRAO14ygz%2B8GBh6JugHI1r0RUIGWToDphKJOIeAkT3cg46jP6%2FA0WmqCwzna3lg&X-Amz-Signature=3eaaceaa4351a40ca94eb3e6eeeded721fe3ddbabc61bf32e35e121529045951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

