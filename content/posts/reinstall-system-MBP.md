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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPIIB4JX%2F20261018%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261018T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCo73nGIpxf9MDpoQqb9UWk4yeuf%2BlE31dn2rhxwFmTVwIhAJiJik1kBFLYocg628Jd6alWAnpVB14qNKWT%2BPqiYdjzKv8DCAoQABoMNjM3NDIzMTgzODA1IgzCJPnoEa22anJfQkwq3AMuac5mQtfGio2qNgCwCYFA94qWCflz0UtVXShovBKBP7oSEEWBj3cYulrAY78VV4yAKi9KZFE0sJFdXn6YpvNZ6opHG6qr7M%2FsD5iw0iUnNAWfyjx0a0FUOkW7MO8v4odHQBhJuxXU8NxFwNdPIYTTcN9kheTHqJtdfE8NvUOP2vWQXP8zUBRanSCOpJIzcY8xXa6hgPPGr3xf2STBR20LxkAUwWprPpIYYQRbC5P9U%2FS7L8mF5JGL5fKA93JWhDJfcjvubesUJbbPiBJMtRG%2FkgCGrQPuR1Rvj3zH9%2F6JBUHZ6lUJY5gSrUzmQ73w52HfSkF0Zm%2BbHXbTxqLWelKx%2FOjCiKccqIfssLRltJCzTn07V3hYridV%2FP9Xdr0MxLsgmjgpwdLmb8UqBnxtm56LYR%2FJldNZrWTzfMAy0EyLPygZaDKWI9Bqm%2Fm6fm%2BmBv4Rv5VtIfu7uriOi5d6UuetzjQr4ijhJupZKhYBoIvoeQsqRZe1i9TBc05mDbGzuC8kD2mXBjT5yl9ZcURUiz9CTMzwyotLJIrdp%2FgnoBmpUY3ujmzJZtQT5XsXTysYqOqoDDwdS%2B%2F37eMDqYkNAxTwT%2FZT5Qk88%2FrUjT62aVb1F2K54apOvZaYztK7pjDMt9DWBjqkAUGrVab33lvubtsw58JydAq25bBFmzHyvzvfHoxmvYHNri7nFh%2BSj%2FX9j5YMo%2BCmRFfKpBGMNlyHJSWna7dXZkp0I%2B2eZTVgbc0p7vz0wpDgho0Dr1H0mbbOoE%2FfyYHMg8idI0telES9%2B9SbTYRvQvxOEukHSxr57nV0yYVSBWAPicGZrqq7E6drp36xW8RmXf%2BDAvb0Ardw47qlGtsYXACbi8lx&X-Amz-Signature=c1413c8349bfe4e6ff57d7b499d49ef2f2abec08bf4ab2e86a22eb94c0f733d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

