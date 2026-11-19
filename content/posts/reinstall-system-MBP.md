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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DOOPL7D%2F20261119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261119T052628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCQ%2BBUNIchhYbkHbocbk6fmxDp2hJ3S561biyqL%2F2ZcRQIhAOuOYtOp94iVp6SWfpWBZeocJEhd4EdJ0ATTNCoEym5iKv8DCA4QABoMNjM3NDIzMTgzODA1Igxa4Vt0qGtT%2FkI8BzEq3AMwCVOuKB3wWkY0vdhh1QeC%2BV%2BndvoYwh4qvuV9ni%2BfwK4oBcmFRhCIIvSG5zHZQkjtEplpBPM15JEWrOAfEAtpXrNm6ojqcFqvRXSUiTtNbGyjc8LAWGlBA61WG6tyIbDdvMl9XSQJX%2F6r0mWlIl34%2FXHtvvh0jV4NNG5shKErhTLkD2tiH6Ts36jm7wT%2FbVU9QdKVoTq%2FAvuTCDSfor0CSvAZJ%2FImIXT%2FU%2FCbztAbY4toykxIyxkkV2QPa6%2F2LzXTVA%2ByxgG4s1CKbSIrNurxN4W9syvGn%2BJhJ%2B%2B1UkIRoE8wJ0yL1esnALN%2BP8yENbO0%2F2ptCdXI929OaISTZh0HvmIDJ4Qd8XkglNcW%2BQBvhjq9TaIp4xC1N9v%2B5LwLnn3IWxTCAo1XmzpZNhdN3PQfSRZZiP5%2BYW66R6qxHQ4di35oG%2ByeDbyI2MEssF66ajrDHz86EKFNUUuUr6ZAXbceKU5zOPP2j7q0Pi61ko4IMo1VvXe%2FAkp9dtYopqyowtwnkwH%2FtiAvU%2FNbzg3G346uvWSAlU2hcElRP1fAPx6DYueQl3fqo1pbU1quhzA8C5JCiSgWcecVmv0cX1ekbGnE78mCrOwutUlGQ%2F50Qnnsg7SvsdTA%2BayXkqiGozDLjPrXBjqkAcZ6uYiY5y6a5fa56v6FSNW5GyUBkfgAf3CipE4Xf7jLYsrxeR4v%2B6rJBchFBS9bm4nIxp3J6KSTGOlJqK6b686nVUR9Pj74vF3umCPJY5bJdMTTYJs%2F2PrQwzz%2BlUx5ov9wQ2stpHZPC%2BkKmM0oa6Fw104k2k3qBtgExdzZXk0t%2B2bDYZPp0io1I5PSfTitmC%2FAPvX6cggnSZjN1dBIseY2U%2BKZ&X-Amz-Signature=6b41c3259ba1c435d618e91817d0da3da0f81f721986713ecdf14454541d771e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

