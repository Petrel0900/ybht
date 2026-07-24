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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPT5VMYK%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T020248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIEJ3Yigkfdfv3MA2tVEQdIKUmwYc5%2B%2ByhL2QTlWTClpwAiBCW%2BrWFxoObqqwK4BRukxIu3HtYo7tyBqQygd6ARrnhiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpnQvgumJTtuBb2KzKtwDhAN%2FLOa6gB94Li3%2BSj83HDyLYAjpuGhZMOSIpVNiEK3nSRRSxPL1bIoXr4Ut9d7e5gRbLoOERINt7ANkhIFsT7lFZJOUbGDgClZkxuTvzbG8JHwAdb85Qe6NFTlDWpknxfb%2B2fjiWFdKPWpDRtYLp0X0PcKJigeLrbF5ty3vdwE%2BXFOkfHS6JSNEAYbW%2FKqYG1i2H1x%2FQYim2aioVnbF4n4UaToLbeCmrDMdI4M2qFxa%2B%2FWjplgRZpU6L5WEvO3RnbfTG7m61Tw0gVhxbfBP1CgfZSg41WX0i3qiaKBHPf6iUsvnxNZ8hTKjSMb5HQ77qp783PXXzIuFkWOFIF%2BxXwndlB55gPXkvkY8XhDKgQsL7DConD8LJ1o7d9B9qE9KqlefoAzCW0xPmi2RRukHBWyHxpUx2sh9EOF8lk5cn0fVpRl4KWTGf9UD6yUjPYGXT5HMKdzuNMyW22NEbZmRmsnAovo0gxt53sRs%2BECq5GpCvrMzsAGrb59FKaCLZcVUmRobIKyuX%2FSzEmXbjW8KWGhoHizQCDBQi6adtsGTYvyWlsUkN0m4KvmZ0b7w5InraDslU3dWeTLZ1gp8rtfHyC4jXHeUDrdNOE6gBM%2Bc7BQcFxx2eKpfi6kdGWYw7eyK0wY6pgETLCWP%2B9ey%2BtjoBj%2Bm2VEizxbx8cJsJpmrJMPnARc%2FAwWf%2F7ngpA%2BuUo9ucnoFmusAE1fF578wnBspa10q7rc0aLrL451WpGShigJ8GmiodhaX7H4LJnIYplz1A%2FIQ3PoQz9OAvjx%2FVRIY7bHviPgm%2BRSd08OcopUvAuUabJhKTDF2saV6n94zlqcHQn26quiHQSkpC8M%2FaeLbK4rs%2F1VQwUDC7029&X-Amz-Signature=06c3a320f401a430ad3b43fc96b6938b06d022bfb11436d8ff6de9e1edbbff9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

