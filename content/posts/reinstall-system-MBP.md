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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466472XL4BR%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T005331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAIZootKWPmXBRE7yIA7XxxImALC1fpvwCRDVVnrzIIOAiEAziBbgM1xEenH9b7RTiGMsXhke1hiQCZy3uPR3lA6pAkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCe7q91MuXK7rKecRircA75mBOuvarzYmjue4qg%2FZejXAffuJ2wnJVIT4azEB9dSMNu2m5IGPRqqA4fX9JQCNioh1vu%2Fr9ZOpxeKjDBBfdghbh%2F15Cv1VF5C18VAGnc9hpSvKV2rIdF72lBNHfgZz1mYUetAHVVIqhI%2FqETa4lvbT7F%2FSFy4UGtocs%2Fap%2BXYXO5p2gQN%2BOtCGjqY%2F4h1Ha4ZUqCOQWPs9sHo7ALaC%2FX%2B9n1roId7oahWExQ3VGtCmuDb9BVdf%2B79e4mp5L2RzUkpzkauqXTpqoKtqbOEPHH60%2FTO22z%2Fn%2B2W%2FksRypv%2BSrypuke8IRKhAr9nIYbJxOdgp%2F5TIo%2FEDp%2Br59u13kLi1mflQ1%2BDWxVGWil0f30W7IcB%2BhSY2QvNl6aTILSnJyOFe8YqtONvQuPE4m9HTXGsbj%2Bg6rPUy1rwY%2Bae1njmSN14VwlZ2xlkRWOwImmXwGLRyS%2Bt%2FPptBWemxPPzSooAljqnRciGNjK4IjDPQfw6wnn5brt8A13aRLuH4HnW4QXbxRxhlPrlQlpzaKFjj9uDCQ0nfbn2H3NEpjpBrYumJD4ufJMxcGH6DNEylhzQetqr7jecA%2F3WA05lZ5CMc1xyO26EpY%2FEHMvZhORvdcaPb93pnxKxXUHmJYcZMKHrg9QGOqUBkNwm9X3z8ckp9yTSN6kI6und61f2ecngLl9JqSD5dIj%2FmllNRdagNyi5vml6IDd%2B5c%2BKyb464oB5%2FJd3%2BwueB6e8RLBhk3Jst3cVqOsRKJL9mFsSOykAAZmagkm4Tf1G3l8uDoA0v1FzM%2BykJJWBHmpZ1bff8LmKVR9e%2B9vD5q%2F4APQzidf8Mj6eCWA3ymiWchBoYbcfUN%2B24yrrkkHnF0Qby%2BfJ&X-Amz-Signature=89cc6c88c2c8f44791c9c4616a60ee648428af6d352dfefca84c1e70d942a592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

