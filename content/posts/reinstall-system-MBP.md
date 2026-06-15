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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VJU2E3R%2F20260615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260615T033032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq6hdkKwZc5KVb0xrdFmTFolVqJ0Vj9FZG7qL5k2LYkQIgeZ5oNrHcH1XJJL7CFpiNxbpJemjb42sBsOaqAuHJOzsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCTnS%2F9JqtzLLruMUyrcA%2FIGtlWfG0Oc95gH43IxilXn3wty5rimAVZmEqwETH%2BgyPDLQhaSahz6CyqFyRptsAR7qBng5XRV9eryf73LR3BcbMLY1IJtDvqezZfhrKOvm3ibvk0CI37K2%2F18sW5GHD4D0VBx9YyUgd8Tam14R1WJRQcx263DlhpLTCtaFmsVX3mHfShf6PlqRZ4qZNjQEmkouH1bG4fodeVxXpCkpsjLJlvw16W%2Bf6NEfR0dbqxEjOT73H8Sj%2BOPT8AWfaK3DGpMQvmwxeXquqT1rQ9rsIjA4HNElbz0n5qz%2B%2B7FwvTuZe7fy0ZXqXnH1RLLGRzhVKQ8AdABEfnyJM5m838AURzF8DF6e%2BMZsB3bgOA%2BwleonOLA%2BasF%2FWXQrF2E3yYyGMXzkHOjnbzhhn%2F9WG723G6ElSmNyLZ%2B3xaXAAFMA8QTdNPWOsbfSkbCQ8wGmm82sPXKkBneM%2FOrIE88tSC2o935dXdsIjWz%2FoxkxOcXVIbwzfIIhMnNQDp4aet8QVCfAjRSuewGAOxqe8D4HF%2B2nsamHjcuQmlXYG3qTOdEX%2B4JsAkx3xbRsb5FQCRrOxfZiTgvwWlhMNU6Uy4OPt72ECVBNoxhPZpZYKoNzotuafNcFpRDS45elgEjvw0jMIvDvdEGOqUBfIYzfKsmP5H5q6J5hfaH00gVeOMT3TpEaSdAyIJSKxGYscKsfRrk%2FInPbIIdIQwhI0sMVfkx%2BG8%2FZwZc6cMn4Kppf8T4mMfRiKgtiBNFMAKyi1midykWZlRi4NZtnee012AMZJi3C6MSurcICdC1ObngqkEHttta9XIWpIAHjH6v5k%2B8r5uvU7VsuMoaFpiIJji2lyZKtTtoALCqHpW2GpFZN8hV&X-Amz-Signature=2d0d756f9b8edd3c8dc260a34c6c1a6babb2d3f085b8f734ee90bf7c5ea519bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

