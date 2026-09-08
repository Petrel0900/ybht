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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEDVG553%2F20260908%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260908T022846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7dxn7Qj2XYXE9xrSvNs4rMnNn5xWOwyHshTTgEyf13AIhALfBbVv1ZvuNqbBXGMrOsRddVBOxWIUZF31Td%2BIN4p%2F9Kv8DCEkQABoMNjM3NDIzMTgzODA1Igx1xwjToGKTtytbqJIq3AO8vOxhqVdRNYmzgw9ews1j%2BSn%2BWUpFBBDQFRb8sM1pQQm3Q8GfTjg7U%2F830sCWHsfRHuXHu5fjAtZ8FXX9Pb%2BJ1DC5CxgHmaY3iZSn1znruyLXvWqns3YS7yY6iV%2B6kZytGxjNbf2%2B54k66Ats3Uqo6pinjzPRfDu6w4uVoYl5s98V1d7Ew9ITz%2FfHtEZSUxiAp09gbCQBWTljABt%2B%2B3u%2BkB1NbmV9dkOL72c4fUIIWcOOWxE8QAGwB7ROXgqJ3NOkw6iLpdemIjS67Xu2Mzn7iGX0XX2aNgwEJt8jYRI2mnJ7O7UVOyo5PD7LGwt2bzZP9Qs5lEQde7lA3%2FlViNKT%2F6VSq%2BhmDOukWiB7MEUk1fLa1O270RH8MigjHFtinQPd%2BstBYyGtTFcMPpeb7C77Vn803QX428V55N%2Fy6AbdgmeDCZa5oBnJHC9jVLoG%2BgUlwTi%2Br%2FvIUIW%2FEm4qrtzTAhQakog6tUe3OLxKUFobK1PNZzG1jye2cD1H1aNvQ%2FnO8FfywXCHx3PqFQ0duq%2BLm4GinwGMTO1BQRBMgTupXbyQzv6cJkKX89JOWTiDtI1p0y5wQmX6Itd3nj2AYMdK%2Bx3W0UoxoZbLyl3sqyp6xiwBvyb6rsWPnGg6lzDkpv3UBjqkAQN%2FiEkL2qZ%2F8uEO4RHV%2FbPHkEPt4oCpQnLmrK3EOXNNYLx8PeuRKxj0IJyIgp2DUWC9G46PyiNAUAhYJeu1fd2Fnd18eeMK%2BIoIGgtT9uyTunLjArJuzTAB0Nc3VUNJZgPefKlQQQH0BdB7bopZ3SipzL0ZNJufu9AzCenCz6x8oe2yJ0UbSLHtvDrbkRtNl%2FHWU0Tl%2BwSC4Z15dSuIY4PMoSfC&X-Amz-Signature=ce0215902539f2eb348855663981264184b8112d1441dcfd01d0f0b9c3d5af3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

