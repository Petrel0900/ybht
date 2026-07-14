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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LREMKHW%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T015141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCICHL5Abi9nwuBFno2To8oKvxCtIWdBHdLfk5FA7Z2ixtAiEA7J04GG06oXO%2FT0fH5YLx4KZoNmGKC8NHkrh445UgaJUq%2FwMICxAAGgw2Mzc0MjMxODM4MDUiDOFh5Khl6r4z1%2FfOzircA7n%2FUuv0FrifwQRX29LSvCoZbVR8psiZWSRSQfApWHky%2FQszU9utx0rwgRjOqU53%2Fwj7dmVX%2FlCLacqMCU8l2BjcfuBt5NxKLA93ZXTOgkIUEkFFPM0dB3ILKHgiAV0UDT1g01EkfLwQKJ1Cyx8WPgL7Kta0SBuppMbzifWD8lxXL6TO%2FDnhxWNtOQROz6Uy6xpvUcnhkk14DBIfcvWoDerJAC3MTpwSkTNulNu%2F3VfSmOdD8Qug%2BMQa0nKWufrVv1pZZz%2F484zMSEvHsKb5NV5POjMnaG8A3h6iaeAgAN6e6iW19WAWGzhFrmv41MDvIOoKrLT%2Bw93WhfYQBov5aKp70PZHCB4jv3oIYvVUuPCjkP5av%2Fl5XcECkBjausJW%2BgJ9IXO5096o708IHB1C2Azfu1Vm2Zj4bnKCZSaQxAmXD%2FTzSCSC3JF%2BnvHR7WeNg6URR1idHKW0EYwRlo5PryMOwMpSQOt8VDYTaq7xtJbFzcdjw4l7b1k4Mz9CpDPtdRW7ce%2BGu2k0gPKGQHmX4wHH1G7aHT1hCf9THQhFcaRYbUQm8i6qNO%2BiyPxB%2BgezEpFyHHBL0VyFxaRU%2F3tg5XakCI08003ov0AoO4X0oMVKbZlig9TCVq0CK6n2MJ6l1tIGOqUB%2B1IpDsi1fQX1UHkCu%2BTy5Rt4Py9B0LLwh%2B8tsH%2FxQhsmEuYMJF%2BNZ7ajlef8fvtvvMkqCPZCYYMbX5vwFlBAm2kGeSNU5FxsVMOu8ENMSOVIQj2WMFnwMM%2BUKIJ1pDYNcBiV1mkGrW1CRd5QDC1wIZVkPTI9Q8AQiQvN50nCySpk1%2BRMyh55dIBNu%2Fw%2B8crs2abRnCApY6s1J%2BPnTYfatXANKh%2Fw&X-Amz-Signature=b04c46eefc5c768b8de59941c6135d0face265d4c04d7fc5299cfbd31d3bd03b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

