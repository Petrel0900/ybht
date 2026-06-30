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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKNXVCGS%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T024319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2DNuhocu3vb0HOtA%2Bdzs8QnZrL16VMglVb5yNKRs%2F8AiAWvdHdcPzqvXMt3ngsFOHvJYY0IyiKiCxPEcORuyB%2BlyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvhRQNbjQ75HW%2FNgPKtwDuIQZuDBvJyGCPnPUfUGRrI%2FZNmNGLwxpnrrnJMTrhf%2FQA05M9FyftukKEP0CFCldweuDBgKL6UkT2D6k6kT3CCVBr%2BnzzRxuuxEYq%2FXUkAT%2Bk8CqEt2gYokT6vNs%2BtLY0w0fCiDA%2FjTgoHEgl0q%2B%2BriQV5jMYzpCrONWFz4E0EluWrWp9Eqklffiio4bGF8nNym8I9vG2iJGi%2F2Cp56rb%2FlS4cOyVaMniwHalTzURAVmRLsCWSqDFe35yaEP1Tbuj5vP4MafBtJGGtdRI6Wc14GFZ0VKsUi3gsYP2B7Eh6Yu7TwD9gir3nJ6jkUPIsFxNLZ%2B89bdOsQyzSYOob32Vh53CZgx1ioCs12BforGIo3u%2BjTrwnE%2BMffbeoHHD0gkQ9O9epgveRvx8iECikoYZM2%2Bkb8bxS7pgY78m5EpQiuEDNjGZbowkvs9XpnDgu1m28rFMNEMlLf7ep6c5RcXTlJ4fzUNXuoqk50fWw7nn%2BA7yKCJG0%2Bf%2BNDP7%2FuJBSzKqOW8IRqpTot%2BBgoZ%2FMVFi0%2FSpXerCIVQPeW4eYd7K8ngFC%2BIlFyRgJdwBYgbXcX92ghTJEC%2FgqDBqqcTZe4LZb1goVW%2FdPi8ZXypfFpK3EnZ%2FtwVgh5PHBgjWxUwlbqM0gY6pgE6FQiC4MBZPGHAqV%2B8CLt3R0TUfjI%2FL9SPMwViU00NaMK0hRcsj2JD%2BxLFFEz6qZw7JqOmWRR1yZbXAvPlVL7JDJq8wZjXJzqLI0%2FKI6e3U%2BDWqhScYdRqcrr6KfK6%2BCm%2FUen6fPrtNZNsfr3f3FAYTtMmKiNto65pjAzEBIg3ZPmJ%2B5NlAacmhgPIYW5u5R4Cc8JaBxlVxu1Q2XJ3Vx%2B0HzCbLDGX&X-Amz-Signature=4c0414c4f85e3f777215c7a31d87da39b4bd34c7af1e25af2d4d062945e53371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

