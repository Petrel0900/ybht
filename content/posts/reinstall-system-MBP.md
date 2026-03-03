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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMJI4IV%2F20260303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260303T012918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvZU1FVGVVfsS8COXusgVasaiWNRL%2BgXmX%2BCNWqiEbFQIgbcVOnOyvP74TArIASttYVOIe5JPlW9AmGUZMZYU6uUIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiBFaX0CBKHjVhacCrcA3VRd9P544Nml4HEA2SCGAIL9lmaykSn5beiRX76EWPS7ezikoNBY08uwrv8B%2BGjvz4apX7sGIbdqo%2BhWhLXlcDDORz1l4R71gQkvGN8craVN0LAcXgEML2hBM1nhA2m%2FgyF%2B5do%2F3cguR%2BLDzncarfgx2PPuKfDIKASUJdnBLzNA%2BjwBjG0hm7dTg6G2nI3kZlNYw%2BWKY3%2FRRVR76Fq7o7EoKADwn1dJmrL%2FiNRilJvJsMT%2BHZ89duDSrmP6ydlujG8MYI49Yv9eANV3SEwhWZlLvatRsznRgJ2f5ftSxASQGDBTVk%2Bf%2FFp1A8lg9GnvU1gMqTbUSI7v5%2Bsr48OXkKWUtfXs4SIKdNirXDSDzFYph6MO9tDJ8jCFwgk0t5bNRQtS3WAjphp83ucD9M53ywQWfVUmu5%2BcvtyKLLrvyDdDwlXkzpCRWt8fUimMMiECdA9wxIW74LEZCGgMxjeAk4BMs0NRe%2F1UqjqhPC4aQDw%2Fr%2F2EHHTUwEnaP9ARqBeDTDDamI5F2yRl6AQcGGXenffK7RzsvTjJPc2My02xyQpmG7sENsKYhb01FdOG%2F9Qb67ToOT6F5jNj%2BWXaO8Q3T9UNvtfPd8n1lJnS6mWKXm%2F0i0c7wqrEYS5e49bMKi1mM0GOqUBnkXhnshVcuImmCIofxoQUJ4CIjv%2FKDuMhrIrheKqB6c7B0hUgkAj1meCMGlBFGo9eEicY6y9TOovo2mZLwR9KGhOf6%2BXWZ3fJX1PjjKsepPyEpbSXY4E1wSaqGURVuRb0%2FUMuNBIPivQ4H0CYbN%2BEBOv9%2FCPwpf5W4qLy5MB7K6lJoM6riV8Z6MUkGY55o9u%2FO%2FOcRiNmiL9cXQE3kiawoGPCMCs&X-Amz-Signature=aa5589634b79d5bce7e07727b0f10772384ed86da554bed89de92d779cbb0b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

