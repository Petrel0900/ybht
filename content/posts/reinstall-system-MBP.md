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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U6PPX6N%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T020231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlG9MIr%2B7kGdsx%2FiYkrjQ0rThcD51CKQjW9bZ6ZwgA6AiEArtT49feGmoQSP6BtGg7FZUV25E5q8cFJvLG%2BvtVafAcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDH5OkH0HJEvdbC0X2ircA80bs%2BOywoHnAS9EfuJXCg6CWNmXG7xBa%2BsaGWQIjV7%2BZsPeqWY4UDiM%2Ff56LBT4acZRpeKggMOty%2FUW6fStWN8FVXnyCb3ZjUivi%2FaMCPI61%2BIkonRvUX14CEe7uhoLeDArmxnW%2Btfe3eD8SwlH8a6Pt9h7VXUkcNGHjV2L34LbhnDhk4wQ6yAaVRS6bBXk5vo4yeodIAh1nqJyjBc96IWMfebjwoKjcYmD76s6J0xCmLw5%2BJeRLRi%2BOHnSMLLVqsIZNFFxhADp34vNdAtVJ7Y0TYni8znIO8%2FS97IbzJ6GYilKRzJqDwAZXxxvesQ4duXeaKWFBErpf7axD9qqqn2gal70claj4wQF%2BQJ0evHGBfBHnvylHNhOQRNDDu7vq2aPXYjmYDTAaVkEpuZuNH23ZIt9rpUhkE4Pbm6Rq3MS6L0Fx%2F2gPBdkz7nwX1mmkjCDTBWqnmAGjXV88j%2Fj29%2B1cgyagdqYICljrRHQu6htmZJP5gHlwF%2BO3SIxfwpIQu2OOcX3qDat46C0ikWmpZwdlUw6tLB%2BqtuNDHfaw0aUsJAGjEvDGC8QeykKIZSZzODwdemfuv3vUKBqPcJVd0yZoIm50FYWRl85VMfvCxnYBrLj7h3V0uX%2FGY%2FqMOGLqs8GOqUBiwM5OLDnq4SpKXn2UagUhlPxvSHD3fw8xvbk7duVGFDxXO561lR9sgdzre5UlWusLe71Po9vV6e1RXx2MKr9OPKN7tCJ8Pz5ehLgDTiC8pH2HgVjUYTx9mbJNd3e%2FUny5Z6oKdhWq5F6oh%2BCnpJTM%2BgySTY3KNJ9nP6PwLBnDhJWtQfOTrgUbw2%2FbqPUK7OfCgeAWraBGZo3b7lTjmzdUw0bKM4Z&X-Amz-Signature=a82da5c8afdef5fcd5ae6e7b1a9f0e3ff0d56eeacbf9621fe1cf6313d28e0fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

