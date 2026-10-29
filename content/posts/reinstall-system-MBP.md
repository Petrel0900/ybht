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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEWU3UKS%2F20261029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261029T035046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIB%2BnFKTUT9aiOTH9K3benJa%2Fskkb1o1eFiXiQO4NN%2F9EAiBozYsZHF8fxUzLXxpZjgcR4Vr%2Fpf3ViLCjkODiia2Toyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMnx3BtkKhgWXJQEEYKtwDdDpdZmAVBv3LzsUlCBUhgutFaZLV63eAbsJIIuYIWjMjmR%2FYpCuLMCAT0pgflzLMj%2BRTSJII3eynsDjB1m53YWu%2FBLrvLQHu5vpuRhIZMxcgtBxBXmQtE%2FOkL9SkwNm2ZbuNH6SHB8LANdcxIQ699KCdy5kPTZwsBh2XiN9Ot0viu5PHrb4P%2FilODkPzQdHK%2F1N%2F9H%2B2tk00bwlyghvyQl0cLqBs3birYMK%2FSJflAnENFF4qJykVMDnvsgN0dgbi6KRjMnZIzRryQu1YxIlyYJVx93%2BhLKvTt%2BYZqGsCUUBtvtOjmU7pKyoAdSHOnaCMk0i%2FF4NZAmSs3v1DK9UtH4shChq0%2Fg4Ug1k7M8Y%2FwUHfQzadxlwqEUYCNLTkWW06U82afg74DIMMWokaLYGwIraBFRxqpHBMMvZ7x%2Flci80VzAM3Y95s%2BEQEoJx0qM1WZF7bYpC7Xrgroke1G4dO1164l8uJ3ZNYP93za7%2Fd2d011bTvPabFoW1FLUnbtqdpN6ArrXVPQsfA944HOHxTRM%2FG%2BOWe2R%2FUi5yiWta4JIYyzC7EyL3wX0EhkzhjjAsyPzUqVNu87Rnjfr5TKpWsrabf6n7ELL1x9Bxo%2BnSQvx2J%2BJP7l9MzuTSJv%2BowpYGL1wY6pgFIgdMPIzxLFZZuGG2NJzyGPntbe7WvlmitAe9Ip%2FUFrsll8onz0zB6YddRImB40qGvu%2FQsHyX1%2BLlxNE6z%2BM7UQULU6KvqKCppdcsuSFOrhtGvbWAuuKPocun0b3%2FA%2B6ASaZpzNd89HgqqWNYz4Cmq6dAsdhh796Q4Y1v0SR4ZRN%2FXC5F6KNsGMkHAJx2VCR%2FInwGyAFdyrmQBXXFTHuNlSwwjlUYm&X-Amz-Signature=fe4097ef63815441f4303e99cd396fb860189655091a7e86861f0ac8b7f70fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

