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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXJVVXG%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T023640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVn4FYogMaI4amerkIsargqSvI9yQqEdkAac%2F5z5BfJAiBFfLmD2zqQYLxg6Dt7efvoZ1gn%2F5h%2FL%2BOX0Nh8EPvSVSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMd6ta0v8CNyXN4P%2FgKtwD17bsz9KIVSWaE3sUJR11zxBI%2BvufGm9TX2TSP2N5tKsatNKyfSssN3ppF%2BJCpJGNTkn3s4qsxiD%2F3wr9CwLZlSIkFz5%2BWDXGmjtURqCIf430uvZNpJl31nmkGOhaiK%2FNTeAJ%2BYv2BqY3xRrIi56fmofZ31M4TSjNTGD3TjNBoR4x1ERbI7KvNJVqinDYAWfKieX8CYze5YWqxThmUkiac1vZzPPwrM9F480GbojosxmE38N8NKAc5uzDg3UXPdwoSEYUqMwFqnTP3GtHWnPnC15S50OAehHpC9iOL3hZTOpZuGk3kWjsmMNHqs0cTMwfRO0%2FfTBohifkjgFRbzQXSSJ0PsSZFHwA3CCLkvLtLjmHaPNDbv%2FyHr7xyhINo7HmbRjWfhuJyv6bCLiowcH0VIq3EQOh8N7uFgIYr2HZv%2Fm%2BUTSUMoFZg6ipqPN9HhN75I%2BnRIc5bMCkKsGCe5sS8ipX6QhCxNYRYEu%2FInhhzarnd7vtIgT%2FCxTUiUNX2d%2B9DqguMH5PcFvaEHKkG6vwlb0gj1U40Z01SDwaQyYj46svDG4a3Hcm1odm9XKeMgD56d0DtrfMZQP69MYToS3u0Ilszgexajt%2FVewr9yzTq%2BIiB1M6B2fM1CH8Z0MwwffT0AY6pgFerylKIiUg3gO1UTZXS5SssDIDfbPwMgDx1i7Kt8qZZ5linJ6SECU2lI5j3xujEbSJco7F0gzSHPyNQStLAsP2E7jb1POrDaN9vqE%2Ba20Cl37KoGwqpvJ3PLBhmfCrBbZvaKG5ks7yv8xxLFB8OsLcOJNBW5eKJ0%2FJnkKwCeN7oGeEgFJjX%2F6CdPz49TpScxjyLw%2F1vmy8Ec2uxfhvMvTIoTHWNA%2BT&X-Amz-Signature=560859d394d2149e26860f80995a4e503c08f80a74fa89b91e896225258a0fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

