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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NDDXTIU%2F20260902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260902T021952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXoE%2FRPYZKn%2B0%2FlGCI%2Fw56WgyW5PJ77TgWrvK9nslYUAiBDt7XOtQv4pXdsiGiE4UM4MVWUFh7snLH8fqpcRuYMqSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv7PmDfjrkB0ktjw1KtwDR8UZ7tmcpS6hG8JoaNLjFoye%2F7KyWsVmogcGz1WlyGD3T3R8Ndtz%2BxX7fsRf2J6sGLZYSkLdt9d6I%2FxGB52hOQ9ICwYyR2Qohm2JoVboapGwBIn0%2F2x5M1QBEz8asMaQTp8qI7QFwutu50HReAdHOSriiOc5hK8YnNe5t5YA9CcrFu3hYLnhaVLX3FJB2aVvgA%2FuZr3%2FMlLu6fK%2Bj6LxcrOiEGzswHurLhya4yy40fnXyMJGBN1kMvTZ0N42htBpomvFEkyiAQyg0Dah6fmiG519RrvLprXsDlUX9OekuXCW2eiVC6BJxGt9CFG%2Ff2B8p0lsqOBkrHFoyuLtpFG9HqqPo1X3VRZ1yNMF4JgUw3nJCsI2gp7DYKU4odREdvx4B1MB%2BDNYyJNbE23kFaqSJmySzSw4HmqCeXX5Z3b66tQB%2BvqU7TpkHG%2BLb6R3d5lGsNCRXFxqp4iCK0KwAZbr4xtqE7vc49GjD%2FuzIb2If9%2FBm5MPXQmneSQ8At2VV%2BOLPhf51%2Bulc8TYPmFSKgQTwtTzAudI8CDwO0QCMPENJygV8RCDcvKYUwvc0FtU743CFGT%2FE8b6lBAFJEuOquCBjXjyessCtatz6THul%2BGtzvSxX0629q9edJypXEQwy4He1AY6pgFaf8YBRsGcNqpaUgL0dGzFUrPd%2F8UOKtV%2BrLaUzW4s44v2BfC%2BRWYUWZ1V6LjfDIAq%2FVmCTG%2Bh8V%2Faq%2BXqveD8J76UxboRGzUJYe0M9MmWfc1zlxy8bNowS2LeCFGvNMfylxk%2FhvraT0%2B4Ew4Hr2fdwklyJnIQn0zfvLhuZI70O87hL1UeAAbU0XG1I83pTjDt%2B3EV3lgJF7mnOL%2BW8kYG92KMZS%2Bi&X-Amz-Signature=0f0e030c976a974c9903d2f2814b14ee74d1e3bfd690fa03418543d7d69dd08e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

