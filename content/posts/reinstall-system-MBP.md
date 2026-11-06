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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQXGADNP%2F20261106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261106T043706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHgBxzzByqzQ7zuqctsC%2Brv3KS2LVCMbzXo0yAmXCop1AiBQn7q28l%2BPoKolrIsdzlFVpY78t%2FNCldDwizoRaUKOhSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVd0cd4mVY63ZWSQTKtwDSPpOuL6cmnwz5x%2BFWcV9HrhvJzfTNlmEGi9jVSlzoKNzWrwuqkMTnJeR4qcnLWcm7OrATg2UhKkK%2FhmsBsH5uYD0%2FFzIq2hANlKNhqhUCIdPjd8i%2BMZFu9Lz8brFfilLsqwfUfxUc7WnGh4E5LzvbSk8uP8mAXjVrrBqUeWRupos88r8%2B7QWImtZFB90NpgTbYU8lJZbagoWe%2Fr2EN%2BKUaqrnnXFDEfWfFsWvV5VRueMQHdP52KiH%2B9hx%2F7Pe8bFXPawyMKcy9fsqA5wn%2Fl9zP%2FPHBgEgZrqHb%2BVCMbGUdLt9KVt94%2FQ%2FyQ7KVpBSPYDQp%2BGApk1A%2FQ9beawNVMSKb%2F10WqEfgtzoJQtvu2NoYKOzmxTvRLoOV6q%2FgHA%2BvPSLRzYKMyROSn0YwklodI4AmWqbv73NGt3PGCW%2BnSloL5JhLjtHtfFtvSf0lteKuTDUTY2dBkKNPGQNUvwdRD%2FhWt8f6%2BNZbOE8he1vGZ8YHly1XmHd%2BibsfkewOaIWnK4SmioJdDh0rKhh%2FJ9AY5eul9ZEmMoQm0Ua%2Fe0JzxTUjjTYXnTqNO8BhFz5tIxR%2FTn18GeyZFztSJzddvLnO3na8r3gOcItZ3jDPX%2BsuenuXZXT3EGBtfkXsBPFYAwqaK11wY6pgHyLl7sat%2F6hx%2BaziB0abXnj%2FhiP5BaR5jRdgdzc5eZKTxwz2ok%2BE6TAR0XWLIrLYCa3vUEYKaZmC4U%2B67G90CBm4Ucct0XtSAk9YzZdkhSL%2BNLsu62NF%2BxLCWvZjTcnN%2FjcGuNEMawAKibIorIdCVKFyPzdnpVFv22rcH1nhTKzWyR0PN7SNiarpPKjCtWp6NNeaA6KAKjZj3fQzh3Ai3mDMv%2B2kKH&X-Amz-Signature=2ecd964368c700c543efdc74fca2d8320fe5ca9ff625bf5eb6a096c940891dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

