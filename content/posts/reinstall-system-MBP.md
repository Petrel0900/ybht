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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP2I2N5X%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T012418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFey6q%2BktLXUYyC%2BKDfuaIn8Ft45CHLjZ%2B8wi0c%2FASekAiEAnZHHLF9KzGEaAjYxzPfQAZIkZnflqYG3VW0WKjJ1QHkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDF7m4Ig71HLb8g2nmyrcAyYbqgYC31My9gWF3CFHWyC5UptlbtdZNUu%2BuFbLTxn4cRqIVn6lurUCxDUGLF6oDFXzgDcKCKOSh1QBRIpvfPzmISzl4cTShNmGL9jI1%2F55jOR7DEtQa3rFrrk93VkGbp4AFBZ4uYL4YRhFsd1XV856NipDjICsjb8zDRFezgVkMWoIrg3hlb%2FduT89%2BrCr5NxY0bFwGmqCcFYl9rW6g2HNoZzLyq9GkJmSFe1HW2BT0Uw1jPg%2F5bBtYhmdZLE5aQa0O%2FmRsaYj%2FsI3zDX%2FMArxZeGbYa%2BnDDwHB9zCWlsLRlx0WjngNN9b3yggxrVSepLPZomxRWq1wTS2xJv3dp7rc%2B12FAadSPIZkQNSJwnq3QUNIWrWRoJVdSrPg%2BPzVbbYVDtRB01SrPr1ZGpvQoTj6Q5jI%2FOC1Fp%2Bt6keJuagStP8t1m5SSNBr1d8h%2BoTgmtY6K9sFLKRpXE4ZVNYZ1GV9YJMemVkh9iwxl5jXCTKftU6jOny0iGBcyURhv4Iv%2FGGW2ka2L3qk95XMkV%2BjH6cJrQrd%2Fwsax6HIWf1sIIjmdo%2FotTm9vbaNgLYqq07V0i4IwXFk9frli1Niy4dV6SyOipPT2zpwU7fCK7EJasbg8CCbBW%2BA%2FWucnuBMJnag80GOqUBbX%2FxE1eBSNV%2FnuRRt%2FwnC0nBNWeHqDnV8oIREPCU%2BguHIbysuV80oaALoLx%2BFMeHM9KoCM50oDHQq%2BUT2peiMbgEJuRf2CcalyBqF7W%2BV%2FH3gQP8HnuUSVzIrICCJ3ox6NuaNndLyWZKBfSIYDnfHGFPtVvMI7uxo9hn%2Bfou1szMgu8mzduqlreytlT6evbrI2FZSWzCUJ5MuNz82hw1iBUBPqQF&X-Amz-Signature=fa187f37288720261052fc3f25174dde392e3520c700fbf9492f6130dd70ac17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

