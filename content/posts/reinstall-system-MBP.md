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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPQ43FXV%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T025325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEJCGVTLE2MKlSSFsEJigGCsixN0TdL5Rmb4FbLELGGwIhAOv1EjTDfp3WTZ24gYu8V2O23dLXT0Y%2B7SmpmKAeLcA%2BKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq8NvejQwnDga4vxgq3AO%2FaAzpyL3HcqIjAuD68VxyFUfGz2l5SCzHgspTYk8Ih6Sv1mabM9BOmtPTA5Rhc4lXcH2OBb5%2FKrgcxhRBQQDi8vjzoWKWMgfQ2V5TUl6sP0VBVXf3vAnH3ZDf7%2Be2Q1RviG5co2BSWfUvEExqpZ7sSKbUMqXiofpWvlONKdc8%2FNZvVAa8gdRgDAuc%2BNC2CECWglkEMtJvLlG07BublPbjC5wHt1CVaT%2F%2BRotHLLAF7Mu2D9gt%2Bx1iuV%2Be40ikUFezOaizI8TxADczjbRkHu3hNAuLETifnwqtFXXM2tbAnTXZ1Zkr2ERn%2F6b6Ggo9YG6kDySqV5TDFLjTrhElyr1bCRMVwYOAdzjM2hX%2FBI5QQfIE2dLDNtw2HnR%2BUCoHrJihm5LfXaK9ac03R58hTJtQdRa8kO40j3u63x7DJfLeE0qfW13B9MeDTc1rCtU%2BG%2FhmADTf3eDh2HTVxy7%2BDYOG5y%2BLYpvl1faK627xqlw7Tt9gWy%2FfS62wGLV4Nhjck5CpSjNzZnCnS78eeeJ4RVnIVr5CiNtuceFnesNx%2BHwJ8x9vt%2FrrRQjgY5ftj4oAJkkOFKFz6ymDkNtfocLGi4vGTYE5Bqatd9GQePWW7vX4Xo2N5aAumhPijfBZ%2BTD0r83RBjqkARurgHh27EBhnYdnLSCdB%2FKS%2B2CvfxR108yxicVZYn7ckkdXI8EnIlHyo8AjDnxeUCVhQKvPZfZE9dYXMm%2BR%2BIo%2FYflQ0Ozj8Krh%2FG4ugu06G%2B%2F960RC3nqjc2bft2bO77q3E2QrO07FcRy8CZFuiIub1eJvYB2blG7EgLI%2FVUN8yXaSWkKTRYS4pFJPzQdz9nXAM1lNlZExEaqnFYQZcK0HkKw5&X-Amz-Signature=60b3d0b01db85e9ebd68d95d1c92a6fd551dbb59b3d242566bfc4fdb2b179fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

