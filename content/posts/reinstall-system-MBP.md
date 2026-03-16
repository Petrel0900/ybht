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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYBMJ4O%2F20260316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260316T015132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGBJ69CLh4gQAnu%2FumXXQwIDjnhcCVk66VTF08xfQI4FAiEAhNi3%2Fb9hVyTaUuADLDrCIuwUwJw%2F6OkEbMOERl3KTkwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwyFEZp%2BZDfs0C4FyrcA9dTje0Lx2A44%2Fe8%2FlZBiNd4lrBeHibZHDFG8eB3Loeq8OIKGpqONTbQjvoRifeC9MrxwvpLWLflZ59g%2Ft%2BY9N1PwIOv7ve7fSzoSmjdfIjgwycalB1exROdp3Eq0oy9M7jinS4hh8LTpIEyQZ4nWt%2FwtHo5iBaDgnh92MrVjp76DNH3XTwZHPBVoGMNqXQejf1g3GpNue06hcl5PAUWvnxrWgAYZZ2yggIYEQcCogpXbCdOQiIiEf3wcEmpPghifTADKNRbEY6q5vhedIKj%2FUduqY2SbuhOokhT07ITwNc5ujersF3TRGyEIq437A8wHXgEfEuUFLlgcWmqtOY3%2FqnOBsZODt47syETm44TexE6Uiz06OmKGKCmXx72zgu3a8FlhNldMR9SL5uxc7Tv0OUnNdcnwUpLnYWnTxQs%2FFo4r9KYjOnNz%2BkApvhBrOh6ICzkoBVOXeoPNZ%2F5agkotl54wDBUUiBM7iz76TFysOlGBuvE8NPeEIR2lfFjO43617O5jOjYL7D9c0T7G03bHWb%2F0pLcWN7eupNvl%2BTI06Sq%2BTngaG6KP5tpQE2ex8A2bri%2BdUGni48xcQJ1irBcv3u1vgLlJjpxPnB%2FyqT2XA2pS%2FfLstiOy1cwdfuFMNq%2F3c0GOqUBxvi5wj2aZ%2BV8hDq2cATqAv12laaMsvT6TVb2Gr6Lq37gIg6zge88sd8KEFS5a1zmpwycTFBzj9RpjcvluqilaTbCmAA5Jsm3rvODCYkSrLpV5YkbfJ%2F71J4Nru%2FAaWUd%2B0zodGmJiCAPjOnYVZIIMpev%2FTjgjLWYJmDyWD1Ey0vfxa5OahalDjz93W298IIqzxwWxRyF95uSffGuMHoj5SJ9CxmJ&X-Amz-Signature=30f95137144b3ad4495228533a9a17692dce0773a52e19a009b3b418c7af2757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

