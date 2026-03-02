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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645J4AR3C%2F20260302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260302T012645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY4JYlZNZzhXN5MweS%2BHCQyrtzdoxfL1%2BFOo0rWXAdkgIhAPCzvb10bSWlEdYQIZG4WDpsB%2F%2BGz36hiXpGWmbQqHQLKv8DCHoQABoMNjM3NDIzMTgzODA1IgzvKxtjX3rQ%2FX0xZSIq3ANKlMeBNVvjZwtJ3D5D0bLsmWHwGZJSOqLEtWxr4v0ngrljRxgjVX1mBubaAa06q28Gl%2F9V7nAaSSzoUXTkaG3xSr4EGO7DzrgaNsx6dk7VqIbBPnNgfqR%2BELxURQ5jy8iOD0FCefYjkR7q6JVsySK%2Ftrk0To064eoFTvuIpvGBRKgSpU9RDh%2F1pfc8cgaoL4zh2KlCynz4hOYLZpn6GhlGLb5ivrfBmCCZfNRMW%2FMBeG4gnBuA4vM69ZeULPNoExsSLshPwhOMk%2FMca2BXfOMAGQ8jCzFppP402vnUknNdqmxSuh5FwDVc5p4%2FPCEV%2Ft%2FGQvw8h1pbnGdxKc2PJ4IDhMWUqdCcc4RRegYVL12lzzitbVUpDUB7wCChC5XpwuVG49fPdvpdPKPafSy0tdtQkZeJi2Q%2F3rVRBOv1mVaEI9uMaSqnmL9zrJW3qimqW4DY4HG4sCBfh4gnJC2W5NWuQx6IfBPVupXfbUrSTiaN7LIxxaVrl3BBQgaJWkBNrbGswJRV1E55ih%2BzBXoPT34Bsk84eHhGX5PGkPI4dQBvM4L7piqVkroa6p1A9KkQ08tgPKic5v%2FsECjltskHy7nGjLcnyYGaeruOtyz6yiaH%2B9kgfCvur8DxjHpAazC4vpPNBjqkAWqbihNJ4Ih6qbcbvXc1A%2Bs%2Fkdjx5Rty1S%2BSbq6kcuZIWC7tnQPYzhycwJsaDDwbPSlI6biQQQo6lIte9jJ%2Bedi%2FggzGawkCJg42cati4y80jJ4uVAfW5obQ9ZjVrmoIAVa3C6qvc44zBklIjnlt6dffZqA3vOHGPnTyq4hJp829XSOih3JSo%2B6e4VwyXd32EdPmZetIjU%2BFswxWV7hdyrZcxDQL&X-Amz-Signature=fcfd642a36cd81a85ca337c8be154ae74c7d39e5997f91fb4e025099c5fdc14a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

