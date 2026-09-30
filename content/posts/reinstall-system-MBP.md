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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBKI3PMD%2F20260930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260930T032547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJLHwW6BX17sFXPsUpHTrMYYY8d7hVz9UC9GlfLIw8KAiATPgb%2BUx8pDj48hxbQbXnsJKWaX9A6FY1zenHrDyTwzir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMhMHYx4SgwUX%2FxP8LKtwD9De0oWHBMchj1scGrDO5qnPoROtX0y7aQSn%2BNGYsp3AlFOD7dUXR%2FfHJ0rPVmPeOAYyOsHyX7Sayf99OWp6fFEjcvObnCrWRjpeebofmIwy0nmluN%2Fi%2FuNDSfwYwbw4TDnsFPdedd%2BNUbp1PZiRiPWhhgLgWKSpPTb8H5nGLRWizBj7UdoulopwAvBzDWCypc4Wj9QCLrlc0NGrUQWKxC%2BSXTimMVquBlbu%2BgrulABxGCCFWv2%2BbLOkI13rv2DlEunLX3gkiaE9tf1kGFVQK3k8rjpMtb%2BvNJXlXwjhLR6PagulejBOIux%2FAIqmazewG4SoEuXjbYXggPrQTg4Bmm1Kc11KOclnX5wUAQrcMYlV%2BgUFZevlyn3%2BB%2Bhf%2BGNbAeCXQ38f71hy3Bv9ZKrMM3%2F3fTEMii4zqJbkQpGNnk09FODfHoUrwspzT0y8OLdoiDsXdj07EhKjXhWcE7q7nhzZJBQSOm8CPmvH2BYOMPP1jQmnczDHdUV0e%2FivV9L7vL0Vg%2FigpGZ6py93OUJUnySVioli%2FrK%2BA6qticIp%2B85xa148uQS1mG0IVVbKOhgQVe6cxh6FRiFifxzgYNMQoG6YahNiQbLU3JA2AUw5k6qm1n7EduoHynYNSEZ0wrPLx1QY6pgEhL%2F1pFSSaV1bieJUJudT3%2Bh3L4%2B9QhjOcYFy%2Fipkdc1r%2F%2BqaIA9FOHcMyfZJIUxc%2F5dXgZtuDQHROMg9saytwrLl%2F2FPCMp8XK6msa6mCXc%2B9j%2BF7%2FnvyrKgKGcuZtk9o3YpQoheZbo1fi%2BblhPGoNWDXA4jQnjqHKANARxu9LDX0aDrVhmCYyyg9xbV3Cr5m7nheiZrRPmW9DdKkSftKrnlmKJJz&X-Amz-Signature=d7f0c156639ba2a798687d89f0439ae098be79e19e1bead2519627bcdc1d7dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

