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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4FODU3V%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T005242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDk6A%2FJ3IP0yxwjR1Xpb5oGUXaI6AcHKQuYqxcqMASyvAiAR75gAZ6XkzzsMZrddyTELEgqAtBigPlyD952g249GHiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYUKGRMTdRwVXbaegKtwD7zy86eS8X6SkusUHXm3Qfl1FZhuJ7tDWkgSWOnPgmgnokR8RZN65twB%2Fn9Z82l6RIFQUOxePOghqbQLVwL8OQaE8V12maxRkR8BiTiDGkaVLKUSzxeuCTmG2lHLL70D%2FUjNK81Q1JfnLy0OHsyJ7M2vdaTuC8oCt5VNw%2B1R6cXFVJpseHmzc5v02uThZl68dQ97dQjmdR8hnWjpb1onH52iEACqkQsM3Fv2%2BXcKI3o4PseRp4ya7hUVTeXD%2F95XRRmUilj%2BZOmVT2MNwLjUBHRvAH1%2BLySkfkvmsAcxB19h2l4vrCu8bN2ElUoROsIqdqDQ9vb2WhmygVHzag7G0mXEe3cJm2hC0qd8d1J9rivPwa1B3rGDOGOx4Cyq2XNlg542e9scL8%2FB58dfnhpDdklLppisQf4JIX%2BU%2FBvGYvJRNaR3SX9u7nhnGtWH6Kvw5gGrAKauUJKOJdMtoqDwlpSvc1Yp0f1yXt8atBlW14rqipM3wau6foDpd5nrz97N1obZZ2HH9JvxV93SCOmJwPYgTxbVUZyvL3V9DsXub8%2BYtLpIYRo5hJOnaXx6W1PUpUGImLpQynp0zYB0j30QfjtI%2BXgXCtLfA39IyGjbuk68BXQruC8T%2FM8r7HdEw8oWu1AY6pgEvbmG1TvwmNphlT2Kah%2FWFzEJO3fjnNagR3JS2jiY%2BWJSTxpNL3S%2BmMKirQMFryWJ9MjICdrYrURu8DKa4txyai5aRHJjU%2BUS3rRGVyTVk59MzUJK3H44aimrBbjUTrfAqSYWsiJK%2FqyW8sNOxrdW1Nll3TDW2KGwFwa8qzNtgEUDxRHVBddwL6yvGVuvNRtqxt93Trd1a8ZqnVwh7ZVedtosuUmJx&X-Amz-Signature=e121c219d100cc2ee3de3bc80440616ad2c3ec7a565b0ec10617b0f5790cda70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

