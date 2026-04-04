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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RMFFUNP%2F20260404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260404T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClJhW2sdqvxz2%2FgHhC%2F1HhAsfbs6cMgohEPq6cT8%2BH4AiEAt5VJZqMhpG9mas5LSZMH%2FRUHBxCvUoML%2FaJXyFa8ew8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BlRPmhE0xY52%2FdSCrcA1wHuyQy2%2F4CeB7IVRJ4AqrRO9PTCm3mTTEsP7wNHytO1p8HYiKBLl2mW3f2AFl6fYD%2BrpsQpo5GQih6ui3JF7kxTkablyPCfecrsT%2BHDncq%2FIvC4R8b2mgZYD8S8CNO1n6EdR5WXCkTB3%2Bsis3Y3YQ7nshmiplW85vtmJVMfi%2BWeSgKRCkLO3A5W7FOdv655AAYNmagtEEC3qEqLQaoC3Du8%2FE1oyr0QHmZ0xIS72FH204c6egybOjbfiWpJnEDPJPkKDR5uqP%2FI1%2B01C8D9j7bpipdjn%2FIket1GFOTNO%2FPvQjNNUKViM14MRVENp8kulsDcgx3bI8BFoyxAUztLAN%2Fjkzks6C8Kdm6zh93PGnJtSGYP7BpDE%2Bjbg3imWurWR2COgWRuhqZcoVfPgBQW7JQYjKRU%2BOMca4MhKY%2BddZSb722RkbO02HnTBm1dY2OLNZY6jFld7kJokUIy%2FZv6slng7Y9cFtTa2%2BQa3gOUw25Pn6H4vx7%2FD0u%2By81L2Eg137XIvFY0%2BDXpSLFpuP4Twb8wggwf90czNugDLzwlQVJRdX0Mrb%2F6sfGsAcMYi1rzvyBWF2xPioCL6Gn8AHSP2kO8h9OMeb%2FdeEzM%2FltNjr14mvvt2YkzKJZrGiAMJG7wc4GOqUBmXSyhd%2BvUOF8uMI395F0y8lVYY52IVEEVt75l8M9lZF8XhkXTb3akYVOTIrgw4%2BkvA1iPZ0ga%2B3B04732WvXLvmAA85EUv0TKii15zpnAHC96hBRlAe9xrHl8PjYzUQRbYW0BTiMYBQaMrK6J6eygCrqePYgyM5pR4lqNfXgaxIdKiQ2YyB872pAYiP5Xgh4VSnuUPrRkdd0rqznskWglPivOG1o&X-Amz-Signature=e3775520db5361e21549cb687b564fa0bab9185f95a750d110744ca335e14a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

