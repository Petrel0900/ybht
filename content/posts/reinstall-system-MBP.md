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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S6G2RTR%2F20260221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260221T012352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjpGFw%2FGpE8O5gwaAiCwRrt%2BInLFqM7x2DLz1wo2dKrAiAVepKNFKzYBNgpNr9294tiCAOsBrTCfQnGHwazFzw8FSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmLvcRhKcbuyjWbY2KtwD7o09ItdupqUpOxNlSZ%2B98GHTObtCoZmNpZDWEovnLDpqMlnfWnrQi02N%2B1DfCj3r0xem5HkFrSyBzpseXJdsS%2FfQtUqLgl2Udh6%2F6%2BobAQktyb6ffq%2FdB%2BB7BMO1%2F3O%2FEFOgOmxvTX4ngCMT%2FxcmUU5C3akQvqIrFpJpjrbRT9llVFuRTW2eBdP%2BpjzVr%2B3c9wRc5T1ia02cxtrVAA%2F0%2BU3BQwbSy5WnB8xWsrX8wcjRxe%2FCz2hXVfflnCOhjPP%2FB%2FKD2kHIOwiP%2BK6FRwH6hcW894JP81hRvW0wpzA1V2Il965eftZGCbHCiGC3vz9RkI95JOHV15DPwiPY1v4SJ06jDTO9sUckX%2B3jafAF3AhFdvw4iCuu8t7aYeEbC%2BNPfIUa7WzYe0w6F0eMX0UklqvQnQFnMbcgqttRRZ4jL14t2faSH2FdqkpLcHjUNe11A2zpsX%2ByuxrWA848kKzIeranacrj5%2BM4d3vlvrYJn5aGPmThTOBVc7%2F%2FlpOHD9x%2Bsy4xNVB2yGOioE0WpM6rxAdm6tIoBuZ%2BhZyCbu2ae10KwJd6xgSVoXHCv95PHJ2cRjAiMVOAkI8Y5Z7Gj3HDLshdOliH2rztags0GHVRLIMbebN9MQGye5J0X%2B0wq7XjzAY6pgHzwKY2yiMq7jGaebTKAgdd%2FleBva5qweVyXuLfwHV%2By4DzYg9FTHt5rr73ZDIhgMq4u%2BoNoWI8OvjdZno%2FKqh7QeR1WRcCz7teBOJOlEZNi3nPcFJXF9LpKNRg9Vm4x10GSOdQS49yrCxjDPeBjj%2BYeHyD%2B0DPqNeDGj5LON1cTgj1YSPN2MlzyqFZFl7CfVps7BkRVvQlasyGDGCkpY%2BLTku44Zyu&X-Amz-Signature=a5d2ec4755a53cd61788c46fcd86faa6d54c04be549e713f5b9439e797412e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

