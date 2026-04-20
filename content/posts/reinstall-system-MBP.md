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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVZAR5QH%2F20260420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260420T020347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIG0i3vf14KpnEKJVPDcEcPK%2FIsS26yw1y0MwybuBiMHfAiEArpStOP3J%2BRhSwNuUcimNbJ4%2FW0GVJURbtvYdDISgWYYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHwMhff7V8l50wmKmircA5nT3K0IjSTEqc1Ku1CimF%2BLyClNNoNt0vr%2F4PSM90KGKwWzZhfBZ9yQ3uSZp9rUxWSkWk6rHFFMeF6dOQ48%2FUWzFXZ30ZxRwlWKxki%2B2JZoGhtH2vGMW%2FNX798Sfqlrz3Pl771Bwu2a2U2snCDO2oMWNPSLArphG0FwrbRSeN8HdAfCADQtDNbLxM9v8bIRuQk7FNaN%2BMKjHV5XXUatq%2B1pXlJUxmpBdeF34k6PmxMflxeOJhz0irEye6rVu2Iuoq%2FsunvHvXPAfKbMogoz5engC9GPWHubOQ0bQjFqeUZjudBpGleqWy7UL5hg%2FZITiw0dLkorQv2fD6Z%2Fq9SNW0%2Bv9uvR%2FM8MjWk2Ac7J0q%2FTlBwf%2FsUi4uuLPq0Fg%2Fptx1taX0PIw%2F%2FiqWc%2B2Bw6%2FREMn8LIB5iFww4WP1HDgRl2M8pzy6EW9%2FFF%2BEn5T%2FltxZ7nQlz7d2shw7atAQYQtAuxeiT8tFDcUSHDD8jqTm5bg%2FKbhaDLXMOCZA3GCVtAZX0MHA603Ef5a2GEOL3wJaSXZN4tlDDZU0fVazdVNwFuwiUzOfhIvW1gc2I9MA%2BrdWDdE5OwCX5lc2JPNTjgXvzIVcIQ%2BkYdD76aQzmezEW3HZWlXPytJLjCPxyaMKDrlc8GOqUBTRE6xb1MezTJNUBpyMKfNcrR%2FnO94eoBP99np0gfd0Z5uH5b3Qq9KCYeTyop3AlBkILt2ZbN2O%2BQ4N4lMfSSaNAgczf4F1l78oY4RURBX8XTH9om1c821fYhN%2BZiqlO6pSUXiMj2RXH%2Bt41SNRqzs0I9qx58IKgs%2FHFi1mwjoB0NkPsx2HLNja6aCJRcB5tDc9gg%2FJ0onxkmGGcsyTMUVkk9CEWf&X-Amz-Signature=3325948126abf517db246351bc71ddf0335a5403e7216600fa772bbf5f2ac3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

