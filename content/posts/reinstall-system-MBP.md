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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URKTTQNU%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T012603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGt5wMXWU7pl5TDwj%2FAJDKiPoOXbli1%2BB4xJmCS2S8f6AiA8MubsDfw0yMzR2u2dBXZFZ7WdOMvdx2uE9LGTeXC8giqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2aBqPvBIdc%2BB4%2BomKtwDOZ1xGtm02pTiKr06WKE5cs2wHMU6ZXaFxrbABhjBFrXnODhY90x3ndGIvS3MyrJtJmIh3eyiEj3ZkfA9V%2BXc02BdLsh0QGVR4CMszwzcrqu82pWz2VJiNZ%2BmgeFsKGhstPhEPp6Dh8g8VtG09PqsOSPNOXyL0pYoi%2FmFI6pMFRWuHpd03o8Im2X8I7Sxgn1E6yjewhEPb1SDnWSLShdSGLaHbQxy0b5iRLPrqEYdvjwYCX0bJZTDy4AMk01VZRfQmNF2kudP5clx0mZSTKsbFzeHSSIl9hilsKoXDFH8nSLQUXphVaEwD%2BsjHgWMKVu%2FONj5mlfKyypCL2eSl9pYOr1tABF3G%2BytCLh5x2MYaX6GfPIn0mZPwKDzSKanXBCfQKNQ0BsL3J0UbZl%2BdCrvtknGrIvMvsbD2H4vbANOCY0EBdcHmO9hxaiRbMgKUR%2BbYMu9AXxaQWehZXz59aC%2FiACRx3NOp8mZtfCmJX6d1BwFY%2BEC4YIJ7hMmIqs3WgcXPSDiJ8XjANzmJGLC%2Fbj5ZXvBhEnSjMuQ3sCRlaMTi3Q5PbIcuXVb91sQcR1FoqXnUj0B2cDeXUTLM4RQVK45SjHNkHY0Kkq%2BhMz5z9zN1uZ6oj3J%2B7OrvX8Oiksw5smHzgY6pgGWd8yL6DopUBJwya3CEEVW%2FZBx0nzHhSQW%2FGhO4FNCBmYyeUwsX9jYDuWlRb1wFSDmPcEEEOH%2BaT7DZCIuoUn3uR5PToWuOOV3Ob7y2cgX0BCvZ6MJ6kJzi5K8D1xaql6Lxb7Zzf77QsZ0D63HRie8Ohjuyk6k9G8iLz7Xbhj0NR3vTOvqdS%2FMDZ3AiS70smqjnNquRUrG9AOyq%2BaqIIAkkgNYFjTw&X-Amz-Signature=b08a99b7dbe8ba03828c8902aa5ca3ae0c5ea1325c40991d01311e2643636b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

