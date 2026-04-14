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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A7GCS3M%2F20260414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260414T015758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6RcqOtw3IBcMPJth2ri8vTFpziCqFfbir8ynxexNbqQIhAPfakeGiFIs4cMwdJDnG8w%2BA%2BZkK80LMhNMfyAvKW0IXKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxevG2u1AimAakwEkAq3APr2xutGgZnv46l%2B%2B3LK6bPWoNLOI5RMv8HFi8KZ5Y18TP%2BXIMah3%2FlcW3Dtq47nfqFXNaX%2B%2FfJG2noQ2l91gfMMk8vLf4MJ2MpK9wNJLCQt1WQKH5bHjWL%2BO0E7jJcJGwtPLXHIW%2BQzoxP3kXWlXHakpfaePIDyRPl4qReDAequErh4oBXFKbjIsO9RWK8geowDNVLwpcKXegv7qUwa6vtnu%2BxtkKcpcWQf3HWQY5ysWN%2BVBUPMx%2BGlaJVVxOErleBPDMuVY2%2BrfWNSJ1C3xR5d47s6vXDkGfIHhcSCPzfmaGZe8pHiuWelLDg2kD7NhUCSHhy%2BHFlqXVauIFx95uaI8jU5aPjfll6IVZXuqAvmK4uNwiqJHpj6jCOlpdhtREjJxcZpuq%2BG20VwSmeWJ9bp%2FgkgXiQ8WZBfM8%2BrfeYicw5EMu5a3JBiEPqILlIUS3XqcRj65ZCwvZ%2BMKHkXVD3ncnS7qLMComu6jhhodK%2FFR9nvoqeIgsXGnXigI1pqH211Sl2TcBMx2Bf2YV1ClrI7Qpbbk7mqh8lbVls3UtVrdyScu3akQGlQRfu%2Bi1H8%2FAWcbjD49KnFaDi0pOdrKROftDcLVHgGyGhsbLtQCKJuhDpDdcEjFDGDjoKvTC3lvbOBjqkAar1euB4SdsoLgbr0NPzTNh5Ok6DQdFy3WMfdNn1EXCzZOwGcT7iuK21orF5JsN0w8KZNzKOF1LgD1KICaZq29qsDUqtgWA49f9psX0P1ZOQK44IlCnW6dytuhYeCPqo9H6GiLKbqxyt8R8LhB2nEOBffYzFGnzSQyGEh0cYuFN%2FbBvaU4PLn8BdSQxz8pQIVZ2rgIPEh94YH8Nc31%2BaaGouGJdc&X-Amz-Signature=1be29ab6ce8ce3924ee92184300b7220c446870d66c8647b7704762f2b6398f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

