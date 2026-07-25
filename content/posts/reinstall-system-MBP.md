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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQQZNC2%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T020153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBJ99I%2FQQJ664pIT2%2FJmZE3dL2SHPa2MbE6vbYown%2BHoAiA6LQhaddNxkdFUidycPX%2BEGRWKMTr5fc0yotNheMDsTir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMhrqFO9zmqFTywXaqKtwD%2B6dnhOSCa9X2Pg7YC3XnRLuEBM155aJWbqAIjghwc8zaFs4Jfn4hC%2F3PiVLUr8ftFS9Uw1QPvM7wsbAkwW2FlSwzPpvqMn89p87qGYEi4b2weN0pwSuFGxLDRKWu920QfaeDYZLHlyTp1J5%2B4yojguNWBJm73RxmzzJxcufVj8W%2FDeksmgiXz3nETmjTlZES8%2B2VMeakGg7MJGMuT5ABm0UiofS98YRjegVA6ZkdmorSGEfz2ydiWjneBQi9fKJD5ghtFc2Wocu2TFiQq1MID4d%2FKThxrrs3cZo%2FXmUF0mamoApleGkAzBFYW0jL8SYgwav1Bo8MkNgbwQoby9aNLwaohcdFJ02BtE33dfKzBvQmwPjY41cNbP8d8lbouStxgxqFAjB9ImpSf1rrRn8ssfnhmnweiFeC7f%2BgBjjzTqbkzHwyS7R%2Bvrv2%2BxiYRIQFu8o7RZiI9VIMhLzeAbSWIpRZD7JAjW62s2orT%2BnP51%2BZWfjbpvdji2636tiGCJnLiBCZyZGeuMnjueGODjS0JgESGNVxP1zDdeKzC5qObm9WYe%2BB30%2FRX40aiUmhCmVriPqSL8ixpwHvNbDvdrdA4blIqwimZfmGuViw7Qu2y6nIS2oI18d1I2q1%2BiYwueaP0wY6pgGjxxWT9b2%2BD%2BdOlJEuo9phDJU%2FEOSymGvCPIBdKLIzj7arg1KhIbxX4jplANqVvBweMBWTvIBqpCckJobLo2jiRJ1K4FHdIIqQuTmVN%2FaTAFjRV%2FPTPj24PQzjwbUPE2V9Un2%2Fma1vWSJaAn%2FcNRyNSBvWqOBAvkzwJpzQ5u9S4OFSXGUw%2BTEbY5qBbLHsDQJ8RFSODJ9uTLb3%2FidSQiwXJFrjpIr8&X-Amz-Signature=754d5710fb5d295eab53dc4a5c9f20f62524eaf62090c21e406494dfa02d09fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

