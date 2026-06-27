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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THVAQMXB%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T023510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrjP4xqyticeYnHQFcLIkphh%2FO5gxhTT5SvJ9Yfhu2kAIgOhc4Lay4b%2Fii0RclZg2s08KnedzzRg8DTSI0Tw%2BCsyAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJW7gjQKsVftae6blyrcAwZrskwWC%2F9eEfUNlkAm4E33hA8CuYeyJI5One9Ie%2FTcLY2x8pHvlYWE7ij%2BWTXnQGzXZub%2F7r3sju9vPd6Bp7vM%2B6lF0hO574yEYgkQzJcPeBjtai96N15xkkB7A49Edn1uho9Rs%2FO%2BRiHwdDWXGvjMM4Ow9AIhw8pNTsi8tJFIpgfBIdT5tMTZPZD%2F7XLU4v0NisN1mKXLOZ723ZV9XRhxQ0SgB8rMbNaG8XhBwRAIxBd5ZItZE2VG%2BjxI8ieJDhflKo5OAzUfHDGyyN7OzucUCVXMD2o9KWyATcjb2VkwsvotpkEq3yq4LS8UwdWwv6OJMIX%2BpWZ7KMmLLwLQ78%2FmRLbh%2BZ6ZbR%2B7xmzlOH2oLyenU%2Fi%2FpS5rhuwLmR7xuCj1kWVeS2VblStr%2BtqQ116gwtEBRvTyiSGRM26t4TArehtnSB4827BilbalGqF%2Fo8hOm%2BInWgG9NyuF4py4nernMqsqF3OUhGKjvnk7alwL%2FGCcc1M9dpsXaH6rhwKXS2w1C2u5z%2Bj1Vf1Y8J2LGBTg%2BX%2FugsH%2Bg6l5UDtJaKjz5ECAYSlU1GH2%2FjQth2Lxb%2FYzyvDCWixZZJUTdJteziqv%2FR%2FqRP26NwtFiY%2BYUcAPc1o1JLADd8GbF1iiMKPr%2FNEGOqUBMt%2BLvVjVFR10%2Bw1sV1dxQ3rVif9fvhgdRX8QDDLEj8MhcDTUAYZeCLZYspcC4J1%2BLEuJSoA%2FRiXki6TvffmV65fzbFb6dkkYbIGzyq6O3soeb%2BWXXC8RVOUOsIG8Ceynei88baSLsJZr0FWznUXCW1vtsUA74fYtHm9s5G176q197b7ZHMFD2ELRt5uXD4UOmc62O7Z7TLDjDdQx%2FXZT9AH4UGbS&X-Amz-Signature=32b62eef7ae6f31667f719ac83845731632cb5ac546648f89f2618b80ec23cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

