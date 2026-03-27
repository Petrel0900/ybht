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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TF2ERA2%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T014952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDe1uLG0R%2BuCz%2Fv0VGR8OVdSaR61wxUWH%2FJ6xmJorSXLQIhAL0rbc0JjdcXMd6bbA%2FQ4pEuwwzDHZFycBkUqkEKNBKcKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJhSNm01f8w3QbIacq3APDkkofiBqYQIuwHb52CLpESCEp%2BE4Kcxln8VrTTMxQA5%2Fg9FfVJYU9lzg%2BTQjfS7Y2Nx%2FPF6jr6KcUjRHazsqK%2FgfGFaMNareVjl36xuKyGRvufSRSwAKPB%2BXXiZTSSwIWpK9anp3ocQZWMVQbpBR%2FzZZKKvz84XrMtRWyG1KsQbuOouxuI7VcJfbZz0RQMGDdmfz5rYfOxNkqByTEbUDqcVhxRYLKpRgd5n%2FE%2BoJhnj6%2Fa%2FIUSDc1J4Y1U%2FS6KFYAwBpt85FZTHVtrGnTo5DAacBN8M%2BxJIfi2cJ4%2FEDYG2XtIDnU%2BJ6qHqlcSm50YzgCCoN3JXiYiK04w9fhXFKWSF1zVaQxgbBbs5XeGw7YOs3EdkklEypxo2RJNEyGRcaQfpQNO98qZF8Ai6HGWvYp1syyrCe%2B8SFc%2FNTo5eBuPOpPBm%2BTCFI1Slhcd9VmCTnPvgMZYisoTl8BfZe6PkTXlwwqdhOsVA%2FHJUqF5FoBiI7jYr93CeJR47lcyBxn7Isi4hJEl%2Fy8uZMyQtjhQqDgk1QKqXJS3K%2BMD7FSs0J%2BAShCjVnw3Dmu5cokh2g%2FwNjy0WybjP4BKQDkQKQnLXI0T876VhUcCuW7ie9NwFccHIimI5XSasZsXtURJTDr65bOBjqkAXezR%2B2pSCM6DaBL4I27yHZ5NjRws1Vw1uJR3KFx2KiFNHqgWhrLQNAF4%2B0BXm4xnfkpKFGSNFJhqMrjzcnYZkQP1PjDCXVLJzAsLKeEiw74IdkNIKz%2FMCLr1o87FmeyDCCEQFi5aIJaMMMQNNAnmpuGYmdbSt6DkhidHtBXmq8rPh9aGvBh4in3hFDHUmBpdWLeXsyuZfjbDTWetjFMqCaYQ3eR&X-Amz-Signature=87aeed1e9922bccdb3a9d941c9116c84863de234b158fd1823307656c39ed994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

