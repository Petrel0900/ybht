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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIFMJ57Z%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T050624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjG3%2Bfh1r6%2BfMr259PeKQxQodUmHHi%2Fo4KJ8Xon5NNSwIhAPVpLmVjBPVR9RHMWyHWEqlJMYFBx5ohoRrs%2FqnClmOyKv8DCFwQABoMNjM3NDIzMTgzODA1IgyBYt1rsEprlX0cY8sq3AP4R4HSabGeVbpfFfm5JUv8nIoLsvCs%2BQnb%2FG1VEdgYXvPCrGoLBM0k%2FTdNXcdfnETsriCcozICtyw5ThvE4D%2Fp%2BYjTvF%2Bj43U3sVX7OC1bB3T4BdjzoHldlQvFuGJxFBMNNFwNY%2FlIhJCcWTHsnFfWTjUTwBsgZCNL5ewDDdKQ4uyO3Kh%2Bov85fqEI1t3LuCvIdzasatZM7n1EcObOTtC0LDzx7wXQ5qbGguyTS0XBlAhUGIjNr8V1Cuy9guSOzxWFBOhQs6ohNFsMqZA8K7oAFi4yTTgCnvVrYIGgwN%2ByptOChQuE34RNBKQnIOxUTpUhFOLTapQHI9F2TLHiAYutrxSjTMR8uanvJ3tCMXGujQr6S0GzSTyo8ntWZ61SL86N1qlaTS1m3CuVr9JvPtRQ4UKrAuTztpDwGPiqblkr5z3%2BfbFa1s8P65m2k11jUw9gnH5NcE1fm0zLnnxCGnKBFrpkuDOiEcooevdvaq3uCcSBuRfShvAXkMhvF76OZ7qqS8rIaRVdBJth6mv5ydyM9REcgmtGKF0%2FMyum3UOpZkj1sl%2BsgqvEypDwPr7%2BQ408MDPNtO40UpSiSBUfxl5B4ZXpTMq1KN07QRRMbrbDkSUcLibaDmkV59Pu5DCBlcnUBjqkAUcNKKrM6jqcNRUOu50fmKzLDBKXUt3a0RM4LOr5tFw3uQF56IPb7%2BoWsInUGMi7LZgYxklzofHhG%2Fvs2wsRGTR5OXQmGjIK2iRqiy3e9T%2FqqVkkMVg9hWLSwlMx%2B%2BjGMljFtmRaGI2GdO1sIm2rYjR8g58QALOcIS2YJVveaRlHmuZr0W8zHwAF%2BV42sIzpB9pzdeBlRwu%2Fi2WH9Qv99xZXNQ9i&X-Amz-Signature=6426d5327bba6768e6cbd52f7196af1acb9f11bfab3d92cbb69aa354dab13ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

