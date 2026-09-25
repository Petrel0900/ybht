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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IPG7QKN%2F20260925%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260925T025334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCID%2BVX%2B5J3bU3jiYD6xjP4UWzEfENfVHdFOgH1Be7U7asAiEAgvzwDfmF1tOpZu0UFyg%2Fu87s3TlgJv0%2BXUBBH9dQx04qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG%2BczuYdMY2JwFAdSrcA%2B0iHV9SgQ1%2FBqq6C4XUxZF2ZmTeSBrthXfRWJ22JOIcwPMAU2o6pugL0C64GdkDwNsvCdti2UqI%2F3%2FUMY2NtbtLzl4x%2BDzle9z2hLhPB8qyAWcRdRB8I8jJhecM1ILTQOQAfBhRRAZeXLbmkIHr6dowDrUTHQ8dUw%2Btj2Eg5dCKkhXXlL3XT8p8fhaHybZiWlslt%2BY7Rt7%2FjICLrT7S4izBT4DIAnIrEa1UZDYyRlSbnJJCsa7RD6lZIY15U8OTg42a5LQ3qd058aUwbw%2Bn6TEWKdIEKuMGslDfbiVFTlQb1itn3N2qYjnM9eFwEZNI465KzaHkNaeURZ03sMyys%2BTReJ21al0QWCIzjkanEh04wHCz1TZr9IP3E2rG1zhgkdzH%2F6kL5KHc8lplTvEXD4fywmEo0xYoTQdUTnpKtkwoNzjxoI7N685M0%2F2KRKNRLeM7KDZb1ZdaCfVd6ltNU6pBdYA68VgFJKOs28dJX872sKkYjYjbulWZsfronENGEl2A%2Btrp9ySvf2ZT%2F5%2BgSJY5atDzCUhGLGIh%2BAeF2QEcbKwU2S9cRgmSTdkuIdozp9U2aNfu7zOhDgcKyoJBpaNPDGFKnFgaS8sd38wGbhPbOfMoHasK8y0XMBcGMIaZ19UGOqUB8pV%2FzqB0TQXV%2FmHrQhVZu5Qo9vSq%2BaPuB7NgrrofksbJnArqx%2BUtMdfcxp63s0wXneSv9mNVnEevubewAbxn8su90KwbTvn3RZIo5tYKm%2FiBB8KB%2FA7QG9MBc6A8a7xVjsZk%2BpF56zO8dBCgPgkF0jEqplxGtnzZeSUOUh9Sjq5bTCRqfcwqIrQRQ3hapNyvrMwi4M4DSZk7EoAwXhUbQY4rY%2FkQ&X-Amz-Signature=5888b7deb1c372085564b23c445efb87a0eac9b800d8ac242dbca1cbb01dcb42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

