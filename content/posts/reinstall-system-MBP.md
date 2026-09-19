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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPYAEAXG%2F20260919%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260919T023622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQjV2ywfvR0fks%2B0wGts9LDTQkkjfK2aqMA22c8SWGOwIhAJBZgBlGyG6N60f%2Ff7ItjxBD8xNPGwuuJ7ZcfHPi%2B8OVKv8DCFMQABoMNjM3NDIzMTgzODA1Igy8yu7M2ktEsTdYoxMq3ANyd23bs6SHbd6cLdXcAScDSRsMDFig97waNUCHcgFvrZrTl8qqCmeVYPamveybbFxmUZ1kRcAd0Ydm7OuMEYXbfAUGXl5Ev9qzMNjyVMh18d%2BiRj4ulLqtBQ%2F5XpCP890fn73UJCZ6KuXRv2gYDUH5Wda1DlyXRaIHilfwvzuMWvVqUuG18o6Xw0TINYIddydyyv9zspUEI80pLYrWkrk0jdpF9ACTA5BQY%2Fz%2FKeAzr01lgdrBAqnEkUmTX9rmgp3RGJyfFO2oFJ3GzCgzFlu6Np6iUeYL1Nw4qVF7mcgNCyKOwIAGrdjoVA%2FftshK98OXHXH5lAdlAir0C%2FNZHhOmBoMzfaGGz%2F9sL8S6nAtpzKYeIWhqu2bsjU9%2B0j1ldLp%2BFR78Fi2YRLhMnqAFF1cbnC5RSIb5Qnd7rd0zHHciQah9TB2x%2B8%2B%2BCfW7hSC%2FrVT0%2FV6yZy1EkFSyhk8mJ4%2BkmmAb6%2BZMjoPBK33Kv3Gzbivx25PPPLTaQEZDsQDDlfMriObttF9RDDszofz%2BIbQcEP43B3AQ3SgC6Cj8TfIfBtK269P4dJZYrITKycmh3ayY8uZtw7yse6FPZlWQBFGdoGVBtFb%2FniW4d8z%2FepOsriQ1uAF7a26rnck55zC5y7fVBjqkAXQhyoR4GubXEzcXR8GNeAAr%2BKVLrS2VjgMlVWklRR85zWhQU8SRAo3LrgqMLOXRQAggfCF6sZ4BHGP3yDuenwaxV8xyUS4lHu5vZ2dajQglEqDigRmDjITNhAzwMoQ6l%2FxkANvZ%2BrmgY2ZILmg460%2BCQXgyu1XOmBcg833RzotPAe3KTMMueyB6y%2BI2Kw7lNiCRr7rrf2BDOvWDUe5FglLu7PwC&X-Amz-Signature=f252d1ec8260aa7369fa970c8479e2632a3320e0e5b1fed9c2502091cb845881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

