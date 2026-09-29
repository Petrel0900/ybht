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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEPYM53W%2F20260929%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260929T033854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCGk%2FPVcdfQxf5lbm69Tn1HtoBHgeac1vacQA6%2F9b3DkQIhAIcp2ykojWYHjlyd%2F%2FV1%2FLBdptYd0uABgKe%2F1hW3Y7RdKv8DCEMQABoMNjM3NDIzMTgzODA1Igwhp965JmS%2F4xOhD4Eq3ANSfQvgehsExyMoTnDPi31RPAfcZt9mdLwq0%2B8szK3ODlKU0SdVTdQIN2ZrPDgmvXAmu5JEbx1nN%2FSlHBSuLhFs%2BvMnpV7yR3h4LPloYgr61QakFdPKqhbK7JEtwP4felceBrCHgqK2%2BrqZqRxFs8k5RX7QBNuuWmQQIllauFkvTvrAAu37kuCh6NwzUp9U20xy3e8D20VpPm7JiDA1CaRZU%2FGzq6ubNX3fCnNbTnLgNRCQhC1ODZLFo3AX5qsWQaL%2FheBfZt4t4bLpMTcLQgVb%2FvQZawXo6rzDU%2FSIEEtSrDL4S7ab54phZl4D602jGRIjEARWDIHaubJ2d5T6al7Rr9KsDXG9TsFhUGDOtJOBGqE1I7pYsiG%2BouZnCnZex5oVAIRHm8UpE2NiRq%2F1MSD0nfZiD3W6VlcAld9%2BXsO1w5YrcfdfyONbEqp7EPeh%2FXy8o1PyyCWNdS2H4tDIE9693gya9nQXZj8tyBPtXnLU8IWBXxFmtFGoawOL2NwkJHxA8vFdv5NJsY7aeTsKN0h5%2FE5Fhse2a0Bjgumn8nu1pzgC3QqD5BuyVAyIBwMmDHiTxqIm%2B%2Bi8kwJzMPU7rqqJtNMRGz4o%2BF1ZTJHXanHTiGCIE2mhs0PfkpWubDC6vuzVBjqkAbO6wH83RLV5OZPUuapm%2F0mby2PigeQ37MhY1NyE%2Feoi%2FeCGBeBUVgUOJwKc%2BZStAHb8oSnc9JZkzxS9vhQjzqkdnfn7vz1VU0NYiSCRBUA%2BDk8JuFicTebagx2U5Y%2FnT8NBQqZOZTJlupQj4KBa%2B7p%2B1YjJGgVlMgqC2Wn8ta%2BxvGnx2NpUcx2qOp60kQw06gOh%2BgAT53hvy2dCdra0c5kVo%2BAz&X-Amz-Signature=0ebbd942f9b9d79b1080330c72c6317e9168b905a89b46d48dd9896227500fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

