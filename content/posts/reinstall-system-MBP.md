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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IXYQP2H%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T012433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDpJyhBawy7MPZBxTZjgipybauBrXR07%2FBcAX1XH52ungIhAKGGiTm5pvd3UMCIXhmGwipe64EqfglFevPwZAr2u38gKv8DCAoQABoMNjM3NDIzMTgzODA1Igz%2FSCJHzlpkGZbYxGwq3APT%2BnYpzbpgPcZc59RwG8z20zT81KcBNiN3GYTSQ45zqW5lESOU%2FkcmTJM4I9mdb0YpPUWCIhdZ%2BwtZKzThldZZdfQXEeHqMvltvq9%2Br%2BvzWfHusd2RRFgyHBC4RBEDyVJ0TsHgzIqupUDvtU5dgP2vNjrQB97kne6lmMJpRHvmXFwIhQeXS7z%2BjtVSuW%2Bg3WvD3Y3FGPc3kitq%2BcZoD%2BfebHWEHFGSqkS8OlEA2%2FOz4X%2BWF6ziOjxDXkJemcbVnwFr0Ow2O1DR1AlrCqExc0yujCDV9W6tlh%2FXmM5cis6016SS4KHIvHrQePdybRCFQXaY8dRhlSVPjiPTmMzAU6KmhSqrBvegDtyHn0qA2bfUqP5J5aGxHstn2PmvBTKKHlInLj5WWVDjE9vsme7eSo%2FZBg1HR8zUfq5Jpe1gEUFaA1FxptgocA4KfnR1vYNvVqLWbR34O5SOqrwqfZbP%2B7XDorun1e2C9QchbkIoa2OmVhAu7jhe300XSWut9mNQCDOK3ALPjQwihkzOjM9pG4N%2FjQEHsHru9uFIx%2FoZN%2BQ2xmCnWlZ1ERm9uSgRpKl9Lm1W4PNZGhqcLrG3WxlkynIKDxNRdfPuxK7MoKbUfU8aUxKXIcp9vMqQrqKSETDOqYrMBjqkAbQbhMQWbJLMiCFrBKuz9FH3zkPEqtcSrctDmCPXTMm%2FDVPaRypUomufdc%2BhN62jfz2%2BCRiRyHScvitY7tmro7gaioB9bSoeKPYdykszynwMzILZVwWc4PqwAoGdWc%2FWlJ6ijjW%2B1%2BZkQ6NzKIcCkfjRFSGMfcIoLSbGejRWZPjpFGD36bBiK6yql50l13wHkmLf43WKuxw%2BXJ6hQL6FCvAoUbME&X-Amz-Signature=80ad8b343faf6c6069c86ba0ace038912b75e700ccdcd0d30057cf8b126d6004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

