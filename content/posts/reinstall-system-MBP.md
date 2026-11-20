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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G5KUYD7%2F20261120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261120T051304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDxNoU3KOR2uKhjU5cqOuts0WpAsUSWq9w332FuGpMGagIgFPzFcFR7NsJOp2sRpdEdymVpTo2hY7fFMmnqcaEE2b0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFOVCl%2BLI7JGp7JbJSrcA3CgFBkRMCFwkJurmOUdVIhF9%2FXvSjudn2VUOKWzPkQNUu977X8TL1cG%2BaGOX4Na7Eny2nkde%2Bq1eaRPMzDUgyNwiFQTRtPxWkfysrN0963Gq0SMyAAoOwu6kdnmm7MyoHb3KrB6EFMuWbFIvxPng15dFODunjNiztOAqHjwdGZ72dlfuhLX%2BKIhGaXlazffF3kRglzqoVcvZPMJfBZo3mTDsQs3vCZO2wPUp4F%2BwgtpSor09zcs1QT8rsWaZ63ejpfbcoUrjpnMrxYyrS5IC6Nydh%2Bet%2F0CTK9Q71F1AqZHSTg9DwupGHTC%2F3RaDGpAtRPWInNP90hKaVFGoCEPGBF%2FuUSupmMrGiT2%2BKeIJx%2B0OsYf%2BKbgKiiZFXZT%2Fw0DgWno9HSNsWN%2FdWEzfOD5OdykLVTIbxTLj%2BOkwBUB%2BDPvx6LWPFtopyKwIi2qcrV2zndDLsoMIxYzzvSDs5dth4%2FKHQj2R2p4XPbxevizkz%2F0SFpdejqcMHgEUnMy%2BDOyk59RMGTB8%2BVO7onicj6N0Xm2rWojzKDc%2BBmDcqEaKXufE1%2BoF3abKy2idezLQWl2yLSfe%2FWg5ltocV2FZZFQYqFtpY%2BDxYR0NXdo11dguUGg5y%2Bj0VSwIt0lpeXsMP6G%2F9cGOqUBuyPBL1SSeCA6y89JGW5D3mlZMpM6TH4wPmHvYB4jPYAU6XsnRJ%2FOhverXBxLlKdq%2FxCU96zbjuJp1F2mC5CYUbEAaJDjE0lJi657iM3kSzdGFpcY6H3qitwhMnFFpv9QB4inULK7BxuTtYLT6Z0XBu0mfqtwXpYpHFE%2FQXvrhG68HCi8h23pm9VJibege6HCTwMM0xMLDRJY9P%2Bd8f9T78578oHn&X-Amz-Signature=9b6d0916451b254f35d08fb7b2e9b7aa841b77ecdc2e17b231f2dedb4a5f53cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

