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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7BFW3B%2F20260323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260323T014529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdVfVAlbk0AG6klErVmC2nDVGblhNh8h0CsGR%2B7lhoOAiBjp2ttOnXMi%2Be7AdaVoq18lJ6h1q76sWcBU9f3auja%2Fyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMh8KBLb%2F1ighUjkE7KtwD2DrUDlqu8%2F82Lzo5utTHp7wkXCMfrArvMurlNosPhwmriNMCBEno517XCODUe6taIKdwk6Gm9A13uGLAQ7%2BIWDL26YpHm3t1zxzEFhC%2FRSlYPaZbcMBz8xynDLQHh5dkyBlMw3UUFlMCxXqFIFHfQyUnHjLS1i%2BpUXbl70oNxcAUoM%2FCLjDT86NJoRGvCYtqonQepHkmn7gflUDf%2BrRg6q4usWmHILl3S7EmqYv3a7KYLYGXQZVVP6QyLaQuMYSd1B3nosCQEqaXrapOoKLKwKfOWorf2qecmH7Obg0UAiHwEF6izicsa38geHM53Lh%2B0UXtUrdy7wGMIQe5As3GtwPoXYHjzdsByXh2BywLjmrIKfsAfiNMGgCSx7k4TnRrkaInD%2Bl88LAukGB1OL%2Fy5%2FxfWl0mpI4G%2FhX6TBpb%2BABeaO57kYDxTpviPAopu5YVu7HqbYRgytbw1irGtttwlxDjFX821fPs2QD44CSJK0CzG3NFu2EkxRJF0nFJ3y7nnFcBUCXK3nLrhx4rljZMIV85XFQLGDObyeRXgQ2I0%2BLghzmNQuFigPQYxk%2FY5e6LQ%2Fmr5OmuWkRPCJ5tdVn7J%2B8Bp0SZxHYpEQVgH2siwQmnid%2BJtqII0giJO0kwiZKCzgY6pgEmyO%2BFOx8FLSLP77gxdcdiU0WCt%2B8zxynKgCD1h6co6Wfyiie57JhU7MLVYobxnEz9QmlyqR7gGXpGSgpzTSZzi7Tz366Fc10gISCoM4Ju5r2i9YjVt62B2kw%2F7W7xmpXXiFFDYf%2FS5CG1DN4%2BLkou5vBpPjw0GVYNBYjF1ukwBubhLE%2Fr6%2BPLViWBdZIIql6klAhDWKu9IO5DGHclC9KJP4vBGm5%2F&X-Amz-Signature=1fbbb978400425c566d22fc122d07b605b7b03e309cfdf22b6fc53151173cd18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

