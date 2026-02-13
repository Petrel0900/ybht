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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZRGOE7E%2F20260213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260213T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDqAG0riCRD4zPyc5UW%2BWtdRCh3MNF8aeXSoVEwZwV3OwIhAJ8B%2BRQPrslZlxIWITYxyH7IyY4IoBgan98RAMOSoxACKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxg2NcERZFsAaa2Qm4q3AM%2BtzB2HwlenDyc3z34cydh3ITg49LrGJyPaUJcl5P%2FnVIrwM8HRhvVa8qb1GfxQTJF5Eh8e%2FwxVbbpJY5ZulzEudlvm8QFAo31vteIN%2BtFInp82EWSuOcGvDC4J0tgkcQMrq8geIXl72NFwdy3kygad%2FgSbyoQe7xBEyzByWjsiukeyG%2FvdTyehAuNCJyVVBrlYI7%2Bh3RIsR9lB%2FZlbiTLpiSE5e%2F1IGZRYTQWXtG8u4IdymFBLpY43JPOnDCl9CaH4RkhCybXkq%2FWbCfTRMkDrr4pd98egm2iloAKnDobzVYe76bTMql2MCN4gzAOQqDhQsdzVUuuyNuadw0xOKUthmsh%2FfG8CGCZ5hfX0VbyQR1nnXh6%2BduZILdgD83ZUhCv5CA9CPtLndXSxfA1H%2BrUw0Dht0LAD77DHO40tTxwYnMSWDjogEv6AqVWogNgdGCNQEDUv%2BMRGRl6kOmZRWeg%2BIcsWvBzMhfHshgiZrS3k8q9sh3jt88aenUm5vDwUYUIRsnfosyXWMzkCD6tOfnw8R7Dt%2BWMV1cCG8aAosNTnEaruOWhhi2QboKYI6Hr2XW%2B5NqcMTBru9a4LjshU9vGyNGbKPU3O6oUj2JOOZx0t9ZE96F2nZ38d%2BfCJTCA7LnMBjqkAZVuP0jTAxraL962Nl5YbNsh5SMrAtCXdugwvHruZHb12bxWGNuxYOO6cNPOIMotlZxyl7%2B%2B%2Fw58saDC2bF6chLzH14RXaB8lHHMbonwaS3Y5Rhtm6YARkIOBGS7zyE1AGrNf4yFd1oC7TMLBIfBW81ONZN6Mw46AUjE3KJo12Sr40dTG0iEBgHSgi90R%2BdslsKrapzI%2B05z9rDPswSftwuaZdBI&X-Amz-Signature=f73d9eb7f951b680304ab59ba0ea8544790facf5afde2dfc8015a3eaa46e7197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

