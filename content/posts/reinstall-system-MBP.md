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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JSDKKCF%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T011012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJo7WHHADqO71l2JV0zzvWdtptmeJwkj%2BTea9mCoQglAiAFRupPpyUqGcqKH%2BIkzremz7WF1n6gzGY%2BnYlXUsY8tiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjc3tvRpVAdOvV1wxKtwDwr%2FmCknVYg0CAfZVj%2BiYLVN1dmjKoKxHfjHAZE4QTXc0PUVeyShye0%2F31vznw58tmgTsMcbkipXHeZN7gjiUrR74ipgKEZyqouprGctXZ4tqK9%2BLIorVYMrDufzHWq2TS2CwwxDAUuO5k0ghvvc6tCtblH8eXDRcK0I4dX6UfrCg%2B9LnDCHQ4copFbuMezgFmSmCJdN8NyRohkR0TP7tFCAIEbkew97JbvzVZWFvEtZG5FwWU4yWrvmNpW2VjpakDKPA06IZI6o%2FAA3B0E1VOfiOGqigwTli7tIFf7cPLTTOrraiTKGSh5NzTZ0gZBqEAQRfDOuZLiNMZw8jL7NH9Q%2FmwdMdiQWsDm%2FsGwZptKUbOEUIjclRe8JAfWPsbzdoka3qiBa%2FOwaAufb8kwNXbOgKNAuL0BT6aYd6KyEg8OteIvi8h2a1YE1jdmdpSxPLGUy7pJxT55nLLHhN%2F0UlojPRn1PiphmHxYw7k3yAfBd0Kxv668gWMz2Gz%2BiAoymoTRJDV6%2FEFRKRzDMuFPK4VMyQHo08ruwUH0YZZb90UTLhD%2BjVE%2BgNq%2FbrfGsrgTJhExLGPbCmnTu0%2BNToNP8e6hLhr1gWelvZ%2FBXPG1KRtylF5Xy27Ij0Sk7u7p0w3tvp0wY6pgEuzKuIpXbDcYFyaPookzBsdV%2FQ15WZ2ENh41%2FiZqhgeNAKvr%2FBdSjtH3PRqSHfuc6QZDmJYGL3JjhQVIZbbeBduo%2FLEsIPEL4ONR9YAPFdFoXui32Jui9%2BkZrrDEmGp25kTZD0JFI%2Fqyojs0NAQjmYsl1iFcMq%2B%2FZQEYptyeDGP06U3SDEC%2BX10%2BdMY4UNAdDJp75twscdJbhtJVA%2Fwnqc%2ByobXRlg&X-Amz-Signature=25a9baf9ae6f25ddffb1e3dc5d08d240a6bb81c09e226b13d061aed37143dadc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

