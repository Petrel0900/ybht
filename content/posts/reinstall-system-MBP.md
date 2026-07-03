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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFQEYWAD%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T021428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHlAw86Y1p6GqVljZ2%2F9RHvyWPRNal6Z%2Fd3akxro6ekQAiA7nYhoiiOPBEhZVT%2F1BsexlVxkev3Y6NmKBqh458vfcyr%2FAwgAEAAaDDYzNzQyMzE4MzgwNSIMEsyGbSn%2FHgzGDq7sKtwDaMzZ1crdE6UnJ%2FRFl8MRjvKbac7vnpv6EEYLjvCC7dcmive2mm46B8VRl%2FW4f6VnxdjPHTm8jTVIZoXHnToAlAmVlOGr%2F84UIthmecJgxQyQ9drrqMnwMjpjCHndJB0HTrvnHmij8%2FuVlXYC3j4F3kYpfy0VuwHNdRnHDwyTlM62XSvhjOKH%2FdxQtZ%2ByT1F4kJCeSMiPRpEv8jfO0brW%2FnOKKh3Zm6liHmaOLLEEJ8OjrRdIUFZ1SAYT4GJREjTi0VLD8WfnR9ycgDsd34p2Mixw5d0%2BE9h2XyrqOvXPzO8rNO27PEwtR6w58227rD8uF%2BQccLoTh5Itej%2FO18ba5Kfgf84xu8UPyAfeGXM0gn3lVLlhVIguJYU%2F5iK6NeOOoZwInK9SEBmpObYmT4VjnwyhD3iAMB3rggI%2F3v5kncHIr2vyf2%2BlpSRYIOchBKZ8BjqrdXiY8Otv5%2BESRQA54oyhGWWcZr1tzWajtPlxMg%2FjFF8uVME%2BAzGMMqW9UtgjMrp2FFdRc%2FlN98B6kBuTMY1Q1cPRAPSCXM18ouWilurD8bbR1nCdytPapIb7Z%2B1gqoL%2Br38vwMY4z6PZO51vjRfzeI1Vs7yw%2B3O6zKx%2FSUVRvBKCF%2BWiAUBJscAwh9Wb0gY6pgEGIkyT7P%2FULOfa8bS4SL9UeYznRCPTsZStbsm5qam2K%2FVxW4Q4aGMatDTTL%2Bvp%2BooLcONqKPztJvvW972UCj9ria%2BAJP3J3TS5S5mHkP6sf8neq1mcZ4JX3jJ5V4I%2BcXYXayKVybqQqdB3pRtrx%2BaVOu3WA%2F4h6Hg3FqmWuBQY4IYX1nHu1rHp3z5ZksmtqNY1ymmWJ80N1qq3UdlWQu9%2B3DESG6LV&X-Amz-Signature=4e155257896ee0b4c695d39c5f394e0993e5f7f2369497c1e925fa7e984bb552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

