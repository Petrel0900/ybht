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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZWS4CPY%2F20260216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260216T012846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHW5KYipihto%2Fbr2jHZVPKtv5Vod79d22vyLwxL%2B%2F4utAiBLN%2FE8wJkqrvdImf5hX%2FSbnr7LSV6esPYPwMuMrk7UEyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMUOexvg%2FeFuu8uxn1KtwDIlggKMbFTDOGziLmZZWyZWt1%2BPmP7qUNWupQv3prUKtDzQoGcM0gH3J1eYkGG%2BIf3MM%2FT82W6KAM2maDdAmrmFRUX8NRttREMDbhAcefnK4MOHn%2BHSR348hKLxMUCm9k%2FMQwsKHnE9h6dt7w7JoFnMVtClO6uJSsFVMblbEPS%2FgmIvLwVRSiUux0CzFOBknxFXlLxXoq4E0Vx0RA9AiXykXtQsYzdU5OX%2BoO7F5sYAQu3eFRqpBA98aGVdPijL08RGpGkpAd2TNx7O8%2B0jHhRQruhq0noiyVDGka73zrnTvR4G7FewOFtgaIpUQBJLQDW2ds3nrciCOs%2FTIOMfVP0AlOBso7ADHB77hEBKu1yf7hXBWvU0n5q%2FrWcoId1T9jwpG76uL%2FCGUzOIV6KGGpoIp44VwzPXN6eNjiMR8lEUhfsElrxOJ4Ejpw%2BuXC9LRJGyp1tbhhAtYjUGdAjLLaUDxAgr7h78LXj8BVvL8gZKWIzBvdYJ3y5ahbVosbEFp2eWzqQ6dkZaUEh22T8o8Dvcpe%2FP8DORA0DReaR2tg%2BPVWZhM87FmnPy8KeQXvvCYBwf4SN6queHnYYuiit32auFlg%2FuLK3Dy2qoYcy3FMFE8RNWOWtTl8Y8N%2Blj8w6cTJzAY6pgGBozgqiEGysp6Xt7Wz3XnmqHhsTuFGCbtFNwpq2tgcXWRoxBFUJSFkB4Y%2FFzFaNgCVOwO7Wx%2BgV5H2c%2BiHmFa1n2WHoIF9q46aVy7Vc8G8GvdXEnH3u4G9T%2F5aJtnaX9kIEn4e3N1qM%2FygswIuTQ8q6gUJXDJFOQgXxnG1LzX2aRWjSKs1DkS4LOSFTV0FhsO%2F2ON%2BukHR%2FWNVO4WDXO3f51RCaWjb&X-Amz-Signature=3675b24442fb7075d38e5bb3e660a692092fe83388efe4a7c228eba7682f9b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

