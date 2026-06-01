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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GRPOUD%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T025720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDaVa2h0r5An1miYmVz%2BKSXxqfxl23ZTEn4lS2F4VgFcwIgOxP0rKMLLngblnhiwoeu0LX5hRwHAUNTAxziWi5sAcgq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAO4eyMrT0iA5y89pCrcA%2BIKzmM7mlELWOkDtbqd5f4wGxIybx%2BkEpI%2F9dYdIF5hzk69df4AlhdttDHP0rLKdbrWj8OpZd0coegHghxx8cAbP%2FP0TxinUEt%2Br217PhhaLm5rZO%2F%2BIaNvJhtINVlpSYBaNZTWlcezZEl189NP%2FH%2FlHvzqZSjvhO7KBDdq0padlVMpERbucaSgUcGpf8iVAbsNzHaUb2yT17VYWIlC0rMgP%2FFm6KtoN5sZVieHcD%2Be0ksSDTxNPjhmNVGNirryj8lUbRF0TJH%2FD%2ByQpJRDhcmkF8j5OwvcHnkbOn8qC0AqXUiwVuroKgz3PS%2Fl8FW7dumv7jn41SsDzsW9%2BuSiuod32CBoJ068o4gl54%2B%2BPyWOa8tEgc3ytsI%2Fjw5Y9BNb%2B3OeaLZy8XkPBhCUFhkyasNOOyKYwTZ%2BZlwAbSHT4%2FFd0YEAaeVbryyOcBku3yzNOVczK9jgpJrkiHME96XcoDuwnzu5pQUjX0Q315nhoOy3rOTjzbhNHTAPL1XzxCos6mK%2F%2FZE5UIXnvpouOjFRvRjSilIee8%2F%2FgJZ2w8qdpjga9%2BLMHzve1%2B2MvP0xIDLI3UVC7q%2BC%2BMPww8Xbfd6DZ09gdd5dhaH1cOS78ax7EEvBYrE9CndSMCEk2Ub1MMCm89AGOqUB%2F%2Fa%2BwiECT2buK81zsbCbWDm2qGv6CpiDloHFJvld9qeGRygS1WuQWnN9CGCFPJT18or%2FItbVHrSAjsBrincezp%2BuceGIh8JmT1KPGJviiRsCEUBg0GVkTeGLZnlnxQY%2BQM4SvHdPAyJGyplSAaATVOUjxrFKjrdTV%2BVYTOyRhDHZ7JeggBaIm5qo9pPqXISLq7FeqPpBwUHt1Qh7R%2FAZMtoNReAP&X-Amz-Signature=bd2e18e2d4c7bcbfc683da8e012bbf4072b6ee1691637b3adc8b2bef93245075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

