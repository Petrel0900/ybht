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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PKELFVW%2F20260322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260322T014402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdO4i6Ys7ot1jRPluIYnJmp%2BFbTcf1iLEMn%2FIJrvPkoQIgY1SxXSShhisILcxnemTHc%2F0lACeBTCZ6R6gugkq04Zgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDwQm3ggUf30NirQjyrcA8kv%2BFRKvptzpLoR09zTTEcvxU7f%2BCyvI1x1PIfT6ocrSzCFYq%2FKG8Tit0H3d%2FekkQtG5H81NkcuX5XQaan79uMZmD%2FQ2JVuLp7GxgvU5lRE2p5y6SlVBh9lG0hCafdqaHZMveJ%2BgN09vkO3UChT%2BgmpGF9z%2BZQMAki4u2Dh8FWgYzdlj4UdhCygO2%2FrcU1LnNYQ5PEME3sG1sMlB9DQ23Z2Ak6XNEaH5S9LEPl5Kyi2G4D97WCRuhHgJEZC1IUm2TMtEwzzP8hKCPutRJySuRwUu0tmvdAWoiTHoohjYkCBQp0Qkd15wUkOQRvsGXyXuGJFHWx%2BKJMc5edB0F8RGt%2FV2JI%2FcMpQI1QcdAVRmDiuknoe555oBttyxYRv3zFECFY35yxG2LXX0SkK7nh%2BPQrLqq4t%2Brtpkj2AiC6UnBtJEKGp03Dx9D%2BIgcv3xQ64j3k%2Bh2j09RB57B%2BM8J7NHCmGhzbl%2BqI9jKJtPfeByP88uuFMjiGsnxV%2F6rmKR8ZK%2BngESVWjb5M06vmfFvqFT2Pz7%2F7z51XQwc5ZGCL7pNV32OLosDmnpyvVpg6I7ucZMYCL%2F5trWoy3KDGIhGOS5tn9ejxCTPReDsZyOJ%2Bj%2BMfzRFQ3GGwz08hCRDQoMNWI%2Fc0GOqUB1KXr4%2BzV1TGSN34YRQx4TeoWsBRP18ZFRh3yN9KbqsDHVDEsuZzzVAMRSYFHppbvNs7Mp8u8LcacZdSFQQSJ1jrboC9DHUmEIUceZ1zoSDQGx%2FGbpszgW9caGs3vpT9%2BPY8UhEHAeSiTZcY%2FPo6%2FocQLexEEE8nnxtSoxmvY%2BMBGJw9j9M8oswFrFW9cGuCD2qAXdHGo2VIwZfHGHynxgK0J2fXc&X-Amz-Signature=82ae222c6b21d4a67904063e8a2e338d59ad88f247ed646a06e2e4106350c754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

