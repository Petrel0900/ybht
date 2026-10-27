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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTX222X5%2F20261027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261027T031340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDLdCzfC3qGofDDoaaIPEo1M2Bh0fecQNabxy9WGpE1OQIgZGWovHmQYJeZcPV8rYSOcga219QZI4eqdh9JKjf95VAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCe4mzKbAUBzmxATyrcA8cfHVUlL7ukFfyVA%2FaJiF83Eb%2BcW5mh0eq4%2FL%2FQbaIMXApgDJqvSW%2BphCm%2BT1DOmMJlyd4G8pf2qLMOE2XjPuWLA7w407rjAmnHEIncRN82MpfUAhMZVTtaPF18l%2BM%2BuLMeIH8UstmYvb0GDYTWCZyJ9NyL%2FVakBuNoL%2FkjT%2FROGGFD%2BPI12bTlskd81uFbc6RsKE6p8R0gpl2SYkvm%2Bbt9Lk6C61Hk%2FPxyAPlBcANVEqZogXmGIaN%2BUR6t2JmGOXfUMc3Dlmf6l%2BLESPK94gJhrjGXu2r4Q9ASgKzjmkSZ%2FMBpoU1itMZhpT5Uu%2BqCmX5meNc8fj0wmqvUJD8vSB7WEYxhEUyd%2FNKils7LBykROA5Om3wBZ6h3jqfXsodHL9CYch15d09hwVFDsc2xp2nhsHk%2B14lmucUqnVHXZnuayQ0RCImWS6m%2B%2Fo37P73Kkj8r3SBtl0SIQaUdnie5v%2FSTvkAeOb0pNwBZXOPqnmBfwsUAHgQFK%2FI5lrP1bOi2j%2FQFVvtClD9biBq5f55pzWXfDaVaYsPqO7%2B9re7z68C0pG%2BkcGRBl8JdqCQTjUhyz9%2FHwOt3k%2FyYRgH27mSDHhQ6O0xikUqFoPfRrtQvdO5G18jooWcvW3ThbBtGMNqVgNcGOqUBxBKyNOQ6yo4d1fX9MFy3VJdqqpCsyzPgpo%2FqO5UG7nd0F7zAPY%2BlJ0idgJq2B0O7aaYqqbEda8Jto0FTgbsiuisCm%2FWQm53dbwcoKXM1LsWa%2BFsHoHiGRc7JJKLhry46siRNU8JF%2FK3uYUGonp%2F2xOY5qRSD7d6XIQflYyhToBvY73ruvu2bLNPNZwLXnxxGIpJx0prC5C7VTyWHL2r5bK6KLmtM&X-Amz-Signature=38caf9c66670135421988883e873fdb9f0b0f64c9b4e1f599517544dde5b43b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

