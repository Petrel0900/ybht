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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCMMMVKH%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T014643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD592%2B%2Fgi0%2Fn8WEJdwx8W1jGuIMhLVlcfcCm9V7KXdTwIgKNy3qRP%2Fhz0BemXKRvIoVaNL%2BA2lBn3ukM%2B%2FusKoCsUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN5p4j8p6bC96tt%2FCircAzt%2FUUgYcDL%2FPlI%2F0sVQkjiwqv1G5ZnLEGV4fzZafkmDvTsSH0RBWOPFXg75O9j4vpW%2B5GLjbwNFnkQop0CUfIBwxd3cYiEKbvMMP6fNPEa7CuecPam8jplt2eas%2F019D7dwdhLqj3rR16Uol4RIvlbyN%2B9y%2BsMjGmMTz%2BSu4L4Kbme0oJYiSwRLbFLByssOSj25ukWkTkHRI3e0wVwHZkv2EoLE3Qr4eASQjYcKQdWnWtHfVPRE%2B%2BmFDZZq6l%2FAEjbBMfGJbbwvCCYnPRyCSJ6VhbEyvijRDKXUCGVgfv%2BzFpd4LutCtVzcGxUUozkKKK2Tcl4vuUW8gNNNO21RL%2BYyHHcKiXgdkGwhSOXJE3v1SODg%2B5M5intgFxE5b46IXT69Rw9TMKpMBcAdv9GODENbDplADz00oE5dfahyEiYWUgNHNMl6wG26bxh75NsByN6BqWi3TsfIHcyF1OgeAVOxdhNCXbfbTiXfwB939zxc3mrd5vMiPiJkmeUSDVwsDSuHORLZr0yAMUQZ%2B%2FKgKFCSK%2By71pZL4kv%2FJYUGtldfLxDFmWs3UHAY4YK71is0lMLKAGXCkdHH9BwGwZSeuLv2Y5gSnTAqy8N5fmPgAk7IMkrZ7D6fY%2FiQSIBfMK%2Bvjs0GOqUBbVpbuNcQzWINF3AY8m%2F88t9CxPBlXkE%2BOChHz7D%2FrFMP%2FjlCXaEQk9DytxHlf0afZ5HDTrVr98%2F8DPXvVmbeQiDGj2HKIrFB5CUuD0TanvjjqzUF7fL4wjgn6zxOSYjwLHztduXrJQG4fQcJOBGok%2Fvfcma9fyTCWz1ZRyJyR03lYKUjQWeoHKz6fMmm%2BKGSsTAEcP0X8Ssvk5DYLfIinFxuDNiz&X-Amz-Signature=7403737a0c4aa67aeae98a9c068498ef8fd924184013cf16701bf34781ff1b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

