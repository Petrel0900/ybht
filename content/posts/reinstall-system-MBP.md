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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CPPFWRL%2F20261028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261028T032752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCGrZCLeP%2Brf3hXZJAeJTj4rrgv7liFf7ZK6RJKjC3KSgIgPjYSvHVDg8M%2Fa1Ai8z6tT6Ci1XpSXC5MYDpa2CfMmOQqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKQ86BNOYv4rJrE6SrcA3zwLy4t1J%2FrwMd9NT5m6Lle5uIcHgQLNfahH3lVmMbPvyTqWjfeIUTq3M7D1KajL9UswMb7kvyA%2FFYYXdzKD8KG%2FV7QZffQNFC4jBNp5bEyEqCAERkDBP7RsROnUxY6cd%2BjsX5TpjMQqVxrX6sJMPgYG6GM%2FeazRvf1FIfO0PPMi9HOEqRHT0OSJKSAoRIwEHsCN5WDTeQOI7FU0vSiBdPAArzlW%2BicJY0dWhuffUi1dfNbo9vcGeo0HCGRNUjG9JV4HRd1QkRjor%2Bu92hktw%2B2LqRyGWRI9mjSSQn3oKUSIenb913JAwO%2FS49Ru%2BogHz%2FTxXh%2BJxZmw%2FeJ6qXKI6%2Bw2yRgCSnt0cfPtnDiBefE9Gy9%2BxhlHKqoM7F%2FfRvzbugExRtY5%2BArW66%2BowziZpJQlELqWn958qrDrFjH7o93um9YRDK1FjSXe33A9yQDvi1N4XO0%2FvCWiWf8nLgl6g00%2FdTgRnRwppa2rHViN6A6zRJSLV%2BbOkB1H3vdIz%2BZRNK3YXKyW4bX5sXlzkMdg69XKkbVloNUF7aruwUBw%2BtfnCRo8yi6EX7d11r8ZtmbnDfi%2F5clV4JGeJLKDCnrcNq5H3Kr9IreWiyOg5Ix8qwEYrLjhRxLKYpdCQl3MNHMhdcGOqUB727IEig5avO0EKqXtgft3Kbk6Dt%2B01W9N4jcHVGVkVGBuvH4KeCOycKCVvN7ahefFWdx3h0UBX3TF3Y0jN%2Fd901b0JigzRk%2BOIACb7UyxpMgo8qjS%2FyYLDS2CvcYStj459fd57H%2BT7boeudlaP%2Bnmvl2c3ss%2BFHCc6OM27vZ%2Bn6Qj%2FVAZeBvf3J2pEau2SIYFCiZpkt2ZcszoFSmLfwW%2F9VLyHS%2B&X-Amz-Signature=e1079f0235f0274052d0442f057137bd7d01ddf4d69a21f7408458bf7c31a0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

