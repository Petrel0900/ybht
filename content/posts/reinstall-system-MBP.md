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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GQXAVCL%2F20260402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260402T014720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuLLanrKzZHIst33sive7RFX1PgXDlchgVywSv7WMw1AiEAxI%2Bb7Q6bTR2siJHsMuZSmUCZeUcCwVprYRrTyJz9eBoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIeLlBI%2FuSBEjXBmMSrcA4Kx3yAKNCh6tksItzakPRpymKVzH9fG4RBlxdb1wl3PinqDHOMMSnf15zN7hRbMVFd1xte4Yrqir%2FQjXHtxwJl2mllh5RD%2Bdds4XxYV7pfRfeV4xWrZhcpLE5YaF%2F7mPha11VShmHB0p8mh6fS%2BBVH9OBQsQwx0dSYRshi%2BXm6VkQ6XWrEF5IbZ3O%2FSmtix8zIgGUHf7aLY9bavjMydzV%2FZvX4gJpBPNaV5hjL8OMV6C5rfPuOXOC2jhnr%2FIwMw4BQOVrwOBOwZZJzkmaGvJV%2BLyVzYnVxI2Cd4zeqZKRUqrt4mt3jAD%2B33DPzfvTF3BpbnHMVp8py4mro2wfEvlmpYcc3EEPCPwZ834znivgBgZitBBM9Gt6FkF3m508w4gX4LSlOpYYxDHsNTtqBXaYGE4atyn%2F4lZ4%2B63Uo%2Fn4I5a3KqWqkGQxWqukO%2BgNlF1wATxd%2BoYPMeXPcDP%2BkLUzRwRxhQaDTAXjpboS9Gai9VcmFEBmebuNkIO%2FM8BYD2e50HODdUdmoC06hjjTCHk2XHf765lp5SGhRvFMHciPPZEq1ENJQ7cq4xzQlefDuDY2AiXBXt7ZUweUgHR6LYfRCfsscqOItVBEY1uhfO3XfpZHYARrxCpNsjIdubMLCLt84GOqUBiGkSr5P6iTGwZuawpSJnFhkMItSx4GBrTfS9b8AJHFqQIxamQd%2BMri%2FFAIyRpV6RabDioCSrYpgCvthS1Ryqi9rniAwfb3ybO%2BWzU8lkuISVUYfP19NS%2FIZyUXq6RvLNFy9LFDQQrBiuIendqTb4tQ%2F3kyDaknjpGWo88bmkEvTEa9BmlnTMDf9cUFqN6UNp%2F968KqkKvIGp7I024G2n6Cs1idkz&X-Amz-Signature=546094a5386b63276d241117412bfca2a60bd1145c582eb374865db7027a2001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

