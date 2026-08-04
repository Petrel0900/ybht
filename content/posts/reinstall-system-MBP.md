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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXID5DB%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T015305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIC4CSaPrExt78bbfDqxIlgJO8rZG%2BuYv%2FzqtOzkJeNhBAiEA1wCRbEUH7WKcDezCilXnLHHDnHdl4GCFOtxBxqqklD8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDDfwrdsKDugdcWNhMircA8GxICrwVL8MxuRTL%2ByHaHxc8blyQNUHX3b%2F0Mp9Vb1E%2BNSBO40EF498rWyND6EJANeIeGfAXX2XChpcs0YSco%2FqhokXIRnbKybSKXb2Rncn1CS02wyd7n702moR%2F8gSKYkdZPmaYGgrWZt0GEMpUEjThWCd%2Bbj5iqvx8IT5TppDd8YRoBquNbO1XnGPavuKnr%2BK8vIQ3OIJfS9KDDt0qxGQEY88vMVKcPfkaARmMxU89PWa1Y1vtogvmTg980aUMISeeyL6%2FgEqMt%2FmVtGegRn2%2FALiwafZmy1MEJ64mKqXZ6xCu%2Fl0CRf6rupLwZkJ1ttM86RcNJ0%2FsWv5b4hv3fPnOLlHUASf%2BDQXILb50L4cVPsJN8O%2FmPgR2OKBA7z5L3Fi%2B7GbEyizkfW8S38gbp%2BgeNXKLFW0RAJbWj58pwGOapZoA9YihvcAw9nSomFRui3IHUBZo%2BcEdWHZQx4WzBshkv84YWp3xyIBeWW2%2BWjqCPKaX5GbdQ91Ajf2knYC9tLK%2F6P%2FbY8TYxgDVy9og4QPN%2FCO6QsBY%2FJt6W7SwYZmCFZUex2zRwI0K4adAV0GO7ABb4UlXWjnNTSg5oLjTl5ZjXh%2BrQod2DdbcJsYZ7%2FbceKUcDsKs06Y5c%2F7MPnlxNMGOqUBLfLivLp%2FQhnFbzXDQnnYWP1yik4OTdivYgHDU0uxmiUiYZI6PumC0Tk4an1ov43JPvzjqOyGBXKkFleOOF075ug9IY11ZNzX5B5VdR2Zdf%2BwLQvsGd%2BJUEh7tciKpuSHTvwoGjUDYt5KP2KbTSUkLTdcLu1wu351nCSYRAbafGzwyYzaXUrUrLFLYYP5f2vGPQRyWB4T8sEUzgOjejhPR1Iq5w%2FF&X-Amz-Signature=f6cdf00e3b429e5c0e83985b1979555fa6d582adc153fb8d930fc0bc2cca3f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

