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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDK4IOA5%2F20260304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260304T012432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDORfIsoFN8WsndXVTxilq0Uw8yvF7XKhSXlz2I06jdkAIgEh5TS5iM5uyWv%2F9Zj7CGnnDa%2BZjFCORex3gQMgsH2DYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0jx8QolbBjQveegCrcA6Bca0Ti4Y3Z0wsMdVGFF5o1zdFWMaQK%2FkFFiEjk%2Bt5gMW7%2FRO1shkL1yAZJ5CC0jMSfWyEU0RwEgQNs6BsjlfLQDL94FuyRQfGtiq%2B8mwRWe7LcFoVZG2zu1Ho2LXBYKmxiP8vepq46AFH4gNNS2SQ8iwulALKYO5emHFHUd3ZGFRGUWuBTzBxRTIj2FmyS9FrEtBFaGfo27sdlOXakLDss4ySSWB3huN5utytPLLz%2F2LU8GhqXXDS4t7x45O6XkXYaZSnbtCZZ7O9fUbXbHfFxEZxWBIvEOwZ7Wblp5%2Fm4PPp3xpyBBUMFykKGDlynHqIVOGyON1zYA%2FMjOqOcQP8Dmyn6cyALYJgTvqF3rde%2Fhsrmog9ss0Qx%2BXIItLVhXaRNio9sraOnPP5JZSm0M9rVpBGQzo1DX9BwXURzkK0rUA%2FRcENbCL3qsRzSsxLrxcqYPKAt%2B%2FuzlrjaWHAqc5zCrPHwG515UFooM3w8wP8GDRrzRCjZHWf45pK7Q9aCCpeSIHhIIURDIJpF0Ee3TkS6nz46DUthrXYfmdG3OJ5e73OThaJQzMqmyCY0Q%2BdHfFTohyaU%2BrX%2FCb7NVCbafehmlTsQaXpwK5NhoIQWAM5C7IYh9ijVCZfOHvnPMKLqnc0GOqUBHpHy1oaSWITch1G73WhsZ%2BMTBBqXNJ7m3IiBGNohDDvD04Y5YNQJ%2FxPiSslcKTFhiclTGuQuyBMhPVg%2BJJWp%2FwskE%2FiePXG97ENYtdTGnSagG3rgdw4uXAWUT%2F2Nu1cUvw7urjWmCagR1X9G55%2Fw57yIVNBMLJanDVzioI1FX7ja8I5%2BQxVRgbUKdtcHd2iHyBk3fs8QMw1C13fLwYcpjTRUUKVi&X-Amz-Signature=77ef1d1a53f2826b840134aeace0c9a8cf739f194388cc3678927c05828a810f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

