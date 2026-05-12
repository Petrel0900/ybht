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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IP6KDCR%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T022714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGaQ3W4XG1FDO%2BsnildpGT2haEJMeu%2FZPjskPvHelXuXAiEAutmkcMyLPitCgGT1Do%2BYf5GcdxuLk2N53uAqS5e3bWwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDPvCNmQJoh%2Fh7qhSZSrcA7Fo4n2d2zKzI0XAkGRUI8AGkRBLD1W%2BoqZJcmaAPfJShn4Ln%2BAtSENNNH0P7L5xi7s6a5S0FH%2F8TOaaVmny7V1T%2F1yd0J3UxS0TrslFuJG8IfGfGX0luPA8938xhYLqa0hOpTGfJRTGEoOE7vcdS9wZSuM9kUiwnBlFdeh1kLuFOb6XJ38gKgPdkJPIJdBC9bfuXXd9ixEgLOW69dl%2FfUJLco8jlZkxEuDrrpM8fVvyS12eVUE2izwrL%2F27nBMlbdM8G24q8ofiw7wey7G3l6RW5cR57macwrbxBDhykplQBonIn%2F6Ofa6QjFHXz1oieOwuWX5oxQWZalEi4helZvS7WK7DFHtrFSzzMjHPFfjldQezHy0euSn5IFn2LVwXw2kwOm0GISPNM5oGYRutXY5GWU%2BvzayX2pkRLvmudLHjndEs5AKFC2TaYmMiD%2B6kUFhfiBwnCUiLeoEY74le3be45ZG2mG8EXhPZ8Ba9T%2BkmyTxmoR5Byg2IubyQTPcvZ%2F3Dc7WDtO33ZXzjyjM0eW%2FthNa%2BIDZEYeeteE2tMGkdFjWuJvJ61n%2BK%2FCDqyr3ce5Q4llaQstOsNRyXGnG7BjoTlKW%2B%2F2ugKpYE1T6b%2FaIAKsGPctUlZLuIy%2BIiMP7LidAGOqUBTI%2Fr424Rgk9KjSz6EGC%2BZ650FiFEMumULd0%2BkH3LNtVWrtCNqaj4QW3tGUQplr1Tpm%2B9K5XNLBxt%2BpKg7EYODfddrUUIm5pwAMB69A9b%2B%2BHpU983NXZrW1fz%2F9QRzT%2FbsuhNiaUqbioW1Wk4RvxCFT7AgS80m6Yfl9BNyTx8aC9TmktjsSkPHCV%2FqsnAxxd4cTAsfEb8TGRESazpNghrl66KpGxY&X-Amz-Signature=c7d119d9086d618a00882f4bc4f972f60ab80970b60da51d5109e860f8163134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

