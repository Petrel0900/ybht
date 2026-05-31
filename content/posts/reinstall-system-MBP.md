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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNE6QQEM%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T024904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIE3Q3cCOVxgA521Xd%2FGyoh7rq2B19YP7rfgaF2QzIlXJAiEAkZNXxAPQZP9BmNN%2FijsYtEcAPVj5xKqGtsk0zcEAzoIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ87HmwXRVgK7R6QzyrcAwUtYt8V5vmaZHulaq4adRyn8unrwt7hJrz1PmLk7ZxNy19R8rYBfgUbqw4rrxLx38Br7AztuxA%2FsY%2FZsAqJ1L4VsGifSSuhDpSb5Sz4ylotlsTuSMW6E96MPY1h5%2BpcWUY8lUm3QUT6KcvKgBWAQW3YDqT1nsfPQ0uGPNFnoRpFe30FPpUHi4zPzOKXrA6l8iAnjvSnBs3meBp7HjZAw8CmQNz3G%2BEdnPv2B7Bdn%2BfInVOtvBYgwtCGHTnWjyGEUBHmxaKuat%2FNgrR79NiXWw%2BEHFyd6VRJe8zGMBWm%2BkSngXd%2FBzbL9faOnJhg23gOvFNmY1BkKlm6vzt2dz%2Bz6oNHtdZypHpFl0P7X6nvTUPNOAF5YUvMFuB0MiY5eS4TkIJBs0nDV2t7qcWVfON1jDin%2FPkII70N9xLE2UpM6o3KJ1mD80DkIcLr5%2B79Nsck0DVkZd0DW7ccD1U%2BumXRK%2FgcsGYvIJ28joz1%2FPUlINfsCVEp1clzv2bPtclPsI2lbimQUJOmqrBtyiz6YlaEwYTu1Swt%2FltWQL3RE6VC%2FUVA6g1Z%2BJ2Tdsd99ydLJdiB9OLYHQnvE7VEIFSw5ot4TSofI3CPoKTQDXMoOm8BcFvBloF2B1sv%2FeqbJVseMNGv7tAGOqUBBYUI8pjjb4dKjmfF7tfC51KxP4LmL5Pu6IZZe6zAok3OjG6xFxbqDrIC6InH6Jn13aTrOahsqzRoYQiaU5oqSKBsu%2FmkAU%2FtaBlTjKxxsMq1UjHqEFSk4LCc4T7jvAjaEJToF7BHRG%2BE7xy2s8js70f4jbokH41ikrVxhSfeXoI4MeaWK9KIYVgT%2FMzgBXhvDemh6uDeXSdGPKBW%2BQ0Rn9QOWlxi&X-Amz-Signature=d9577fce3c2e9a5a44e9ffa3171eb066ea9664d70358f93deabdd343a0f081f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

