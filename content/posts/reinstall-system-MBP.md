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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MZ2EN2T%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T020721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCCp03azWBcvHZavyj0K%2B%2BtB6%2BlZtgJiDPQxhIti2HxgIhAM%2B7xhVSR32v85aAa1icLVga6c5di%2FXZ9sngchuzbqEpKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz17QisCZwkLBCNlUQq3AN2m6KM59Rv%2FdXdG4ZAYhac6B1cvaoPRJPzS500Su865zPFGqPfnfEdJz94wjAcM7zketwlK5vk8h2Q65bXX53liDID5%2FYHN3PUt5f6wo%2FwW0Gnnub6Jv0SrtNE6zErCik45I7anM6OrrZYA93FZYm%2FSHoBi9kJVwj8Kz2UWfiTGHpvJEiZgDY%2FUdeqsOGRy5UjzQ4i5n6tUQjXu27YiTDo3xAFehUkT3xxzrOd3nQ%2F1Kqnz6jLKSqbve%2B4bs0nGZ8AR7%2BjzxbAYtJg7%2FK6RH8gpirUCyvEEvvToVUEyb%2BbESHEBz%2BgvDXhiSqdm0Wf1kgIjHri4%2BmAnhb1aRNj59v9gTCzQWugT65r9YwUajyHIBpcFxoPI%2ByCGluQ7lr9AGeALY4HE%2FBvSqnrOFuoGGgICOjiDeDPGwc2iQaQ30Sfg88eIWOruYP2biy%2FBrqSDG%2FLpDBBrhWKvuj1dWKBZLsy2ar2n0Ex7RE4kKhex9rx8t3WPnl57tjH57391YC%2By4h2gVA%2BMV2Xi63jk5S5JEgwhZNJFCGjOnjQb8rrMdU6ZAdZ67M0bK05As8Lui%2Fk6M1cNR5vCXBqClwCWLJXhpcQHWVSgJcGoAR%2BG5WGh5%2FQT3fGHk5rPy88o1IInzCC76%2FTBjqkAXL6ljFm6WRvRSaY%2FTKSkAEhi6k6yIvoJzjbD2FJI0Ijpcg1mAWgZyLVAHrNJdtmztjH7W1rhsqBkxSs58NuWxltu94%2BqecGn%2FV5t84nRSH5h8w%2Bl6toDM01csGNlqv19WKVnkiqUEBySifVJCqpYfIvOQ02Mr8Sy7s4sFwLQtrfkN2p8TLhiTnkvAl%2FhvNr%2BzmEnXSarlDhbfJiNr9CA%2FJIACAH&X-Amz-Signature=c4cfe5374be37f8a03c0c28fa880c55bbff555f9bd2846a3300b461247a11b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

