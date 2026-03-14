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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEK2TCV%2F20260314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260314T012419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPbjc94TRr6pXPkCKnMSvLa3ToIheb%2FvDIfzZbXzOn2AiEAipgrOfl4A5z9zaVizq8I7trET3vF7UXbv2IfMM6ueC0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiqeH8pnocXtp93UCrcA9aZqrpJF0zuAm3n%2FWGU2KE0bnP0oD9FYhoAJmBX6Q4J%2Blh5Jw3XZXp7I%2FqHnKifp8raZSNAr33tNA4936FtVGNcI0TNXDHBcIBBcvt3wO7B9qqCMuWc%2FRWoaXOTvvz86zOdSVWNxCUo8wtSskC0ByuzRdDterCxoeODYiA09xZihEv4xAB1F7mgzLOOdSkdzbR8plZ75PnDIm%2Fbre5UHNc%2BV7o7RfQLicmTiLS%2BzjWEa%2FCTNMP825hKACI4p6%2BTgB0OtZ%2FTwTD5AKrfVAJBpIKrW7XF7TxWg0ZHfoCBeUqEJSvZJ9KOPp0ExjcxmgZyuT7j%2FpM9j3in0yekYdPd%2Fp3VoG1yDpG6%2FOXZhjLRHdz3bKfal8X%2Fy15EsbVg%2BngGwHshKexACEYwfUzVWbvIsdYHwbjH%2Fd57U3cOAftCBRCdhJNmQRZF6j7fVUO4qIXePu8IhoXHyvj4ZKYjRgAjJ40YSvXQ00DmW6a5QPtuCpHoZ3gis6GrM7IHiNtIuFxBpiIBG0dH3Iy50AYn2RX8KV6q8fcDcqQ3FAiZXwjtYW66XcY7AjX%2BdC%2BpNE0uI3mhqwzsAyQcaeMFylUFAl0kCppsfux0R%2F3Qk5%2BU0b%2BQcJiCOkRsR%2Fe3by9MTMkCMNLb0s0GOqUBKmPuVUer1795h3yeSGwU5pkHRS%2F1KiyVEYnd5fC4hSLfYMmf%2FJDUsa9Pl%2Fvdns7HiUdg134NU3EQSGNy7FxRVtkP%2BmSG17L8hOwiIPzJxEli9AJINaCvZxEmp6hVBEk9QxnbQNa%2BVVSh0mJeeeE7sU8okh3xuI%2BASCTCnXPaxLe2ezJz37hVf433VzuNYSRwY6Gu5kLS39N1sgCk8tWOzuJdqtet&X-Amz-Signature=01b51d09bfbac2b39b944d6aa936baa5392d0c7928ba65e9b3695e5ffd76b7d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

