+++
title = "15年老MacBook Pro曲折重装系统记"
date = "2025-05-17"
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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SI6QE7N%2F20261109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261109T035925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCCa%2FdergxajFq8hVy7hLdHWLnli3Ax7E%2FMUeI4vDtQ1QIgHBkw2Wb2%2BtGkglYxlz7RFcKSL3edOS7Qec0N2ZTcs6Eq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDBl%2BbzI7%2FQpQJbAsyrcA56wNOPIoxCm8xclmuVhYIuNBPkOzoLJZp%2FfnQrPOP5zxIFDo3jCITvOwFN7fOX%2Fgzc0%2BOOQ35bcGjcAz2H%2F2iQruid6LL8aj4p3L6FaR9PjJkEpDJZ%2B5LS8YuJsFJ2KEq4FnoqHrlGMsM0gnJC9D%2FDVedwCVd3e9kDmlw5BQYa%2BYFzjUAFAdX7oit0T2dN1oXTDpxzcod2UPgItASneNAWJQGDj97QpMMzh6HnSCpv9DfoKzV98qyqvaty9bVtcF4bJjbmDMPkK3LM2h4ZGxbBJPP0W9h0DJT0syRgvAos7wkBd2t%2FHyq4Ope%2BZl9D3TOxYhIobDDcUeX31I9XMVsU4pW7Zvx%2BMd1XUHzhO08oYO4Pb3TkB68zZW2NkjuNhHjV5Wrd7KE30%2Fzcb%2FcgRN1EHSSKYcmluRzN2Z6KLTBkGLoDS%2F8%2BgV0hb5ZJThO890si5%2BS5avD9Ly2RQjna1UPB%2FKwLuHl3WEPGbTzk9n5g2T8%2BrAERLzrUBsNj7PAKMoNcKp6j14kC1%2BxyO%2BzJYgEjwhdN35Hqeg%2Fd7L0evsg6eJNypLMdRiSkfceQ9cFt7E8mhu3HZR1EG0lVE4xv2CMJTL0Pu%2FKVpZm9euax3LytAb7p8cYMD6FkLlGZrMLLVxNcGOqUBCn0kK9%2FReC80CQYng%2F5HJmir65QSL9o4FJ1p%2B6BT2XXDS8uqnAORdCwRPTcuHLGteGUz%2Fm2xpLAKAAY7KCdRsIuSqqPPf8ze4I%2FxxESUaxh3%2F5V%2FP%2FnZu3zApm46DzHkjtPsaYaqQeYrynvJmZzk6lrp1VtfIkfcs5GZ9qwjJJfBNjCBzL3ka4oGdDu6%2F6NxmBAHXJO91G3InQOzZ8nxj3D%2BEmxl&X-Amz-Signature=9f8ff489430a58292a9e60fd740c12ca67ee7438cf4712c109439decb8b0cec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

