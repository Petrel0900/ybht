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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDGZWW5Z%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T033335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSovGsvX%2FHSt9YYq32Hio2YwJr%2BUTjDBVoOtzLy6UZEAiBB5xIFIP0L0XhELt5vWEQXSw6GIFa2ld60j0cJp4Dl6yqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcjLN8GXMc2Wp59uKKtwDP%2FqO%2FAn8J6X6isDrlsOZVayWIByStBIAoON6VLSxrOHbHsYtBWjKD1iFH5HWV%2Bk5Hcs9vPZslRV2EvLsZ%2BUzDmbug8lRhV458Nwl16oVVJUCZyE8TCr8XxrSnGbhY6g7np98z9GKFxobEcBhX%2Bh9FpbQodR4HwT71u0oodS%2BW9pUlwI0Fw%2BC42VnS11pUYvCVOZZOZTEvN%2FuibAZYSNMtQPCKgKUYaXj%2BR51Kdm5lmmf2FTrLva3fe7qVFrjyQfjHCtkDdinwOZs%2BuzALT2%2Fc5ThgxpXruamiAgQYtkDwR9QBymUAEcS9%2BJ7XzXZNWGoxbycy6%2BkL5JntX0Sa%2BIE7Ic9a6MyI5MkfJoXI%2FjMBX7PqVvUb4SdE%2BX7bKLBiekAAJIocbfMnCS3W%2BnxlwimLkpe3hRoGm7UFENnZcEwp7WDmcgWZEx%2BKwG3MsF9Ch55NMhmukqy3%2FROg3TT6w95k5r86YH1yBZHbCN9aDEbuQX%2Bc4TJtQZ6AbgNyH3omAYkbJIUJ3BLQGfLSlnFx5Hva4r6Hi8DHvL553KWZmmkI5Ej8x3OM7wqAqwTnQfI5BvzUq%2Bm87sq3mnW39Qx1Bk2zQuISYHYpaNbglAT%2FH2%2BRit2WTnYcQ2EpdPg7o4wq6%2F10gY6pgH86cctWgLYieqJw639PPek2MJ2sPm1F5EFiC8Rn%2BwnzXQe5bQ4Wod6TLunndY0zP8AmBPgyijEsF8PpPOEf8az7V062VV06MnHAOLn6qrmItkT76YwEHMtwb6TqoaQ3lXldw9YMMPy7giRfmR4MmruY5Yqpwd4sJ4WUb9y64ufO2P9DweDGa3YYOqPjRwU5o3HML60EHJwMl4QanyEPuSu1RxwgZZo&X-Amz-Signature=0c287b312f9862749b0bfba12c529a41498b20502c0d59097dcf5b03f47af78a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

