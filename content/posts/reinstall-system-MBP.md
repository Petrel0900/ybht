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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BMQETHQ%2F20261016%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261016T023753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIGl5%2BGBsZ2f7mTyIXWzrqyr2c%2BfjNiqEUF106m%2FI9TVsAiEAxcHIRTQTDEU8wmi4Y6wbPfUh01VYQ0Mwhrr%2F97yhT1YqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8%2BCEiZq4%2BwNuYzESrcA0%2BmxE7CHWKBxvmUNlOE30QhDNGFFkfMuC6PNGrV5hRVED7Iq9d2BrddsfGdSET%2BKg%2BIm8zTtPK0bXQY1bu23t2juJsGJEmujL6VI0ypHqlOs4lWVscHR8gPifPvN7N%2Bawkdg1jPID2Orp5cMfsuKPiLrcNa983zYaosqkXCMHzr3H6eUKb2Rc1xEvC%2F24V14TbF0hm9E8G7QUvLsq8KRqQAYMsuoPAhudYsT1S5cyknwHcRNhzZYnFCbLqgnC1hX1dW5O1EmBU3xYbUJ7yaHutojKZ7e4ewuy9PULX0ANQf7x8zb2S%2FXKrAEnZSy46WzyuZc2xemMPdG5eCrNnSRFOpJIqbGnhpE0xY7xyenUVV5%2FtWV43JtzlSHguLZvcOZOGgpWzRxlCJ21NJxN4AXoFrCyJO6uzF91hJ8%2BpaZZzmBYRfwgP0rbpBiPzBnVdXypKrSJjHHvx0uP93tR31d8WLXZsoNpFvjCaM8uHQV5OIQ3XnXQzF%2BNCzI%2F1mm%2BpJXF8fO3XUR83yUHCjGom1zUGaXTTqFOO1JEQXkoKp7EnKV34kvIfWBsm10sMhlaLjzDeGbLrTX30O8aIC%2FG5UxxZlhf2czdyrYlzR%2Bs5c4xF0nS02vu%2BoypGUP0WtMPiIxtYGOqUBIG4zYOi3D00jOFcgeKbzSLD4DwwAbIPOFLeJuZu6ycXm2E1F8vFovwOSjB8ah4f7yD05bnazVEWEZCfpHJTRdgE6%2FR0oNJGOhTC3dEwjRAPi8jhQbIXopZuiVvprDttrNu7ks2Dx1aHJIyaR0ktfhBvEZheJpx%2BnrsOw70pcoV%2BdkwQd8%2FfY9LszkERk3NEaXhdP24ktg9sPBxpGNR%2F34NiWv9VT&X-Amz-Signature=43718b9738dda307b81ad94dbb04d9bb8b2d4f5452c580a583dc6926c77e38dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

