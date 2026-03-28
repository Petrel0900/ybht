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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOL3CXM6%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T012937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIHjejOY3maVPXm3Gzp%2Bz2g6dOyZOzvqzE1D4VDp74wrIAiEAx8A7QV8dLHmGMCWnVCxwKG3Fi%2F1WPySfZv47amcGb%2FsqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQCkA5f4li8YGOtwCrcAwIURwE4qbXzJaFP%2FD8LMNEl2a%2B6II12YTzIx0TYUtJkXpcAtv1h8P4H1Fyin4w0Sg37UQJCqwa6%2FNd%2F6Dk2q7FAknF0%2Fymn9zHDls2pjDSz7d%2FsnBUu0m5s4HetL2KzTykY3XxjR5idpgUMSsfTTqJ6P1KZRC2w0w%2F7gor2J0NJ9Fbqh8FT4kCaXnyBttyrlczy7qwBkm72O960yMWHatUNqKaDbVmQDjjTmySuUz04%2F2wGNpzPNqIWCQOiwFr4uu7VfHOHzc%2FDzaAZIuyCY53o9r%2Bx6qEO6OA%2F9CltmLTtuI1G20RRxk8K5yRVVxLiKEV%2BodQkcPm%2Bhcho2tNiJV9RBZ7ve2WtxpAcoeC3d47O%2Bt7CVPtIQyVVfVkQQaINilJI73uAGZuqT7GkfTEBHYR6NJVWw9cPGXWgkP2z6hPj4RSPj8zrlrt8GsRigPKNRotryY%2BFaid7kg6a%2FuJxuH4iBKTurhK1UmrW2d442vhAD8NpioDx4qM9wnGNJOxCQY9et8JWBAjkSfiCxc5LWYaRUkvAqiq8hyLEQtedNEzRAzCdVzEn%2FrxHpSCM6KEnbQCzxJDmRzqQOLvJn5y0ZxKWWc9e3QbFzZDITZZLdDkMRp2Jqgep38diKCVNMKDEnM4GOqUBTjbtFDIe%2BQaWgG5EcZ27EeRJk3%2F3feTzuGmQLCRLWDuSHiTv7gRz81DjTCOPBlJVsdwdH7otWSUaEdn5Xf6Va%2BU3lNzmVciTpX9Afcm%2FzC7hglHbB4YOynOrl7fDaNkindYV9GBxt%2Bg4WtAxHpJtxA4JgqjX3GSiWye9cB%2BwjugFVbKCoSlwPqPH3zGNxPSqdGWaQgAb7qWSLtQHmr9SigayS4Oh&X-Amz-Signature=51e4960c223f89d4a13b6f5ffe3820585edeb80716d59cce6eae784ed5c3e029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

