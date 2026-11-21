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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6DRRYZ%2F20261121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261121T050511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCYfa4c8e5Wsvl5tmRlEDWrSw3uLub9Yb5Vx72aa3nhCgIhAJBqBN2uzX0qsh4xf1SjXus44NYhiE7H%2FTPuZ%2FGkTH1UKv8DCDwQABoMNjM3NDIzMTgzODA1IgydfQ3b8elFYxnRt%2Fcq3AOC%2F7j1Ls3%2FBTkkqv5yiXAZMPc2J3%2Fj%2FZ2tt6npfqn%2B2ZUyaqgCAIzVekbhiYe3JBjSrtLHcWzuUNQCMUbb77mJGtgXcfF9QbioMPSdutYBJ%2F63a9zRaMX380D0I8DDQ4LSKJoetLrDGk91trhcDIfhaxTiVvgMtHh9UJrHWpAAnjepEJbjWI2MJHItvCnvAmPAGf%2FKYaYZNJnou7b0oDKmIXeSU%2FsVFkvmV9Oqs1bFcYBRe%2FBeqOg2dbgWq7iB%2FmC7IV5CGgb1iet3arBht5LJvL8WcTfXrzLF3wDPs5bHICdEUtwMemzNGGpe9JiCW38Vxpa02fckujBJ9Nk%2Bxs44dUql7PmFF7eLjftaDOqxOYfsYP2DH4v8QzPFcmwIKjzapsbUD836kZ030gCWXzZKB0PlYRjyckodqOwCLtXE1mq7XCvRcxrYcVu93ByewIH%2FuL3ttD4smvjIyKUnH38kEK%2FIo2RDdhY15lS9%2F8qwLgw5RexjW87O%2FBejQC9LbW6iVFzBvUBRWitPnm8fGqUWGA2%2FpMDhW02xhvAG%2FC%2FueXKcstl14YOqoPigFrv9J1my4PjFBTUinBrk8ZsFp5NNWsyK7giRllbJYRmq1kL7%2FYd9n1O77qH71x7adTCLqoTYBjqkAYDyQPL3YpfhTBHwa6sHGZTOFPVAdviJlAGIKi1j677II%2Bl%2BvpxoOm4mfyVQHbxBnLDOC6PIkBFQb%2BBfAF4W%2B4PXbfu6e5YMEfuedvEAhFPy9A5Oma8lOjOlBwEX1MupKinL%2FPmEYUYVy%2FN%2FNzVMw2JRoky8mrWm4ZrXzSvnCnG7vhn1hMD7uQQIeRlVhk3qXqxDy%2FhmmDbXs7Q5wAqFkExSrzhA&X-Amz-Signature=a382784136dfeadb163a8792a8a9c60dce60d7aeb9e8664cb802e15bbac915ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

