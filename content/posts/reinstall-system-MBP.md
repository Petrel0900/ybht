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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOQ4G46%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T024845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIHj37cZEq1bzusDy%2BY0pTjXKmycwfee0Citn5b6L3xdUAiEAqj1MvuUHzhrdC5U7hZ22H0BTB%2FTy8mlZ7S%2BC0iUGSkEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk%2FJx3V80ip%2F8i7%2BSrcA3v2uK%2FzZewc4clU2IKXP3I8LUDGKkWZnMPf1FwyOTxoxNSikjLfLLdBdYknYT9HabTlLF41ww6h5BJhoNdwPwPyfklgHTOZzUiK46dGYr6Q51cuU7j8zrZ7JyfltMR2QFGlk%2FQZhjFh%2FgpxOrKk0lx13KUzb8L8DmqspLjFyKtiSr1QVQZ2MqaaYOQwJiYmZfkZxCzglBu6LXk3498934sRhdiJ06zJVTXlhtU1vP9eElucTkGagS12xzSADdEsBUp4hJdcwJPy11un%2BMJXLCRTHj8e1eGQtJ1tqP2b4dXwaI4uinkGR5pzOKbsKRwxryJW1y7RmPO4IkWnQwuiR45eRIZBsUX8zy1HxNu3aZHcjPmzG8%2F843i23EsrOzFgDatzwJ35rTnTZcIfDac8sKAC3zZ3dA8S%2FfTfNwBezCkBG%2FsGclYSIsvf42NHBSy5Rztiy7Jd3ip0TTKqmr9c%2BGI2QX9AYsZvmq49PExYy0FWIj50Qv4WLHoalXGci3e32KsfdzhU%2F1dSThWG8bZPDfqsAj%2F6b39YKPLc8SYJ0cPealMyqEdUyRZISADTRl8MoXXOakx4nYNUSuoxPXq%2BLDjM5e929pY6nCTmYzinR4LslOQ%2B2G5Ld9ypsQXkMJOcndUGOqUBGcyb4pI4GHJJfeUcXf%2FuIdrMXCyLwGZfCSplPZOsErQTrh2K3ziC0ILcyFuYOBrbLBmdJNerB2S1PaE97bCJwwKQvNtVHZ0iiXGTcHlIA3ulaKrUrjkEZeJam7YcRirxlQB6IG8ju7CGkaH%2FE%2BwsVq3sfIeFwj4ZisiYbiLGXG35kZMfEuxLIrZDK0NlWS8vN%2FI4HDrQ8dSf%2Fdk%2F8U6EyEzMKetA&X-Amz-Signature=3bfee862458215e69b2549e31b4abcd1c5725fee598e9b76f42c3c8295ef05ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

