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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSRZPHQ%2F20261102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261102T034827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7PrwldMr%2Bbgg5XBY91sZwRbHGcgQTx4YrjT%2FAYY7f9AiAmbkY7%2FjAzVX%2BmFop1HjEllyxx2KdAX9TzmhYV8Sh7eCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMe70QtmTcdqA96QkvKtwDx5TK%2Be7kCZwBfos%2Bygd4pzxT%2FkVrry0z8bPAJGs0X6tSYMNVwlLlJKumICV99zlZLqV0%2Bi10%2FoRrZhjOq5CIBjBusslOx9eZ9iH0qa34m2tDyOWgUVQnB%2FUAYAl6J9R6kGzl%2BxyG38y%2F7vcSEqIoWhfpqI2H1lgIrkRu6vatD4gqlYz8sCs37QSFiqUriijr3w%2F14fhzddM4%2Bh5NwUugpKwlabnOnzCSQTDh52FpBp4LP6L6C%2FiDdksgNi%2FKbpNSU1hqbS52HgdHM%2FFEed19QYMDNbLvxzKSjSQtSzDNjUc0opaA6%2BdEsp0B9LQwmOzcmi69lKhbBZsiwDvXaHSuV%2F4o%2FwFXPeEK7NW3iMmJqV5rxaPgHgX6294LJxAPUZrU8m8rXXZ31q%2FVpT9chW6agQ3DpC9POTS6w6x1qub6bPvx%2FgMdi2aZv9gLC0zpWJatJ0%2FV4%2Blc00tkveg4%2FwxytARWvxjmB%2Fq47EQ%2FwW%2FmETwxide75kMsQ5bRO%2FJxUicdOshbMhNzhqdcPdadN3meQ27MwmT80s5Du4gX5m8yOUXzWKKCyLnZpTzA3Z9XYaOHTi%2BXwTjvdio8NXNT88OgcfdK6Yjiwd5c%2B6bC835M01i%2FjTWK6JSQxgvVSrowsNmf1wY6pgGEMd7%2FCKST82pqPHT8Zxxh6wE4I2HvoEQ9AlgVKNdWWAIVoD5i6m4AAoUVYLvnfFVXtmfVWdckFGx6XtF7ZZxFHAWAeGDCkIhyPuDWYTZtdLzdPoyzFQQUO96bUPYcaSTunAoValTmkpfQ08MXLY7rti1FRqXIZap%2By0pwOfk2xjBh333oG0UWdJQBvqOxKv7dZj8QSzsX%2FyLz8j3NA2%2FHo5u7J2J0&X-Amz-Signature=6c8253d48f2458651c263c1e00c95c69faf5bccfab4c29de478ed26b8e2694d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

