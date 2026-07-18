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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMH7KFW%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T015140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFC1aWk9jyh0oThmhqwsZVGk3%2F%2BgSR0AG1m7AiHesFqAiEA0Tv5%2FcP%2F6H7V365f3dFmp4HU6LHEnZHGJa0aQdnQPe4q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDM6nuV7TT3NryRnqNircA40m8rJkmHmF3eB2agDtyq%2FuagfqtT21DGTOBRjB4CXI6mBNLCN7GVNQzk62CYGLD7B49AVWlJWFMbuQrG8R8kmL1cZHD0LtDEay5KR9zDeOVoDKkydMzZ15aaW7L2%2BYSrSs129tw3Q%2BaxoFTgP%2FnX3D7qra9aYZcaYYwi%2BVdAM88k6WJQE26bEjqgsiPptidfZugI1N4X8lP6H5w1B3t%2Banezjvrxw32jxHgzGm78ZUwRLWUT9jVKkl02qbAExSiC%2BO%2BsvUkOWKou6UsUF9Zp%2F270ZViw0AuBhIFt99aqSwPVgfZeu6nXBfXBmMQzljLM%2B7roogZMKgAjQRIVEdgpRFITWvsoorJdNiwAB44TFvTB5tTvGuK90QWxaKVu6N1xcl%2BKysYjRKiLe84ZN9SbRn6iSt8U6CQ%2BxwGtbc%2FCPyYfJ6rXI5EhSGHH3VrWmZEtYYAs0M069gKa53MShyMnPuUvLewrHJ%2BBhDG2u%2Bsr450U1OVWUJ3YneE4ZmMHhC59igCX4%2B0ODjRxCatCXdU2M2r3kbJcq%2F2hQPjT4QhaQsSfaCQlM%2FI6ZByIh9l34TPK6z8Amr9TFjrsKi%2BuHN9goAvd2HjoBQjk%2Fi60zHGGMXvSNGUQVbkGCJDM9nMK%2Bo69IGOqUBvVwNE938IGBZnvW7bdqhnsQcpqQrBm7XbE0r19dytPedtraLzC%2FeapJAt3vNOLbey6Ls5Ho7vlyXS8ci5j9c2nXU3USiUPC3zBWLdxIFaSooVGKcraieMK37v3sp39RSdrNF%2FjDmV4pRJ%2BzLlpwz7rCLV2bSqGznVvaO2nKCADnoJ9m3wcyXz6jQg1RM2MjeJXJGaCfEL%2Bg123aQA6LbW6F5yOWJ&X-Amz-Signature=d830a69b5a8d836ef887bfaa07fceda1048ae169e84628bce2d270325b8cb1b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

