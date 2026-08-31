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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKHI2QNG%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T025007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiCOeVsoqpRyOqgkRIgJmXzIQFafQCivNp6fN%2BeiHnEAiEAoc36exAQnGAWQM72qNM58VqmRTiKjPtXMxOYjBYh4k8qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwqIVhNVDLG3ud9USrcA4Cub2cEfGAhMOPNrfIzrvYUXNCEGH5xykQB%2FRFKegSZugGYNFeUn0fSnuw47wyPyE1Fj6j1vJ77JfAmjHV6dhdVJ0Gia0mPohro7V3tajbAPaj70B4Gbh8OCGUP%2B9twZnD%2FkKVkfXUFiBo%2BNv0RrS6SH4HQ6hlatVPt5f5B9jIf3C%2FBZC%2Bs0pkbkUgINsGMGLcDfVmfr%2BERrGbL4O8H3TLKczv9I15tHOh31%2FxTn2gD3GcPNRZnD%2FJq0sQUfygHMZ0VkgYl4rlJE9U%2BGF%2Fouw%2FvD2bSdQVdeIAv%2BMSzyhGlE30AqysK%2F0v1TFfzipVvySPHk9O1I577Q6j588%2FHmjR6DMZ8%2FDUu9phT5NNxF7KoCVl3D%2FFTl1m61xqZ41BTwTvM4RHtXEnNvhW8rl6R%2BxMBmdrpzw5GizBpF2oBMEV9l9qNpvogGq%2Bp2T1%2Bu6CDm3MbXENq4qu2ytYatKfL2vyroCgQKqFGxMWc4lMetHNS%2FjKIq7oWrgWXhpJQRehOiwFmX%2BNzcdE%2BuaYcnhuuabJMVt2wEqht%2FZWJxw%2BDosoAiaboeZkqblLaqNAc0OazdpVRL2duzbSKkTKZH4bxiSkMnbyUzjSsHmG7ByP9QrjdGK6EYdjZ7k5kRJp8MOir09QGOqUBA1SSRUJBc2yRRvjMZcyeB7e4uKPOcWBMpMK1eDuWCiwBnf4B46WrKjuBr1o3uaC9W2YSi2%2FwiOI4xf9xhcY3%2B2j6Dg0T5qUjal9Z%2FCNGR%2BP7lutoueKg3Q5TPFNfpofQbqmDLo2jVoxbM4YIwp9shJLPXBEBLws3cQbZBhxayMnNqDI%2FTVPlxMcddDhDDr4TTg6eBlBck6N5frye%2FKLRJQ%2FGSHCX&X-Amz-Signature=8179b1a87ff70acdfceefce5a73df30937301e51bd0cd97f7565d32081f34005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

