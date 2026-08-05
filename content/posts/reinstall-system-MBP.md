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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXJ2S6Q%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T015335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHDT7xChBYnlLo075yAsgRENuQAkcBL313tB6sfDzuzyAiEA8ShEHsnfOtSxgQxYuxE1UBitpVQbV7nsjn0pzuX6mbMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDC1b0QWbX0C0kTB0cCrcAwnhX5eBXgCtT9atbuCJOTjE597orv9Ja%2BQPx4b6%2Bas0NXpfzz%2BjheHayvgOtGq6Du5YD%2B5NJ%2FpXlWV%2FsUdOtlHFRAcNyQwbuRR3IKrwVh4uQtj2z6anoDdtFWaMCH5OTIad5R8Okvp5lOsNxPMj1VPbPy91NHkPubZdebqwl5LGg%2BPThaVXo0CA4Okx0W6wOFPVoZPR0S%2Bhr8Ga4X3HCY82lpdo1RQUt1HwpugAhlYBoTSODcrH0mDntKCbYKaaFDIdrPB2aJQ%2BGACuhyR5NUGI%2BaqrOzh75xrh8E%2FkPM8lE95knBhIw2LaaYVi6CnirN7mNsfeCw9bZyoxBvT32LJC7EWqQvBZfY9RWiK1KDSNBoIOA6yC3Zvibn3TJwHYj168Wd9Xm1kwVr6RtCilB3CD3OT3A0DIoRHjVFPXhxrYB02O0mdRbwK%2FJNArKcWWjyYSb%2BgXdZ0LhdcD8t8tSd2OuvZ2UlS5BgG8dhPFO8pm3VhmCP6HLuxxVM%2FDWd5vpVVVt7g4wLR0Hlf7rxWuu3n0SUF%2B9lH8zXGG2retJA5oim9MSvt7%2FR8TFwNU77UvinlHOvc%2BJfzeHvbfFcpKzq9p6mk8W00OvSs%2FRso5Z6zBkRJ%2FfzJbni8HWjzrMIeVytMGOqUB1ihc88vSOAgYBcWDwjoYXQ1WVufQa1sGHeV9gsmqGys1rkxZJ5FuXtu5%2FPUm%2F8RzaKKbCKBnMcsyb1HKAkGOeV4lJKxuKnSanmVkD4oWK7zgP6Mo1ERdAGTbPOyCZkNcvy17a90PmFK%2BAHtBdNNKAVda7GkogQzhard5Y%2BDdRiV%2FQhYGJooPVkd%2B4GLbXFiJRbZhT0raAMKcjj6DThg5y93fYcPT&X-Amz-Signature=375a14b88d8fab788ae015487b7103d13bf9a95c18613e3e85f7eac82c196084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

