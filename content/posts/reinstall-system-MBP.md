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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CQJEZDZ%2F20261015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261015T024155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1yq3KKpZ7juavS0kQqyHSQVKELBK7PfknjQ%2FbOg185QIhALTDU65Gb5%2FfV8ercNlyeNEltUGEZv6qd7cWWV7Mxg3YKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5SqPmOlV9C0e7lh0q3ANy043qEPNZTvqD5vrIRGg0yVqzDhTgxM38Ee4MDqPBXrbfwa740Yv9REZb4WkIDD%2BV9h6tbjg6wDgtmjBszgZ9jJHXXzo93cuGzQPuWfAAISF9vRSGaDFsvO7Co6a79JRWLF40Y3a%2FA6%2FP4svg26tGQ4REEK3iERci1DoFKUWolUbjx5KfvoTjC0y1XTe5MEHqEBmhMFdFLq%2FNI%2By1gpFJHUSlO8%2Bh4sWAiru9kYM%2BEuKRTmSQrBTiBtTvF9%2FxLx4V1bmyGnGgK%2FOfk9tKknL2mzaNPhsdwPTJobI9rjSRvBePTtviEX9yfHAQZsINe9RmDsMfqcGRj5Bv26DYWLEdRk6xEWWZ2BcT484s91O5K3OeUTxT4ObUhDaJmBUSxwFfHhz0BdB6qN4UjCetb4%2BDgdD6W6UIvIn9AbTtFMwTKuRzCCM%2FolSo%2Bb5PnNFTdzAkQRuWgZ3XhIQjy3zhlLPzYVDnxqXkouPsiPc2FWr8MM9Cp0R1ch1OJgsyneaaIasBPmNsINtjLVOaoCooxwgn2CeKe8I3u9dd3%2Fzxz%2BfaXQg8UsmvB4LRrTw5kfgnJXl3TrZll9oIA30vsdQMeQA0jse0MvFXHaJnXqfJdWnXLzkMOORdZ0MBamscADCA2sDWBjqkAcrWaVt1gw1145dHsJxX3uKWk7BGIZxeVo8oPbNzKC5ID0F7eGCiGzf4tWFH%2FslD9qyXHufn2B%2BZI1v9g5yYChm%2BMPYKp78XCz%2BdtQKGiTdax%2B76q0QbN5u6lEmfxytw8T8nQgNuGsymmjR93nX9bFiX7XkvnwuKM8DOUhpgXrY0dh1Ow32T4Dgd9%2BXHvJ22MCcsGgCWCtlibtTKplrDS%2BbiOS8y&X-Amz-Signature=47f031ce3933fbdaa15c5677863b6f86e1a842ce5407964ab9b4b2ec6546232e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

