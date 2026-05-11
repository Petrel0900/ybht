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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYWFAPRA%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T023347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCID17NFUgsEompyF%2FsmcZMcYto1VgaeUGEy0E6YTc0h7wAiEA8djZJlEyaxwPG2sY8RXv4ASxPFvypBud09kXNAElIKEq%2FwMICxAAGgw2Mzc0MjMxODM4MDUiDGhTKvYWthtwpj8pnSrcA1UwB66jv75AZnJ49CzU7fCg%2BwgU8dcm%2BxPYEL1o5e0uqzh%2F8XVuS0pkgPaspzDeKKvSPTV5ORGfFRh1vhlI26gmYujxsT5db4jTryWj%2FpEiduCARyLmEjBYV2HsO0OpnlB2tx6Lu0sJMF0RrB6%2ByEk1qgztMmR8ZcIS6AV6S8weKV0bzIsxmHbhRY9398wY0wwZ7Hxsl0vRdv%2BHov0%2F8p0Ezj%2B%2Bfw%2FDtjdL2ISi9Lvx5shB%2FwBosYU%2BSHxF0XEYTrxRIujwKEU7W1NRxu5abmc70ss4Ah7p9o5ghlgnIvQN%2F9wYcZzuDjfRrWBt2fOdalrXT6nTj3XEELQtNsHTpvslucH9LTfqB%2F9HZOtPYEGP60AZPo2kCGSN2tOYzqpf0u4qQ%2FgRLeE9E7bDvd7pK7%2FIzszwmeZwMn8CDZG8IjFbYFdM7i9cDTlbPUnofwcnXeLWUja3XYCikxgANKmlXS1byT6uHyLMMiBn0TLldsXrplSideTb3urVfPqh%2BeErREtm1SDfXKvi6s%2F55oViFoRSwRGbjEVZi6W1li0RV2jOVdXvRb5FgXnKHafJd9GUDZVDFVzkSDAghBbonBG5dZvoAfGBrrYJMzN2Psyv%2FQYSxuZZJKPWIHk23YwoMMrjhNAGOqUBCNoQ1ZSEXC6P8YhjveJm%2FIx6BB9dV4fycyfQSl37skA%2BVOHEU%2FoXKAvyASfrDgcrudX2qBvhBqZkNgQD51KpWwAQLBX4hqUyiOSlnam6CtqZ8Ho5eK%2Bg9TI8o4Wg47tTi9a5%2FlZ6Y8mpf3TrrfoZcuSk2Mon9ABAShEhdPu%2BtE6ful7iuSM76EyZYkWvVgecXKMb144tDjheOTuV1D%2Bl9VcGL30X&X-Amz-Signature=936d4d0a4fe32bc5a09781c6553a14ebc3e596963dc8f04284ed531260e909d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

