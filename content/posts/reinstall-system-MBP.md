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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XBK4EOC%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T015106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFiGNcIKunGLz0riZ%2F2SwiACUul4aJREJd7PtwNGvE0UAiAl17EGB8HS6ERfl4MRFcnhTOougi3YdI6slaHRo1cujyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMzcRuRmrZq%2FMp8O8PKtwD69cUAi5mRgToRH6mOkIYYRGwOMF%2B1Q8LANWVOzPqEjdwC7YnY7KO4oWIez%2FwV1ytEmU4OU%2BCMQvAS6AeFgEwZ%2F5Nu7nR2U5oC5xYxM0mKRYXpcJvQ8WUKzTsIwaZ7J4QNBCglTV8pMvYlOIW33WpB%2FwHk3won2pBRxnfFtPU3gK8o%2B7fVBu%2FvtfnYss8Hqwi%2BZLlmiUYEg3SpTLveJgOr6wg9XSf0j5MkGzolzVt8r9T%2Fix3MX3EZ0ITqC%2FGk4Hm4FNJk6HHBMDKaK7u0YgBJBAJzcjrDgMfbJmSupfoI8OGA2Rc2rduPYdxkM64qUr5FYlVAWEvYfUGAt32KfT5dTzEJj6IeoLe4vFJTpV9H4tzt5SpCtyBhoRAgFQ%2B%2Bvo2t5kkqfX9ft74%2FzItw34gi26LPQ%2FxRx1P5%2F2vjes1m1boO781dlwRmodiEKHQqn102xhgBqRjoWRQt3o955b8piEMycYtlEUePI42lKTgZRA2X41ZPTn2%2Bwtcl37oLay%2FyzNTJ0oLj%2BzrZlG2Sb31aHI1HIN%2FIDuehguAsvUIeMwxGUI3U3Wefp8CB4BIT2fMD8kxYThLEgV8batznUqjKkrDWcGumYsZIvfpxV05IOvolXnIPmNFO0MBmfMwkbyszgY6pgGByrrcMaUCHAlcDrzyCnisDQd8HMNARLQbPW7CBqVLAR9M7w1bOVK%2B4XuuiM0CE0tMeV2M9SFHppfo5MD9qblYZHhtNMegSI4VgRHsNjSyU8FLBrF%2B%2BeOJNY%2FFvjMdS0G3DbZjMAw%2B3bUurSIT0ms3GsHfEGVsUmV3x%2BbbeLWqa1rrYr%2BvOr%2BWWP39g4f4fu1eDnBaQy5elDfRKPyB7ETrX%2BNSNrfC&X-Amz-Signature=9033d23fbcd63e9377697ea498bdfdf27e2aee2d503ae881c90870ae9bf604ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

