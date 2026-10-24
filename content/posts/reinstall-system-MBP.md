+++
title = "15年老MacBook Pro曲折重装系统记"
date = "2025-05-17"
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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDUACHNL%2F20261024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261024T024858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLnLvXEiEoYgyAzA1dRX1GCERx7kEt6W5OQZktVb%2BgHAiEAkPw%2F499cgKH%2BMIANix66%2BTxkN0JOzIi2O%2B1MfViS1vUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkT26p3okwP6B0mIircA6LL5R8152saAVz5%2FPiKRDLH6AcKlzokFNiL6Cm1NGdehwQXqUsDQ5jY4NfON2wHevZl2a5dqhwBWEFd01pQjFuaDKjKkCfAR1g8Jr%2Fk70HjR4ojfbLSFsJ8EZdhblwwptPPsdA1Tin1QR1ZSOWv3GO%2BBjmgZuPYcCTYlS%2Fwf9iIKI4oIO3ktVv0odZQhFWpePWT8ph8107DoTlwhwgTk%2Bn0LavsqDeB1N%2FYsd83Rto6qnqaW4YWsSXHDh6H5jqUHPhFsV8dqdBkeTkUWm0GIdUKegvbf5yU2K%2BBGkbFJ3xKVBYOoOtZjdO5krNjqvl6h5F1mOXrXeQoO%2Fa%2BZ03PiT5ZLWr2uzMd1jnVtv6uYWSMOV0jHTw0kSenLzoDLbBi2vNnR88HEPFNEvR6srmHHepQHmedNZghceAiwCYcNEN5OTDqzw3Ywd%2FNbX90e8z0YgwYT30zN1aIuZB4EvZB6z5s5RgTjDeyVovafSNZe2Zo3pGVQCEK62CL25wnuGd314jzaVURyK8ZTKx6YCjxWnaLHIvaJG8xxJNuzD0rv0Mha9zh%2FmNbrghWXTHDdeSQpzYL7ZJV3NnAV7e8B7VlZx95JVU8vAXO6t46rmnNg7T5Oik1ll%2FinZQTP9bJMI6N8NYGOqUBiSGaT%2BCgyU0FTKe5mZ%2BbbIjpCPIzfp7LkA55%2Bg5DIDrx4DceQpGhn0G%2BNVNYa1J4a1jk6QWoVZleP5MINJnZWvdcu2XICgY%2BMsZGS9epRrLKnB9m%2FQqbMWOJYEU2f3G%2FjkiPiaGNbmn5Zwzk0SMfiQv62OEDEM1M1ULovlXzULtOCctFaG2RTzxN8mvPptRjr1yRLdWn7jmm6eSfqrtmSpx0DbLe&X-Amz-Signature=6edc18bc64bc4549fc498ad0ff8d4befa013886d7a31fc3c5d205d864a006f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

