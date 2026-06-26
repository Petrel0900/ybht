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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYSPPJ4G%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T024315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUYWjf8gXZT55Y%2BR4eYKkbktFeT4XMbYYn2UB6Ei3M5AiEA%2BhF6xp%2FRFulb1g1jAWiUqhCUfKDdBt9oqQBtb68eTwEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOZ9nl50MYh4tszyxSrcA5jlzkCQobbrseHwiuSHapSuGA4VpqQcp%2BgFYYCY5Ns1D6MOEPR2VUL%2BxE0XTCKuJQ4Tm0WQJ00rVejrnLVMXgR44oNcrQbViV15iQ5fxhJain54KDcr2Uxt6ZIIZ%2BCmODk6xSBWpVdl6KR5mVF2Lo%2FGdw9EBIDT3mpcT9bHNxlRKSg88KAGaXT4BL2qK6IB0BOqXxO91hUjD0WYgD9zygFAsxQIugs9w2uVxcVd%2FRANBfpX7VDnrjvqntAlIzbd4IKyGmiO7sTjb%2Bce7%2Bwv1K0%2FBtPompcCa7XJ3P%2BTg4wPa0Ef34YHUOM13KbT0GwMMtsWHs4DEJrnfzZ4%2F01DQOW71h0nL%2BfmeOZrC9V%2Fir9qA4bNRa827NDj%2Fl3aVTMI71Fj6uoMfdTfodDFUsabE3A0XADALcUXOrip8GkM%2Fx%2FG01CrOOp%2Bbty%2FQpWkQ2Kqi9kTQec5oTBv44LdGFPakr7vCS0yUoQgjkLSqKm%2FlysrGTLY7jTbML11IRft0XSxIn1X38myq8clvb4OtY5Jw93ffng0KU5d8K3BigkFRLupnooaoVuc1I87VFeX1bGHjo75x7GSXO0%2BuvdDvzZyPMczB6kFnRiaUjPaCMyseNZOJhwWRgqTbKv1z7hUMIfK99EGOqUBRDyL0LyEYBR5522Prugy9mfFVf9UnRKzoXQmjJhVRxvfeAKhTIQeZ45tyNEJLvSHM1XYupQCNK0li0z9cVvxk9qdHhgH%2FKz0%2BRniAZ%2BV%2BhVnlvzwhL9F6SVV5EvWNBMpuVmeNMYPOxS8GBCzjcG50WWZCBHvUjCKZ%2BceeJJYqeInBRdGEIfll%2FOMXpUFE7V4TApYxkHB6kc%2FgFKtlQorFvoXS3TZ&X-Amz-Signature=5a9705e4fe5cd2529b114abc4a5eda031f2a86a2bdd3bf488bb44bddb0a20df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

