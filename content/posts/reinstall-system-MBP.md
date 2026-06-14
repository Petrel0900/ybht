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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3Q46WF%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T025659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDeLHlCERtfFkEuOCMlrCbryjxVH%2BvsJ3tEHzrkXE29PgIhAPvIrheIiGIqMsiQ9gFa85hEJ3sRso8BQWdgYcHNXKwvKv8DCDsQABoMNjM3NDIzMTgzODA1IgxrKb1hqRXBsjBHTdAq3AOByqbw%2Fm441ql8i%2BzBlqIQbCF%2BmNIGFQgxUkUwduK7f1HjtECg3UBXqtNJ503mSP1dhquxCEYWzsJr%2F4AY6u1h0FR5d7H4st7bAVUOGYbMKSqy%2FZ8Mg%2BHUARmvqn7J7yxw1gplCl9KcaTGLmEcDqFbZ%2FPgWOh70P4H1pa8C2KSk3HflKFIGl5mf%2B7WIbJb6Xqhx0iJn2lAH3R9olIqWmzXPYCOrf8ncx7yIAJjg2bJyT1OfvnU4KPEYYrDI9eKYGM5WPpeRAow%2Bh4z%2Fn5KB3%2FxXWf5nJfb%2B4ozVA2gRCOrMG1jRvEDpugp%2FkaPheDaePgytvwbrhH%2BxTOi3lI5zcc7SaXLNuQbR5WqW84IUyi%2FoBu%2FSv2Na3z0yiGYp%2B1Sf10FmHPtiZd9oC4xIkE5iw%2BLin0E%2BZcGJE%2FEL19xO4WNcxqJOJqenerqMk543vwCICewUsFKZ46O79TKkSgA2LWs5D4QfHIEZOTpyHXYwwDo%2By7lQllVgvQOk60Bfghl716OC5UVn7XAkxpKnsm%2BOKSFFgPWfHmsK0%2Fb4zMcrI%2FOtK%2F26B%2B%2F0TXDORRJTPSvxbbTlg%2BFzzQYyenwGn317LrvMgQfgsVz2FIoJi20wLqcmUGed2R3BDryRnPYCDCznLjRBjqkAdNmtBo%2FBpa8pALHRW4UiOTxG%2FKe6z4PZz3WHd27SYn16KrTSZMcRvaKTQtlV6RaMlOeH5YlDjluDB5AAXGA5EmUq4MSw4CpihqHd72PnXUJgMOxSmDgXztzYmQ9Hz%2FvccGiEewJmEOa5BeHW6eM6pUCGvG7ygoyAFs87YReMAQ%2FXpbr%2B9R9ShyvIwprlRg85IHnEiYzrv1BlLLUfgPbLoflLFom&X-Amz-Signature=89ca62929797f270386e4b5e25e36cfdc3977e360ed4557e301189e34cbd21df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

