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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFRPY4C%2F20261017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261017T022950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCv3034F%2BiMWpO33NOb53Gfnwla%2B%2F3OktI4WPprIBSqdgIhANHEEdgpxbVuddA9TksEO7Sc097nN7whP5%2BNKeIl4Mk3KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzT%2BIhYEFQTCl7cjgq3AP%2F0L2mLpnXy%2BrG1ETL8vzLp0lkldtVfqgP7kROpX2XrkDoFxSEtmVpTcb6TTpIlumgTVYjNrCLUi0xP%2FD2hjpN6L4Z0tyqL63hbnmpFufUre247WtDuVzYyhlAnmp%2BAniH%2ByWKqiES5WIDQlUZ9TMZoyHlOr0TldbLPtVtGeo5vZFtOBiO7j%2Fp6kGPlopE%2BEn3PKdNqR02swoH03C7SCgAsilfYPdRgozSAp53BFiXmlsXmn0J%2F3H6jVLHozLIyCS5E52bznHJfNAGfGix1QMS3zCRKWdIRUD9Q3XdFvl60N258NYrWUyZG3Ap4V1624M81eLooacXMxUmWPn66qYperr0aKbu1a%2Fsjb1DaeFs%2BOS6NAgy5GhbQbHdIl77xUYgvDxQe4F2%2FcjBOjwKiTv3iGF2U2TBjjoG%2B1xN%2FUTNuk3n2zeRmMiocXDEGhsvcR4TpSffCcHA0X2Ogc2ARfTVS4TtIkoj%2FvNi%2FOP4WXmGZUqyr7fgcPCnRc5BNYPMEiyCsvSXBlFJTAtIr3EumGWy44MP6JAhK%2BY%2FPtik7pFoXFBakyDorXigIHLwq%2Fuw%2FOW6KrTZ5m6G5DGitkGY2GfX%2BR2bnEcNSgsDVoXYuTVSBL1QIHowjMXMu6gD7TDE%2FcrWBjqkAQ%2BzoqNt1gTldanHjPTrKm6ZelRU%2Fca%2B0Ej9IaLy3JpkaB4%2FkvsBYgYTnNb1TqwEsqqC4%2F66ZD7jHxoXjrVXow3iGaqu%2Fxyr1DwNqFEfs3dc0%2FjPWHuUjgdbrCS%2FJUu6O18Jzret1CDDqEaLsgqCzDC9TOJ60VeGylJdXMiSMjQmR80DRvVMF14C44RnFX11ulSR94vYHqz0rSqXb2ndo0rABYoy&X-Amz-Signature=7cff04dd5759b4f7537f06244391d5855b63ec836424136e78e0fc0d1095f4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

