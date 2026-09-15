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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7J3WWB7%2F20260915%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260915T025124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICK99KFYDR9vAfP%2BiSaptspKRnFEi3rLnrqJt1tUuvS0AiBUeAeTJ5cgnwTzfq0AZritmn0HEOwmvQszrFCjbGQqPyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOCTIzZIhUpivPPaXKtwDCJmNXBZIoLDkXETwZ%2FE333XRBZulBWlhyl3gc3XthjgmfpQaR31oTGBVJwlR5N%2BPZ1Mf2hejjWKlCUDNNS9uawDXBqDRRQqT7eKlIv60DpxpGKFDbnu6hsrt1fyGaSapBWNkyEEer9ZtnXWEtSvw1w8zs6%2Fr5D%2F4Y49JZP4n5OfOdeCPGQ6d2JzhywvyiSAPMInze0djqxT9chULyn04c5U%2BzGY4Uu9uJXKur2RtR%2F%2Fv8tunwbnvS%2FWed%2FLONz9NJQGa9QxMBnaEPOZa8xhG0XlL3B6XaBZAYk0GR0Uwat0lhdZOuXlmfy%2FbDTyUHVpB82ZZon3io%2BL6aA5efiCU9qRzsxZCPdZyy21%2FMOSrb6GJJ26DRMXATTA0uNZDanUepFAkiIPCrvxEP2qgslQpY0QKV%2Bd%2BTk%2Fw6cVxFpWtfucMNzsM3EV1PB8cNJixPQRO29bUH4JHTka5rdbT82OE1BhrN%2BlgG6JS8qoY5s3X33X2Ts2OgsqcLoq414O5xAgz%2FqfGvvAQVomDZfSR36ipU5YbAeWfgXjKVxunHyWPBDFsWWqG8XISGqKvG4jRLQmZzSwCSG1P61Mdmu5va%2BSLf9TyJ5NZpEqXFv2BexMcM%2F65A2iJaSvmVbumtL4wqLmi1QY6pgE8RFgeSBdAYqHL8HHViA9mICHlpj1SoQA4vyH9GlpMrOE3q%2FUnFgf7gRzfrTSDKIC%2B8ZY%2B3JXP7%2BtteCp0%2FY7zyxuWpICrtMBVl9gQ5WaLPUoDjdy4Ube3fiZn6vD8qxdXHA6KznokRHdJYvpb5Og93%2FOvZqUeZ12zR%2BjA%2Bx3AtnRGobZSdfnDqNDiF%2FO3Ah%2BgeeM3w%2FwjGU21xNHVH5NSQBFIVGWQ&X-Amz-Signature=1abfbf3a660bd18c1341204780bf3cd21ebd8b01138df6ee8266cbde429fd0eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

