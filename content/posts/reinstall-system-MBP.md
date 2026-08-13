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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7Y2LRPO%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T011949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCVf1bgfDcAIluxgNoay%2BpFtTXYsmqFg%2BeQyXwaquiVlwIhAN799w1hDLXJWSEAVbNkbFvaPrXoXmWuA90RlH3g%2FPDQKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJuh7JiFG5vZ1Ri4kq3APUkGCCQvefu2R%2FomICy8BVuMB01Fla5v6yV48JYcImZLzMV9KbOijXHhQA8XAseYcT7YmuisDui%2FpkTikpreAHDjQAXaSBbdPfqjWyvEN5pbmOJ8Ot75EtWKbCZVX1qQk94VP%2FbK1qGQW7p4Z7qVEF4NR1EdzuS8j4XxC2xCLqHw8DsErFDFxdvO8XyNQ7gUNBCEXpEnm6iqOzuo%2BJww6RZy3oLoWypQ%2BOdMjHDsqvwEyV5XTSU%2Bg8gR%2BmM03fPMSO%2BU3VKvlpKFx4Ntjkx1BNt0F%2BPi1iPaid1qkljqVG6fERWwbb%2B%2By5aY9EdAAZC6jQ7hoKTb6FzlB609wJTM82JQELYVfXZlOpt%2FSEzqPuXIqDgNpsF0varSi1QvxO4gNU%2FCQVI0Aq7%2F0Fk7qHNvAzOjbDTP6oY27lrwViTQcSgKBfVx6pXzEPuGWIqwyRKMnQxgJgpl8%2F%2FDVUu4UjxaqqSylJnRFJoUAmYPVsUrBPdPIKe%2FJuBIDwBG4HLSu%2FlP7W2rA2eavbPEeN55%2Fr1V8IIiTtqansczJKU4x%2FLLWexv2CeDYvcv0t7Pa6FRM8sQ7bNyWvPwxzN5LL%2B6d4q%2Br6AzsJ8BUEAabsRtFs8jwqHIo63lJ7hUY9uyYeTzC8zPPTBjqkAfn3Cs3CluJ2tQVvk917BR6ZSwJC7decOhjPXGgKqixPd4IWOShy6NZ4FFVMmESP0W2pW4GH3JqYpqgjCzLX1leygwK0jSAMLvhyQ8QncnCdH8VOFQtLvoH45iA9wRtazUotIvdUUXROwVHLyCNvAxVUO53k92nMyRNcBorOdKjddkG6f3QyTnMyj2u%2FJjfoZduo2pOFjtCBUqMKlZ8iiNgtxkvt&X-Amz-Signature=aab6b06961942199399ac2e24fec6808fd07ab5b63787fbd0c3d03f0ab09e4b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

