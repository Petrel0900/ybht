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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCEK72V%2F20260513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260513T023401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCmDGo03KElUSz3xGrkn9KaRX25p1ZaKhVtbwZ3P7BJBgIhAMPKG64UnZr8HF1BR8pyjm0%2B9Ai%2BwaIr4kE5Evlo5RaVKv8DCDwQABoMNjM3NDIzMTgzODA1IgwJJmdzXEv3rr4Skssq3AOZNEudis1Feiz5u0Mk%2FyVx3kY%2BwxpfFEHL54SdLk4yF1T8Pdv69YC0bctypwuqZO%2FsL3lFkbh9YgrKCZB0Hf3a%2BfAtbuVCTT0a6S9KmPkDpp5x5AcfWOXfg1EXyrdQ8CR75R7Pct9UAKJ5B3hojEDWQ19o%2FuhlW2EgvkdiRljrPjlkljkHLAVoQ2k7b6KfLwgrWuon2kHl7cW8UxZZGI1DfvuU2UQ8v51gbHD%2FbUN80%2B64f5Xey%2B5lYp157JTEDAsCpay0933AyglyyCg0L6aiHqHXJ31%2BHZLZM2JpcfWHl7p9br%2BcFpb3cBVQdR2MK4582haG0xCHThpwbIFlZ0qBvJVHrNpEPYvP9YwndR54gtiry051J1bNhJHRUkWm%2BOYAMACCykavw4SqYVLKcW2qhF5UY5f2AuYDdQ6KVjuFWvIt%2BuOQTRuy0Tm2c8DuDOVri1BilcLkgQeE4IGRW1FGOWres0TQM2Kz9mJPZKB34d%2BcyKyWEs4%2B6%2BUoVyDWUNNaIg0%2BqcEgYjOE%2BGpglSrP%2BoKcWEdT8gacuhmH0CbPSTp3Yq5pXcS0%2BpM%2BfHEuWx7MapBsIe7rQbtl85k9ZP1lVEJbn8I2nvjDII6xw8hCvlbo5cQ6s4QxRCCxcjDTxY%2FQBjqkASm5WKBUSN2s8xBBQ%2BdV78CwKKTY088uq%2B%2Fzs%2FzHADyi44WK7Me1OAlGNWN%2B5rnrqC7PfByaiLdNkPZqXEcHPa56AaM9msKpi8QU%2ByV83lc9GaQ0dqAzC0Y5t0krxwGMDBbU2va%2BSk%2Bget911KJJzrbfLOQ1wvhzKv0ALCfniVR5e3NcQYYpreO9%2F1lJM2Mbu5NUqiLbaIFxMbaMGKkvrLuOKkQI&X-Amz-Signature=a186af798baff39c7abc469e5f846ec6790e007ffe4c0f8d371e54fafab96e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

