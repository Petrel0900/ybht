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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3NLTUP2%2F20260828%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260828T082538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlfA%2B7F2c870AvsaxMHTLtR3N2Z2Gks3A3zpKKXR26cAiEAvIPj4%2BjREK9lInYiT4r3cE7BAqwcBqcfHEQ1yDANX9Iq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPsAPfTNNzUF2k8fuSrcA5mz6jBJjjGwMED6M8mDi4c3mnwp0T3cKCIdc4HgSw2MBU2ICRsA%2FngoOhyh3WnV5WFslGBs6rDNsovvmVk9P70ixELKEsnCOdqXZ3L0dduXn7xEM%2Bsk0eqhtG%2Bm%2BS3TdzR7MkE4S7SzEnpYcHrfnjpnEpfIuCOFg3Uq0ib9Czbh%2BssDx%2BAoJDHnLllNJk%2FzboLqILV8WGjIbqp3LBOTm8bEZWs5wXkj3QqIp%2FJD%2FdMapgJLONFJv5s1aPd6esfy3ivCcIQ1z8K1FAoGrkvtmwIXsvmwh7aOp4HmMRc4a%2FRQPACrK1Qd44TFHv094aNIp6Hx7qAs7%2FKXIRdQyPPe4Fqpem0C382UoqZ1YreCTn6ZnbtrySpGKR%2FTmMb6rF5XrkHwBvTVlHRJbC8bbdo%2F3ab71s2%2Fa%2Fqd1%2FK0XsQ%2Ffg4pXDpZjSdPY15n1jlvHLm7%2FyEQ%2BT8Q3Izp0WOXg0eds6EA2hsHIk9atDYdPN2rjcE0kV2mIeEiby73xf%2Byp%2BnKA61zwXmqJgivDw%2BwPHh6FEXP%2BugSTzSt8YE%2Fr7GHBxYXDcQqS34sLmnXyqxQXwkXczKu8FWSk7547QzirWl7ni2EV%2BhyPTOYtuWqYnFszGm4RRa6bZtfKVrqMlRqMKfvxNQGOqUBZT83XEd3wshXVgOFYpLtTszy9TMVenL55chBtpEXUpexhrxtnams0NE3rF0iQURZ4ocOyTiDZpYNVqJM5Qthstm4EnkFS06HGU8p2uxawo7Kc9ftpqvlua3P9O30N5i%2BpTwwPNW0ZL8LETvh%2FRAvQRdZY%2FUa1T1JyQ09PPFVhD1e1p%2BHc8s5VmzumkvXWyktmnhxkJYcqYY2DNI2dWa6oJnec25%2F&X-Amz-Signature=8920518a8a4f27694e2fa15433c864cefbbec75d13811a0c31ea1ab5e1591921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

