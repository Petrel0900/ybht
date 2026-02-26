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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEZTBBF%2F20260226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260226T012725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCQkTnYZVStLkeTRvR8wt0FO3avvzP%2BsDtNvzcmFqOvbgIgP%2FYTsOD1qadu47dI3wMgrJyL0zdZuB1aJbEej%2FwnIHEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDOrIOoEvor2UqMjOaSrcA1TZRD7CnBuwChALjoSMG9DO5wFJ3DSkERq2bdth6mDPt8NTjVD6g0AtJU9fDIdigs2hHu00dNJTwVbcWZUKIqVxYqMUOQSjPydYvNfJkwlwOVTCXsqCvvtObeaTLdF4G6BM0UY51xl%2BCFrdyMtn%2FtkSUcyUsE3Nhm1DE08jlbFDJ4Ed3VJa5j4qKVBPMk0U301ynNQYnv3WfYCseaYlJ%2F6rk90e3Qbse88BOJUC1PFZ6Q3ciUT7T6mgKSW67jc8iYmLm0kgBAOjTLbcjIvzSGg1ohQ7ui%2F1JKY6PoMmzCDxqUWyheWUvVTidtGnSKZaNcWBtJL%2FDLCLE32ofW8fq9f96Q0bYUnqNMwWoKVZxZoZd0QZ%2F27NJ7j5E1K1W%2BbOLm3njBOBvlONqVtdrGbefdyEs5sgl8IoZG0MesJLlx6kzmsB69K9L0u3bc3UR3Wel%2FVIqzdE%2FwfK7pc6r7%2FF7S8BFszsPjyMKUQ6yEQFQzMibWIrW%2FUBk8iPrkCHtXEcI1VCpk3RTEvF2Ob4lWEa3Q%2BLBzkfh%2BWGKBA8pkSlK%2BkEF7GDzRUOhK5nMA3U1mPt0aYPRvwIHc00v56LEB3kWFazUvsFSvXfA481qkCGqY3T3N9tQIc5E1%2Bk0ll1MOSc%2FswGOqUBcSZRo4CzMZTy0zytJRDxrYKEfT27%2F9opzoF6fI%2FOTFRTy0mul76wcopjD6%2B%2BNKh1CpJAJlrV38RG1i9WPbtAMHFGKg%2FLEXe9m%2FvxYdq3uJe%2BPFOfP6aZ4WlOBVpdmdmt8whEOJF%2F7at6NO1QX9%2B8yilN3O2KhbKcN6vrKu8UsB8LrobB02cCRNBR%2FLpRGQAXVxC7b%2B%2FKXu04BAAoc9wv0Y%2BcLleC&X-Amz-Signature=4bb08a7afd48b45e7cb26100e0dab8bc5581c2479de3cab732938e832f621c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

