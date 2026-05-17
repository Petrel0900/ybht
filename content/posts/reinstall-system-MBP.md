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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MPAO6OE%2F20260517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260517T023153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgBvRj7SkopLVygSUCP6918py0lJK%2BpqizQLHpJ%2Bx%2FjAIhAPkgkoNsKT2OP94mXNIfgCE2MgkjHhFA%2BUskIcmf0HT3KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMqlhBtkHe%2Bn9oWlkq3AP6UXOMQGnK1QzYTk4kg0djUVs5FmQmiCDkvAzk8jtXP%2FFfBbwY0a66f%2FaDxOyKT%2BMiz9UOOZFHNZB7UqnpQzBAmxkO3jykG8qi2cah8CnKPio%2BlO3DEb7lavDoAuZABvQfQ6HskLbx7M92d5U%2B%2F%2FN2E62w7YGWlEtgw%2F%2BYoRuhGD0cRiOnaN4ri1D2Kkv4ZNab4CfckZGj9dIA5%2BYl8HeRqmkmmWO5UUOrw58W6T2qp8iJZ8hkju0bHXDe8Rh5i59dtiMPbsBFPZXkk2SLo8U5%2Fcle2ZpDyCof%2F9pPXDx49cm1wmZE2shXpq49D4RAs4Cw08ko%2FpFGl0Qxq%2BmqlV83CQhHWKRheXrABX2w%2FuBsSntKBwotsCG5PHBdGnjWzKnFSjMW%2Fn%2FdwiJgX6zfR27FHjtWaaJs13c9iv8%2FBVI3seBqwn5x7iD3%2FB8bHmmptyONgOYMuAGcQkKeUst8fwj95HF6IaAu8OySXR65Xx%2BIWu22Th9g8co8Dil23P6H2156jQP3IBYiN4cJQJ5aWJBtA7x9C8NCtoX%2Blhd%2B%2BOsYpfi4bivJ4Zi7wdkexYgkQbT531aUb%2Bjp2Z%2BRAVOaw75ugke8xnbXX9X0wmuACFVjxrxx2YUiZKfNNlfGgzDqzaTQBjqkASN6Pz4wWI596ZYqmddUFUKfiCBapzkecn%2BDxnRy17A0N6Ppkyg6ycjxZkevIAVbsBX473LyrD56GF0oAqXPJv5JMkWC6WI8iZN%2FCGMRVKknHs189ZjrGifoeCQWq1%2B5X11H1I%2Bi2wneuyJPP5VM3AFNOLVPVxp0Pp426pM%2FY56sSfFlwRhDzhsIWwRkxWQYCJgURJ5ep4OO1loRp7U%2FyciFD9B5&X-Amz-Signature=b4601df7b9135c6e5144ad1faffdd37a9b20294e330e8c059a8602f8124cf02d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

