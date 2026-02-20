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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RODHWMDQ%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmzRhv3BAKl8CtY27AS58XrWnmhvYmI0TPR5Nse%2FFszAiAMLQSbuJPSL0XwTUw0z7jkGyrDg6odjyMaEis7AjXUmCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2BAQ7rQ5jfrYqvR4KtwDwhknaTfa%2Bruc4N0XqTgC6614OcC1frW7QXlMbtJ3ZeJz2enXWAl7MQS1NRpxXsMw3773folx3Br7X2LU3sjTyGGUkwe7OYffFsAnmOMDvFrFbLzCusvU6butqHR%2FbbHSNsjY9IvigKXSa1FZZvDwL4xElYKrVfxyJLPbWYpy1wzzqXI0ZaNHPpzmZCb%2Bd86qlViCxPdMM2%2F2vbGdcSghq5F%2F%2FPk6mJIOLHSRAUV5Xcm8G3hIUMAjXNqIVwz31NvEjZ452Tbv89jm65dxaatJWp7kOyguniKyJpa%2FEpTGtTU%2F9mJfulTx8Vhs9VIVTV2bnEA153nuwM0rmiPtmgjiVYuIlAzRpyXRLBXykd9zpqJL9JRmKKDfN%2FRZRilX6PtD267KcJHerAyGL61p%2B18HYRJQXHt0oYNwwTh2lE6REWM9%2B50vc%2B4WbQShMx84IpNkruyRvq4yxpfGS%2B%2F8J5iITa9vNpk2jBfUgNlbnFDnLNLwpbn%2FsMhZcbSolzbEXWl4e8srTOlBXpyT1lJ%2F3ZZn1X6fqdihTCidmtUbGyAYaBO6kHtKOwJd4pURU5YODuENz%2BPLG7CbDVpfs3JshqsywLYXdhrE3XR7I4m2qwDybF3lyMYJDxTzO1EGEc8wnujezAY6pgFGRuEvYXOzyp1UbWbFjrxsgCuHJnPCjKTynpvkTMNZZAAooxdW3vvqDhyD5d4YRV4EJ9gDr3ubHKt3uTIl6iO%2Bmls7lQxsR6640UXZRoiEAXJdo7ozZFzIeey9lnREW%2F%2F71nxV7yoMVsYcyalkbtxRl0z7YPW07BRqj0aJl%2FmnWWT8SA5bjCQEQYC%2B042sG%2FqPr6XVGrVmffvG8IdVJWSypI1CW9OG&X-Amz-Signature=423eb62b032e0061913428bffbc13b86169792acf84b3626fe397b4d80cced96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

