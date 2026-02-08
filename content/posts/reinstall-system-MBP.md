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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6YSCQUP%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T020033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgfbo4D%2FanqL4AmYv85OHLQQ8Ffhd1avm0vHSG%2BHe%2BlgIhAOCw64hpAGVgnox1k8V76z3JsPKvImh5fN9LQHArrVneKv8DCGsQABoMNjM3NDIzMTgzODA1IgxmMv8l%2FvuHTe%2BDvRwq3AMg1R%2FfQC%2BcudZZjzLMjyG47VENe6yu%2B%2F%2F%2Fy1r4lOKcgaXorPcMnVkz1WYFJ%2FePnV2JXtwvuUM6jElwyS%2FXSdefBw634GDI432Cg0hcTuBww9K92gWlniAbXjGeYA%2FsSWAOLc1PUFsoM8K%2FsBEKI00miT5zUl%2B3PcKgpTb4ByqMer0cWdpFO83sFjOnxNDeu1GJ8WXBx8LCX8UxJ6d5X5HLQbSTuOK1uAsKb7q5iaEiYrnYfkX7%2BO1Mw4znEUgVaD6f6I7CGGHOzhWIQCrfwfoPCR5%2BLmIv9XI2TiCfsEV5oFfE%2FkH%2FN0vHTIIHUBvrfV9U%2BHzhZchtKb5n2kVQ9syUrHZzsOawJzXlijZLd8duCEB%2FD8P1F9RwAVkn6Kqk1Pg2gF9EamTVKnbN5DAi27eqRDPEA68DcQg8kNibGv42aZPoh9OeqTAKI6rD3%2FDW5RQlitsWAAd%2Bzhzpw6VpiBE6uBciaiaL%2B6%2B5PXeK7BCoX40KhLJLZ%2BsR3ChBA5rQmuL2NSe40aUVgZE8Qvy8CB%2FrknF4XDMrRnK7VGHfin2%2FXtiZ9wMqhaElO4QdOiEytZDpUB9P8fAcygfl74JFHUVIFzy4ciW1jxlmquimN0JVg%2FYo6lY%2FThRaIXn8UjCuzJ%2FMBjqkAfFsgUXyEwjii95ERindt7BV7oPY3TAJhM7sw%2BWWNVDvuwqys7kGpEBHQ%2B1%2BMJvhhn42RE8YfDApyLeoFAjYmx2wcwX%2BJ%2F7lIgXmf%2Bh3teqkDndU2liNGv9kEy%2Bd36cMnfH9D%2BDyYmY0chTx8EL2VQDqeikB5%2B211%2BmvihpRsxFM69BsYVr4j%2BhNFC%2FFQtWsF9SNYBd9cm39OOFk4ROz1P5QajhX&X-Amz-Signature=78bb2bb73a3adf0310ec94156fd52ae75458f4f7f3268aefec27e089c06d781b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

