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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJS56QOB%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T005046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIASJo0p5vvOmIYtqb3kd5eXuXJVMAJRKG2FWEYA3Q3IFAiEA4EA3nibkmjJE2FF8%2BzgW6qL92vvzS1Ve6TRkFk8AgxAq%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDJa004OqDeuOlYcd0SrcA6Lhh%2BM5Bbvhop7mt0upPgB19kppwt5AarFB%2FXH2EkCmJ%2FGhQnfCe1CuSCvJFb07xCZu6Ag9Dd9r406oXlJu0fwSMdur1OeQNjJdxVoatgCU%2F7GZtmimRYyVS68siffs8iLYk32c4nj6CsK2I2fmPzJwNKd9%2BConsQVh8KluiLGAacAZNQKJq6t8FJ3HqtkH4yTeBIVqhwxaQeWlGJoJwgnRvr7VLBnFsFH2Vw8LVjbPAx1OpQjmdTKhJ6%2FwpqpGlhtMscmXlYr4QP84s5h5ul7fKchBNT36i1IMJFHYKXQwVD0UzzJ9WH8wVBxyXJ3WAf0NRoJUw8vI9Bw%2F%2FvmxhgA62bc5YBPozo6fTO1Xj8fgcxJl4tsguH87LCYLcyEswclEer53U45FwQHGA19yDjBUPiKDtd9ndl%2FyzbAaToZVKl52vESthY%2F7lKfgzk4Kpa9g4Qy3%2BU%2FMNmkzK7DsJGMklaadZj0D7kqVW4o0gYU7%2FmRAxRk1h5XjABclYtR0IIob5nZU4jQNcqqp4DE3Iszn%2B27AgOjBdjBAGm7%2Fg7JBZbp%2BwIbdyGYg1S1eKG8jB%2FoP2pBN802jLivUDURgbOkYDpnxa5aosOn%2FtEpTuAT%2BhWphhGp3dSyoAXmxMJzD%2FtMGOqUB5R%2FEXg3Au1eEwKl%2FMs8RPIeoMCE%2BL6Nc06pRVfMJzPfQxEA4JQ%2Fr94yvc4%2BwwiesmLAbHLgxgDvYcnAtnCn8JqhDWmugCmx4W4buicyZ5KjgEiX5u8u0OLwQwCc4JyJaeuM5vcplHllMhKX1AMDr5co4DnSpp%2FLCAMBZQmgGAGULJCx962tsD%2FKn5EDFqgjJQ9sf7iOc944Oh53fjsdrhllnEb4n&X-Amz-Signature=f24582ff954f5444f4f3b95a5a3438bbbebc2e0dd356eb1dc504240d697ca30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

