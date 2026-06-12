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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J5WDFY5%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T025303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFvRiTf1gUtG9ILXmx%2BVZr4IOfSQ87X3EX397QoqAcvRAiEAtO%2BWdSZvZ1RePPmcnln1EK49xhadJD%2Bxrn5lqKAuDlEq%2FwMICxAAGgw2Mzc0MjMxODM4MDUiDAX5UsJIgru%2B0eO19CrcA%2BehA1TKd3FCqmZMbQTGIBg2t0hdkvVR9NAkGFsVh7C2pKVAnPg65upE9qHxClwXzF%2F5VqcHLdgGl%2BDibxsBroGf%2BCc%2FA%2Fy4vc0q3n2DcxlIQkaCrob4VIwk33qTCc60MF0eIvcla1K3ZYlhWiK3ZbQ68q%2BS5ahkC80pZi42Oc%2Fcq%2FqbV7rj07xtJsbFkXSK8ykgZlYmZpdjdoCKRK9lakujUGzZmAQchfx0L3yGulqXnTr%2FiX6YMeCbkTIOd9%2F1KWV9nfEYwL%2FYxPEJwLwzsWNs%2FdHdd1En8%2Biecw0Y5Gp3QFAnP1U7%2BP3lzqxzKgEkAqAs%2FD7ca1LW86sPjoG4MxrPPjaJDVIFqa6utTdgcBaDTCkjq6cwO8F3sshNRDtWvVIIgY5zsPHfSFRnw0O1PYP%2FjncuEskascMlyh0JUf84AfpP6d6GkaXLX0Qd8l4rJPRPeGvYEopeYVovJ0OA8wcfffjTOiq%2FeG%2FW4ow310zWZ66d%2BwCmxoGP2gNCxCtkPkTj%2BOikTbJe7GbbREh50nRn8qTbDri%2FOSVXttwOV6nNfHPIgRjtLKgQIW7ynlHKDvBJUV0aFyp6VU%2BLpQQTlMnAMSKlc9aySg3cRBHUDYuNzUMGtqgfUVllENBnMNTLrdEGOqUBXUgT67a8E1xWfk6afPiS2LvTDD5r9CVRzZ43Z%2BHUXP%2FEJ%2FRUGk%2BiPpDPwTQ31whru8%2BvjLI%2F0egulyCcng1sshEvE1n2K1vBtpd3%2FNsTtwRF3CqGrFHeRyfQK8Fm7uRTZ1EuV77rye44VVe0CCiYppu2RjhJFAaKzQlylEK73yCwIJZDlk79fO1DkR%2FKrBZhYXHN%2FdySRBPT1s3RpRua2pc9kHOZ&X-Amz-Signature=8be80fb38b55ea55e24919254a3dfdaabc12c187fc6876fffe7c24c44c3b411c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

