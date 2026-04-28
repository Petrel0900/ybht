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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHI7F2R3%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T021425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIA509WViKTk5BIW5etcrhsHV7peHw%2B5I001V77O3uq%2FcAiAXxuamln7EJVqV%2FjM9Oq%2FIwTkvbmUeXUjqdeot62%2FxICqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4%2FirLS8Tj6GvCFqGKtwDCQp7%2BjPGtzgp%2FKQwnuQkZrJUsFXurUUmfcy510gvO3DM01zLpuL5GYZoaxSKm5befFFW1ME9eFUrgAPRuit5Ia60xas1PlSzCgnBLwpf0SOxEyAnkntJmWHQVflgGVvGEn8k9o8WKheiu0PFxfnaPrNFEqfdF9%2F7HUUrJ92jwErR2nppzVbTM9HD9mzmqCWyX19RMYD0TUEwsNrTKPBMxtyJynbP%2F4VGdKEx4yMygH3ysDminhm16qXrIFw27OG71U%2B4WAgch58eo96UnEgidj0kwApma9%2BoVaWu5eRd%2Bzrq%2FCbAp8LnTiuTF8WIOHa7WPGea6Z6Lg92fwDfBIj8Znc%2Fy4uThWaAFjMUPKlMlhT0ZJeTmFVFshWEoLXc0pW2S9ACPnimOT0fBeY9rkxIEvvcDDeAgx3u7xC0bYaQimPY1akoJvgvRri8D0wd3tgjrlFOvun55M9N4jjupcV66mcIHH6LPK4eK5Jk5U4kwKXXlyoGPzQU5HjAMqV1%2Bg%2FKhR9FCiLsRlYOKkAqoM6dHYt3HB6nJt2Blmq1%2F9C4%2FA4mXu2y4yWVrHBioUj0lQMEPRIwfxQUb0iG0RX6df8gSGsBpGZ%2B6vjmHFwAbADdWuQ6nuXKP7vg%2FoKKnEwwy6XAzwY6pgEHksnf8wu7iGTlMOdgtmROAFA2FKIf6%2Bd%2BxUQvvEtqg1R5uSTvVL%2B0dOU2bYvh%2FV9H5YuEo1LmptFSTgDFmZpAc%2BIxCl5TQ7KK2%2BrD9W9NaQBtZDcnW2Gudg5niIvfjIr%2F2ZFTCHqRiZGNNKOqLOuwNZD0%2FvkDQ1YgF%2F%2FCKwRNdSGyEOW3SrjwmkYGEIFUOpiGwP6yzXtCZsa%2BHlLktTbZi%2FueNHiN&X-Amz-Signature=9812813141640da8a9a588d23e517ec57f3acf525707dbb325aa5ed9917d8678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

