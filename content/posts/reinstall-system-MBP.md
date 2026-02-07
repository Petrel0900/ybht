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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666232KMFQ%2F20260207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260207T012357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkiENkWuLT21y0dJeNP5OLfu6aG9Hnwtuxd716SiF%2FjAiA71LJU%2BmhCTq0EUSpae%2Fp2YpLwvZ1xVY8YgEDTFnj1MSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMR%2BoNeX6Rpw%2Fl6c5mKtwD1QDX2OBjgQsq5R4HXzyNDlOdzB4gZJ%2BW1bhxM2MmpM0N%2F5KRecDErc8UdSlatJKq2UDCOQycCAbywxZiO063o18ZWg9KAQ76Wk9MFk%2BS%2BFNPzAalciFCfOY6gGWeKn%2Ft70XWR8KBK8dKbBPDDtXzXtagAB7o8wMqLl6IZ9q73HAvKT2n0ZsveE42wggdy28WmszBk4XYhuAIqOGiawzIvZMjPq8%2FacmJ7dB8ewzjPbFgD5t2u4IIfiAKleeTX%2FmHQq%2FZqIpirme0qUsJwGgFLJylwKg8kB%2FwJhn9yetgp5LNPGY3%2FqJhhoFSAeamSXsdXYrsmLrYFkrokadrqjI7GpIT9bwxJ%2BFMv9g%2B%2B3lRVUb9EcAgMGKq%2FLb5MKEw4NIPEOh2ElhXfv3GpYS2cYz0bMCS%2Fiww4jTFlA4VPugPWUT3DV0TakaUF1m13Vv8WS7K4tJRsUUEihLfahUXYF50exSTh1%2BCEN4ZcASV9BwFdXW70IXEv0iN8mCN%2FrbM7eLdn81n8cVHttN0%2BlBYUAebevh9Yc%2Bo7Qt%2BJpzGG5c6K%2F841jQ9LNYudqRNNOthUm8bgDpnQgU9dMWBOWTtqmNuAMOfnXv%2BAIh4JUXCB9MPOETgsjKZfZZyhmyeYOQwn6eazAY6pgF683L5egmKmVu7C%2F%2FQwP9f8UbGa%2FQZIsa2jXPSOya1rP3%2BXa8%2BIEeoGPccwQLfjsxlRpAR3uvaI%2FhH2PRO0ePdIPP94rIYXZ%2Bp%2BpiqW7R0xGVAbLaiPAMCaUrGaJRmna2GayxXFQLHA1i%2Bu9rLtXttdRwRub1Q44RzaQsjJ%2BRZoTXPIF6zg9bFI2oyL5rG78PaBQvsQIFbh%2B3dbGWS2urglavgalD2&X-Amz-Signature=875023deb38cecdeac8ffc76dad38a6f2735fa15e8d1aaa35dd7685bf9e3a7fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

