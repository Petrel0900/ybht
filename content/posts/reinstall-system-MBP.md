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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVLQLLY%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T005034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ7Eq84oEcye2e8kkZVKzlJCoVTA383DPxd8X53CPB9AIgElX%2Fx2HJGq3BnfI2VNPr8qV%2F50sNXhGpGSs3S2Gcbv0qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHB4eVdSO5PPIf78rircA5t%2B62jOoq%2Bl8gyfugqLVOsmpv2BiNq6mhmYN0YSm%2BiXh1X8fjK3o5YSV6zSs%2FROlscAj4XedQ9xXhWYm6sWScYUJW2RNobBnFqqAKDdJeJOLK%2BXSId3M9g3LcC13Lh3Z0vkyAHHpCW3qdtVKh1EoKXopnPYEPIuE0VP5xx3H8p%2Bzz2cIg0rRdFB%2B2Qob4wriBUaNnXTKeQI%2FTo%2BNQeZ9Ab23ejVbAFJ5KKF52S0NVT0xSSL4OGfQXRtJ100bzws6VeYIVuOCnrfeqfmpFYOmZQTcU9MB1d4iZrm1S8ijr52QsSVXvbg%2BDsL6MHp584LTxFKjosBHhDFbzjjh8WX5Ti2%2F%2BdZ7sNhea0ES1xW4ZVkoLKhZUcEho89Ifz2%2FZ4ksDZoFid%2FBK%2FDgg4moc%2BvE%2FPXYqZYmc6eDCe3CH3ebfgsI6qKwB0f7FCUzGtC6BBYKR15PpfQ7U9z3eyiwq9O2F%2FHL0%2F9X7u8sKp0ZhyXSy91d37OTFWzyPmec48fcsSstWnGWc4UV13RSccHjAK3XvdnLPZTUjFzYlZE1fBKBwcQoDvg25ilCUlF%2BICdFgqdw0rPVXS8esdWz0eseNnsZ%2FQHtx5lHpgCmsX%2BFTX%2BIll%2FLGqmnHrUmOyMafAmMKTCo9QGOqUBwATB3jLkqrBk4hXIdGKdsl5osJ5kmsqpYvs5N7UeXqwgIuxaznVDGFbQ1%2BxiSq%2BfVrQg1EGRYZ66AX62ZoI9hW9UECreHvCmQr8CpwJQo21TnhrDOFLkkwnVKanGb4vZjVtzk1oZijb1ll4Is8LaFpd%2FAMN8m3Oc3fYSbMDhY5kOS82dZH7FOr2eUe9yZPS7EZ9UM9plA%2BMTUrHhqAucvn1LS4y%2B&X-Amz-Signature=37249250dfc95b22ede3a8a564d218e4bb84a2bdea9c7028880d367a193578a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

