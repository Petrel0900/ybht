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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZGTBVPI%2F20261118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261118T052824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD4cGuZCRQm42vbej1yPUXACQoVI3j4RVQpoy1cXxek2QIgfcSmMu56GUfao3ULDQtPCIN%2BXRH1waWB6XSSW8lZjAYqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMimfz%2FBnJO46V9FLSrcA%2FxY8g6oBCZFO6%2BW4auVsw%2FeLAj%2F%2F%2B39uD5YGJk%2FqWELzkbkNlrv%2FT8pn4JAV7ZhczPnXOEJ3PysF69OLRkErAQknBGPQa%2FEp4BEsD2R6ktsJ4NTVliVq1W%2FzciEonxTpg%2BsZ9cKAKStq9PZTdS3%2FX1TKhU80BOGevN12o8LHwlPnsdqYrEeSPCLBPEmK%2BLVm9%2BidyrwJ%2BfO5poXrrc7zmS3zMCxPi%2FdyH0spTT5Xhp%2FSNuIBo66v4TH6a%2Bz0LhJPB41c4npkntTOpXd5jq432zpg4eawOMoq9CRgke7rFYN5e32TnUqF6kj24c0WBdFiBxpy7MBZf2ABAfrtQ2rW3b9pdsqlNpNr6Cviwm1rE8nCb2GHgePIcvpFWwjBfN3%2FEd%2FsjyCvv0qsW4Y1ouMh5adAtdfdfEVWI%2Bn9gCTeSJ1VE8yz%2FaEBg7Rb4tzSwf0ptlF42xsRiOtDHbi4vLI7vAs48Ugrz8V9m9yHSr7u5%2FQNXD0eKhRyAFIIBmSZ%2FT5vHtugFWt5HYhdLiRLqpAWC0dXnhkZMOXWKl6cgKBvlY0Oi%2F389IYTCR5DPM6R%2BnRe27HSMLP9Ih31PAuXp%2FM8ABBR71SUuENY%2FCR02DrWTK6cLFec9QeMjCmrhLDMK239NcGOqUBFa1wcIZIj0%2B25d%2FsPEkjRYw7ocywpICTsrzUL5oKUtjNMPFCcc%2FB%2FvlOxkcA1J8LuU1hnWrxdPChnxiCO946uzJsLorqKtxiim4A%2BNbXTxwF%2F3WXTD7ovRtwmqxF5pxG6QoUi0CKD6%2B4GNeXJvx9PqNenzXaDFi%2BDGcU6Txba1DEOxNBGGDQozuesuxOsgM3R%2FCBcHc51CbZSiirz6AHQ4C%2FUt%2FO&X-Amz-Signature=60a3c928c52d607f0119d1bf41b0c5d427a430e07f7e99109492e10d8c6b1f18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

