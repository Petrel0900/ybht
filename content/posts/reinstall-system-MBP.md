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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXLJBPBE%2F20261112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261112T051606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzyrU9YEu65sSPf7%2FQZI%2FMqX1X3u11%2BZzAhaiKQE5E4AiEAntwOfuD4vG96Lv1ebyhRbhlZThqvrWLGMYs%2F%2FN%2ByFfUq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDOn22%2FLawMkGhCY0%2BCrcA7w2zIJFKTdhHCtK1zAmcccvMal3eKIPO8sg%2FrJpJUxT55gzQVS%2B5eVT6jMiEV50LUZO3dOIMy2IjvX9geXJnLMj4KAJC%2F6ic03Ka4ODzgSC8ubEXTu8r2S1OFBMeZSFEOGszO8BGX8iwCUNWZ77o1GVjDCEhEhREHM8jEd5jsS2qepdseM7iMl6RrmbPAuD7Sp9uOej5WEYPGpXzUq7371fsxKYiIZty96D4%2BK2c39Kzl3fo5Hd1v9asxphr6%2BgbFgC45r8Bv0Onf0qVDOP1OTb76VYhbjXalgSgzqCeGNmmHzTeV78%2FovEm9RlzXvmEQNBlFAGh0V4MCpA0vhFtWHw6dsk5XwwOD8s8y92lUY721bNcdqlBLAN8Ega3KpT0vE42yWSeRNCc2GSE8MIxXwV1claxbYoRikUMN384jLUoEFdvnTewZLY7%2BrrO58bMpHerX%2F9fN9oORcDC9HJuZyY3o57YE61U846Ko81MVO3OpabtCMh%2BNMTad3hvzK11qKzDEiFrppFgsFto%2BbiK8nAivw9kZ15%2FmVsjqAcWsMBA0PJ6ZtLWJk2b8nhdc8ncMflxo535Rbd7bYm%2BN4LFHXQm4l0rWQX%2B3ofvODhiNNBw%2FDeqJLksclNNNufML%2Fc1NcGOqUBC888JSDnFFjFPQXI1f1YYiXPwKBFaUMmQzEUa8u3gCOe%2Brpnu5lgid1uqfiBb5NOaNFPuddXI6R5mnyNWUqXiU3hvW49Z5uDX%2FKXjiTFrL1jcjcqC5Y9vRcmCvcLHLXHuLzSOg46gYleKepB2yGbnAMeJh7WdE5Gffsq5LixRCURdr4pLYz83kt7TZ1ueqRJ06oWA%2FKT0ItWIQFYLpQp2ZV2LesS&X-Amz-Signature=79f98c74e031a207f5f206a21d33683f9f22c556cbfcc9c4c98d4cfe2bd6ed04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

