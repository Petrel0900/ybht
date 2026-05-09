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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PFSDF3U%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T021351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBZX7sMQ5dnGFlLtjXi%2Fc5Nj%2FeQySTu8rNioYTny8xISAiEAiDfz4ebL%2Bqdq4tq%2B%2BQlHg8yNi2VPJaTyk56knASwruMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCkX%2ByB5%2Foo8580%2FSrcAxW4L9sf4%2FEuHv4JNbr8rOgo2PZCGbspnYONk%2FTa5HLeXHy6ufJFpa3OMtlSQDhoPhx%2Fso3SoWoyb0yfhrSAPDZcldDW%2Fpx6Ozg4hv7cHL26xicOgIMd7cRX%2Bx%2Bee74fH1isrxEwVCfuFcRSh%2FcN1u973y4BY4Jv9Z5MsBLa5NSzSHu5%2FlMF2dTaCBLcAZ3vrzUqPRTf2tQrO%2Fb359mYYbq89Kyc7QcO0cwSANsl6t%2FJuZi8wEqIMdA6c57hPtErQCsUIZmGen0dGH0IfRZ%2B0l7al3F8UXbydUMxb%2BuIUKLDyl%2BgllLlhcrtyO7BKqaRAdc4%2BoJdEVluzcTecT%2FxjfMZIDwmCGl5WI0M%2FnZcOhxAT1AJ8Bl97hjVO84fxRtixGHHfHd2Un9vQL80cJgPMnVv6uySdgjFc3Z%2B0eBAzfyXM%2FbViUA60BmXkBKd86h5jEjtgmUfirWEiXZJgakIRCmPmBF6d4JIBH1VLyssV5jdrVzlo3BxVzDBDAV8HnPjaltsv1Bkh6Xks7bK11TzhXRnAh3uCSGPxSdpCmM21K9gAE0LB6GgO0OkQw%2BpRXxMVAlxA%2FGprDP%2BW5OTgcYZm82WghkhnhFmP%2BdMcWWXl%2F6naG%2BbPHjl%2B5xNfjcrMKuK%2Bs8GOqUB%2B4V6bumyvrvFLNAwO1WBPl0%2BVUT4tBZZoriJvqyiBKaqQz%2BgRxs6fQ1enltTyiFRUxwFZ18YzXLme7cwDmTJwCpFdtllSBYPM75G2yHDr89ztJLW4auiTlPYCwLP5040kcyEaL8wRwLL%2BgYVV4%2FmdejQkODMj%2BjvpaQ3nMykaUOHGy7st3NBbcXTy8EfDQDhWyD%2BtPPEW0PuwMu5SMhsmldz%2FQxM&X-Amz-Signature=4a5cfdc7c952cf8e80a2a3e22b982e6f0580d6088451af159fdf003ba3b2f1fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

