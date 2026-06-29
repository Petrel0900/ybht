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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7Q6ELKH%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T024915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnvlXa%2BoUZ%2BsQ%2FxhvAO1odWxR9woO6RMfoieI8THLPegIhAJLcn9rNEmj3DDnXcuUYuBBKOx53rVRIwmg3aos14pZCKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUPcK0VQQWySVDA%2Bcq3ANplrcMeyQQICaemym3RrEd3NTlyxycivqJTPHxocN8x7bQOlILbKuC2v%2FOT%2FhJU54x2EI6X3lYyGtRwx0FJhV62QMV0Mv77wLvE3xyK8sXuBSr036QrGFo1neCfnZ5b1Hn4VKOqcsJ2qEXsiwoUnlR7iGSpEGUEWAafUBNtd7MQZeafAv%2B4LCAALwJv%2Fyf5EmCU%2BAV7Nt%2FKFvS%2BS4oXpSM0SxEu0KeqBzfoy6yWaV8Z0l4n8ostznonhZo7IgTx7unn7NOU4bauR6vpAyFcauUEF7SLxQHdjg19xd6bH0j5bm2Eut8fSppUDprzUtbotRQ6HocZZ5txO6mezMabysJU9TjhFwu2rnKM1aTV1Ex0m96d%2BtyCd3jSFw%2FcT4kN38ZlNfbi3a2qRENGfAJqxypD1s2PeocxRMKeGx8k2C1N9K1Lwtco1x0DPkueKmtQrB4Cj35HCNMgp3a7k%2FVzHCic1xgLE4WlLoQ6GhQ2b8Xejg24gACtoaP4LRcMlvgmvGBayzTc5lJ2UvrLxYhJd%2BWVZpbRP5D%2Bbdy%2B99Lk%2Bt5rXKRPQrpzflLVQNIWyyov9MaNDPHe9uuyz2EKkGkYjgApmCHZjgWoaWS5smvUCq2DD%2B5AAhmV4Yl8LMAdTDruIfSBjqkAeccfnlDMEcvsPDQQc7rHVx0TPPVm6YLT3dWpOOG6qbdCRdFibkV1j67CsQFBQUwgzja4lPu42E%2FdPVrsBuCPil%2Fll43UNq7mEjW4gImY9MsRdalBgafx8IVKesb5%2FuzKp0Ym7QCBQ4Jl2fJNtWUfhW7IR1GOg%2BMGVPU%2BoVUeXokL706vy4i6s2FqqhSYt3wxM2vjFXiFfOVHN7OAQllxTogziTV&X-Amz-Signature=bad5f4a24357c2ebcff5e9744fbd5ca4824be9fd56d2cc435743f8a0215481b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

