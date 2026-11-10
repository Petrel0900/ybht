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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX3KR736%2F20261110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261110T053230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD5sMC1vnElZ%2B8%2B2WklJ7bJkxOOYyceZooDD44kkDutWwIhAIZck5ZZv8qJzDEW6B5PPSVPwQMhbBcRRsXwCqCYznjEKv8DCDEQABoMNjM3NDIzMTgzODA1IgyW3Mew0vfcZ5zPoeQq3APX9h0ESNzx5KLBtrhxd%2FlqKNKc1qyt82ghFtbCEJ36LcdsUnMPN8G0kmCUGER8TYIAz0wTEBC5gvzEUYYZbiwIdVv9wjMGzNNcb8F8brVC3IzCgFnY2FTMphRWXrwEmw2%2FT8Uc9wqu6DSQiiyDUrLSKTn8jVu3Zv%2FJLAwjp3bCa0COnD4fQF2XojnDa0Bn5moXdZGRK4fE5SPAu2jqrAIrIS%2BslcFmMY9VTVC1NPxqrHFfHz4hwWmqZqUI8XyKGPCXz1d9S0XNIpsUlOx5%2Bl2rNyTakgdC%2F5iMaKINzHeSWeDeVZEgnGFMoI%2FIN8cOIv54LsHLWRZty7%2B2ki4T6qfqhF3eOGM3UuL0us1ra%2F5TJKFV5rQoAbVnGAEN8QBH7fFUoFzvJSOW10hbDPyo3kPGQNDmi0pxhAmx4LolTK7KvWjSVWq7Xsnzoggu6kgWmpE0bCBHYxws7LpsSIRpMOTywxcXdz1XP8Amzd2T5uI30g0CBeTbR4u30KPXb4U7pyTbv9zD3NMeDzyDZA%2BV9rZYSy7MuTzTjYIYj5AKHsBJ%2BbaBs9arHDrhyAhbcYrZq6xTjPvUeCWLeLpj1jYU2K1zfgMzkR3fbKRZyJ6fXTWT%2Fn3hMC5nXWqDXg013TD9vsnXBjqkAVtzPqUIDIAJcZ457Dn2ebHcARCkKj88sbBFxCXMNIhi4JvheaRyCqCldQhjfsPQLtJVijfjyUdj8xDyu9ipHUNnFStAfm1aq3hPDBbdWsdXijDJGU8JroN3K0w5cvw1WMmHYp%2B%2Fo3pfHyxRjvalQ6Uq3YLIaS5XL7eVNLNQqKABPHYywL9N6IhYAY0734AlSvcNnkt%2BgozEOw6uW9ZrbLjEyiYS&X-Amz-Signature=bf0d5229ebbf6936cd0393ea2436693d186a0b15c5db180c18818d6061d49b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

