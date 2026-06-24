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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTYYMNBH%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDhTUeJ4jWRLx5LWUk%2FK0k3o7hpsPVMfN1oT56BSIhoBgIgfjyciHhTO%2BxjQ5eKlREOGE9vP6D8WkN7qO9GJdIpcOEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDF7h0IzcSJ48k7JedyrcA%2Bu4x1uCBPCTUw56qCm34kwlXJUle0feT62oltXcvoZd6umwkUS2U%2FTxSMlROsnSoAPBigWNkBVFk08HDnAKV9L8d32q6PbkSnylgzEWXN1ck9h4kVEVm9d5fGocLjB4wVHRwcFKAvcDk%2FhFELSvI5iIyV3KvyTg7LHHwO3y1%2FPG1nLgbX5qvyTSXm3kxKBZZWjjfPcP8KhvjsULADeo4s4IVz4ptAUUA4XNlgTkIPVlF2eMaAfgoR3%2FWNwgLPR4Asn883rwUM8bn1LA6Tz%2B4OV63%2FzIqlb0sH%2B3dSW8MjAYlZDQEOrsaWh%2F8DC7igsvdBMGOBRlAXEVv7wuVl2jYwMkraPoVgwyCiaEq7R6gzFgDvBtdwlNERIxgnJ6nrIo8NRGQfa2SlQ9sMn2BVQvhpCDoWxwKS44CCj3PP9y4MLdiJ09yZRtHLlEKOkPyWeF5zWiu5AT6nqAntxAI4hVyjVIYwHDD%2Bdmw%2FzZXaGOGq%2FRFzR8323cpo9BQtHjuMVQ9UuN%2B%2BY32HxpuCicsr3l8p0T%2FPYeHCT6%2Fq9p3B7Z1ql2UFUJnF8vQEwSGECRxvYFDcWWrxcFiSkcp2tGnGbFIc7XwdlEcjZ3wpD5PDlIJw4rB2suqUKhcEvT7q3vMPbx7NEGOqUB6towT99hiE21M1av0Iwa9fnAc64RAkEAtzpBLn7uZ2%2FeD2lp9jakk5STAbetl4skt4tmIU8aJwtfOce5gAd9saqG1ny0MVTeZ5YXNxxhUARdvQX11%2BoaZQmJ1HsZcieY19%2BA5ZhdsJAPIBqDJ3RLkxKe4lRCOjL0bvXH%2BpweLU%2FdxD8gDcS0B0mGUwRLJ%2FbUoUmmu4Mzfc%2F1yzKKaPYpbtXgIezc&X-Amz-Signature=7da0cb9cceab5df8da7cb188f3008276e31a62b1d1c6e0b915c545b1849a83ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

