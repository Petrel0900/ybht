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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WVPYBON%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T020201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICefgPZqIJqO9Bt0CPNBgdUAAVIzVvx7CHZVFJ7pilFjAiEAy7jWNspl3s0aGpUsOZC8pBX3cov7k1LToUKpnE2SR9EqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIm%2FnNZPVVHCeLZc0ircA2Dw4YNNhLGfuarKAMVNaJwGIa87sw4a7wBHGcjHhb1EkPYsZYzKS0qLBWgaxvIDRIhxwomnf7WmBPCcRLxIUcJmjcL5u7qvZEtmDJdSL95R9OkVfHH%2FioUacI%2BhtMio%2B1nMJurGvOvM9dycOr%2BQ6kST0gvl5koruCbcaKdPVDUoWritEh9gHLm%2Fagu1xbWNK%2BDvrkYh8h2JpHpOGEkIYHXXoaKFs%2Be5E%2BxJajf2YsaYSrops5cNNIHm97%2F6N0aL9kth%2FqFel6kfOmPlbFZ%2BJ29HkQt8rHRTNgOEpu7OC%2FQqyxhkA3AxlUSemgn6xjJ1i2tXgAithZidOrvQBmgCJsyXvq8b3yWc8c0agQkBoevNxmKA1XSC2Dzm1wPcU8GP9kw6zEqyJJjfAPUMcyFSCiZYRmkYqUaK12Fw%2FBWuSSlUPBP11z%2BZSNrtpa5REEuQkAx6ede7%2FV3K9xlXdbvKMeJh1XyxVGi7ab9r4IkqzsOEhDanGJU7t8YBtgIGO8XjIee2hHrkhAdcU24ILyd2lo9DJafOZ1mLiZzy4ZN6Ofdd7yJpzKiZT5LQfXjMcMpU22JJTyb3zexi7zzNpxVd4qn8R33LPC6AisTe9luy3XXZw7sWia2FAw6po19nMJTX8NIGOqUBAJC2SSTC%2BP471QUC1G2L%2BFg32CmVm%2Fi1Uu5VaWhWnEjBkGAibzUIgrVA9mPN%2BLis3u2qeo5x2OUaOsmZmudpW7InM2D5QaGtilPWqK7NWWui6mdA8%2FX6x1ch8%2FcOPStjsE6F5pMV6gpv0xlbs23Zoj8tAZAy1vPMt7ZDATQb%2B0BJ2LHJ2ndOUEcmSvzL0TkQBw6r9zQhcfeF7jh5kuKiJEyghjBg&X-Amz-Signature=5da6336c585abc36ba8c739c5874947015aad0271cfb60eb9062f2939853002e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

