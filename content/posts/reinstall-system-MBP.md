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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFC7KTM%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T020642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDACLupGx5Pl0GYwaeLFKsn1jYcOhK2yPxepS3EUXwVEQIhAORZJKO2bNjAPeB%2FhHbeWN6D2GS7rZe1gtTP7oCu2X8OKv8DCCsQABoMNjM3NDIzMTgzODA1IgzoE8x5pMruHMwrGmsq3AMlDkxU16uYbV98Z9LThge2G43xxkvNdtCgW19%2BGeiwevHCFWpzyxtDsW1im%2B2uoC2ltMQRfAhKBu22N54d9Z7lb4rsk%2BhHanFoWSStQVbESOyG9WmcBfRVbgskH2HQLmoec%2ByDST2wEqNlEUCAlW%2FIvD9hHrmchfJsG0tsvYTC9I74jN4Pk2AltDUgY7ewkH2tE3b%2BrirzZ7uz5IWFz4tRC2%2BSzi%2BdZWjLZeW%2F7XBZ98laYjUaPbroJXXUfXW4Goa2g2py1g1BryMVrZtx7Ly8dKMMYreF7%2B3abYxFLa5kf7McGkO%2B2HqLGxuJBVZyGGmWR%2BBjiBvdCR0MbUeG75ITotzT67hOvmCDkQLFpkP4DMFiF20sK8UbGm561vAvtX4wYqz0Gs5wMejpUyUrVVfw1eNtTysB3oZbc9ICd2KXR3sJwiti%2B5RwA5wWvB0861URUaEG8oLAw34UyJSsS1O5FYMpIhDktr14KekoNE9jXqnCfUhGyFi3MTevcUXNfKRSfYslDxlEYvfL7DFax0pD%2FDNcCe14niulbruyW2D6%2FUC%2FR%2BPJO8gZ9gZKD3oYvVKCell%2FjHgmnfibjU6au%2FCKSfedUIeixI8BhPsEWifMAMWZB6rvf%2BxlrZjscTDAyZXTBjqkAaHRymd%2FnY3%2FJCozeYtFmyHuX1LBADfaK33KLG1yOpFT7MuhQnUckrcdmMHS7Y2YnQ%2FkoETEE45PWEWbBRbikTXKz8QJRhZMfPC1p3wGnynRhxLemUOHb28uHWPaJrtp4TTeRLjJryskOrr0iltRQXo%2BJmppLHYXvOedJQmUVCvW%2FoiJsp4ZZ2S52ehrJcoV6GnOTXC2tPq49DZUTejkMmOrcOZe&X-Amz-Signature=75652390b171933b311639d734e57a8b358502ac1cd6bd4ae2348c3c828021e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

