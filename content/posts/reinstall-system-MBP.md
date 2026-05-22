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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QWDLWS%2F20260522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260522T024330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIF8Bf01XMXqwGq1TNsqCvEk1O6t893lRYAs1elJ78bTuAiEAsHlw29MdzEbtLuhqfOK1CHtAliTfd5fV73PfBl3viSgq%2FwMIDxAAGgw2Mzc0MjMxODM4MDUiDPb%2FG%2B1m43mfzQAsFSrcA8SEF%2Be7J8udPbrBexeCmqbHqQ451JM5QEDy%2By9OOYTWQTPV%2F2iQenBPw%2Fipys2YQelVobdx4embZyt3tsjaWtB8h671o3hptkJ4OTShRdv%2BT0VXoHypMhZUIwtOjt%2BV3poXwcOQcHmlKVz4ZZkzwkRzx8YbeZXbxPyeSvqAxI3nttaOmQAkb%2Fx3xvtLENWFPjkypjnRBb2hTNxnet9OhKKxouR4J1CDxYCDGLaB%2B%2BzzPrLKgSQVpwMWGR7uF5%2FRSkboUzhCYCf9y7DJ%2FcJ00cM%2B2BDEWu5Vo2Joj9QtiGGM2eMhOPIlrr%2Fom6y%2BfoVTTaOFMFj2bPwVLGkq%2BSl8dpqLY%2F6GvGhuLDOgTAdaN8e%2FKTyIA66YEOMiQg4on73TPrU%2FMacL%2BmSp0LGYNenD8uKbXX50hwVf%2FF9MsyfT9%2B5wW5NiZ7Tz4px2Tvv2VOx6q3C2Kl78DTrGSUCKXSKgjW4UzVBWrjiW0qsbEW9G19dBQ6C24MNdJQIAqv5kbLx8W%2F9twkHAZ5cmTT9J4uXJXqrCcCS9Wn35W97RI1XCckHnCj2PIJRsmfszb44yASrzDpx19y9tusior4kkhY47Wvy8KtA9JA0dOXlV9%2B%2FLMKJfgvFgjP8DCdAalvBSMI6BvtAGOqUB0Cuj30xegUa9uQLvTl0EGacHMidZOWwtSzP8rm7XcnkHIPkf6jpu1PMgCBA3I4I3hdVoHml%2B8M%2FEY2iTD8Nb9X%2B0N2%2FWNKX6NyAwRK%2B3PNuMg68aZFa94O71uWMo1tUbb6fDUfBjTPS%2Fs%2FOG3x49rpEz3VT0Dji%2FRpHbMAKOreX6FlVhJrleucO2hMCrky3jL9BqPRio0TcR1d2BfGYHH9v2xrZf&X-Amz-Signature=3b0ee5a3e44b354785889d140dd9f89dec60b506e1d3f2fd229396b2ea6e8211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

