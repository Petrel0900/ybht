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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKMF33N6%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T012500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD3RI%2Ba3fge6qLJhnsRkJMVWUrV%2FO%2BNdgXo6tg4yN1WvQIgQKeDasfv4k5xMsYscoxTkBYW22sBKJUOy124Aq3SUVIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0Sd36%2Ft24gAv%2BHtCrcA2fF0jmDsYqrS%2F7YxF87yv4fd%2BbmEa2sWiPcao48xj5FYJWZE9kV3hM3M1YO%2FBxGyez8GehrLWb5WqUi8HlVGIVrNc9aJdmFxWmJHod38eB1WERLSUGGrwb0wSHtZakEa1A4eCDitsSrCosfZ7OQ%2FnSl%2BX4OswFLVQtbds45OnWta%2BlrNfW%2ByeyHU8wIFovuy8tHuyLDA1fo4zFEQONGwMNZJ4Tyibo23NlJEgPxaY%2BXA3AhF2z2IQ92taFsSgAhqfJYhPddInQDPdn1wN%2FO8KnAui3G%2BptQ4CImqNwJdWcdGJwphEYCYp6XhcriEG%2F6aUC2rbPiCKSz99%2BOuwOldZro2VCiTNnbf39L0dEoKw4QByjunVl8wRyLGqAtMsAwnpKVEH3zGoLAOIiWirO9lhicRZIaESi%2BTlHJf6JBHt96cA%2FY%2BdRsMKbpm40lRVvfY%2FIoywRirE%2BDfSfNerAGVR2bFjy9zqH7%2FE3BJLOKhU3xNK31A9w%2BK9Hszwx1f2VsgRSaRo0WfFqmdemEj%2FMMdu4VNBJbt%2F6xvf%2BvnqjOAOowEnslkQRcNGfwlax00QMkmeV0dBimgZ%2BDVl0g4wjtXbNMXST6RBRHpWfvfWKGWDKH%2BO%2BdmWt3P8WsO%2Fg7MMOSv8wGOqUBdHz9Mc02KLar%2FLRXvtIKIIJhaw09PRul8hwo60C1qMt1IEaTIa%2FxXVJZHVb%2FVK2cckRaQz5tpZCRE3Q%2FIxQN0WGM25TDK8L0Sp%2Bp%2FmM%2Fc%2FZS3VMKoIMo3rhrbmJBxWvws8Shslfx0UCX7g3GlgG%2BTWk3ilto8HWndrcElNRhz%2BpYixi5vYUO0B17S8k7frdyoQnQfD9WEQ0tnUYPs7vYQlkd5Hcw&X-Amz-Signature=ef39a9a4fec5b29a196adfbe983c7822147f0cd9ae0036958680cfc821846059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

