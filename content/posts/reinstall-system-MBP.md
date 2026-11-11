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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YESQH42L%2F20261111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261111T040436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUdssd5s3Z9Yl38z18epHC1EqJ1297VhWyTS5tbXDASAiEApOAPN88jPeOXV6NohLrErl5Op%2BsPSUqnB8jE9HAIReUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIvEnqT6k6BB1kzGlyrcA%2FU66az78%2B4J1LWla1HE4BKqNBSo1rZ%2BNY0d25IOqN5Uoa3Ptljp5xc%2BLvIyXgs94ywTBBmp8Bon1d3sIzBSzIyoeh48mH8G6wVN%2F08Xh%2BlLD1AgyJaD8rFyhs2GM087MCNZT72QsKC1ma8BElaUkYO8hdDPxhiKT8SV2zj8PtRhwYJpwV1gWp%2BC2upUq5MJN4Sn%2BczHZf%2B0I2woiRaIr8dmtAoYIzX7zFLh1492cat3OfrEm4heoTNu98wKrU8jG%2FDaanAzd8naWlpDQg7BkSDmkW3VLBtuUYeD%2FJ4ssUKJrHhElzyUcWbE61svUALfNuDPl6hnoTg7ZTWEqCta4znK1N1sNLctebLBTQBhSd%2F2mc8zLEbfzfQV0Irj1Prx5BqLu373TCIq9bJCFs85pMNoRfUh5QpdgmTxojapxCxdD4imBDjVr9js%2F23ecY9Tc9okrViJU%2B9O0ud8S2hAWQ4BG2DM%2BQGP9z9rixe9Go7uYEiIBwFPc6swtBdPKq69l%2FBadTQBjNcajNwYYZA%2BNA0ZG6oIU3ggz7LieOPa3iZ%2FmHmzDnQcjlWaq0ZtoogzmVM6MQsH5EJESp3UjfMK5uOlVkwP%2BWKORYCaVYT%2Fc8lJW8dCZzm3Tum0JtMjMKyaz9cGOqUBHojwtGtaoUv5B%2B8HgKK4rCoOJBZo5cGskLB9ugXBfD0uRGocbVvS2Eah2fTV0hYblNq0smoEM%2BOJgYHXgpXP8bUteDKX12nGds1IGpZAxLhBV49bMYAS0uA%2B8VsKG2c9soT4AR79%2F7wXrl%2BFS6hCE7abOdGc%2BsM5eSLiWzKrfqxn%2FC4Ddah3dJ6NQqdY3520Z%2FIMqYYnyEa5Ls5uU9XBCp72NAgs&X-Amz-Signature=3ecb150ec3ef7b875b8fcaba82e57d46507eec86cae9630e467fb893d8166ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

