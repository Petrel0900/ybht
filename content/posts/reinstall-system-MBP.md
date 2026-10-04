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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TI2LZA%2F20261004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261004T034351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw%2FqiAQuCC1osuHFaJMsqGLYWEVMEUtuv7EGsMZNjoGAiEA7%2FaPDcFlSEJ5BtymaQjBQdIopzThGF2lNwVctaO%2FOwwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFgVbXN7HJJOYJ8QSrcA6HwEUGtrH073iUchBDVc%2B9JkthJr2Y28gMgLzJqGfkmFf%2FdKzim%2BvJIPMDjbvPFY9XbWRJXUw0ZneoXO5i7iS4SI%2BBLhP0ADKxgoW75XsawUyqFCQyeYwjDPohd3qsgApr00EXkeVIVQmZojpjc4LrERVVI9yW51Tx%2FDEdFSSMPjFC%2BK5tqxgBtmlF9hhIXTbFbr3%2BLp%2FrBAKUu%2BRkXRbmelxOINdvzXQcKSTeA5AsITH%2BLOgCk2JKCusR29T9DjK4%2BVWSGLlKzy%2BDPK7LEAmMNroZKlb%2F%2Fby%2FoQVGOkKMs4nqUFn5A2KQFXrrKl0FXjsDY3Yn8JBH3pLeehCCid4i0v9q%2BJSd8EtYacZCJLDCO7TqT9zZ3nvLlMDhbcAJcnrEHZ%2FTI%2FxlquhPDnAva9MokhugM1pOoZCnXPqecL5oOetkkO6MYRrUowiEd7tSJFBGUIBjHUQ1CuhZOTm%2BsDKU2yFB8wrQvwtvsVR4PdjE0172j9lD9a47ya%2FBq7u0UC7WPM1oRqQ4pS488%2BJC623%2BP4F7GPJRvUlNAzqMnjv5%2FbwftKMgzcIfVkljRvetA9%2B4nWyo1jgFl3cgzTeLLj5%2B%2F2BlZWprNAuiMdM4rzdHFsW4Uf%2F68YQQ3biF6MJjjhtYGOqUB%2Fb9OB%2Fl1qYGegze7hBphqQjcOXxYYAiSBJOvhvcw6Ei%2FY9EMvjrvN2imYYQU0TQ4j69YzXEHOLWxO%2Bw4Sc%2BhQGq6y540SMo1TIDoGpf7qEW%2BsEQsgidQEmI9kXQLwTy5QGUBjeHW6%2Bx2vZq%2B0ofS%2FMboThLhsHtPMnchuxfU5q%2FG0SOgJXA%2FobXm%2FZU6G7s%2BUIkzaFpm5qCBmZ0CTf%2F2HFW6Yrju&X-Amz-Signature=572693866f08a76cf69e1d8138a0eba9daffeca9d8b31c1aa171eabea71d32d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

