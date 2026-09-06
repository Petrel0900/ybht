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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZRPX463%2F20260906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260906T021935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDG21UBqC6%2Bds0YezR3pPSwp78weEFC2Wyyb%2Fw37VsD9AiEAi%2Bn%2B2QrVMLWJ99yNg8qIvEyX2Um9tp20%2BmrlJBUQWGcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDF31PbJJiWE8gx6AyrcA8MgmOWSbEUtYapyw%2FeNrEU1qXyu8wQYLzUhzzJpz4iRU3oh8EbWIm3rqJlTQYDsYoicQjIh%2BNY7msdxKonhktFpGX7qYIMIh95%2FKbD%2BCY%2B3cGBnjs6lXlmbqI93VTMUrEW9u6K01MEZfG%2Fw0Y5f%2F7uEkRSs%2B6vPL%2BD9IduUEl1Tzoy1LsTSnDxzejTBmjWVdzCDcBsNVu5Ryq5l0Av5rNLxWTLEQTrKcqFLc8tkEL9dOn8PhJqg968Ryg%2Bx1E8l9yRW8xEs5qpv1Tg%2Fiqo4qoGzLGd1r0Laf32DQ7kRYdS8IrvClf0%2BsNwJz0iAwxQbfEdye8P8EfbFlczNL2lXQVyQiRzSWZy4wv7KsnWasfF%2FSO9FvcMgErd6ET0swBBrm7qz0hvzYEwziyNVx38t4lk3KcKpyTVEF969SCUtwMSxcjRy7ZUK%2BjRejZ%2BpwraUJubANMTrT34O9EVEMSkaoOGfJ0PD3M0joE0XLcPeY65dt%2BbPyBHzSS23wEpHptSJiCoqNICJ9I1XmdGAZBgiRpxsHr2H2z0vUvP318S%2FkqOqQ2qZIwpF3ABHA%2BB0TvvkLo%2FRGyGDZnpFFt0QEj18FjnqchIPyXAJnHNu4CtGEl8ZQMJ5tbj0f2fBCuw7MJOF89QGOqUBuVrNnGvQbLQ8jwBOjZ29JOC%2BGJAEkzfNIvv26GWJrLhdDDhmM%2Bda5BeWJMXurjvE3%2F71qIyQ0cWbP5r4ZsEbg49rtk%2BdCmt0veqoPu4ymwOVwHCC53lJoZRVAHchZ24GjzEZ9kB7cJK3hxA0cvXcUSR1jNITkcPxZoouVLBD1MWMFju7nW2bQThRl%2Bu%2Fm5k87m%2FzEMoO83R%2F0uiDKLI5dhuvBHCB&X-Amz-Signature=1a2f97c9f49ae9e1bf4b01e1b3cb4575f6db839dbdc0f02c1294500bb1f31042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

