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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTI2OGYN%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T020033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtYUUjJqE6pYfbf2gXJFAANejfnZ2PuyFKlWpnHPfGjAiEA1Prcjoyt8XJDE%2FXXM7%2FbNfpJoNvw4l9p6qdmhRRPyvkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZ9r7BI43o3v%2FySuyrcA4OM%2BcZQvXgkes8GYOAd7OuCJAEWGBOzvEnNw1FP812BjP5eS0l0biEmXquHz%2Fo%2B5hoz3ISpxCs%2BafdCRxX5lBgh2jRxjPfmjNRDuMN2NRh57PBKKTTSwzlOcny4N004r0bF6QMKFBY2GOHLW0pUx4pH3q3eDEM8mFKAN5XihCyq627LDGDRcBoU1eFeJkO7TbBNf%2BhKcSVMv8XZJnXiSKcog3PzJkvmzAHFmCSIm3U31uM%2B6FVD71tRFq39JtAOUCSpdRBS%2FvdZH8L3NxNPNC4IkdFWZlJ1dUqIwEHkXItsjXrSCpAe93lQGpRITzfiQIH8YeAfNXoIFkSqqT2%2FRYgbkfvSyM5%2FG%2Fqcjy4zBvqzTqVyKkrgoDw28ctRmmT2HStKyuyoEnGgSUPzNQDUASf%2Fckt6MMKkU8mx2pWZrK7nO5pvjPoloiK0lzHAcGPxRkrBYr4hJJ0EK7TXaGv8ZuBo%2BoAcTPi63%2F8nhlHtdiYBLGIkek5fwXmEW4YS2yFw6TjiNUc1GUXt7tTDW%2Fq6LPk0T%2FKX4blWJopfyxxzrcR9baAbtoY3Ne031d7Hg9gJKurGHCRnOKmgQRyeZOcK83miEO7MUnhWeE8skx88VJa8xgKkQdDrNuZkZoGMMK%2FRxdIGOqUBKCiVWNvHIf4COgXQib1yR2qBa3mbMu%2F3pByrjA%2BRvE1cmXtpd3Y6hJZiGIIB86%2FyglRn7fJb1xq4r41uMUOs%2BZFEIJbDhohGXA6uyJCyzvXZAdirJuwGveszV47styajsbXglhVV%2B7X%2FRYOgjvUP2TYXCY1LDfjmc1BOEtNMyGBHsc%2BYq5Y1YRt25JnEQQkzCsRfzBPcOgzSHC%2Fhtdc%2Bz4WQ5T0U&X-Amz-Signature=04d4287138e0d24dbb4e6aea4b966ba733d11d4c1b68faf4965dbc713fd458f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

