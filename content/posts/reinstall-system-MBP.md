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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEGOAUUJ%2F20260215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260215T014511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBKfZVHqe1mTZwbFjM2h9qJFKrg9C2%2Fx0el1OOrtfCBCAiASwNVjwhAvLULLcLAa5oqDDOir9m%2FU5tCvryjm1rSdhCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMRPKjlJoisR3lI8GgKtwDW%2FoLYLO0cnYv6ZWa5xgvcSG0jDm8%2F%2Bmvejb46YVhmFOXYJNs6TNFDCNApvCPwuIo4OaeR34vYH2U2%2BAC0D4sD%2F6m4uzW2ePoxZr3wCp6BIGWVtnpdzNPHxzmeHW0%2BotGdyvgs%2FtHxBDKHFnlepuoZreNpi6fSw6Nog0b3koCb5pZW%2BEwcKIXX2fujjIMw6dESDuVFKuq3uhYFIhaFXn1BH1KfTMv%2BQeI3CPocxTgCdL6z%2Fpof6loFcMjKNg%2BPmFxvZr1NegnM2OpXe8FU2h%2BsAyWwMAXk3alMhzGbBdXs6spAeFrJ5WKp3AVfSVk8sjBrJH5eHxHp5lY8%2BdMI9Rlp9DzX5DxZrFc99%2B5bOm6bG3UGq7NqalpS88zoiT04BA7%2Bwa16RBoEWue0Sd%2BO7efx08IlI6eZTwqhCzUTPNyxOm3FqISjcVAwMOD0%2FCVoLoDRCMTx%2Bt5SL2WXsJHWl3gk7PNLdHRexptYmp4uEwEZwGZaD8EGbnMfZycN7L2uEk9%2B8jQg1ghae1u%2BWvywN%2B932BmDbnb9PoV0SXeNIZutpmCKzoVp2SNW%2BytJxaxXvZCBlarG1I%2F50yq8hWIQqVnFa%2FGnUoEEv3C02Wguevnu3Mwj1qxmpZjcC8%2BQlAw3J7EzAY6pgEDY%2BGeBz4yg2z7axLUKeQikB0omn%2FliwZ2LOy1nmJsU0yYMhmpojAIZ4kEYg2Qo23x9R2aJhGBmxvZTLJr7G6YcLSnXQIO27kw%2FDo4V9p%2F%2B8QzbqN508m6lVWlAOyd%2FLwDWLr30WZEoz%2BHSZeuPwVmeLi8xt0FCpM%2F7XWPsaiSriSaZWFWbQ1EcKcmZl%2BX54mGnMZNRWmb2M26jM9Rd%2B5PfMfi7OWN&X-Amz-Signature=43476966d0311a01e82cdbbdab239de8139144d317b790bb3cf35ced628fb6d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

