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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMYTABI%2F20260917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260917T025102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCCYjRKd6pr8yka0MrysZbnutHsAkHoE61eOxwiN3CuswIgZEHQgtIAX564pdEJAy4ECqOvrFuI5WXKhDyqV68fGeAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOiItyd3Ax20eAbTqircA9JbXU2FchQ7HmUGpPhgVqwjAZBBUYQXzBMgpf%2FcLxj9dNWnytQ03R2IfFJeOsFutunPowFQzxmf1hbPsGQycyFTKwaVDOR4zpzqrEu9OEaYb7vW2gtsoBJDuLOESp1RskR194jDXLmUxznTsZcfFzyCB52wxFUgBetAUPRCsWOanMphsN%2Brvulh6v5j9brMz3kfIpgdr5A7fpD6zP5ecfuqz%2FvjVcDMzGuqPzH7RgdrZk%2FlfyKE8wRP4IGo3Bu0vbB%2F5n8NCojuBpoxtdYkAjLq3nRIpmn0ouOYA%2BGSt%2Fqa%2FEfQXkef9FkTC3ZgJ1Y6iUcMt5ron0p5u%2FP9k6AaFuMXpoUrl7qi6fZC0F0tO%2BMMUuY9fsoVS0Evs6zG1K%2BJP50iBut2aJHZ5uqcikmVaofoIO7TpfTPGD16janIl%2FyRYe48gzRtk9wbsTbU3PRlDZUoeSS1tqOUbOQ%2BoL8OUC6x2dIndzPFED%2BfK6sF8Dr5aQaMr0XT%2Bca4%2F3loYLGHXAgqzz%2BdYU0ti8Tg6I8cO2PYLst1qFOSbKdBw%2Fc4ojHOhBOuLSCdbds3FKWowdrvBhdHebaSpad4Ej2vXEUsF7%2BomIk5hBl3bSPNQvAe4En6y1JfocG5NpnvOWAIMLKGrdUGOqUBonYxXVgxPIryfDRFkLiohL7HDb%2FSgbtDgA4%2F3%2FIlDXKmPdUn75kkjYRNbvVBSoeUiSWykFLq%2Bjm8ctT73%2Ft0ofQb%2FwkItK7eiGJf0hj046kx%2Fnk2TUAKbjQF8%2BE1ULgDOEyFHNb2yalw2hoeRVC0IqvxWqriDLqAPDxJ%2FyLOyLK7FolMNzccDlwAmF2AkPpug0uSdNxL%2FboQldP56df9%2Fn7A54FD&X-Amz-Signature=6734cfec8f97dec3ed3bdff1b1077b5a2f99b1fb1e86bca81cd51e2ee95df2d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

