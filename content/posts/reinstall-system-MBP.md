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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYNMU2OP%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T025632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD42sSHakBpjLizXXkxLPKR8Y6wmHPwwQPPZBfLP6ZcFwIgLgsH94Z53K6mq6XXUXwR6S%2BdC%2F2%2BdyxnMmJXMBIUuYMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDN4hz%2Fhl%2BoAoj04R2SrcA2AkFxl1BnaKXhSBlSY5T9ZPAa20Qg7f2SEtL8Max%2FF3MFz7oFynK0xFNZ35x7iTjtN5hkENXyHoMkUKBugiT1tZyKTtTQgQb8c1ge4xXE4E0NQ1tPQNhGesJ3Wf8Azvmp4XdRbhLdtMMUOkpC9JFREBYTDjvdak36DxYsZKH4psvWSTOxtdSMTVxVvhKmhabJ%2Fgop93JYIh6kNsHDAL869zIr1036wv7%2Bm055bE4aGEh2CHq5XcWs313MgdQD027%2BA9yed0pv4sFpdFUiK78tAfraC0ciHPdS%2FIFn9MXylddL33EfzIxdkC5Clt3MBOPHOB4ndBe%2B%2BONkGWuUiqihok2kEyTxAGc%2BX9QHbLPT9ZhyDWRdIRDKY9o8jENP2rzw6DoSNnRqrFgym%2BCbFkG%2B0IExtINKGevjnHSBMh%2F%2BboWIG5dVSA9hMtG2dp6KmNXPdBWUUIJdc0BQ4BTcOadRqBITqVCKkfvF2RD9DKRT1k7D11apaLdD4Z9jb0TbeB6ygWbHabqaSQhWYbuyu5B7wgyhurvG9R%2BDv4ANQEtlytWeUjiqYTk0jOYlAJzWeVDHJqUAhrMGR49ZM%2Bjy%2BWFTLCZ3ipOCuKckSsiApsf3jDeJULp%2BFKIuvXQXAZMISaztQGOqUBsbuLkEGRf51lellEEaHXp4HXk2cKzOhIPUschReMQoWtdWVIJ6WNS4ggTWYAe2wv4rKZCq4kSZmjjbuc55csdJA4gutNUbZFrmELPbsDi%2BVLRoAdHI4k1x57f%2FYGB0mUI5OpuegbWGAYzoRSBcZaWBSW7G7p4UmTdPEA%2FPLxD8XkLNW8NPfwWX549RHTR844z6L3jqsTQ9p8r%2Fbx6SUYfB%2FJZL%2Bk&X-Amz-Signature=30e1b692c8129307bc04de272a2ad4ecd48e4302f12f98ffc6520af3a60db046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

