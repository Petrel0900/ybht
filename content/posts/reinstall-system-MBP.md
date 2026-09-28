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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVOEAMO6%2F20260928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260928T025849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDWqxeRovq0yacZDODGKSgdil9YL770ydZ2gorIGVzITgIhAIRRAfSQk5DY9qGatFKaDHKJmqstF2d%2FtUNgn0oh3b8dKv8DCCoQABoMNjM3NDIzMTgzODA1Igy9kajWTKh7HwDz4YIq3AOAoHBUj442MeA%2FHmQMGGBXFDRm30HgkBlbK81ftDzjkKp%2FAZZEKc%2FQEHWn849cJdLu82Jabtc575uq7djecr8vw7xnE0gsbeSyyYSlYZwIBs3hVBhiXTrIxdR2E2rTtGwCHSgoa3o8OT4Qqj7o5mVCcbIUJyzB7%2BeZ25ZpKUShJd5TNt3Wrm0DUFF70eoOb65ZRLxLiYPMqbDZGY4io22j9CUGaOOO%2FHu5MkZoeMG7kU5%2F8Rh%2FfjB25M1U2K3HFzue0LEFXycsHBzR85Hres126Q48RZeqCUWOsNIGe%2FGL2a6onReJfQ4UVVTNFSG3EEAQv%2Bzlz1uaGtP%2BRX3E0lcMXL%2BR3MzZPHkIYPIwaMM5LEC4Smcg4xRDAcC0wXJIjVJSvzVcX7ZgM3pkubnXc%2B8CjMrcls8BuABlzLMtbdcuN2XIheZ767W%2FVEHJ5mbsN87Foj90GYQl5EKIQf%2BNsFbgKp3Jn0maPc5zI1Cy6ylS6viYNWx7MpuAIpxp6EPp3Vd0Sna1EO9YlhlhnLGp9OS4OQrB71nkWHR8JU184IiMOm%2Fg5Zy8O%2B1QLVvjbVYZdKJw4QVLNy8okhTXKmc747ahMA3lMpzqTANyn9w284P1X4mlRG0RVYfDT6BKzzDc%2B%2BbVBjqkAVrpr9cWqK4XJR1xWMsq9ig%2FoL4Alrg2XA4%2BI0zbma2e7udAH1Xog9BcY2u0CwmBCuaTlDywFfV2aTlVo0TVbOJeKMAInTVAdAqEjA%2FBw1fSqnmplU2vZFGl5sTNJpximk%2BMiwAAihOX8csRQvGsVqIAk6DLR55wlJwk22YMdheZdTdMyfos9ix7a0ovj3wQaav%2FA%2FneekpfWpzApArdtuxQvuXu&X-Amz-Signature=5bedf0647294b9b716df901a53987717f7e549a823b8d543df8dbb85d8c7beb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

