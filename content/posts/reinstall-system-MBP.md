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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKM36WC%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T005357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FhuNnvMfmjgZhAFCeRTNTfbnuDIu25huyr60n9zwwbAiA63GRK%2BzFJZejgq0ks5YCRXwbIovYCzWCdDNtXw3qxmyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiLJ90HJmcT86kLGEKtwDwolPZJ6XU0qUkkGlNpNLdTitZFCoBiystPRZGvV3U43uOPFxo6g121qJcZMFOstuMGwr3QfAGwrctc%2BFvVno%2BZibLVnHDBQC8ykEWiUErb0cLJ7A0VFlqgljX6E7f5yooilfV5g%2BM0vFOZnZImvGC1VCJdxFTEntT2QvaYXsqM%2B2OLuVHxz5oEzpui4pRqo7tcDKcZ1fjc6%2FQMbzRqUGrhGNICNSpkVzfCDlLL%2Ffo5Ceik%2FMkTlsgZEg5kowElZJ%2FpTqp%2B1zZKnRnzzLbkZ4pzruNNvqqLXWtBqzVTnU3398HXbOyKPR4iyOdjwUEIgFmHdi0YFG23M6xdGoo6FHxMlv4PNAZuFpDZR%2FQ%2BJm4OAnW%2F9LXE9JKFZ9Aa22M27SudwDOSHaUrZtybo%2BtAjNH6Ws8bLVCGuRfv8KEbe8dfFdKLKEfkLZu42Jmm3lyhGsS6gGZUeR8oxSJzWELnWtf5jQSpvcb%2BUsZ7E%2Fhz1ALcr7AvZJLNucfsqVlwRL6N%2BEfclseYFSPvIXFQmJoSf7R2tzFYxXqTbUiBM0vSeOmYsGpJgJoAkYeVAgVcNrODT1CKqX8PrUFMPXAdLWVr%2FIjMQCqSr4P3BU9IeO%2FEWOA37grUq3EncYQP%2FEEyQwmbCe1AY6pgHhGdoYwyXudyUs%2BpEnnoJe8l1HPwqaviCXkOH4nXn1%2FFDuZCtQUOJGpTCVkFyYRC183jKeOAxRPJzeuPbcZ2FCuEanPTdh9%2FuzlVId07WVH13dZEbyVzwmrl4L1r0fIv%2FVrAiUPO09M1%2FylSas54VEOoKZNvuQYOD%2BW4ezrqZGc63kV%2FYgEshl1kZoRo7ABixJxdjcShu0RcxmeCZz6HAkIWPmZICO&X-Amz-Signature=dac6450b011eed50c8a962c88634ba38cdea69e03ab6a5a853a83000ba319def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

