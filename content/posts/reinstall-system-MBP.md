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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXJ3ZSS6%2F20260913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260913T023237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDe3j6jPvwAxXv8CRmpOKaF0MXMd12DJFrDwuMp2ajZsAiEAm5NzuTG8BAxFSBYpWPbZ6LsntBMJ6HPamBYtp8T42xMqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVqVQlJ5257nMa8myrcA5xE2ZVZSAbPBqNKvoMNLVsjlr745jilqvGuPzecq1eOd1g7ZbWpB3QG0jdxqMtmKj8lp51igTHwJDPRZ5N%2BYwLrbH42ofBtgwZMtLPg5jlu74hIhAp9LNhyZgEL5ZuPzweZv3MDp4IydMrG1qynO56AZ3nfXiiglWiPfPzLeqiT47K636w5rMCu2KVle%2B1kj2Q%2FqdjHnL9TwkBVCvINzgUMviyLrUL7Zr8xvvhdeOMiQ184zLmfPaAjUJVUdiF3QDLhvFkzMxHg6YvcYEAYinGBObuVYQPcz%2Bv67EsnlSBfJw6Bc4eOQUUYdnSt3M5q7I1sA2C7ORsHxtO3BQVpDgaPvAlZMZcUVrq6jHVORxCNQMehvW%2Fiu8dIOCJQW4MuceNRsHaP2Ssiw0MepXR4Zjm3Yhhr%2Bn9XFEAdbs1BtBeu%2BZZsiebAUAJkpiinimbL%2F3L0CHiyOSwI0nVRj46kx3JZ%2Bu%2FUzmaX1XLGNv4zd5EzD9GIWohKYAXagbrzYIG6KRH2lun6xIH5er35Vd%2BZnaDtHelmOhhXl0ClxI9L0Xyn2S9u%2FNXJGI0Tl%2Brv0HbjTFsWNI78szvydJli74jyxyHpvlnSyjnKWSEGV3udgS8Bx4yJfRm%2BDNedao4YMLuUmNUGOqUBB4rU6e2axqy7qlUbyf0339pBfJmlF6JVvH91dkbK0FHp3Xs9BQKyfe5xmqTE4RpLd22Ne2kGqNUWhWR4X3gTar7jNqvsLzI0ZGg652dbBE2BnAwF9aewXU5S9QK5w8iTql6OuYUm9MrtbPxaBRuro%2BF8sjrg%2BzQES%2BHbkxQGCx%2Fx0r7X1GKIU80BUdWhcdEZGeRBPR6IURdzDtvulp%2F91hOFz9bm&X-Amz-Signature=521415f07a78d2a7bec7efab1c4527b3cccd071a92f5a2404f4fab9a77f8b2bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

