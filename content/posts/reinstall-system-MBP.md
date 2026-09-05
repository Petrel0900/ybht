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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPRFMBWA%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T022336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIH4rOJaigTBFv0%2FQUQYkGtsnBcXrBZTHK0eMsNiUd0GHAiEA4Pm7S82aZYTzakO1y%2BojFFrZn4Jxzy%2BvCladDl5HQo4q%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDB3O4DlAxCAczc8obCrcA%2BeXbEjiO%2FbwmbXdV%2FCzR%2FjGUx1%2BLCYmUWwirPONETZj1qtVy4WpBtAEL%2FfAcTxzJhdYP0%2FyMpRZfhpTUPeKZzbwtzrwzNpJ52xuTk7WLNeyYZE%2FGN4qjswJ%2BaKls6V2n1aTV4fbUPARNpYop%2Bw9FOYHSK5YQoGVdBMCiDESOehzV07CXr5yqtGOe%2Be6IFrW%2FoGhSjw1rNG9LetEKSQopmPEDJ0ucnEwxw4zfE5njASfF9UUVWvZPwJYqYO9%2Fs9%2BNQpojUuJupNLbjnoQTKlX%2FTVkv1%2FETCOC743J59XoX4GYO00xY9QunXe5DZqPx0vOopi5DVQWe5CyfPQty7IB29qHgY9q9Uyy44B9Cg10VguxoqtRxfJ1KVquV26cGC8c0hvDsc8Tj6nKsBq49udy3f5C1k76xIiAYA%2Fmk4PbgKLDh3dhdzKYXKpl%2BzFkaCHrQ13AEF6KF0vfZcypF1k3Knv7unwwc4zlr9HUV8nzdR1dO8ImKagloh46T2izMyURqw9UPLh8b2OMSXM31ujA5jrLkZ49Hp%2FRanVGL%2F5HQL%2FJh1%2BN0rdcEYJ9lLntM%2FSDup9gW%2BouDysWujz9ym68xXmRfiFyNIKeHQot0zmbSjWRm62QEdEAbSdoPMNMJ7A7dQGOqUBjoJfozXUeQw3jRi9lTNUh64c1w4XaNLG%2BE7fw3fpSfkRTLktvfiW4xxIxjidPmjg37ut2NAuy40IFwgWZIXv%2Flxowi0Mil3g6d%2FiFt%2Bs19VUVxAIQ1wdcKA3f0mAwgarSOZGE7LAF9dEOBzOs1Nxdb9AtXROfGO5o5ZLrQGZF32Ux0ZWClIItCiN3j6EpvVng00sKB0YYzKyUV0TYx13jxRD%2FuBU&X-Amz-Signature=17cc35da3e655c3031a4f1ab8ab1786391d7771332c778a78538229715a29c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

