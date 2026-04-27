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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKWSYOL%2F20260427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260427T020807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDU9opbHf1HzEWf57u3tJ3pk7456PJRlHAx48yDftt1FAiEA86toUQzsiC0rxQwZw9R4M%2Fd8q%2Fms75sEbUdgbJCUu8sqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUEZzVJc9pU8we6%2FircAxZ3rHO7q%2BtXyd6b3FfZ1D7XALWENa5XpncRKv6r5vXykR1%2BsZ4DJ2lfLnxhyZqLSevhKwMiyExB%2F2PzNt%2B7EOruyTHfIISOPvl9qOTu093g7zMCje72T6rRZxfddx6rbUqn2w%2BqS7CuJt7wMX5J8wmPeuAtxHNwN8CaHaXKFy%2BorGSrrd9FkQJEz5fYVcg6XnVEsgTKHFcSCrTbhgjvdyHlqGuupMQv6QDAoojjuel8vd75nznF5DdjVlC2Y9xODK0R1qq3b%2BWd2fBjxmNAU%2B5d1p9QbUmZLZrUruRIfbDkNnnUB58WtAjQRfbO8zWw3oI0ONjb7b2%2FinNLUrUGo5Yb7GsWJTA1YXRJz4CLf3VhDkhOrcTmFa3SdykhC%2B%2FuudaF3Spc5fL2%2FJBMBJY60X6q7GmpFzYYUup%2B4sbNUgeaYb1%2BtRv0w9ZcbzGKUfVga6I4UFjVo6m4K4UvHtkIeVXh6d60fhBOQjfhwPlX%2BFYwhl94d7q1bsUwt4DlrGX9Sq2%2FN0JHjo%2BgAW%2FLML%2FXIQ69sDMfx%2BHSaSZYzL6Tz776YFUUFGZEER8oaMaW7wRsTJIvrDbSNSuUJU4Grkd5nlFyLcC%2FfIh7W%2FJqBKmhl5LgN1T8L1Wq1KZj22VOMOqIu88GOqUBTjvjEbLmWxuMfOe0psgZ%2BVzwVb9utNzOK8ELTb40GLcC1SYIVm%2FLIGiucYsZTfemm55QQts71oFzDlY0n%2FiSxXoU3d0dJguM11nzjMUGxvG%2Fg5cRyXl%2B66vCSp3QtP0Snk56%2FDDLFaKTC%2BA%2BcE9ZV74hstgnMVhei2L8I8%2FRmthkBRUCxtc6NJMwV%2F2%2FhzFWetMw7t50eI%2F%2FhfkFtv%2BHDO7YfwFN&X-Amz-Signature=9a9b62f5e2b454d3d0e303111e58f664f5556b49db1d3965c48905668b098674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

