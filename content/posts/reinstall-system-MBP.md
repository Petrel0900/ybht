+++
title = "15年老MacBook Pro曲折重装系统记"
date = "2025-05-17"
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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QVQWB6%2F20261103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261103T045230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BLRhWSIfJcYtWHnFY62LMFTHVI4noOKEbIy48QK06TQIhAK3MGfM%2BroYWFulFZVNVZLF9xc18mj%2BEzFRV%2FkT0oMPyKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5UlzhDWB%2BI0Oc9TAq3APOKLUrrrP5PjL23YktDu0NlltS651LywdkDeUY3ukpd%2BTLIXjiFx7PmZEgWSXJpIXkwCH0saMevSO1drydUg8tzEfQbWEaGm8cBGpOQtnYT6d5uTVkoZ8or2s6yOVmlJJ2Sp44Xfdwus2m%2Bm%2BnwIl9GhMkVBbz47E4kDp4WwwFedbZ8DzyEi5RMGAC%2FeQFoYYjkDq6R2877HLt%2BHTG6m%2BP2MiqGmql4xMSjvAKPDyjiFmG8sjcQAAQ9L7V9kCxMy6tg%2BadDsAP4qrEsn20fcMQgkRF1DKZXNSAMAjLiET1Uam8PzQ6Mb46gOmV7RUhBP0Ov5aE1JLA5kklzZbNUzXxAmYPIaDnS9D8cLrwgxAwtfUJh%2Fl1Kld0bsZ6CSJ4PCXx4%2FNxhdpvqh7ruw3fZ0JOSEPye8Vyi7IRf4GAK7%2FeJAejDKOiftlU9axDIoV5nptz3RzOjsiOS4hjgv9ctBwaYC9EaAzpVe42tCr83jBJaPtjiJx7A34Rs7p9SnlPKLdk1IyXD%2FVJcMyP4B0J%2F3LoWJvDANSeFg9FvKHYb0CyXb0I9xElJj%2F6h5DZFaltuLEbV25p5tSmq%2FEvp%2B83U%2BSXxhY%2BFamBAgRzo4KOkhxd5v4HcCOklDYsvP5a0zDLsaXXBjqkAfTyUNO18roj2643fxxRO1bxOcdsVyf%2F%2FXGXBZid5dfbUjGJ5XnIozXsi1w2S7XXqyXxdoi7A8e2HLm6lvLp9LNexkyyqXRQwDJxCCl3lLoIbDDGQjUXa2XWRqVCLmGH2MkfX2%2ByDW0Nre62Si5Mv2wm66fXlb4%2BMROXlneIeivq%2FLlaeX7FQcxcbA%2BXIen16QYbPi1m3zaITLNSG5U7wH%2Fsskzd&X-Amz-Signature=eaeaeb8de25ceb230a2a20652313fc7d56856b51d963488fb223c1b1a4b27893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

