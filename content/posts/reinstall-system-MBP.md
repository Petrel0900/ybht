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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGV4IWZE%2F20260416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260416T020249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJN%2FyJT%2BDdFXFpTeYBbN8lX5%2FIa9nGUC48faATNLhx4AiAh4ufpe%2FnlscSLj5Azfk0C4ecOM1huuIkZ%2FgyOAaibuCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcrp6DtSmO4Mf9DmnKtwD1Mj3EZrW1KqfJlCdSNQ9xlPTknm9g1l5PSXpYX4vNJg2d8wnMdy9jJgvShlc7lCOwtK%2B1itjME0%2FYq1YlzCZI83TdYKyFYF7n1Xosntc9MXN2zmiXMte1BqH8GJviJGzeHdBe6sYw8kyHoKpQmOGV2v8t7YAkTyrmP%2FcspBIyXIkEu9tt82%2B9GNFKRVQnOFOcpIbqNiWJ6n6hk%2FCEWEErMDi7cg%2FLZlkg2c%2B%2F1JjcrNenf24xgq87I%2Fwg7g67Z0p%2BliMgFkKQJGe1JTSWAGpc1PPG0MJklnm95YzWtPAHziQBNyldsJQR8ZZVlCGzj6Siuy0p%2BkJPkj7t%2BoEwYSOR2OuL6slwvVzEjqUvqVA3Eu0mxLiU%2BzESOOszTnJglManMhWH49YUg76sNeAmzWzhQdtcvrJ1MWU%2BOTpG90uf1bk50ujMVPevRn3MAK%2FqOMtCFkaHh%2FOIQZeLYi7bzL4PG8Ohl0VEG%2FPpSmeBlnodvmZYLDpsCz4ZB8b6kmPqLlxjpbus8IMoFGGzIpIcg823EVjNVKtfTG7RaTrXZ034mYc6nlspSgwlwavedDjMVVAQoy45BBCpurvBudH5vbo291tJvpNNCsvn0x6Ca3V%2BTWg5fqfwCNDazCK8OowtNmAzwY6pgHfY0lh4W9REnoW6d%2Bk6ua1rPShesTDcgdnt6IFoNYsmL3nltjxKV%2Fv%2BSNKNdj7sewG%2BUPRgVvUWbFd0rnxAAcxYdCEOCPwuUcGCq%2FVxR1sNlaYvGSLcjuuvezIHjU6kV5SaRn3VJas2GxUbmLnRfsZi0cxpqSI9J8xQmx60ai4TfLWhir1TBAl6cQqA1bIK4qoxW0s90Kn2lsjOV5KWWugN9bcCSDG&X-Amz-Signature=c8b23b8f67c7563559d3f912657b324b2e3fbbf0e279ef460e35e0c2f66f2152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

