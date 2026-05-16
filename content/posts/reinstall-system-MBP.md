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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHGLTOQ%2F20260516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260516T022443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkQ7nBVQ7aZkmyeTIFrb1uBR6Vqw8YYQ0xq3%2F1TzzQGwIhAMlg%2Bq%2FCtQVCrs%2Fcvu47QVkZ0TrVn9jC%2FXXL0nZUjN3hKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkiSPpb38j0nj%2FplAq3AP0EPs0USjqT98Wm%2BlpsfBBbdiFI440YnZleQEwtyHx%2ByphLbT6Cz5Tfr2cfetCRpG8W1%2BrvxICGOhSged%2BMVLQ%2FhDAQ0JsGSHUTfSBsEPhrSkW6Wjt6AA2h8CbAGVNMmi80qpxP6u7hx%2Fj8gniX%2FndK1V%2BeS1mZ56umuBgTPgZC4s%2BgxrJYXvHCgjgtp%2FbcfySqmlaymNuB2RK9ek3ainaSRruHuY3q4JDsKlRE4kVTsxXiFASQcsMC7bS7zpbznwcZXEy5ouSg2fftGE3A9yxcGvl6Qrm0hdNaMBszEfLGOVadn3zzSzJ%2FMPKn%2FxvXPSlAzsCjZK3AFwDECfSxiMDSmpkcAFqTmV6oy06QnHhDxDZz%2BNuTbHUqk1idYDPzzkWX9o5khxVnfuMEiLkO4wQu3gFc8Hcejwf6k9%2Frpn0J6YgN0dXIXpoTt7QwCjiDgjiv5MiJxiZ85NKbVKH%2Bvn8pQKTZ8nJRLfrvYwTQrAjaTrIf%2FCW8uo4ic2jfOjNRx9h7awoGjefQohFNvD6bsn%2FIzM7yE3gVAL066q87qtZLwldnQXaCUfnj1OVDOk22oxFKWeS9jxJa2C3ly04IshsRH7J6oxNEIKgrnAE2biHucQRJPh3CuX5bnW3xzCIqJ%2FQBjqkAb4fpN5qiUxAovgP%2FxV7jqu1YKuI94qqtDGl6LYfrQmRJfBOyxS%2BaPKLFM0iJ2XFC2l7a3QPm1o6bKDfykUnrQ4JnqKYc2NLTw5qejwUcOC749mORJU2ZKU%2FnSCf8izN5Ohi1%2FHeoBelwwh6zq12KlQju26qIRF%2FhEI0etK%2BXOQaqGaJHsh3t4ZVsw77X4YDhLQg3q64ZjW41ftFEzQ1diCoPIoS&X-Amz-Signature=4de8e8a43e61af57c52ac31a5f3c855e7ec07fa97655f73b13acb0fc0d14730d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

