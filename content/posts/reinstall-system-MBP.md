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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROMF2MZV%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5iowdNONv41w4KTttfTMXUQUNScMoKwRIgx%2BVpuxxSAiEAyjANsm%2Fjxy9pCvYLin4%2F2sFEIP%2BKqBmJU5TC5f3AhVYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJQNkRLYwkwxAxj1RircA6jBn84cXlH3ELGg5mCtmrsE%2FYL7IJuwTRrC%2F%2BogwKx%2BwcxP%2FWMsy1ARv0fx%2BfKY3D4Q8SOJiqKQDynQPjj953a29WSx6oLLOZzPGwerKrc70CSfvnfobzh6yhivgEIiBFiIsPkOFXv%2BCuaQE8spXQpx6KuPL86XOu6KGR%2FmPmyzeCAVoOxKMyEvVRdPFfIEr0v5DSrqnVBsa3Muo0TZSgBkHerDUzPkJwtVtpGuExUuAu30jBtel7RkLong1czLIg4c%2FhfW175E6USLXV8VRlkHJgmEmb8TVawvVP6KXnZbnoorOph%2FJ4gcKT0cm3nsztOBFuQACxOq7TpxsbyQqRjv9vKNSSs9VsNOVSpOB3nIXwVyFn3uU0o0Skb%2BPcyxaTwWs9wEaiFs3AqrrSkvadhUfDkyP5yureAv7YIa2pkrMPJ4GhfeC1jP%2BqFaFX0%2FH9ZAPTxsdO7FrvB8DFGqV34i0HF2Z7PiGfp20xo%2BUqOKlcdNvFWCwtjtl%2BZRHAms%2BHQn6G%2FwgLJb0PTTv1vz0RCZzvmpUN2TEciKA0lqYxTMjGhcP12qg%2FY29GBL9r1KSreEHdUDuXMQmjyKsKYggY06CP3Z3uUeCNlY%2Bb6D3MluPe0crD2gHIvK8VHjMMDHu84GOqUB6IxG2%2BdHgRIPj1ukA5QB3ItoPMpGqJ2kqdb60qtsJl9SOm%2FAIwQ0ssmCuhMQYGpgP%2B%2BkwASde7TjYmW4LkZN9QmZ%2Biss%2FjkAbNyzCYfDfcHyrOc0RAN8l6CNl7jJWru7OQlnUEP0CeAzNKoPE%2BlHF3gP0if5v96AJeR1tWhxbC3VCHo%2B7kJOwPREy6g6npycZPq1%2FdHc9DT%2FprOiT5nXiW0TGXh0&X-Amz-Signature=1f68217dc90af1985d3baba212aa4262dce274ba57fadaf02d37a057e62d1566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

