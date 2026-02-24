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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWP74PAY%2F20260224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260224T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCn39kpbq4c5mGAeRAtHTmo%2BYfI0RNdDKVPrbCwEYBr5gIgF6RF9n1TGSeFy0Xl3Ck4mk3lRanPWv0JN72%2BlrkqlwAqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgIpXlDfhV9d4aGECrcA3SKIz6aX%2FD4gsjUX99UrMjmmprbr3oEPxAW9hEn7dYezfQbX61C8kq6A1S0K%2FNxT9oamf4HHg9e8%2BzYvqU%2FJV6NexmAiNVExw5LAu3bCvXhwZm7Wr7somz1JR3E%2BD8blkGU0f0EjjpbtSOLUeKqtw%2F1G%2Bp2qeyNHwLCdpH%2BwjrQDfi0cv7I0Bor1Z0%2FPc0sECC6wdfO%2BtBbV%2F5Bmg4YlUagIUV%2BLhM%2FBzlHFmWxfQENxK7O9uOG9qGagaL32dQ64r4yxJYzwoDx97yZ9NFwzWuVnXoLy3sE5GepNsx08DEaNUgL4etJRprGjk%2BYptBebawUNnNzg6g2ez%2BsXitJA8Oo2sf0IVdruuCiTMo%2BDsI99T7srUuNG8TfEP9Gm96OpU70CZfh6zxbZruZFSVIaUfLj1WcIESAeHa7m0qDqngdMEGfx1hKLoKHcy2xYP%2FyEfdJgKJxWQmiByBCR9SMzZ%2FT0geI8cagaNX9Sv3q%2FbLxmY09qHVqpLlJ2BOrWNrZ2ZYek6ph%2F9FAixhyNwHeSa6BL3FAQgO%2F%2B5rtUmFc0osjwAzsdFdzBgxFzZMBM1%2FpaC4znN%2FwoNOb7vbnTgjbDYV7QdBX7VlItfSXqxTgqkt%2BU1wwIdP2GF3FBgsAMODP88wGOqUB2F%2FR5LPKV%2BAYEpkqp2bGhXxiAPXAgPZeFC9PI3EzH%2Bi0MEVWtVnhFnwTtE2ZFIMzNQUyPFq9ezTd3MONHkTO6K2v8swWuz7%2Bs7cgxtVxdURkQmUBPynmLK9ExoJYKFAA3%2FI9lQ2PblvHK7jl3jW30GdE%2F2Ust1iZQKUIaVDt2l5rVl%2BtfU9lx5eqCnrujWSKAvX4JSkyyqBdBFnnbosjpeNHg8%2FI&X-Amz-Signature=2c37c9ed18bd508d6bbf9ea2fae757af92f668188eccd46be5c95f4622ad9e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

