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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3YHX6NK%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T020610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDDKTz0o9E5DMzcY9HXiinNOJ8uPaRmoxfFrFi0j5E3QQIhAKFBYWu0lzlHMSAl4LvZWmkrMeUSbaBYwpFwnK26C0%2FQKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnPLUOaq5k%2BGYFOa4q3AMLXbAJW76lKlI0D%2FAOa95WyuZiGmwNGYDUBUZwK9Vz6NSC%2FcG3%2FBsX7Q17B5jE%2BbYcMJpFjWVyu%2FoTB1y9%2B86Q4CBmjoIFi8TQx8RiwXzvqquwCz%2BdGrufuf3zGGlLRDzpb1VCKU1SsomubWCbjmX76ZlCsB3kfskPasVnpUs2K%2F%2FV4wIbioxbTxBfvQPR8iI%2BTqM7YBESheqPVoa9vMs%2BhIzQCRQ2vHGxvcdqQ8zwc97pOR0i%2FTCb7LkGi5grklxcID2zVMn%2FLry5aFCubRaspyO7RFx9N2dg5oMLvypVyzwalAJA0%2BT8Kizlqh4oKYqhAd7AFGjRhfH8pYUyq%2Bv1BaIMvjlg1rRfZ5EF7ZNVJhTEV5m20cguo4yG3VJEcmh1bV2IeQJ5Cqq1VMPdKHZ4zqz7F9zGvMnmz%2BhkYArxgHjoQWuGdPYkOmujkwsICqn%2BFPlLxfD6lM7jIe3qEQy1DJA%2FbTck7BTcd79ThNHg4y3PDiGSCb7OCT0JI3EWtJYBePb7cmxNiWgAHgiG%2BzVJObUP9753vbTe37uhG%2FFHpqYA8hlMa65Ns61WqoRg6GAQhS%2BKDbswldp8DIhxqlHItW83isHfA6%2FgiTDbC%2FNMMueS7XxShQhKb%2BeamjCRutDSBjqkAXYxM9rBFpUyLi%2BA0fjz7JyC19sgyK3hHDX4PS6lGppWlxbfklPTedkNw306gHc%2F0f1MJiJAC7M%2B1R4TqNQl2Il34h%2FtJXf4IPkynY5KNT4ReAYbxtlsOdV%2FCEhGLG1GfbQY4JiJkyvox0RK9zfeNeU2dVqNjrT089rrn%2Bcl3A2XBz5QXfDLLL6dHzrR2bc1E7u%2BFTexndOVUc9hbivPSU2L3Acf&X-Amz-Signature=e60576baa68e0526312c1ec81a17aa19fce96634cfb237c4f4aba3450055677c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

