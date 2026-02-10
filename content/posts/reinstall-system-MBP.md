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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYN36GRO%2F20260210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260210T015353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMF6OiYbXMEoa3RTVmYpgfi3Jc7or%2BdH9pIoQwIvIaywIgHgLs%2BJ6VmlR09A9u%2BcDmAmNaL38OCKDM4uPitlhtgcQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOf6%2BxnqgZvEyXg5KircA%2FLRtHCsZPBJkHRil7MBHcu5Lqq1sgp9k8RIz8GYyvEgEvlz7v5XYZdgDDt9pbyAUT8EGex052LmvG8%2BZArMuOXcEcA8xYHbrrXubqRMccHmtnlXkTWJJBVXX9nVJUdfBDn%2BWxrnvqirMpjh7ZVh0rpqiPAFLMyQSuv4z4ElZZISsv9aks%2B%2FUHIf%2FezaEVjn4uneB89Qman1t2axltMODdcWRcY8L6DnN0zJyd8CN5%2FE32T%2FkOqNDrYl6KOKrqA24SRzfC7si%2F3BRtJ2laBJB80PMsg6YwLc%2FDsyPn2wN%2Fz6umEW2sphC6sL7LkogNsGKglxmb87YSbBayQG6Vk%2F7LaWpKZLNqg4TiDr4vJNadR1GWhKF9u23h0%2FaOxV56y9%2BTe9bwybVf8rMqZ8p8asZGNj%2F0hzxYMHXj6FhTg8UvaI8ejUTrd8sJ5NVj6q8HdiY0nRuT3XMBlDfMNyWiokDm43CMXhRGrHbawSgqSxbSGJfkb8yXmMUBnshABpiP58wRCjCaOFIwKGvRmhKsL37cUn69ymKg8tFYnwSksEuNF7aaEPytCJeZjszgagzcoGGT0p06Bf6BGJW7n5d0aZ%2F%2B2PwtdCmA%2B70Lp6n7QqQ3FlGQpUCVva9mBL7Y0UMLD8qcwGOqUBGjLVt74LN1hI%2BRin0LpN2bY0IafL1nvK%2Bely61a%2FDOHUN%2FtUPnEtKtha2istz%2B5ezYWhbhPToYYjKO0SMSsoCQU831e1HQQrUQKRutbqoZHXnYLOa4TvtkD9cyPEHEOOyZHU5B7eER%2BRC6seiagGvY6LpSIfZaAu5%2FPkiNc7%2F0cj8KirrMfF1IpJSLAROAJMGkjgfIXx1A7pK3wh9mvbe1BfHTdU&X-Amz-Signature=62a56b3a9d14502d40a001140a4eeefaa5802f319de36f74c5f012aff2afc90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

