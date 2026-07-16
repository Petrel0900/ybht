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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZWPGWRO%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T020113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIGfWggMp22L2GulnJ5oPJvNGzkEMdxHWFpSvmx4HkUllAiBWiRsG%2BGADaCXbIBuZtoLqbVenfHzHK8p3MU%2FWcLw1HSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMUvEzymxXdoOAB3WyKtwDBIBN2J89YsARf16cG%2FufcMqH%2BX2Z8oX1KBL0ym%2FMXMltyfZi9HMwGvFMa5Q1ZO46pZ7LLGN3110Na1gvgkmdGSitANOuZ%2FQ9kbTHJgQxWYIQGTMNfcBnk6Jtkd3qy%2Fu2Aw2N4bp86%2Br9SYEoUIpVazfyoZWxGTkFNOk0Vbo%2BhF0n8Q2kOZFnNX%2FGRbREVfK8iiVW9hMCUZVSplIWzOnFCQ%2F2hMIsoOcBpEGAUL4eC4KJhgqeqbBWHL3xscQzpH6YL26BB3zI0QxM0FZ%2BGaow141CX8DE09Tncec2fa%2BwQMAy3PTOcK%2BcZu9HYyPBnArriXRdgcCfVWz5HkFV6b8zesDYksqCTb0Y6Vx7Ekp5kF1Zj6%2F%2FtFq2VS39xsHV%2BQ6FJp2gNoFTtcegD%2BpmVqwmjOLewtzaEbTY%2BAsz72%2BffUbiqiBowpPmIMMfBYYf%2BiLJHpIog6MZwNj80DqjPMonB5vIxvJFXDjhmNalY2RgnVGFkZBHOGv%2BTflYHwc8Zg%2Bl684sY6jUX3%2FqOF0XIveNiRoEDKqt%2Bf5%2Bcp1F4O%2B8lOTTcbfn6lpJmI%2FNi1OK8HStgK9ajxdGSCnRvVN%2F8zG2mNT6X13lanNf%2FO28G2xsdnJogEsQdRts9Ml%2FJFwwycPg0gY6pgHZUzZXZ0VBoX%2FBLuIeSULFuIN1VBN14JPO08NywEFYnwhKtNHWnJfkJkq%2Bn5r0DJhXNCI7IBGm4HCGOJyvTLa2lcUyjfIUYUvA%2Fx052it13WwgxgNeh8PPkZUEJSUFbfcl31KPLlOW0CJf6sCRGrlRtwq%2FiO0if3ts4yvfOKAh7OAxn7NQbNBKPoGIgOE4Oxb0AQWkZTuFTj90AJG7sCpai0ikZ%2F9F&X-Amz-Signature=00e7859589328cf6616914ab58998951f6b98eefa321e7930f3911579e9d8ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

