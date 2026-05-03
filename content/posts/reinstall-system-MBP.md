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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUXQYHI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T021241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfG9BP25jn%2B2K9M9VnjgJ5yYiARsilghemKsHkI4HgwAiBUXBiWGeanqhUtKQ6mmcrWbQ4wGZDgJuy%2Bnpa4iTzJlyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkNSjwLV1Y%2BjUj4c3KtwD3tbVVWrFbywFxgUT%2BvkckUmFYY4nuh6FxdxjW7vmgr6E33MmFGO2vJID6bNnKNjdVB%2Fe%2FT%2FyfVzHJIAvn%2FgBBcRrB5WGIUtRQRY0YhjO4K2hBxZeBmjQeZB40QEYq105NIEOaEHMmjhdL%2FfLPlTljOto4vFIL06XpTpxI3DN7AByXkByIorcCByQgOd5DRuCKN8VYIOyr0a6OwxwAJUecxZlr55hjW9KWKyXlpnKSb9zE41VzwucFfmG9BcgaC%2FX3nbfIAEpd5Z2%2BDjsJfb0Qy0SEcyA5WiDR1YFLrtzcX9GCp4gG7pn6ttMuGiE4qLZQ4pBbq0p05j%2FhQ5PW7pWas6q4MSBSHgWmceutNo%2FsyKeiIwdSrRBuqsN%2ByhtMaCMxw8IawsPnG6%2BsvXcKqKT7gZRKsmFli4CqmOwlVpwh9qzRx5%2FNCwWTOEADbui6vg1HhOFHWaIsz5R1PK4E6TdvaVWjAfnoqhsrDBMz1dJDRAIejY0vpwYVLDKLGbFj0KEvUgOKty%2Fe%2FoPlN%2FYK%2BNvWl1E4b6SumgNPNFf7Ica46Grg73XW%2B4f7PUPVPXvuLXJGd0qEW8z%2BpKDLy3XT6jFvP7XOscQYx7nnSxbbeT1H2XIpD2V7rI0m6O5JYkw3NjazwY6pgFXl9JfNs1kCAUDl3jHAvwWbg13osgpDlirHXSAcFrda6PO%2FbVw0AdAaDl51CqLdDY9wCWBwcBa0EjwW%2BD2FxXJaVhGPQu63XLi7lnWc98FzxaQ2wMGHXhsmTsXv3zFQKqMb0%2F1vgZ7VgWM6Kyw1xbqPIYGXNuN06rfomKzs3dEufmJ69MkwwUjiesb1stCnnn82a6NGC%2F0V%2BWHXK75AoASJopmlhDo&X-Amz-Signature=5604f3f6b803590130b18c44e510f83f67e68e1e1d25bec03ae5d503c8232ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

