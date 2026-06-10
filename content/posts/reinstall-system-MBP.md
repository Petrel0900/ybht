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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F3GGVNB%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T024644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIHgjCtPp%2Bgjeah46sGlmRLyMcYfSm0rdHpPDqxMy%2BVtwAiBsey2ElR6GT6nqArSv%2F%2BoCBESFhZRRAzAW3zsoh%2FqFdiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMisPVg1DN13CmsgIkKtwDV%2ByaljYzz3U50pq7yHESHtuntD2z%2BlOon1Pnid%2Ba%2Fezwt2NKb8h0zFREp9RLwLvSt6aC9dvfK0Ju9R6y%2BOTzM1IT5hsdjY8osekX9IcYiow1dfd3PxLuHAW1LUbDPwTS798Gestad63I0T464uHxTC4ZB4bOvaA%2F%2FQsSlnLOViwUvQrESIyI%2B8Y8dLiTStfXHOxK%2Ff6JsMzNVeKXlaSc6q9z%2BD%2FkEDftPeEwfJvzGR5vWGVvukmtBsEUyIqFdk9uzqABGqBqelMsnHchDZ7Ed%2F1y8U5LTIv3mUees6LA2ZePftnKai3Xt0jFM7U4Kuom25QVqwWAt5G1pKPTK7cVMp0XnAhmymlycmFvMms0DRtliXZCpXi6mNsy1hfIFZ7Xdbbj%2Fs45Eqi9Dt5MnFs4nLXIt%2B11PFJ6nyoopXhL4Ega3M5YHgMIhNWZ32k%2BBS%2FSqLO6973r2WsuAySYc1%2FvHZsC%2B1K9X%2FDjIg7HPTL%2FKg6ibtUpNC9t5KOJraJR9GlAOU%2FCsmS1Uy08BLjeQ12VBp808JYY5Ca9T49Bu4QV%2FVVjy0keu1MbitEvxoesMDecsrkwOZeyLX3zYn4xrwIhJbicUdgvLT%2FFlNk84UeY1w%2BzNB8SDGXaUPRIIPownYqj0QY6pgHM57BW6a6sKD8hF%2BEGBD%2FRXyi5G%2B9CpiZuDkAesN9J%2BJRT7HsBkkYVvWwrUsmn2M5smJ2XN0ychMdGwmplmIJ0W9Zm6RwMKqM5%2Fn4k%2FKWYlXBM2RuyhamU1OXsAGhSLVpukOUgEh5QOZf5qdzNO5D%2BI2Q1MivL44K8lurZgzMvFIPqwACGRoT2dhYDESqlXZIc9EYP0qgFgHg7iC0rNCj55hLA1B7p&X-Amz-Signature=9e82fc3bf12d9344941d8e454fc39a93eab7de3802126e309955465b53406a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

