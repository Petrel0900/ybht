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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGELT74Q%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4VkCylSn1yypsKVcrLn%2FoXC%2Fx8jGhG023f%2Fmv0ktvbAiEA8FtjWgwigS1LcahbBVjo5i%2FPfhS4%2Bym0YTTIGAt1OFQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH%2FzIJN3dbYBeBURlSrcA36%2BA3%2B77oRbfc0imK9h9KX9Il9oecQxVH0bIv0HFYLFlHMIpncVXYQsUlR6oraOucL3A0Au5sKU1%2BI2JaJmVjvznmb5fNoCRP4r7KwE6uyeC8CIBwPam7CBKbhfWBvDgtNbzKFIxGAw1iiqBFR%2FSJCW7b3GZQtapPA0b6V%2Bx%2FI%2BjGW8OiQv0UPga1MqDlzHO3kASn2QhjM4eErhhijrpZTFq5MfbZeX3iJ6Pfn7np9%2FlL1uROBSnKJiv92XLTejD7EVilsU5DS92O24KaqaoeUO0c6OvcXrlK9LRjAFfMMLNn9rvlnvvhju%2BSv1VP84UgttwbpVu%2Bl8fqZ3YNwJh7mL%2BYD2yO1UFXPgSvhG0G5MQQ5N%2FLBk0YDuOn7rYudtEC%2BuoE8cS0AR9MwUUCWCrw3u1rA5IL%2FQSFufAM0FOuRwiJTgsUCeJSh%2F5L%2BKBfS%2BWo7aqMxcLZZixLQ92XNRksbMWpRQvXwJwY0t0tMbTGxzMaBfheh15%2BzyjSJuXS%2BPx8unCtAFTb6vahg38cJenJ8IdGwrlH4%2FPaVX5tZNaL25fBpwsIxqXFBxDaaJwTKe%2FMe0Rxt6cjJkytKM3nudA3c%2B3tqmlRyubbjquI5iTqWHTqHGGfQerkpLDqVMMLzLtdIGOqUBnwaj4urGHAB9jFB5yczahXRsFaNuyKS%2FEPeMNNlTZLnTgj95GcImQ9lgl9JCRl6OiJjqMll7v%2BYCEh424mRob8rXMkjMqh9gJ3D6LfhlOdmVYdNq6pMs3%2FTzOZ%2BSV2vWy4eb4%2BYYanlugNeYX6vZizAi1CGjDf%2BqBFvuUffEyVorBdupy%2F%2BiliMMjh9HFFChOFu97om9E6M%2FA%2F17MrCrlITaLoek&X-Amz-Signature=8e5f8e9d29695bf305da6f9b8f9f7b8f31351ed25ec048539fe688aefe480969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

