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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXCAUWNZ%2F20260203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260203T171457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDMIDigBiWyQycwJrI6cAa58EgHc8FPG2oW1r8sNB%2BXFQIgP4aPzKzxZ2GppX8XjwT%2FQSz1WxKlTW47JvdkIlq0NyUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDILKrAqgrv4q9Kr0xSrcAySAof4g84s0YHLabqIJaayaKorj%2FOkKcgbchMT2BrZQHL%2BYQFAbfX83cfghhmB%2BHjCWDk2L1qCwRfxP2By5yBnA6%2BnAH%2BUlCE%2BaCm9c%2BJtoFf2bahQekAAHNAVYsYYWikxhasaes3KMVw4z4UBkKpqA5vk0rg98cZgANOkbYXvUy6Uj%2BAPT6sY9iU619UCF6B99aK7PtrGsvcpoi2IaNHWhUG%2BpqgfZefGvKka6VhYlTnjIEXqv5rWO2WPEJVDlrngtVxqGc9mG5gkJFvj9QMk63Y6C1tUAvMijP8CawZIzUMX3xu%2FFmS%2BOlZ7gwkm0F2YbwbjuJLfHNP3i5pAHRSPysha2BAwzKFlP0D5H7BXPXoEDda2sO27LSn4v6ftMuHauC4lE7tGcn4gXSvvjG3MpCv0nJ634VtMO%2BKU%2BlWhJrUrzF4l9zvqo33CJEXAcJd%2FXomR00R952YfhymA1EK3ZD6AeuI4tC9Jq5I%2FwdvBRu%2BHppdAlPff9TLMzmzNSMchbpHjb53A3UthIxa723v2XTlkuyP4eOcOhiqO3oP42uuOTjt1%2BG0Xj82Fx7egVmayjA4xkPFgI4y4proU7JMi3jAlvz9o3ksw3z3%2Bm9L8VbzhE7Ym08p4jhOuPMLLXiMwGOqUBaqI36obc8mYfcsgNUYVXJgvAKGtXv0ngaYZslx2mbaWRSjtgs1hgwxrNOg5SDhqB%2F6UzjEYrbh%2FtHRpr%2BHMuwlRLp4XqX9GSMvxMyGXFjg46XQvmdoujudRJ09qM2mUxP4J%2FjB07i%2Bn7O9qlEo2m5BGEMF4OB15TneRcqQllk3x9P1fjsg0pJYbJlJOs3lAh4KPx0Y9SgoUVlQ%2FaMr04UCAIb1f7&X-Amz-Signature=74a2cbd9f472f0783935e30a3649e30e7f683987f685864835277286b557204a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

