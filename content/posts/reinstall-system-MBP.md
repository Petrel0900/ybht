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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666342OZYG%2F20261005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261005T032729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDItC2AE8XI%2BiwMyqJM1uk0N9aDbnccWL%2BXpCNL8pM%2FlQIgLyfwyWi8ma5xdpOphbeGHUUEG4plp07QlfsDhzinLz0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7KwieAqvQ2LkOdPircAwVyMzM5gtyLBvCct3LdP0tIaLFaVm6g8PB4qMai3wT7Xo7gIVmq8nYCFa7Im3qyw5JEgGQcrz5l1C3zmy19k%2BBl%2Biu%2BgurtN%2FwZu67aTt8uMy4zmHP73Y3mMagS8uQtGNTvOHyOnUpBVZuvjpZrXEMd%2B1qJqk2KOjO9uvryBLNZ5kXRxXsoT7evk3RVClX9bdSG8heE2TIVEjHaqYo4PKnz9sv2BtN2cuiX%2Foh%2FbyIOXHqaPL5MR0wkLou8%2B0EOOIz7UNyI0VxZLCJeqXWRCM1wXmnHMQg8%2FhP6TfDTa2tGDkP7m58Hnc5l3SAjDtSedx12z0AFEPnlFjO2hGw95fldtiC9gWZUxeC8nYHY39CDxyKMqPhDGRV7%2FMGWzVU4XXY%2BfJkQhQUW3SkFWetUkDNDKyqfUQKJdqWOAT1AHMLT2Fr7bdUn0qt5jMFU8JTo117sRkTf00sXrC5r%2FvUCKOVktjWttYFacq0ruNmZM6nj0beJSpG0FcsdOTNODtO5%2Fpg%2BM5jMBV6p9xqqhDPtyzZn9AMl1MU77pziKJ2IzXb3%2FsOU6RiMwbNb6SQgzOe8cLrYPsr%2F5yH8iWxpfu3Pscnlm0NqPGxDgSUIR%2Fdk30qBgNTQJV8iIW%2FsGKjlMJicjNYGOqUBXy9NMk8ynUN%2BlSlp8lsdVe3lND%2B%2FRvKCdiQJmuxW4YxukRfN1LhsnqzHbjAERcFpLD6XRzX3gEscYHtt8GV7UkuaWoLfUrXtY92r4kttv9SF0dltavHhJbCn2SUDjuOgz3i%2F8diw%2BppedwwxdJIm1OI7c6V9052iK9CBMKsdZ9BAUZ6o4SEXFqKRr%2BD7K0zTo2LmRNDDGdEjSIrPyUehYWbNXwGw&X-Amz-Signature=c6e9831d85930590db79bf7019e58e30b52b92adba83777a52705b45cf048100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

