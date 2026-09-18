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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657G56GFP%2F20260918%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260918T023704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGJwbuu5k9hxhIFsGDl3UJdun2Ks%2BfqWX9tX0TpkQfPNAiBNc5U3VhYkvf6orvIoU1ZThtf7v5Z3TDSHFdLlmED93Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMPo16EWQLbmSIijeZKtwDGeIAaJ3fE%2FpE6DjcR5u%2BROnDOUCd4DmAP5WB32xgAHUv%2F3oc6C7KWUWo%2FuXj%2BbtMcui610VhT%2B8Dz%2BAvlUR%2Fnq%2BuDD7L2oNSXxlPcD%2FmWDJF52CZHy%2Ftma9zJi5kjUlWcLPS4P2Z%2BNZUM7X%2BwDTTGlt%2Fe1kcZAcKpjEvjacvcyLOCSgXo9Lw9iadEu5Tz%2F4V3jE2JKm2DUniiLf%2FGo%2FGNXcOvJ5F7HzYO7si6FQwxD4%2Fj2%2FowcRjAJuUSUJnqDVOu8eQo0cKgkmMN3yyg8Bktywcd2LWTEn3XnhkhLThwRA4CjsidQhsggHLus3qUPSDIxp2gDIdKI0b08QXCG4Bru4P%2B9uUoxXTgo5J0eQk03Gk1eB2wA69xJ9%2FCLlOhyMhUnn%2Fi8rq2PuQKJYFgUxUvESJn6cvn1f5ihog4mhOzE2wUgNQRChBl1z5BBn89QTquq8ZCtsX0bb%2BbPiGVmTjpEilC12WetDGKqMaAh8qW41quvtEGgLd9PICBjsxR4VKxthaBfXDSZNk2IjWIDnyBXuXOMB1SSWKZqK2hNYu7EXzs0LZdZ%2FkfAdDoQdwBI7uGVhn0wAAOLcx6iJT22LIKRO%2FvKtkUd3wHm%2FUrtJM1tXdh0JHiAZzcI1O2z0w7bOy1QY6pgF2k4aWRiggTsx02pZz88dbnsUmgcKdu9mZhgjhWxViKGZhBUTS0eu0pY8TZghGYP2ZnYUzgFuotaSKbxoJiCcvZS2JUWrThCaRBPam%2FW5YqaXabw4lI0IyotemTe6Dsbv%2FO2qPEnJm6L0vaxjEPXGK8kbQoqzBSmood0D6oTocWhZmLXRyNTMtn1t%2Bp5o1B8F1jCUoMrBRE744OtYmKAYGAsj2I%2BW6&X-Amz-Signature=fb344290dd79480d7ea6e4c4414fb570eb09e723cc50e6739ae1091d6d0f1413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

