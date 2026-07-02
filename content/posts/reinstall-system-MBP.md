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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MU5RAZR%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T023909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIBxPbMqpUVutz1PrTYMINyOecuiFiJ%2Bgy7mHkkO01ISmAiB%2Baqlh9PXmkmEs%2BnJMwADZnV6njPxAx5GiNskhHSEb%2BCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKj0EgV0WmGEPkZVmKtwDsYTxGupeNxwtMbDMLO4TsAbzBphlEmxNV0c5Fw%2BGpaT7gtcMWpMF6Sd5zCdhcxQT%2F8nAmqm57MNFKut3CgF48otltuMn%2FV6ETacbGI3C3B6N2o96LTktZFE1tog4Yghk%2FGordmhmriG8RLFW0BI%2F33sIVqtrsjtDVdQFd%2FvFZCui9jDH4hbiwL4%2FnUybJnWEK%2ByIT7TdkaQQOx53QQ1h%2FxczvXq%2BflUMkBa3FHNf9NsxZK9LyXbzxFaXSK0HkBkODDgiIkWyGyeSp3WxDt0g%2BwpBWSs8gy8MfBRCkhlW5VA6ZMwQVkEPD77tdjCZm19TWkVkDEA7%2FE0nvAzHKVhJveAd7dU4htbWsDZxxr0rljSoa03U%2FTyIXNbigHPlSJU9mPslXEx58C64VklboWcO5lB3xDnltXh%2F1Y5utvlX5lShfu5AHk0HFvb4c11u01njf9ZRaXYEjocg2E6cevVkxKUDm1p7mAf0RlvtTnoFHZZfYYVByKrg3LFLlmB9eq7nqT%2BsJtjUjVInZGsYBiMSwhp89JFob%2B4Q%2FX9ROoi59s8X1ZwhMq2LXhSaB885kybKFUY9LZrQqUBT6zEpqL%2BGKT3kioWeebk5AiQkNBqjkPB6qbpiZXE2wypNcqkwt4GW0gY6pgGd1bUaBoI%2B%2BAMu%2FLO8vbtfe2rHGZkkZ%2Fwu%2FWga3YoEOQHkHZLB6to377FO37CbTxcJOoqYtfr8bf8lukIH16b27gXRsQmUC%2BoKyjsn0pDnN8dY5TB3v1wCONTW4XbLsDpZcwo%2B4aWgKZzUrocAH3nugiKMo5qk%2FXuUql8081fQjzHV2TVufWstSjI%2BBJ3%2FzF9MNvleSowdTTTFqCxMFZaWolsXDkxC&X-Amz-Signature=9ae71c96c63df29ff6b615d814f7d8a64bc9d4e15be66d514ea36afba91c7d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

