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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JBDY4V%2F20261126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261126T061918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIsrfEdxd7YMY%2FUpCbNmerIC27yLlPlT9Ujd7noi4bWAiBb30uIJ%2F6V5uxWXIwdfBTJHALtB2bDoRFjGBlOw0aXuyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKJ9hjMEzNeKFxDkmKtwDW8IdzSY1x61HPB37UktTyZt93BOHpOubBC7jTzoesTEXWu2JpgzCWZ3kD2DVHtx9Kn6Wea2gE9vMGPb0faKw0n5m8uDBMQ8sWSlQ5YpKIHfKp%2F6TwCHvmQeXTh4KEg8cpy3TIVG5XGPPd8Ku2yfRuPjSkOMVDhl407OJmsN7JyItpMLBHrrtJjGLnQH146swPhcaRiAWU1%2BC8RpeNFzHR4toWtutDdbBunlucCbUG5jdyO0wEkwTjKhi0UfGO7VhHfX6wwSPbap3Wd18XVIn%2BjL0qRIf2knda%2BUmrbAH5V6sssaGHjp89W%2Fav2NF5U9VQ6CbIlyUjSWJRGYbm8uFrsgYXt6GdqyNS5SoaQjXSMH0KeWjdAlJLLnBbDs8ZPeB0Hhp4TKgEil5zoLcJMgwzFMvUWi8Nk4c9fPJyKexl3vwmKzC4k2SwmyGB%2F0KZ9NVgwm3mxrBqdgTu6%2Fq6ReRs%2FkVWx4bkH7O8OB0na%2BHMbor21IQvICDWontzHnI2Ahyxx%2FrLMpDeGC6TbcJLy7F%2BLP08NyL%2F7%2FnU5KhfuAkTEJ0yaqjTL22EbjvLWW713tylx%2FVhD1lckjfwMyyCbxz6ZGfSQKANHIx9M6382Ec%2Fwcrz2Oi%2F8slsXG%2Bdicw3%2FGe2AY6pgEidWxv3HjjezCDhH%2FdlBDxK7dpoc630g%2BeFc3aAlBjqhm%2FeIlGcj6E4Fj54cSGHyf3JstLlgiS3fydRcdOr7xmPQzwTh6LNrr52ar%2FV0Hla8RDNKPjAt%2BQfaan%2FgBHv1Hzq1RI5eaarm7fnwnV%2BYIQpcZeoHH4%2FZxFganT7dMsNpsPNjnwO9BCfXY6DmSHrMVLmhLZ7%2BrCdub1zZG2xeaoQXr6z37O&X-Amz-Signature=7dcbe945526f949734dd676170c9e903ce90a1fd61b80c5627c8e9fc9933b269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

