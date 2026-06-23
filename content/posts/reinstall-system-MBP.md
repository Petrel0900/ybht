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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMP6EGLL%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T023809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC9OnPVLivmTw1GzWvkEvoxmnEetpoDZD1jDvzOpvCqkQIhAKPUdpkGk%2BA6lEdF3iN%2BzeMUVC9EiaPFnF2B8YdxA0gOKv8DCBMQABoMNjM3NDIzMTgzODA1IgyP%2FIgepYvb9F8shZkq3AOcixFLKnF5awZimmk4XlvnD0bkzalya8hF287N8plojbd51KarGCzONaErrGj2Kl3dUVWPfcSecnEXSnd1CN3C9wLnyCfjA2Q%2B%2B%2BBJz%2BhmNOwcnH8MyKQxCZ%2BUhmF79hjTNdnO0VqGJ%2BxXeQV%2FTmKLsyQiMjbg50I%2FPKUZGdJpjimhUks6Unu7Bl4r%2BXakGW2hkA%2B5I2mLSxFVZys%2FTjZFuXye5btuYuP8k5eZiQJYYJxUGb0bDQObTiJjEn5s3GDXLrIYdmg8F4AJIL8sE3cD4akP8ChuErevabBgJH%2FU8oomY87E%2BXl%2Fly%2B3v5NmRAU0KcSO%2BIjI%2Bc9yAGl3rGdBc3Y%2FuR3DHcj9h5F6bGRmwxCOhl5E2gJ8bhkukmnzZOn0Itn0ksjBTeaLLvdVtSAl%2BMbaISvpCd7dJzNS7cryeEC69dFSFltT6M6FJf3vQgtuRsgWAw8ks70Ykoz2G14eVRS%2ByFb1%2BVltBY5UbywEv3sCc4CqnjRqWuRvmm2J5Pvn64IgoO0jOZzQv21pcAxtRXaSeeHxLbXH9YoJxIibf07952WNCbOxc8AgmYtqgXi3bwv0CU4mxCedmF8mBsY5VQM6UbLGEUyRv5bQLCCqNGU3DQGTr9OWT8YEIDCVyufRBjqkAcDQrHLwvym1Ip55A0OdJI0wUzCFw0rn4ZACysM1C%2F7CwkNmlXUrIfNbDddbI7ZUgKLuteRdlUp%2Bcjtm%2Bjb4z42xGdpCXgf2JRx2mnLOMaEKFgcdercaF6wdZwFgWPPcPVzsT1Tp37XFMBoa08xEU0ujtqlhRkhKFApCO7jznI3GXEQKKiCPawVTBu387gecrdbZ031miG%2FcWTjtUUIAIqvzWXS0&X-Amz-Signature=c40e2d9b4c6cbd603ff5d4e9facbd50f3104759b0d7ff3c803c46534f6143ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

