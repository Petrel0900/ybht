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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNRPAT73%2F20260419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260419T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDepbdI2kJCt2%2BKdDcsmYNcbyR1vFdHnyyS9rXjOy%2F5IwIhAPhWQwPan6qbRygrDpjLrpY%2F%2Bpj4fRXPWUxW%2FENe67BHKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqvXQzllKMD1CccOIq3AOEjnTSBEoLmgEfuRPQSs1KibSyVgTQ71TW68yw9nCRIGU2IVc4GPS8AXi%2BqeOVZR3x1PdPcwNd2VSI9Sz%2BBQjb9li6EE%2BNWOgLfhZ3zuOrAE%2BpJfUTA16nxMC5KIHHCaBcZYg8jAUvmy0xhG5VEGU06vqtLCgImNufPMKjoJIZJodjMPoSRUqbpHwAreLUsMTB4hggr92X2CwghEh2RTva7PsCcbkj3rUJZSmhxOjL0W8SnY5WETOWmb5BhyRufNzApRqs%2BDewqdkr340ZOw8yofaZDqNmjRyrPuA2UUJCJn63UbjQCEE9IOYCfAg%2BTeQ3AQXMr6BPnBrVodH8v%2FfSmqymtTznyl51w26aEJCm%2Fo9pYzjvUi4iCJeTGdOHGTDK%2Bsibk%2BNZZDRXKHz9RiW4x2H0a4gR7ld7nFhpMEfiIl0u%2Bqb3Bn8pU7rTRcOA27PuSBFUddIG89s4zgPDEIMAfoEKrZ086o0qdErgunAX9mwLlGxXG0yGvQh9z9zqSnQ6L2UD%2FJfV9rEz7yJFTGVwyVWROsac8GJDM7BXQTHFAzYtoAN%2B%2FaIwem1ZCx9SLwEnqdb8isslpGyM99TtHgCAWZeEB4I4H0Sz5aQkmaHn10dpBjEpXosA9KijkTD83pDPBjqkAXHvhyN9lFzU2Y%2BxtK53E7cvhS87aArf6ZoaTw2Rfm1jfuYIHIb7YQcQUNd6%2BxfqgYCa8mxPHPbV7UNXg8el%2Fj3pbb7Sra4WpyIAcisXzMQdPKLfn0JGDF%2FxBRSLsUdjSemlC%2FHsWupikiSsb1yBcFatU4hQgC2pmOawP5UUVMDrKyuxXlOBU5jO3lrQcWBn2CXxxaHEWzfxaP%2Ftm542kzlpikR4&X-Amz-Signature=a59f5c2367d1c50c052ffc92b6c16318cfeb18a96d6bd088d15cebd0160acd4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

