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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBYJA4I7%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T024914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCzHIK3ffXdIm9bIJ1wZbwuanPv5PfojOL3nX9gA%2BuuMQIgXIMAWAG8FKLY%2FbS9Ri1acBner7HbST91tqtVoAHbVcgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjQnvjd98lsejWP1SrcA%2FHYUb1h0tG%2FyXXRUxXkIOgrkOfAb%2BYgsztiYzVPrNmcbd%2BLmbEXjRO7Uxdm3dekCjUq%2FY2vDbVxhe8vUYiNY%2B5%2Br88ccPTuai15ARyvtVUmkZOccQuYO3omLfoqn5tOXxSKGhy4vnlGLHDFKpWEBpPr0sY2J1H6dmE%2FUpwKXfcpSHiXsY867G6COmFiV9N3%2Fn6Vh4m7fqBJ%2BIPHjz3C8t7YJA1s%2F3H0Gen46dgxcJHnBqhbMEfQKvJuAN78wE9Ja7ziIfk4457QtTpPSCtb%2FImba8SW4Yt6df%2F%2FNPEiXKuE%2BYdVHUX1Y%2BPFw8tMZeXIzC%2BSwhGFwqYrIqCnDEwTXIODZrwnw8OvqwiZGjX%2BqEFCF2urkIy9C5LwUEFT5XzQG%2B7tnMJSY%2Bclxtk4NgqrkGzJ6eQqlQyZpmycbWJ%2BUrMLZ%2B%2FimS%2F98VOnBYyl72epumIw4oBXxJZ9qP837SkVlHa5CtV7a5r29xP7ILgRxU1rg7IebVQcN%2BI9RjLkkXCmhyjDC2IQNZlcRrkrIMqLSVxJNXMb5syQ4%2FesAGQS9Rbhfec%2FXlDXrgZHfx5%2F5o9wGGHvzG2rts6js3lEnxVMFX8fuF7C1Ksqre97E3nGkXskGMbWfC74nBV5vMszMNfnkNIGOqUBjHAIPjo5H6JanNvWFjSDuaBL165By2Z89PUowFSLjTMeycmLCZeWiejMyRjGXJyQSLhKtIr3CKfXMYw%2FlRmtI8Jx6siXbvQIDbCKkNJVpVweyfKc95eG%2Faf5R2FAXVjPmjXnGuK3jAAY2fFQ4AnBdyNGlgSk%2BP9riKhk5Gm6dR4Kh2s%2B2PFwKG8HV9Q50%2FVZsG0SEHRfeF21yOXMBgGJbo6NsGkD&X-Amz-Signature=4cffd54de7f8340c4ced42282b4f269d47cf768d7967c0e3497295f5f41dbab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

