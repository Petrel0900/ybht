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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FNPIEX%2F20260430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260430T022516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCBKsOrUO0dN3w1d0C%2FN4oWTKPDBcLPubPw6C5v%2BxacBQIgbY7U8BdOjx%2FplxDA4UkYxV%2FwqpJ0YydYFz9mwf7Tjwsq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEuBi%2FR9W7310FfOiCrcAxEbG9XlCJN2j%2BnQszyJ121Q6AlVNBehLAkcuyUvvXJP3aI7mNIzS0l0BjLDeqCGqUf01gftYDmLRNzGadNjne4F%2B4LY%2FpifkIgm%2FywCGAPeqXsVaS179XTEBgR0BtdVDeMG7kfsbXDAYvnnupGTe07gsbO8QpuakSJPfBDJFzzocKRd%2Fuw6qMg%2B1ssZoKXzhgz6Nhp0jIqMRGp%2FQHVZVUrcJ0DBXsoOvjaSNGOzNnirn2W1Buh0E7IxGSfAU596A6AKoMrBpSOrRlTrUJDZaFRvmbT7eF7yJqUAQouEbeLVQQL3iW9KTkVix0e80DANZ7Ps6DLRjq%2FwrXwT10orSgFLxo5T00lboiVBQL1BOI5VVADpZ54jg6IuRQbr4JAwVLSwPmmZMDk4wW5ZZGzsJm9EIXXFrPW2r1%2BC8kfwTDmonWAUz2gQPNT9Np6QiXqZuy5tSNhrbz0s29D8bVcXMHuJHHOOiK8VCAdE2IZODjHv626OkgfwDjqv8gQ6o7vtSSB2UqVubETCwSsiCmeF7Y1JpGQvWbhinEHYz67dhLzyd9SKDTJV2D2bvaNFqO07qv5pS0c4C4AvmZXoGJ%2Ft5SvOL3%2BwxG0yVbSBy5GKUKxkgs8ZO0tgp%2FdgScryMIToys8GOqUBIDI6nnRHU%2BajTrNqmGEEt%2BPpBx%2FZJoVYKdCCaOLM%2FjLvqGntAIL6vGoV6PSOA%2F2Yv%2FsK%2F0eZsdhc5K4%2F2xqMwq6zp9NhHn6%2BmfDEjPO6kSRCObeT3CO7kaM%2BAiclqN84XMJR9jNQb0BfhSKq6t7tqxISO5j75rsGNmtcLXUj9vQRdOH5sCKsmjrfKjSv4TweyUKfp4b111BLXeilTr14lK5mEmOY&X-Amz-Signature=a7078311351f6c515071b4d25ac2aea936cd12f4ba42e4219838c096016c341f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

