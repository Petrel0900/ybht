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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGONG3YK%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDj6FSWDBRS4%2FO8YQhUY%2Fr6Mp%2FV4MlM8856cm8%2BksaPGgIgQvY%2FE2JWayysdbBUO1%2FsI6XQ%2B7sxSQf9Srla02uPWk0q%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDPccLPUaM7MjSViJiCrcAz1%2Bs%2FK4qXzF%2FxMFSChYKzw%2FDsekJkMmhHdyRXhRsbQjguZwj3VhtHlFaaWN2423VZAzRijhRSbOORaLk8R1VUxwnOIWtSYeVBDJCptAck2N9vdUuAbnUXw9MDrijgYGU7k4k%2FYMYmIAXq4F8cp%2BC%2BjpjbkVCBJd8hMZpQS6kMx3rU79dRopnL0iNWdVUOHGd5LObiw3tdb%2FbAvn4HMo28cTdavDWMPCkZeIRT76t%2F7r7ulw9uMdA1apB5QLzf%2FkINiBTxL8cMWtozXyZNl9Q3RKyYTApyQI0FsU7ZuCAnSDHkxzZgbAXsCaLc4yvWTg0b8uJXlobwDGRFFclj%2FWxMtqbm1WDd%2F1C7vFYEpWf67mq3RmHvq%2FyaG5hhHuRfgvq8H7%2FwigEXwu9BaVHeQ6QpYli62X%2FeYLZD6edNkkrNzVX20NkAIQx6DJzOINfP65sTbhkT25IV3XpujVRkLfuyVKtVi2EmsjErLYmT%2BCzvZw850mgXNZEOlO6oQ%2BE12KuOu0UQ%2F9AP35geTZ%2BiwVdOYTKyWAylTFHXAtoJPatFKY1%2F5wTHTKJ%2FEcXte1z%2BIYr%2F%2FR6CFctTdd6PLILh2ENDz24JtN7LygRmvRR5OKTFpsZkhNARJjBZ8zCmFRMICes80GOqUBr2c24xmJUXhwg9V6kL9CAYTjljy0efAnDAfi6KJ457NuMXcS%2F1fSu3uAh9zAgoYidzhzgLmDpKEvtIId9rsm4lm3%2FzzfwCO3W5cHnJUt3dNQyDvJvzec33t7WlQD%2FMrBQRCRDEECfjMbEpE3Pr%2FOhkzDD35p4Zn0mx5VynCJH8I2mLpYyRV8uQWggukd6nQ46FfFOso59Jbf%2BEPJEZGQTej9Pl8a&X-Amz-Signature=e039535f90b8072e2a35fd824a02209aaff8a21d5dba976c870e5e422555572e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

