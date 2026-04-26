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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3E7WNN%2F20260426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260426T020549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoJRKWidz%2BS%2B%2F65qkXzOGrUllUJakR4YTAwmRdEF0%2FdAiEAzzqAK2CUYp%2BGHACd24%2FCVKeKX%2BF4Qe0NwyDbNSAHgTcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBh%2BC6mxRXowsSWE7ircA3TXcfg7L7oxQy372tjB%2FyB1rz9CAP3Uhe0oQzw7DqhhfcjWxPb8R0a8Mr6PZ3Qdzl585%2By9fpfudfSg12AUgPjIoDEe5d%2BZ1wzT1uN%2FkYsw9LZUqbFTigUQq4hmAu3SYCKcgZGkcF59ZZeUmquGti8PJFEqqiG0SkuGCx68h8bxoRfokp%2BZInDYcavikmraqPdm%2FFAnv%2BUOOjI1yLi6Gl0WR%2F2j%2Fdd4sOqMZ5kOUCG%2BBx7ZTnhzVpmwgvdQ2Ay%2BoygO8cW3w1kanSAveFpkgmW5q9L6Xzt22dwF3EJ6LLpmQgClwumqL0Cw6NW%2FUdjDQ1WJYRkM4uFM82H1y4pa3dvlGA6AF7fQHiIxh5bXTrrkvf3RZOHTjtH5aiNixhnIGTmh6QZ00nEOWCYQimXnN9yXJX6hjfNu8hgeMvkAjdKF7FdQP7mq0nTiL%2BNSL9qJvguDodISx4FcXWL5fWjyDqJfRbRuopZ%2Bq%2Bh7ObCcYDZItYxG6ZuU8zvzFq40j58SDoHZlgNpe1995yWScOWyEo730e3EDY1PUF0dd8wUev99dzbcidjwkAir4UaN3eLLYU83651o3bHLwzPEhCCs4aQE4ocRm2ujOmUz7AQtryaztpVahI7ldzwMFTk0MNzLtc8GOqUBwegJN5CZ2qFt8ku9yhIaVMgtVP1D8wxcT6LaGztG09m%2FE0bh5xb1VmmSRhMRfgVOAtQOgin4eZPI%2FsZ6P2CmKxLlCaTVq2T1Hqxw%2F6XbTrq68ULgY2tN6Yk6DyxKGqQc4jLx4DGfaxMtsjKfvBymAzh715qXDOE9EvZWKZKOvcbYs1Za4CSMdrXkFr3lmKdkZttUHGo9oFNS%2FDqVtGSojTCagFEA&X-Amz-Signature=ba04528f9d6f512673c1f2b92cf4968741bd383f807d5d2661c0342fd9be7e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

