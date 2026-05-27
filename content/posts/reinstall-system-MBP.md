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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FA27PVA%2F20260527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260527T024650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqgJl8Sw6wAyiUiK0yf8VxPMywVz82anWsACYSwtnszwIgC20EDddrbVAkvXilahWJ9c1lSdxd7dpf9T3pMk1HNEYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC77dsd73vTcOxjcGircA1seFKdcJk1IB7FYLs3s23wqvI%2FdMEBDQ8U1kseX2klO9MThJq3HZeTwupvpQdfyHD5GAXxxm%2F%2B%2FlUAQ1IivEGVbU1i0gXwN2jG9ok2ZH6hOGitTmGx8K6UWL1qdTckRjz6qML7P5%2FPEVM23pVUzwLkaH2FGCSMNtUHgk8ST4ptl%2F9bnDo0q62jf4r2LBlz4u8ixxeDZm2HgsVDCGT4zD7wPnM1Xr6JM3aMsDf7O%2BDA1%2FzMZLGuuQRK1TYOdcMalSvIU7UDwrEqUtHZXYXM2P7Z716stFSJNbwde3%2FxjERoFovB6t2Q32YI8LxPywuz1XzU4RmoCCA00qAo4CFk7dWfRcnVEysqDKsxjCRtSQaP5lcbd0t1m3RYZwoexWGa9%2B9dp4sHWHPqQ8ax5az4QSsezuqrQYN%2FfHA2gl9WtaDd7%2FCZJSV4vkFUuUPROY9%2Bfzp2BixQq%2FgBSf%2BOkt0kON0V5DO2MUnmJaGrJjwdJlKI51F75rtul5WrJM94L61hLpujmTdmFLUMJoPlKsjoJiT%2FNmpqvBGHMD%2BdErtPkRQ8a86bmblvuKKjm9MOfNA1oSymsrVph7dlHTCa%2BY4xUpgkCWa5VxWZeo%2FZtmuEp%2BM3n65%2FA%2FsaiFJLopInrMIab2dAGOqUBMuYyUn%2BoL42%2BYAblD2mO6Nbu%2F5fMrES034vkgA0F9l7OzRdANkFEXGT35%2BrPO%2BhDimmRZWyZcZg2P4djcSe74CYjiRGHqVA6R70cm4jLjI9OY9eNVqPM%2B2osKkoOSilQPiG4kC0FoNk9Ypj8sSnh1dAmLvtnCkncM5l4bU7Z4EopT6UC75u2nbPLCNgGCEzPhwTB1k2UgE6trVTd2zkQwrbi3hzQ&X-Amz-Signature=a2fb9776486f3b7fc62f1f1292161d8e4de2f0233cf61a6a1253d69c7b39f231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

