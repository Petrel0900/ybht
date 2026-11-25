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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2GWMZR2%2F20261125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261125T062644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOnooYVqWYbTBki7e%2FNBFmHPcmd%2Fc7p%2B7g9j19qftryAiAOwcVL8Gc6i7DlwJRjib6DjOP%2FNs9DzJEcVWFkINtvgiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3q3GmMCiI9iDmyp0KtwDp43bt8yOM6pVeY54lqRZYn892VnaJm%2B6SxIJcZTekC1sWKviO%2BAoI9iM2U7S%2FeuGcvqu0iz0XufVLWGXdL3qrFfe5nt42adVZz0oMDq1dlhJ9yRsetnmfh5MdXHDtHLuZfejAH%2BAEL9fTKBM01TTONQ6R2DJ3kOqpRJCj4BNI5uZoA%2Bc3Ec1s1Q%2BAQbdAzsVc6%2Fbku%2BirTa8zmv7zSSiqKAWBkCdqbx17ul%2F9DX%2FmS6DF2F9KYHXA%2FowA4f43%2Fzp1eKmE%2F40PeakfGRjloM9QaP3ErXRD%2Bfovf9AVWPqoBDGb3HybWkCXl2UhhWd%2BM8eMvHVLC%2Fh2lvMelj0EUJXnV0Ie81AF9CTqy9DYuvqBY2f3MjXxA3qwJO4ZClAJSxArWHqAaTmUvwLdpdTq4FWvTzCzaH1vxoAZSvc1LSJq1HITVDRGOhFpB3o7CYFcOmeR3fedcjYLE3%2F3EyHYsNS%2B47odACLt3u4%2BaAhESOnLcWPlB1ut8zU0lDzmrbcrlpKuBNhKPwxexVY%2FG9jw6ZIDMeOOr3DJE%2B2KIhdF%2F7zWJoXvem5ZyNShmeVycFDXNm5TtHNgiRvbCjf0wTy2%2BIxnOp6S7JxdVaWpPzFuEFovGBhFNVpMIp3KSLWlXgww8GZ2AY6pgEjDFLfKMvUVMRXdtliMj7NJLM0r97bwRFZEr5r5nLio0Hvpia9enIQitbbM31SNj8qw9zSPg7UVwD3d%2BuhZhD95mWfbgXm7Slkmk%2BMeHxKpTn7AUVndkRTvZYtlsdDB4cUP1WPjS2wGFgVByDpVjqTIHQmYrr4BUU2KX66kJ7JzsUjo2w8rnqRhI0ksiGmmIxjhXBcf8sxNj4hj0LwqZaTUUHna7EA&X-Amz-Signature=de39dc14921d33bc6d5f00238b8f6995f9ce58f0ed22f3782603caf10f647e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

