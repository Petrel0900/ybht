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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW7YVKYD%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T020536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBZsbJogKKb6w%2BUcO6Nn6nM9O315qLpTETeUkgTQnQcxAiBrzXuV%2BmEaqAOcQ0vWuEpdqBNjZmWQ6xAozmDlSbGy5iqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPY4%2BWhssAIjfIwoIKtwDsh%2Bv7Hp4CXBiXWci4a0uT6xSzhX%2FWLlCFKnp7qpUHQAlKFnCat7ewvBpB6fUYzLnvUgtWoRGbmU%2BvMzksoanGspw7ZnQz8zb6HfkOow0fKxj8TL0kbNkdJ7475LZ3ef8hjSKQ3c7uzrIigpHZx9udfCNJSBnCohR7vAfAkVeX36G1ZSsKKTaUMpioy5ZQwkoiy0mihqJhlzerzZ3%2BjV92PDJSZ6vOFwcPgbpsd5%2B%2F1o%2B%2FmKey31fJYbtTcl8eHdrLtGGjM53Uxa%2FPKVkncHwc3dGxGSj1HhoNQDT7X4I1yE2nxCXUv2mEDjTBzFSXSR%2FP0BAgj9dilPC9HbA9Fve%2Bqi22r%2F1HFr3xiliatA2rIH7T49kYQIwlFyXZeAaaXW0NUOvvJD5KbM%2FUB5bKal3jK2yaNcXNiWB0nCPRjT0k4tMO2dGoWPjyaS4i%2BRuGnI5DDIKbCyPCKgx%2B6ae7dQETFu9tmI%2B9pqDe2HaEUCotAKU0pUNRVTazOBZ2pObKtJHSA9rxVQ%2B7AQ%2FD7N0YlASUCdr%2BEwWovxo2HISsGTSCNoUBXCTmjDa9EsuxT9YeBlyaUERHvlta%2FVz6tsA5luAgyilWUDwEeEH3ZaiuV9bcfb2ullLbDjp7X2i2vwwvMC60wY6pgGU2fs3Qc8ZB8UefgrwRgdZXRrVIH%2BpPNuccdED9AiB4EKVw%2Fiouv51StTDbBvsQo2A9ymEirRHs5kvAFpHx42FLylLnKgdkWp5k3%2FjgFQ3otN8pUeWTtk147YKcJeTYrv0orixGhG32npdhPK9SnWePsivDcDoZfyiJSagQ3QUDaPdoFmDfchi5jvvcBDpGa39dx%2Bft4ze48qSbBmsD5gp%2ButkDsZs&X-Amz-Signature=056a6a496d0268170b1c1ba1731da7d96f95e14deba46ef138cdd74dd9f89dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

