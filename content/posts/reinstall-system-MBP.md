+++
title = "15年老MacBook Pro曲折重装系统记"
date = "2025-05-17"
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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4UDWAU%2F20261127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261127T060805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCW7qOOwvNoi2IXtu72bf545HeQZvaTfDn5NYppfEYCWgIhAI15dwLfbAHyym0WOWuNOLp1h4fok17FSHo8bK8xlIE%2FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwP%2B94sCY7xXrrJCMQq3AMf8CVv5sTUjzJtkspn3JxN8cUz5I%2BCaLj1Vs3xlCmfGr7kyxhbtEG6%2BOhU6iiOHwzA40whjApoRFcuKA91yvFnX7sgP1Yt09PXvHai0tiOORGZJ6tPN4yoDyROoEw8GB%2FpQS2jkjMv9OynxGJec63c3dYwzq%2FC139I4n6iXG3PguSQtCrHwhgaYJ9FRTUTIGZM6J30i%2FIaxRSqllVjaTkS0KJZ2Q%2FFRIa%2B%2Bi6v2YG%2FUiikzmm0raef8v497pQLyB5e1750FZ%2FGMzj97P0qkBYacMy%2FvScK1gkY5sSYTGZD7fTYJO55LRC50mEwjJdBq%2FD7fsexh4vozmJz9VzNKcERkSdiyhFBAOg7Ov%2BYGnK%2F432zYt8uC7HqNWsArdzrT33YQPF0oohIm9LC2kCBy8LTmhqWvDU3lVRZKhGR0w2UQ%2B%2FG%2BDzxRZBIl2ona%2BRgnfDcua6spaTHIbZ%2FEGsh%2Fb0Gi9HicbprVtl5%2FMI7AEkpKhpXgQ%2B5EsvrOPU69epYEMEQgz3M%2BD3DaUmc3JeWa8HCeHYj1G52Shmk7ZN%2FccmSBuVXPgaV%2BP7yPtO0H4H96SZE4QNQWgyULNdPgTs0KwSx1Q8x6ZwNXCcVX5ugoZdkNGYFnm5T0U56zwWn8jDB1KPYBjqkATcwoUCmSzg4r%2BTZgq0rfptD%2FzsnuiHYCyoTi9IizHcxVmHg8SNZpJELrWDPs%2By7wP%2B2eQ%2B4WYgnet3hlEuTjNzGv3qU0OXTu2ubvBN9cEqOmxo2gF%2F%2F1lh2FwG7UnQLgVorz6HAJaNoj4Rb5wMgRhUyh1mFBLubTSqzmtB9YJXJJpVTdbSrXt7yhfcefrVG4geAAG00raIm5YNd3fB7yBMlojyk&X-Amz-Signature=16b16c74e5a4d41b4cc02ca8bfd7ef3533c678634e568435082c5bb171b8ef86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

