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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JR4UOBL%2F20260501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260501T022940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHGunAZEWhd3JZOaYoXw0pbdLtLDQpqzTa%2FAkMjgmwS4AiEA1hSYF7f2GppfD6DYTGf%2FiHie3TkNbEGtBRLarTq2hO4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAaKKBg1TPxWQVfaiyrcAz8KeYcD5fS4hDdN8l%2FJ8tU8FnJMdjxrlqQxCW%2BBysizhovprHndtyX7vgqs0FF3TxeyqmfD%2FYUeCMR9MgYmGbcLlX33apZ%2Bm1uBlj1G%2FAKvWuAsKAFFYQ9hUiKfqT2BvE6x6%2BiSX%2B8v0oh3P6jIjZAdf2GwK2PJDwan8oegIXY2XRolZ06CME%2BwXEk9rn2TUeVwYtf1K8FJH2Dj9CVJJsgQGhF3d6rDUe5%2FpgZrrCa1GIDcGaqSb26YyJVKYtFeRiN%2FwYtiMeJMbxV7cdbvHBe5lK%2FXOYSNT%2BW3Q2UiFMkTA0xDeS4W5lj5YhxB%2BsL8DsS8e%2BkaLKEwsR64lJWFKEsBA4WIcU8%2FLjuyThfN25cLvV7hdtBZ3wdQ51z4Utvv0TVayWEVeCHs0UhK6ktSzIXlvci380JfMGntALLmk92JsQl1SN89H7G%2BEf2MWpWWgOTdr13H9jI0M63HfSpi0GJdOCCiAND15IzgELRLo3c%2FHrAF%2FfEZeIGrADYSJwFki0zzannJiAb%2FvEBmVTV0Fs0Z6a1DUsDiWdCr7uZL4e2dYtkpVACxaKXPmbXQPe6wqYZqru%2FlDxzAQ8bcVTjTs3yV87hvwZdK%2F5i47FF%2F9t7GKG3OF023jzaLMEGaMIyc0M8GOqUBUqLsRTPIzgfp42Gc4Xh%2FaQHdK4LDU1S88WQp2qTPXibg5ajuMTrwDTqVls5zWsGRawNz6IOpPhE4o3XoVMo6fcrkX6Wnff7WjpAMSH5Cr3jz0V%2BAphcvRfKdfiUedPIjdk%2Blvgj9yMgZc3S2wCiqoXSUAhLAfFgbi3pWQm3J8KR4dSiX8Y5kQYMvB3Tp%2B%2BbnqOnp%2BXPB%2Be1QXGbl0%2BG4kz81b7Da&X-Amz-Signature=efef2da0ef12f82b67f61c23187fd65ce457ec21c239ffabe5a762372e68b3e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

