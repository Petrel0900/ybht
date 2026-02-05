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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFYU27EC%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T012456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHfIhbiJAs5m%2FQr%2FmQ5eT3Y%2FOkWfE%2BepGOTaUsF5mczTAiEAnXtC2Ubh1fca7RnEnu04ay7MOM7dhjw6QGMj5Vt43xEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEdeu2K%2BqDIs46PxGSrcAx5qvOGZbnRHVEingGQN7o7HF0C1l0lQtjt56o8JDrGfmI73ho6S%2Fzk2JVF9MjXqGpi78faA0CSgeUMfXC3vuAsyTORebBia4sy8UJ9JttdhBqwp1mBXGkKm4xz2Z1%2BZhEUYiBw9RJxAUFvQaJK%2FMU6SwZD0MESgpQ9E00l55MMLV8c0V6tgJ4UEGOk4%2B9opqyul3IwIlBVJqprp84yA7Te0iD%2BOJDEr8EMKIK67FDPC3kK9Zve9zhPH6Qtwc6IEMTDcm7muxyPrPmIIin7plLoivcUCUFd9hmVB0svJ63jfU2imGSQ3s6KG2gkZ94LEiIbY6C1t15Z1JGKUONHQl9XOWSiHTz7VpK3JoqKc0WEudrkl9MrhOLirR3QAllyWksRgBmkHRJ%2F9NWkt2Kq1W9GMXoHIL2xMf0KUR6jLtkOAlSsMTCpz7nLN6dYBOsIfVlIizGKxK05rb85TIWNkE47IEpzFws0FCkdlMGZjHE98Wbq9qXKhuoY7epDTm5WsRSA%2FMm2GxtAF6huYRz9XwRpblaGMYLOFMVvzwveG27RNfJQjAFV8LebQ%2BCkFhqMdi3%2F%2BP4k0xyFUzqr31FdafqVTEoJSa5yLORxm8QJzKIWHaonTTBaoy8Q1I1Z9MILPj8wGOqUB26Jgd4HMDpys7%2FgP%2FomEQRV%2F0O%2FCiyNaOEvIzpG2X8%2FL3Ig4hLWugObtp9Dl6XgKA%2B5JEFcHlVhT%2F3CWmiSda3TjGT6UrGowXdrhIZk0KUK4P%2BXo32e8yaqhE6V8rv%2FZfWS%2Bsi8KE9lpmBsrQxMyGyy6XWk1nUjZRAvUv%2Fxq8Ykrqo9YRjhoZcUnB23cyQLd5GUpW5kJaKZr6NhT8ccqD3P9RNCB&X-Amz-Signature=f4b478b420f50b6fdaefc954d2ea379928122efd6d98b78e8146943d0010b604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

