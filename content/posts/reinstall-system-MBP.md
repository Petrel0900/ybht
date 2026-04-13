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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LXWNEFP%2F20260413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260413T020338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDspyOqUtNAif2mAMgpPpABEg3p7g5Uoj8z9FrvYDbBGAiAydgSQpnIYTq2S%2FXIF7NZaHfA5lwTJSZRkHOyIqAoWXCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMJieT7EL2Fh%2BX132yKtwD8AJ1mlVXIqGX%2FQegg%2Bg6K5YqYcgbGIE3R2f%2By8cPke8Pw67rfIbNfyjxRGZdm1HiezBvbrz4xEbiGKbcc0CudkKMq3SLAIL%2Bd08ecWU3BjbclCuzD%2BQeA8iTXWoBguuQjjyrei6BWx3tCIh%2FJGlI9%2BN8YqYI5hWiJdjTBfPMCZNbmE3TewE1XeuQS2LbVkSp2xOyixEeBxq8MSSGAuTPzbZr8PW89JndXw886LnMC2CZvDH46C3PfYFJ2vH4cleRnqbDBJmbwuhNsx7%2F377vPyKYuB9B2V4dlGq4rMLB1NN97d5nfthxc9ZS7D%2FRzKd%2B56ChkdmdXhPFID1QZa1eLrYYqukdtXvga6wimDsohpBsyA5QhLhMElSr%2FmT9uBVtV9%2FwYh%2Fn%2Fdy10Wvl2%2F0EEuTjYRfi4rrFuvkowJRyb%2FK1W5gHQFmqINY6fbOvzCMdfmbgmkNaf8sCR151uQ78bDttVgQ9K2WVO3tvCu5AzzXibkCrOBa%2BnAH%2BF%2BfIoVDNr5Yy8hwyTuINzrp8uxwVoz93FSHF5rvi6t4XqKq54t81gacEYOiBI2QZ0ceUz02O9wlTqaACNozlbU%2FCDhYL0zAb9IbFPWDAS0uvqDhVAqCdWGMBGIpMyCnRfwQwnPrwzgY6pgGd1Atwzph8In5QPI6Hi4e62BZAox%2F9yG%2FCM69NJWClD60hzkPUscfmQCYA7V6gm7C0OssPw6NO%2FcMaWPQJAsu3ITEQpI2Fal5lslvnO6xYWdKnBzAQh5N5lZMNrO6Jx%2FRs3d1Bqlhly%2B73V0xuR07HGt5AUnUY1hda8vhDpOjy9tKKWuveVSK%2Fp9ttld50EHeHexbtmtdpthj82b5Z81oP3diOdYJp&X-Amz-Signature=85088690c76e2554a7c768400d38eefb2929534e5a5b661eba7edd144aca8845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

