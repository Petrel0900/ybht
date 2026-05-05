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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VO5YNCO%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7ET2gEbGXiZDdCw3Z%2FfVkrZg2KKcu0Gm7SkBNGJ4juAiEA97giHRzFrZwtl6BgWR8DmNNPyT7%2BIkY%2F6prDejcB%2BdQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPjHzl0Vkwrwh1bHzSrcA%2B7UDSCj5l1dqFwLFGn2X0rNHOVOrECsJRnn4zm3v4g4wJIDx8u32NHzi4Az6WQhVCEzoKOWkdtCds9pYkWWl6ob4jgcIEiWRNSF9yDY7Qytj4947XH36jSE7HFBLUfnjRHHyJhfel8Hksu6qMqobpSKz9IM%2FDCPnokjFlethCyGrcCUp%2FP6SVWbbXGUVvUFTX5aLTRd49jKgxOD8OaiANyda%2BQNVBn5aqu2ZYQWToMBs%2Bg%2BmCclvTGuHLwTuaCuaOTLqjKTKd1c1gAv0FDtqdI6pLW%2FJnx4klF5md0GICf%2FJCUb7u%2F%2FNfDcw7OPlrTdvX8M%2FLzcQu3OqrgsFSOh9nr6Wh2d2QpiJfUFp2Ro4IIHnQUdrzwynXVCULGXLxXaF6ydi85HU%2Fs%2BKzJQJObOYOTtRh9OqQXBmscHlnPJCQwjheE8UT6fbZU7ynxBtovftHwmnbJDtzDhby1PAyRgguqHWTzgtwhpPPsiPHFAH87bOfbpV2C5skI5ZCyl6ULIi6a5Ht59QeeqynEX6V3wuO7focIkmPo3%2BcGP28LsDHcdx5XBHT3VCmOK%2Brx1olYnYFCa02kIj7ZBhXeLMC3%2B2W%2B4nPwVfCGty4sffNFUpmGVfAETkB%2FLGrGDgJGVMMvy5M8GOqUBOyvjVPnTQovgtCH9hGBYWI9uprEIZwt6yePBTootGuioXBpOlI2tfqR8n5%2BGq8lL%2Fa0a7QVvTBMaQ%2FMgRVtrLY7motK6CC4fCSMBEg3on%2FWDYIj8o3ZR1GtgzaktmbqavA1OlBDk4QF%2F9i0M7wWZIiWCICh3hATbYr7O%2BM5xKjUCj%2FZuKS7x%2FsadxCt5t4Qf0v%2BQl81QsBBtp8LlF3e9iy52oecX&X-Amz-Signature=6ea7d009ccfbda1f7d4d8cebadb2666430c611c72ee9beef4389a00f8edcf714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

