+++
title = "15年老MacBook Pro曲折重装系统记"
date = "2025-05-17"
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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EL2NBKI%2F20261026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261026T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCRlmY0e3HQFuj0ESclFM%2FBYF1dr4yWSByVgVBGTy0%2FYQIgSiAsC8HKMwDtJtPOE8GgqBcsc77%2BhkDl5bzJwp72jcQqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZvWUse70wl8pIhWyrcA%2FAfxHfpuRSYZqxtcEhWn8nEOK%2FWPrwhcP0hNyxeDC1lwMMqxuTyFfqqnKwmyDCSbyKquaGGYEGLjV95YaqniJWMhpJcx3mGx4dH0SgLbt61SKorA2D2ED4%2FdfSQxdONWY8g%2BlUJY38zR4UnCJAwyie489LgAciNnbtpIWYX6L1bxD18I3dJEwIptqxhuZ546S5CkWOUeYIi83q%2FTlj%2BP3McdFhTVCWrFX1fqBoemA530aKpO1p%2FE17STzIvUsEp0jy2E3mbCcSJRejcE8EG0q7oCBCPu5jQ%2B2eUefYwaCtl5uX1On3Rb1liBFF0fid%2FZVUbg45kVWg%2FzXnlXeeM1%2FTXUhdwX7JAcE%2FjgCCNtJXo830leRboU9Kzp%2BvcCDEu%2B6mGFXJmkauT2UYSh52dyu8DGIQrrbFsONrruRIRSMUTipkcVt2HTtQvgHK4H%2FFMlIhyM4QjGJXt2Oek9QAc3bpi46p5THQhggBd5Qp4J3jXPZDlkCvixbrE3hlomiRynaOSG92xoBCLMdwuxkdhsLTU83Or4Rk%2FGIrnXOl7YNPK2jdUILW9aVSwHlJIOyIMqAcxCM3av4LlVL%2BiG7ihl%2F5m6S1AEdHiwnzCBRSX5TVrgFoZSYFpknCpY6aTMITe%2BtYGOqUBostDwiXjOW06BZQj1ZNC60LYN4Bk9rTLnjY67JYYxEwDw1kwadrHCkXJlRpewFimfKb4d%2BvxARo%2FmKsKqIGptGzcsct6iUdpoiNCTiQBgDC2nHmHwtN4qR9baYrOFKIPbuZstADVch7KD%2FtNRjy6NIDSp5A64nUeM068DxTUIKMB7buzINhtMxeadnClV6HYEKhYbIYPhHDpUwV51Ve6P7Ja%2Bz%2BE&X-Amz-Signature=fee145b21eafe9a3241a34aefce03ed399b17b0849aea22a76143383f417e1fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

