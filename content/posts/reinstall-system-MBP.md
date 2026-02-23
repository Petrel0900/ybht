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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJLVWL43%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T012850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIA7uRHliVEbRZDQuO0mypAb97aMUXONPHHJ4mQGTQf4JAiBjkQeoYEGNrmpl56C3M58A%2Fwfo40UzdFLb%2FjRoDR%2FQISqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LbXo%2FMy7CkDtkCmKtwDQ9negmYp1MDOfbpVB6tdSbT%2FXlbCbM8E5StiuXtzs3Wl%2FbV%2FhpCk2fX%2FzTKfuE5RP0aIXpw7AOqinLfGWi9pJz52sDovwltI34i2bUL%2BUFDtEFit2Lbbv7x7rJHkysJr8gNuVHA%2FZXguzPXGK42d%2FsnDW7JwTngpvenOoYUOkkjXOSR2PI8bmAWldBz56E7Yq7w4rWB88bvVJ3mlW3RPX24V0qW2YaAK0vT3K%2BzB2F3EffoiGuMX0W%2BGPOY%2Bi5rwyBhSNWJtPvVdt0M2Cfkmy%2BKCY2KgKnMOTW4tJl8BufKfgc%2F7LkAtkR8XBljOzk5fcWpYVCMwUmIUKMVH3yBOWEmt1f4FjoDfrhkld1Et%2FuTUqDvvLVi%2BQQ%2BeaM8ISzLT%2FaVCR04%2FhhTrW4yGbw16r%2BNo1Nqxw21NTcTt5IuyauWbtr2K9LS%2B%2FsJTR1AZ4HKRrLvII1JdhFGpHxVrsXXYreYvAgwSOlhI9%2FqZ3AmnyHcxhaqjAxJgrRUOAXTmKLJCYLHowiyrNGxDGmT2Qmu2EwGQiaxhClriD5mFfoSxrHSllYDPEXMRv5zErTr8awqQGxosT2xmRfEWklJAQlX3udV70dtYOnqR2dNhtL%2BH%2BzDcWkwsquoUtvAACKYw4sLuzAY6pgGhwpWRYK7y%2BR%2BWoEt%2B5emh6z0bEvoRYnv0RMc%2FIsEc98BknmC%2FM375O55oZLNMG89DAy4HTx9OaDHGpVPvxOCs39JbT63pxwn7rtxIJMP2LaWSmr2pdHIe2CjP5hyhUPcsZanZC123vhZmlQBHwSwuXEhiClo87bGvas5FbdVr2IOW1vQAFzODG31SJVENDRXI7u%2BIkPS4OpcakT3p5gglIgHHHfmz&X-Amz-Signature=c852676ff22aa834c8db0d412c69438ed15e9e283a20cb9ce9aa33b480f5b7f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

