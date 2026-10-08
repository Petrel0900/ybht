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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQCMA57M%2F20261008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261008T035552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBvzq6oji4DLYmAhyuSQn%2B%2F6pmwnwQH8o0vjICmGv6zNAiAp8Abrl1gDgCLcw%2BBz%2BCXvf08ltcsxMGms1ZEKhBagRir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMdqpiSlfRpo%2Bwn62TKtwDYIVRpN%2BBlL8F0FLduSb5zEKK37k7bl01BF%2BgowIMnmHOhXrCT0fq%2F%2BY0a6MLEIxLXH8PzhyrS4lSClcHZKf5cKWAHD0jQnDwdOAiwPLr9KXD6UyaQump8Zg15X8XxijY6rYCZkB10vCC%2BFAAkmIf%2Bqysq3D%2BQlqFMekwwwxAYvdY5lVwABIV%2FoTHQhh22lCDZ%2BaOvKy0GSd5%2F2gKqNFlasPdKm1fi4PnXdu0U7YjiNPbulnJoTe5zVBmRGqt8BpS5R7GyqxcljZUH3O%2FBOgthyXV0r20hAZl5zu3d2q0WHUDekIG03ZTEOGU4juL36yY2FyI8QYwWjyEFoBHJo5sW5l4Kkk0jlByz4Ja4gWNW45GVNlmNgBWNSUXPZ0vY0Njw0DoJ%2F4j6s8iiwDMloQyFkJGwtdMIGK5G%2F8RLIEcLM4K7HboSJp6r40lfm7b3emGdSBzWl4nAcxNLSo8QrelDP0QNO6oCJ5c2v3bIx96yFLW4R8b2DnPyGxvyV367C%2ByZt747i0paGG75An%2BAvWlDkgYNE5yp%2B5cHaiGgnpGS7is5FtKI6E%2BBc%2Fg2JDt8r7NJDoDZir02udJxj7MGDEpt0z5gMLue3kOVRjBGDgR%2BOXqZOhoKXnE35f9xlIw%2B4%2Bc1gY6pgFiXAGGBVahU4kFNfq5eEfjaTMdVH0tfT%2FmnAQsOUppRGabofVNjO6TksX7vxla6WhAxP7Dp5rJn2WaNEAITgOm6LW0K%2FcA%2B0qmFmMnqwXBl%2Bv9%2FvGlIKxsOHP67Gkv%2BeDUBKCVPJQ9zS1P%2BVxhNIkE68S8nmuzUcNTkNDq%2FK6sB8W2zkUrB%2B8qLAPbfMF0wyvGEAKFtM0gvzROXI1jIYDHdWXIX%2B2d&X-Amz-Signature=7e865e7bfed784514a4ab3dc98afcecdcd944a806f88a7ed9641f6c8d8ffdf03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

