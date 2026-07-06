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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W55VGR6R%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T023312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYhShrzaELvpOLl5lGhPHWa31vJfDOO6o6pO8t4KknyQIgElQueNBd4PEzo%2BjdVbriUu6jnA7SbYALL4BWt7lQdbsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAd2ztVrhR2t%2F%2FxnLircA8KewIQJe0BqNEpkeJEBibxIle9Uwgvr9FyaGorjPzBv11glwSttXbUmDEPW%2FadolFRxe4hwma6X3imHZGo3HMLcoXuq8tLpIPhxEHyfpZKh6WpkZOMfVX3SG%2BbRuF9QHSB343gVkvpqOxVxjxfwU66%2B4IGvvrx5WUHEN7lzeNGepXwRb42OIZUS4QdT5Z2zjLYJHQ1%2F4Zt%2BFloj5dFLIn4sVmAdKN%2F0AlxN%2BQYE4Wv2vzoSSrMTcrCLuHX0jyrs5FpM7Eo9wnEBo8nnHcP0AaZfstWqZ9wPLHddx1qDubOYFWA8IriP%2FSVzw8DXgcxMEE6bb5z9e8cVdBY3FqbX14orDBOgZ2fFAOt2JeaQeS4hWwqNWvErLrN0AfHipIIPN3FWLpqPUakpFbAcfBOdrGbcU5cUySa2ZMns5ahw%2FQAghsJuSUzUCFF2djvuej9VQ401rgPg8HxymNf8iYuk%2FVV3eeFNAAwgfeL194A8V7%2BWmF0Ht3TqzVqL5ctOtIPWAW9pOFDi8yvg4tSZvmiFYyTGCP59plQwI%2BGM5peo0aJxqC8hR2%2FokJ%2BTJgcwnJx%2BfPLs33Q48LMLjXyavvL1ALXTD2GNjAhfqKwio6PJVN9wbt7AOtD2cZrflqP6MLaOrNIGOqUBNsXDSWWJXjrH6ddQAUSTL1NZbYSMUg0ZKsad51UhPrdpexOxFqYZ%2BTkJZHjtFKqniBHVRMjbp1cFUUaBfiqbMhMQS2D%2Bnu%2BnAWgi34e10FLPy3Cz%2Bw0eNc1FanjJEYzjVC9qauZytaleG%2Bv9Vy3gDhfpAAGUa9RLgZIidfRYH4MKiazQTZDARtEnxh8MFdl4gi9UKAB3drYJyY%2BAODgZ8O%2FLv%2BQS&X-Amz-Signature=2f1f7319d6a57f895a14d3ca1a18786014e3c082a4e3ba6dd0570eb112f8ebf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

