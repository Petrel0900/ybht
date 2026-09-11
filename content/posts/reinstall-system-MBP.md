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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EKKSFI%2F20260911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260911T022550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk5fbD%2FV5tX52UaVDON7i0ynbvi3f%2BglxD4OMm6U6%2FFAiEAsP5od0QavsCU8Sm1v2%2Ftsx9FWVkDUMoD7LhMPiIIyzgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3Oo%2BwOPnRAWDWZJSrcA8w%2BJHtpXWGskU7OQMljUWwW9xHAoTjOtkRMTTyJRGYmLoL1OPgeb5ArqmXFTp%2Biy1MaWZ9awCFIL6DqnYtKBcJUDNugrKS2wGZJbDsB0aHZlasLlDXYHfZOxrcsY5kEAAmrnt9noa2N0BstWcrWFyO6t9Ays723Orq95AuziLPl2R8Lb%2Fa8wpjSt2ZDc%2ByVbci3L0fQda%2BUJ07oPI14K%2FJdRPP9VughqPwTMmDc3yblraI6laJlu%2BiDzASUo8NdxIa5CMKpbWv0Vd8YI160BZYjnvuMxcbB%2B7bRR8SVwtQ2N%2Ffp0S8RLlA%2FjJjTVSDPBZaSVHnIy3%2F2J3TmYn2MaiLwHnlECA1sCSExUWf9k3R7pApOHyKFoxkf7Q8Cv%2BJm1GeT57hkXzpB%2FuJd2HvapW%2BdqqyYUj4xm7h%2FnigjyqmATEfXBhg%2BOVyjyAcwNls2Mh%2B4F%2FI95dytd1gMzCFriE5YWM3odSyFXJlAMDX0wzt9VfkSXM93zdGzuJo%2F%2BXCI9sQmQVBitFfiiOm7OUrg3rd1P4Mlrj1d%2FeMi72dGhWfPivzzS1nd5Tht3DrgG%2BUwdgJfLloaW%2BCZas3I22Y4x1ehzOFqPfPtv73F5u1fZNHSveQHF%2FT8XZ5yfzYoMOTIjdUGOqUBl4E8xcvFMgXbg3SbOk5Y89uDbJukYn%2Fog995yHV5gy8wsYY2lrj6ibyBKhMlo36wdyPHNO1XrX0DAP91aADQfcEB66m3NyW4cKQxWh0dDQ5mcQ3ElxUk3qUKhYppuBJfb4QMYGzKR0sFgayPy7vRlhvfSrcdijzNC5bMLR0Y%2F4o8gpZpth5HcyKXRS7Mq1QWkMns0u%2FQHLK6%2Bjp3Glo7zvxTgj0C&X-Amz-Signature=07e15e833f465792c9a8bd3861b24f4dc4762abcc9f4232ca5c8240da8b209d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

