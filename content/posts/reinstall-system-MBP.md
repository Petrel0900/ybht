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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SKLGJS%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T015831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FGdxmZcTwLeScOpQOuEZG%2BoDxDeECI6xoc4wb1S%2BHpwIgbD8ER7Be9AmJ49GtW9b3FwGsM8KeqU8sPDMB%2FQWIdDoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGsOaako93%2B%2BVoKtzSrcA8Hb9HAMoPLf0NsxCykbmrhUkXv7qEK%2FwVQ51BD0xms%2FzZ0V2RMUM%2Fkg9Bq4ccZDU0mgOzrfb%2FwPxeAw7mYDqx%2BTVaa0XaawGEJzXIet4%2FNAbtuvy8s5AQ9zk%2Fs42EW1tBe0HRAJTe44X0iB5T4WJqk2xpSnu28CI%2BR9LeMxUhZxJwl2zC3EIueaJqeaRQpuAYXF2zQVjOKRnpJws0mNBnq9LxPlDwzYREky%2Fl1i2Tz91ZyUScBWjKTNz08ytIZA%2FNZ4ULjcc3F9C11Wp1N7xjVE6L90y1T0fRMRrxWFScTuDKoZoXMgZ2WUfZpf7XBayWGQY8ide1%2BRYNKWUX%2FFdRRrtm8JiuSsa31sm2F2oYae4SGzpBvqWp7PbxD7q9qZtAapIWLmFH9epzK4W0XgpLDnjm4xMZSboDc64zcN4gAwl%2FPU%2B%2ByknS%2F6Jawtk0mGIKaA5ExuYDBt6E4Do4K3Iamv3eytt6XzXDrdBntol%2F%2BjMDjDmtoqOLAwCm2046xAivEP2hSYpVpwdHPK8JuTL7QFA5HvT5bfynbZUn9rJxuEKSfyh%2B%2BOvgF3LylSU%2FNqSB066BOhnqhBWi%2FxvGBNQF46H66vlM2oqH2DZYydu85UpIqwYyjTlxHvlhK9MNrQ684GOqUB3FMY19kad9euSJvlWkKLCax8%2F7gjsWK7bAk1SD4YVoRnWwCiy%2FAq%2Brs6uQi90FfYHpbgjEe%2BwOiJ4QUlJuOcBJspuqVTWBTqGI3%2BALLI9NRIQ%2BfXgRVdw%2Bna5vpeWs6BkJq5Z0sEmChGE29P2FCJF0SfIL4R5%2BBhufKl88tXWvuJALdJXX%2B%2Bktp7KnV8Z2kJFqC2lM8UB7JqWM1OoF%2Fa5CygRakR&X-Amz-Signature=57339892e94bc2c109c6d2dd788d3cb050aeaa110a59996cc1b5d21f10a39547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

