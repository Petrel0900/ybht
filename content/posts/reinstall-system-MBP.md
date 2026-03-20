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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKZTXUF%2F20260320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260320T012725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDSZmrvh%2FDP6jIuCNKV0Ep1DA251jLSEPDNppxnl5BJYgIgfiNNjXAZKpkZiDllIA%2FggLqQKQ8ZLmA0XuVGpqzLWZ0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCaFTdpWzmDpd39kpCrcAyZwphC%2FEMx%2FqrFH%2BJ4U27ibSePwGAcLrpPGLbiof%2B4fiZYvbDALPfZ%2BYQgoUMaakYuXh93b2KFEGeUnfHFOxwIbIcaPQihGqhNJ9P21VJjNgmsp%2Fkxi7SiPoNUtw2TuGB5nprtVr2qX22Dot1cXICZVxK2IjsvGrfEHNe%2BBeI7AZIH2Uy7gLP9fNQz0ZMu6tOd9PmQZjwdu1qPgpR5ZIj%2Fuia%2BB2E77Z%2BKa7pWtxL6IL05H%2Fpsdipv7h6%2Bbmy6qn6REJe6iYYeFlzD0pfon51q6ROm5D1p8E0cbXl0HhLmr0rzv4lb%2BDHxqy53aalmt6JsTRQ%2BKg%2FzZZgy1bRKbXA7ivx16ZBtliNZsBhlEdhqrHyDIp8J9G6ZXlSjTmchyllFNDl%2FSee93rOVt9EtliFtEwL3ksJvidToYQRN%2BQXBClZgl0055PzFC1wcQksU0VA8eyj3ct1GOkv%2Bn%2FOvXWon9irgbm6JDPbqWOPKBm9O%2F9yiHSLSpBRUZwcclVKqVori6CdEtGXYtPMI0rDKkG88pOTqrMcknowQ2MI86bWBaHuhgKoXoMbMFRhxO7%2BBPG6ChMghL5scILiJDGCA%2F6aeO04Y3WjLPK6MoM1OwDsIGv0pmr5KuhxxD6XDdMKC38s0GOqUBmOtNhPhUy69COSkdUDiF60mInBcOhIotsBAG0qsep1eKY8PlTilWXYrwF3Il2RKvojm2QbfukOuLZVT55ktaBwIJrACBMIcDrH2NO7bpV3GN%2FMb2i9TjtYw64pO4gLzf3Hvm%2BY%2BhMGikTVBrMzospdIDKPeoK9ApLxzxttIhaboBneLPAx1jqcHRM9Q%2Fq7EF3mU28jFy5iYzvSI0vazt2eVKud1L&X-Amz-Signature=d7fc3e28ce0247fa9f6f8e3da8cb435a517df5e8fd1251aa9ac319584c02918f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

