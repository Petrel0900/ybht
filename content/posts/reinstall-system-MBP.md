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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAJV7IW%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T005135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDjIw7TOKFQJJzTwSsuyfGpl9oHAz%2FBwXwQwGBmEUihIgIgVHQhzR%2Fop7izVpkqdoJ%2F1TCLoqRwwz0ol0AuNY2EcoAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDAu81Sc6JJSzhoJEQSrcA6WraK05CkYkXZ1M7qYtNC7g6r19F6J4OJ2wsUDov9cI7N7sVxy%2B14CozcHML7rEidnS%2F3BSWeH%2FUXOKOE0TEUsrV06WS0vFPqE%2FyKotINPtXXE8WO%2BMY8f7WcPhEpLvcr3UCmcXTpli9mQpemtF2ufVqDmndn0u6m5%2B1P3dttjyzTNE1CNjp%2B9fq5PpHVXhUiteadbMUUco%2BaB1%2FdMelwQ0zxrw5aMtO34KRiJrrWQyBIhIMLKOpBGRmbh%2BOePli5%2B9sb2%2BDJll7%2B2iiMpWpSapNR5aLe3dGlH0ZId7wjWYw%2F7ovqj8MSygOFa2Btw%2FVC9TrdMWi8C86Oa4h9W4Bc2WZUL5CE1t4IepFim3R1hbujZNWDGMxvvVESlix3efglmMUEV8njI79FGto9N5TwqS4qrVF%2FNOiaoin3bmCktNCjhlhtybuVFHMtHMSrKTwlWmYn6ubUHhUDr%2BvgD3epMUCt2%2F%2FksD4%2Fh%2BFrjuC7v3uIsDbuirfoL81a%2B23Bm4PHSidya6d4eb%2FUmOJovznjAwSuZMIKwAhpahQhzxnhLwFrFiLzwQGkgEsVVt8hef%2Bti9j%2BpRak3Fgqxwsmcae%2B1Sro8e7GHOuiRNfhnSgawFNB1ViQs2hEszJohuMIeridQGOqUB2vqP6vCxOueI0aI9sVCR96CZ4HxwbPBGBvSkbuvRUdDziANrgXEUkZMRbGm2R3NLBEgaoAeTUnS0fiBXSMAMaX3N2sPP8le6GgfMQbkW0QiL9UG8Sh0GQU0eJkhHEH4m3bneG8pHf84zce0eNfV64emT6js06XZqenFOtf0Z5HJm4ZLdR40ROhmFGDf%2FX5v6V%2FeUKm%2Fc3Xv%2BD67vEzaVHi7LESfY&X-Amz-Signature=11bf00703d05d4405fe405de469a6c7c14afebf2ebee367e368be5022b5dc9a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

