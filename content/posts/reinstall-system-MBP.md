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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWWVZM7W%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T025247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5%2FnSZG6khuKBRAadXdmVSrZA7DgZyIabCFhIo8xBVaAiBj6bN3GmoAiXI%2FUxvNapySlmcr98gcWeawi3ggtQNo5yqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGfLTth9uPwuN%2B2%2F1KtwDz%2FiGZFOmshwc%2FzC%2Fa0r0hm9aKHxqLWARi3yG8KzHmv7RbXhQ6llI4pf7A5ZFYgQJ44RO1GyBOp6xQ8DqZo9zir6WqamTzZwd2Jkpzrtyp7Mp5EkaUA16u5kZ6UAeiwGn787f0PVRJGDCixO%2Bf0ZzmHtWcoK1vjQPb0SbveCIksLyZMolU7vGJeYfHld1acDFmyTKOZF%2Br7TiTk3ltQo5R0y2z0Y3IWlml%2BH9glFdk6LCGxALySozvNXorcXgU2fiSDSfUWET864V1t71wEKgSaQ4%2B9r6tDmjL2wyKmgqLLR7CPJr28H5v1KFTxVbUacDlvCJpqzjKQdDCKqgVJkiNds8h3v6Ee24f6oqsAAeMw0Ml2Lxx1MBjS4XBkn1%2BPhtRXt3OYfVr9RYax995twmVFkvY4wg%2FIy%2ByUqbRHjXVphrv5JyOYl%2FGpIZHlGQV0W8leKT6U%2F%2Fkz%2BxF9htvgjdFgXJYYgaPlfvW4sjz0sKIyLuCGGj4Zu0NduV9shnMTU7bI8oWeNMEvyvrPKekkwW9k1%2Ba4moHZ8zHFNElcOY9ZaHQvb8dZWmN0IXsy4Gtu%2BsqaKvsFcHcbKDVnmvu1%2B2o4LEa0dhl%2BL3wXg%2B2DRcblwh5rfHHnbJFDucP5cwvquT0QY6pgFzdI4kPx1aw1FQHkY7gs9ZUzDzNO0%2BLxgspsTTmjVzuTCTW3uy90nTS4MHAgapy5kefBN2ls7q1%2FsY7PAD0AreWj2%2Bzw8cegQo6yQDuNMEiqrg6SLfEYO48sOdQL%2FFs%2BFLf%2FTEP0vPZ8Lc6WVIYauGWOkRMkSrkbnTGUBYPzmMeNfpZbMufJe3Txi4jqDhUAPBroeEGk6%2BkaBjuZp1IkQQ4wMPsaJm&X-Amz-Signature=8e4cb1d0d3972eb6abed5ed00584b144de009dae6ffe8951e4077ea477581e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

