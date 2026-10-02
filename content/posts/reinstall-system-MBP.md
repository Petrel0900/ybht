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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSVVEH3%2F20261002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261002T033118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGXTie5OjbIZ3J5COY2FZ00vs0fZix%2B24Jg7uAA2UowAIhALdzoH0KwtRU%2BE1Td5fvxNWhS0CCdQZubUaV4930IklpKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdPj4tRQqMu8EkFTwq3AOSfYWAii5EVxxf45VxPF7DJ9XXG7SxE5XWBSkg%2BfaJWFG5PBizlyMl4QsfZKFvBbZoTKipHl38Q5ySdkkOuu7Jl18iFeJPpCojyxIjxylydBa6%2F90vN1qT733%2B0f7a8o2MHlsUn8mWBExV4rXPJ3TSvvRPSBIamU%2BathlkdpNnKScvNxXFTcBimN8kjg1%2BJGxzNpmyqRPRo4CM1CMShCkRg9h5%2Fw%2F2ICoBXF7epn3No9AXpptJLcmYYYQgs6ULMmB25nMasRSsI7Mrd0%2BOU1mr%2B89PDhtfs9D%2FmlQO%2F3ucILysOjJFbrFthb5KwL0NPzESYy3Jtl9XeQEnuJHg0QWNEx%2BDjwzF78h4uqWN3lwHA%2Fpu9FzM9pyqTdbxF2%2FmbRjhZpwjOMQYcl54yI4D0gHJtDMfwyxk6YTLMeDKm3XDAFXoAMr3FHqdte8LRXRtrptSdsJfT42ftztppRzOhMOnP8SokR9W39Ul0lwNbxIJ3tjA1NmM3GKfsN1PzWlh7EvmXanFlkKkWODoqF7hm%2FfpReMNxQF4KZwX6d3rvG88lLMHxPNtBLsTTedO83sjk2F4sC810HlI5P96KMT%2BQ%2Bt9ftFgiRumNAXIPQa29pkiThCexg58OHlGRk%2BQRjD%2BvPzVBjqkAVd6N3YWBoeok8bj0F5X0RbpCInitT6VVp%2FN8VVhJCpNivg4B71iAE0HS79kaYCEd2fXcEdmp5f2i3nYWx7KIAuCmiPDjvRUaBHDnkA0EpFlmjlfx2fCauQVIuesjnoyZwuC6biYGIqe1yifzqX4VQGs1zp%2FZrCChb12cRQLqO8IG7GmkWy2sCCgx3pjTcm9%2FPXs9%2FcBBZH8IXWAKPMefLry7CK0&X-Amz-Signature=ea8acc129e9cf263473c0b22e16b93bd8dacda5281b963c3c94785251ce7203f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

