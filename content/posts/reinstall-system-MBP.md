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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VGITGX4%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T020628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCCSEcTOaYjqL35UwWlBolk8JAPbWQ6HgoZHxNlILG%2F1AIhALKsDEFtu1Obw1JtBhHvuRK5CejCSvOng%2B4kuL5GtAuOKv8DCDMQABoMNjM3NDIzMTgzODA1IgzUs84DiNga1jabKJ0q3ANsN9cRSVGrAdSV01Qiach2iMH4YURO26hW5K%2F7GkQqs5Q297sF1pLOj8g87srjbQWTnvIvcLSDrI1VUyXRRz0S5uhv4k92bLiuNruxFC7ATBjKj6%2B2CYg9RITIB5%2Fa%2BX5nKcnjExfdtYpGf6ATeVdqYidD5Dgyh6131bNcSHIQLGThCSiOfeL7bIMwynI3NxwvMieCmTbg0dJHB2Df4jpGv6kV2NSCaCy6uZoCjbAY4UImc%2FJECjD4oToIuqdec5zncmYPPC3keSqd9yC23knCD68tA6ckaDWRVA0IdFG8fb%2B9pW2ZIkd87%2FV0ylm3CO64N%2BgbINZxV67vgFDjtf7nCTSfH%2BeYCWThZ4WzRGWqXKIIqjD7qab%2FAq97ht2pzZVuc3KZTD3w9m7NVZR0j8vuVDcDJPg0bZhPj8OMDKTwEnS8D2zoIhOLeB0QDtCgPGK1g21FsDYzvy4h%2BM%2B93PBDHbFE5geInGY8kMwFEohfChk0BHzsFhHHYGXSP9CBCYregKCXRDUfN%2F%2BUgvAqkZXgbhXEmNp5LRQZhkyRv79xceEz1XpPzXpUOw00SG3tAjwlr75I1S4qV4yZQAVdf2jZf4rw2JTYMIF1qIa1GY6L6EJBPkTpd8P%2BK2muPDC6ptXPBjqkAU0hpjDFb5qFF0fL0ixIY3BRkOSZ1uNvNBw6IMIdYRxl4T42I2AqXjIyGGbBZi25aEHA%2F1cY5NDalsXBulds8uqpGqOBIsFNrAJd%2F9hH51Sp3x5wUf8ck1bY%2Fv4L5a7gf0wi0tUQVwCp25oZpASYjDieLNDgwaquahinSMSaVA%2BTWCIPMyH2MJTXMkHU0u5LVMmn0bf6EuoLe8skcW2uoCDPGKHY&X-Amz-Signature=b1971457e873c67db823b374ecaa943f133a37e37952b66bbd05d09e060af73c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

