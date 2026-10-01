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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MOTV2OQ%2F20261001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261001T033118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBGdmG0NAZyHY6QwTJGxZCyG8cLJz2ERTq6z1aR%2B%2B21AiEAubD4uL1LYtecJjl9fJADj%2FviaL9bjNTEIAacfVXsY0Qq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOnw2z38s3wsr4d1XyrcAzK1aZL7OegPKKCuv7%2BYo2JmrOa5gxv6krQX29Tglp2dnbkjhHxVvYxjr%2FSQuCusgTecGEQaHfzHu1uqVWRpUblEvmqQvD7sr6uCHySLlaazi6Qkf9FAMI%2BqAkrZzTCV0RSgVefUvS9Vu2bAYRc7aLPBXIi6hFJKowy4jJhUmofpbgtZ9W0XfOQkUnMxjkR%2BMad4%2BTuoQaaMlUMATTqXbpXjROzj0mQIoP7Si88ZuYSt5CKSN3HlrOPR9e7loekddigB%2FaMK%2FXRJC1LHMJJ0N%2B%2F65LJEf9y7ZFcYwW5XVg1ZfZQz1il5k%2FktlJrTkXOIFQn2BWET5lBOeUHjz7%2B93BYBwxd6VkC5SNCyoENlvqpHIBYey2KLqs4V45olWByuKYXWZ%2BwAYf1okEdU8wG6nLN5IuWFJrgPtT0FCdkGifS12vfiyepObraa3Ls3s6zZpUqWbI1UrhEgPRFY9NHzkS0AsVDA16qjp9blpLNReS2ZhO0wWBCGN2%2BRzwyCjeswoV%2Fporm2U7IAotTY%2FH0e5Ai39etXeCvr2bvvkKEg1oDTMsY2kRzvIWTFMBajLl24Z4MURdZmOpubDmzEORKIZXDub%2BlomLa%2B3yAknj08qKmkzxIGVG4RWKWj87GdMOKE99UGOqUBpj1US8fD08ZGie06cErN6ys4r91StbhG%2BtWWBcwxtQ4Csa6Pyw1hiufFe7hzc9mPb0PXMWfLBT%2FTCOdUyeoYE5glxlwf%2B8BaZ8tY51BtjCZw4hglHXxUSmNFtm6IB%2FCpaoKdE8Ff60FdG%2BhKyemt4bDravyVASekUh3z8rH3QfSzhjbz3DnmDlogTsV7Bg9eXrDkhLgH%2FoDZZrVIr5bxDMiBfse5&X-Amz-Signature=2bc6472aa61736da30c7b9262fed1603eb6e6ca0de85a086385b894f4bdd4371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

