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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCKL7CT%2F20261011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261011T031932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMZXCo6MSI%2FlpnxAmKcGpVdB0XIhe5m5MiSPJZMfQDuQIhAM9DkRD5ZJAsZHeOeJSWtPDlicDuL64fU%2BjAvi4I%2B7d8Kv8DCF4QABoMNjM3NDIzMTgzODA1IgyP2PuVUnqUIlR8%2B%2Fwq3APK%2FNYNtXn9mwURHRbJaBMEEDvrEI2fMbVUU4PVQooRZPrSFnO77JQwc76Z8Xy8TM7RsItSmCYDtode3VR8cFAgRUafb%2B%2B%2FmHtcYQtk2UMeTA2u0fGSdAoJi8YcURcfP%2BSpKYfdNMBHqBPGQcO7oOf5c%2F00fBsh1XSVYmAE8btqh%2BwnJ6JPRlJlqMOJ5NFNTPXiCgiL9j90dqkmgSWVPCX2yXTsmm6ui%2B663e0ac9loP8%2BAEw%2FSDMzqGMRk9vVyAqvLzxRsXfPxiikaDeaH%2Fl7Ml6SMrH4yOHGJ5qdB52T1D1ElWXiPqmiUGEAPpO8c9X6y9ZUspzBbi4kDih52WF2MgWADUbhcVbf4dLXqcz0EHZ%2B7GEAz6G18XmMQ9ibLbyM90vADtr3fiXs4e9KVYUmC79AlXgUexjkNgW7LR50vm9LypfMNHAu1WeiJgDYu1sD%2B4geQyR5F1zZ11zz0Iua1IS6U9ZPmUu64cPJiKAZJwt4cePxDrrgkvnxHe9%2FnI3XYKuuGJp6%2B1jShM1sYyiN5Yvzy2Tq31wmZR2yc4JVsyWh3m6%2BIw%2BoP9UrfQ6tqV7wN6Yva5X6H0n9ce5PxOHfDclgBI5Vp2ZD%2FkdlH2jkJEEarOIkVAWM9qRK%2BgDDc2qrWBjqkAbOu6yayjuT4I4JPrW8EM1XZ%2FY7LcPxgUkelzHj3%2Fraixi1Pb%2FfsqprOHN5qUp1Bm7Q96uYBpNCejDy4UtImHL0215Q11MWaCz%2F6sz4tsubERNoS0AtSMDZtm2214JntqHoMxwbc6TMO8vRoDw7lJQq6ugrhdoKhw6X4lmLrcU4%2BMg6CJzIC1Pg1H1oazNIfIC1d4hXeL5GlTjguJ5Thm%2F40r%2FFB&X-Amz-Signature=afa66e14e05e9a3dba18ae4b5c008f91fb3aa84290dc5e1a06bff5ef47f54918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

