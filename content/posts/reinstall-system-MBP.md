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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KIV3GTJ%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T025826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpdImmeOD8SGfF3WsRZKNbzazxvP%2F3xTaj6TapiHp6QAiBa%2FYeghNhZ1iY%2FTsysjSA%2FPlX0VVwM2u7%2Bcqv7bsfduir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMPKjgy1y91QCz4TANKtwD84M11fbuJgb16u33SltwbjXlhVkpYna%2BWHbgdl0XpTncv8t%2BpvLeCCwDlyqi%2BR4sbK5432%2FOWin528ZGe2tm1PLZ9CwBFJQd4Xi7NOLHnwL5dK520eaCzoS9hpIC2h6Ylp%2F8K94SgI%2FmvOEuAT0pEYq7vb4DnxVtKuqCJkh4MxugRmQVvBetCejTRRSalFQ7TcaN3mrHPXSmfpCjoWKeiaEwV7bIM%2Fk4e%2Fmqe6P3kOCIuFJWfus8%2FrSL09Cy%2BaRhMvpCE6L0s60y%2FUtWXghyYO8tkLFlCdohlLNf7A%2BS3VdLLYx%2FY2sd6okKx4vQ%2FoS6PYz2Gw1sT9Wh4n1OGIuJZ2d6zbEb96WN9EwjZIvS9Y6NjD6GFEhoD0hp%2FiEyjrgs4KoqMZpZ4X6yARLmiAz%2BN5VLs1mLAIRPrvaSd18xrJNFQprYFyXPB99jmWUmZOK1yeOaXetpX4aSUxaH%2F0p57gsyGMjhuBWm45rnRf7ckRx6e9sGTCLLP%2Bd%2FMRDYjtj7U%2FN25%2BBolqcQ9F3aCLak0ilEREiCgzx4AH8kgorZDfVqgXl9iPuCs4e6gYTFnF9qzx8Eht8arW33ne5Pm%2BnMPSi1NO9tr5BEvPezfYdmP0JdNf%2BNFJi3FvKonaQw%2Fa2D0QY6pgEzCTNldq8NhyvnF5hVFe%2FGO%2F2S82gOF58EDQ7lVXLCdUep%2BfdNdYtOMiveMxICxgv9i%2Ff2oTXvfq5rYZIcKypcoCnIRtxEl7Nqeun2fJyi2z3N6B0I3yF2XfZGenbyENu62zh%2BjrqTpd3czkHw36yXIRikzr%2BfKJKwsdDdhVv3CWpTX8pJhABZVGEIz095nWcBoe20%2B8bggq1S65TPQ17VaYuuA5QL&X-Amz-Signature=5040f0496b6af3013b7452b40d8408e9f48d7fb15ebb17e11e94225db28ce0b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

