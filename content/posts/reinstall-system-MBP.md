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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U35LKQI5%2F20260909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260909T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAGaTTt%2BWHOyW0kKBJShTNti2hrbSTpYAJPpcXQY9v0AiApdK81q37Ba%2BmZHtuQTxSQ0Rjn8miSz%2BHNUEgdffXUOCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMEvEy78jWRfyj2YQjKtwDXxfqDta6B3wyCh4KJepy16W2nyoDAxyQ6xpxbcBIbQGECakHpndoQFyD2zXjL9DIQT8DT0By68enpNy%2BynBUklE%2BpZaUmU7cm6UPxweTfF%2FWvzoIFd7DUBkQylvOyfoYyYzZLufSmZ5Z4653Z4Uz849AchrOUe6s%2FaVxxLNtSbTZasgLMVQ6uujVE1PXNMFuZD%2BFiEp7UPJ5Xij0jQrC76a4qk%2BAlC4gw9fl7T68YFMgouogLZQhdo1grNbxzRWUFSyX91E1gnblDezo6SUQDOlM9auFTPLTy7lTzRr0N8hgGC9QflMptbccTdDPltdOyuvgN9TLgdW9botjO8eBie26VSfuo0SxKCRYUYtueVpG%2F3%2FqdXavDC46pFEO3sny0l%2BB2EPPivJ7RbWCB3s4CVjrI8uZghAHmyt%2BxZCZ0n5IS%2FYFT7%2B3SGLj5hWjn8XGFct07L%2BhMwTm9AVAJilojhwWOigKQ%2Fotmzvd65u1bggfmZC0vK3Kj3wUTtpcT4rlZHFGOiTpgqh4xeEwmhnzTYhGy8RgmxsXd1wscNN430yvpwmVU7fMDZNi%2F9T%2F8QYZBYmkmzlbZFgC7kQ0yNEI1fJjtoYFiEEVCjZXgBd5RqUYKjn7b69tBF3ZIU8wzfWC1QY6pgHjjARrRpV%2FpNJ%2Bkl%2BkbR%2BtdLZkar2A4tphYhztnNI5PNIa9Gg7G3ZkT1n3xhpzrhPH34U9jdb6HkNaa5NDFfRtfQY3U7%2Bm%2FObjY9ovbYx%2BqsGcOwbdW433TQ8O%2B7Wd4YDHHZj9TNClVYRcBQeOmPkhE6RPx7RA5BjcvxfECNwVuIMoKZ%2F0pKcPEIANAjVGVpAwpi6ChUhezEdF7kTC%2F%2FJeGZ%2FT%2Bt5H&X-Amz-Signature=6374beab263c58bcb86b75c65f959fa7e99b4f8b29e912932327e75681f08b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

