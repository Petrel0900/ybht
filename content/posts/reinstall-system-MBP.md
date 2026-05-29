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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54VXF4Z%2F20260529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260529T023805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMI3RPG1%2FCvmR7EywNEmZ6nrKfT7RUwGVxFQgnwgCo9AiBFEefn9JUdbtzxjZewdKsuA6SxdyVSplYXHQflAL5kNSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl43YE7eVE1nJ3udPKtwDeLq62YgBJkwLKt6wVlv8TsG7MdDLuY5iylIpaz923BN2SSMk%2Bx3A59cOC12zu4FQk30LcXBY9Ibx6dakGoPbnNgI2jhYvpXRRZsQ5bKBzO4Xw70sA1JInrIY5HMFBgntIwPyz8Oxb3fP9iyTecHjpU21%2Fadk8zhFnUibDmQ4iCoEKfnJPig9XTLqQamk5W9xt%2F5b6Uc%2BMeCG0eOgMmky%2BY4ewNUIa3FWKnjSI%2FX1B6h3mmgqmnGejgHdsNApjHrxrEt5ggm%2Brs5NYtPzjBL79rIfNKXtnk%2Fq%2FdsebTbIu0qlrW9%2B9UAZ3wnWSrZ0Ba6ypD6299xSSeJw5aWMNILRTOAXGEVicSeveXrUtdSzcodHipish%2BRzqczIRYLlWq15gZCuqCnl45ay4GXzMjr6CnJwR185TeUwnTs4eMsrPJ%2B13Ij3Ro3ZdB53MzCe2Grw8OfmHPcuG%2BoiQEcKKdUWQdhitj72N54XTBYco7GcGnx9Q1E1b0ph35WyDBNGcKugOmXoZxPVl064i88IiVGMlku9AMml%2B1q7gkpWx8h%2BdZBxLbtY128ERigxN8%2FBp8MpsQOpI8YzXfG5%2FVEe7rbGZGbi1xK%2BegyM5yF6D%2BNFbX8Ow98BHcjTUa5NWHUwzuHj0AY6pgFYBs2vfzcjux%2FIidRmGa%2B7GvJxtx2sgy9nIpilh4PhZjc6g3qTNNHAuRDsFOxOYdmVb0gVvfidI7oVx9zddM5Np0ZkGXHP7Mw2AS7xnFd6tTibJmhgbyoRCLcnpn8vy3O59MalOCvUUFBAq4f5GaXmVg7BJ0MH1dN%2FSs%2BNy9Aez5bouUoXfywGjkAZhkehgdKLUNTpEGJimr1F7ocQQdtWMJSzum%2FY&X-Amz-Signature=8821a98354381bf869f9e07fe07b9a9aaec223aad85555f5c4091b18efe2a2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

