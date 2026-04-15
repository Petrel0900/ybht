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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTNN3SNY%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T015441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZbeScncLd9k2rBfWO646a3N1K3BFR%2B6tdE3yb4iNP2AiA%2Bc89IzHVxp0qWqogczV%2BsN8gpMkAHsVnaxocVnPKBrCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2FlLnpGw7cSROXohKtwDxkoO0qyojmOaqYz3E2KHGVo9SwlUVP2ZDWaSYtvll5PqJ4BINvF7g%2F2h3RQdDxMiBJugies1z93IWsEs1ly91rQMnBsRuiSozPhRh1zrgWHaRVBaDjwoEpMoo2m5KkuKuu6Zp13wPNg9xWJvEMPFMIOYjGXJBn2kEZM1vvOjsrBVbgdhkUFPTF0olLyIiIqbnWZ40VH9cN%2BG209XqJN%2BadSabp4G8BP0lw9qcsgdeP4a%2BlV9d1xN0%2BkZwQGYY%2BRHz1NVV2gmc%2Bg0058DwM1pKuZ%2FrCeKWQavpfeJKrL0NT7twZRjLXRmaH%2B1fxZnC%2FZ4NCvuThTDtYKWguziR96xU%2FoKaqdC7uHUS%2F61NPHhAJAAPerrVITxlwcEls5EjWjX3m5d1eVShAfZBbFwvC%2B3UT3Y8QLcDzQV5eGSjDktfAh%2BIzuHM%2FobGR%2F2gnBadZhOu30QaLaBAopl59jHACf6UGV7wtEvB%2FIBiz3CbPBAyXLJUrGAOgY1F%2BJ5ua46OwQ2X1c67KuLQtSaNjbdLV0Zs7me4gLrzD9Wq5bgc2tIEW%2FZ1Pjf6Uz6AvpOaUCb5jnpRchaKqTpRWiQRP2nrhDyQkcSAK5CmtK1YXGmt%2BmriKqNcix7H8ymzV3MPUYwx7P7zgY6pgHDOpfdCeFLFtcSjgxOmSeAoTcEuQ4ps86X%2BxBA3tIv24S%2BrbQkfY86qRbmtZhcxusQ9WHzEFDRmN7RWyaLLZQSUmzlz%2FSZa0dUxKJ2ttH3NzoyvFrb%2FldsgTFO5JAINg5qaqCHFn1OMMpkD%2BkJf6CyrRpiVQGG2Am9Iu9r8LxqQOI%2Biu8urV03cx0IvyTXXUsXDCJRJvDZopkTyzkNjaBdbYt%2BS2J2&X-Amz-Signature=8c1fc2077092f1b6e5a6b3da7938df3c389cf5b9a064f1f587d9e932cf42ccf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

