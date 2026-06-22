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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPGWLZ6%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T033150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFRSpSYLYrsEILIJu1TKzAEbqEe3U8NqAD%2BUjEewbX2YAiBVudkOxg1oxJJVNbpYU0zotLonm0g6aXj%2BMBfFPkADByqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBd%2Bfowe%2Bepja6tTLKtwDa56JNDS3ZqdysWg7r5tSz4M0VISIfjnpJTK%2BIm%2BYcgqsS8jZ5iu0biYz3zQopHAybCardQsaJzLNXHOBz1FrLLO%2FAEcP9RlfaOohkMevGhdwCKOd9Vl7e%2FrJoIC5OIMG05gUjLCFzXlvXhYmYIwwz8cQABKswmEiGSdi0nGmmSf5WJRswJU5mvYnpk96L6p5MCk%2BtFnBjTa9EXFH%2BsIMzz7xxhlhHiAbNBgjn7rL9thCrWstS3ncDexWZJ32gCDcsgmnPyQT1tBEE2C42LHFDkGIQRv0wAocRt1yxYcADIibT3Faod7ghLhzG0a5Rq8f%2FHrCy%2BvqZnIsHrOuCiHwOgcI1pPhjOHm5bjcJzhouldIb9ur53H7FxzTj7tvMaVUxvQNYTgjs5S%2BBsKrY3%2FLQphBIMBU9FGkf2ElFcpVFvMqFZwXnFw2V3u4V2vtqUHJQfsMAG%2FFNW70nmENNv2MReGGCt7bpTtMn5hbtlWsB7%2FfZtftr6AVQFyGtTIahaWjO0gyPJ90snKn89W5xF3aiCvRSJcxPdvAEtbr8OVcrcISy7I%2BckSl2CZ11BTgicyOgWEIniu0mgKLu64E7IUDkTnmC9TRwzs3VgY83Ao3hJJwHchjelxmAF6ag54w6tfi0QY6pgEjerW4U%2BoJjb3bJhGF4Rf4TllJvrU1FzMdNX7ivNZ0TXYJoxiq3VRR2gs%2FEnynLCXJaANpDAS2X3BDiZCkvsS82aLuXEEcUzNjOJqJU5tjYGbHDI48kxEq5vWtZUfJe62NAyy%2FVL8Gn5dD2Q2E%2B417b%2BhLMabnLyXmeuRwO%2FThbTk4B6fecZg5rY84bRnpmN72unkvagZXUxQ5M5k7%2F2UNpIn4skCa&X-Amz-Signature=632f826a8e9404bb871e018a99502725778e5bb324cde0c32902f957a650f95d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

