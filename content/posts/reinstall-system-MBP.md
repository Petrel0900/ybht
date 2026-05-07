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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJXMDXLX%2F20260507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260507T021302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChG3OhFNPuCorv1ZWSJOgeHjm%2FWK%2FXvr6ABN9YFzIteQIgUd%2FMn5CEHufAa9MxHpHpTUvi1dW57UWBFi4a4JWoy3cqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGop%2B1HnHTEd2piy7ircA%2FyeJEmRy37jWQcyc42vVoYm1TTr4YwiiMwm5YRhp%2BFxbwifDArsTr%2FIuSr1DR6Iw4X9PZuar%2B%2BYCpLlzfpReDnAZ7RuTagK8KTW5cmiqPSByipV%2BWS5pQDsVjA4e8LLn8akFIGy48DLJnV4%2FWnPfnNxqXi03cWRi3bDLF0idj7v%2FivZticGZ0xQIMUXbJ%2FY%2BaaYUT9fUR5SI5UVxNfSWw83roiOBeJfrUKWR4MpFxDujUE1mURlG9YMvWdUxq1fPHD%2BxS9jaHK2uErVbwkoRVIEH%2FK6zWhubo9iYxk6e%2F%2Bh4LZe%2B2Z7pJKmSAfN8xRUwsEWZzcG7ha9gIhJn1qOTuqii4TJhHla5DB9pQw0nTh9LcINTN%2FPqAGMDh6nQdCM%2B8IpZZK%2BBJV7suy4r1Zdzrx94nrb1heY9rSC80WP3uWdaMcHg35%2BtkVaIjzX6Cp3ugAsxP9VpX2pH7kEGwskU28dkwPNyuts%2BCNhF1dpHsD%2BV8IR2d7RrlUOltNHANZVI%2B38QsULD3YERCeoVFazxoyz%2FQRDmEdvDRbmHjwNajJQevvj9ou63aQ17dWhh%2BwpvIzHFcFuoOgRX8usQ4eqP4n%2B%2BHSpSUgF%2FEVErc1SpOwyEiQl5t3CDmBwhAvRML2I788GOqUBi7VbMtIIcAo%2BgWd1kkJbfT0vFaZ67AonyqM2%2FUrgbWuJnuxB1AuMCa%2BaYkX51qYyZciOD9qmYQT44hiUaE3mfhjCWnllfEB3DMkni9wxZcUtpsOUA2KBOrdKQ19rAlbcfZ3syqO2h%2B%2FNAEo3dJ7lsAsEA4PeO%2FtlTsyWmIB1Qc%2BDWJf5IYc2Pl%2FyvZTMvvKVCOCq9%2FW%2FZQ8%2BKTfyCMrZ%2F0c2TeXY&X-Amz-Signature=4167ee9a36219f09d2ed735febd3617859adf747ac6045e3283349f83dea94e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

