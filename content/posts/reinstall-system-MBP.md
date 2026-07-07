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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TEOOBCN%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T022840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATZkX5bWdhdScnBiKdpLHzm4DsQG%2Fd9N9B6JE0vrMblAiEAt4SSPfWqTlSeRVTj9If5wsjZq1ZrgS%2Bsjy%2BKQAvDdrAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNINZ6Iu%2B06HRY1PCircA87kHXa5pN6F13QMQ3sawllUwv6jlAJkw2uCczCBmoWvbvpDGd7E6R1pqbROv6JFU7aypnewBWo7xw097WoUq5CR8JGQ9wq1T5fYmVT6KDu0i86GNBMQm8yk7DKsGtXw6z%2F464qfLiwjlw7I8HDtr12kwj60Ow9SLGgJIOQ%2BI9Dpcax7cSA91emlbR6JSwWLIvRhJ3AxJ80bgsl0LsWgDLugcqhGeSRQi5vWwjQNCZ9tNiKhCbeDFnDhDmD2GLRAvCae3BWvm8Kn6dSxKEqQ77lkrKmDaj3PmM4KKAmNwMNjf%2FyhyBbFeb1Q9PH2TdadKIxNWD8VroWZFYdLo77fkiEfPURHqJMLiszTdqnkyrc61qt7PYf77QrqmTQ9dKYpwP1%2BE15N4LZYMoA%2B%2FRH%2F%2BotQsAIC3QvvnITdtb4LvJEEdbdmWylM7Qx1jgTRIvXCAE0ctNwybf0cwR7h3rG9%2FV8bbbLCGoSxXu7QdY5LZfi2KTl1BGiRAYVZIz8z0Tu%2Fj1h7fOpAVVX2p00W6oT3dksMlsTEU6ViyKSa%2B7Cqg45QaCEpfX6xTgLp%2BlniL%2ByCoxgzp5xzFl1oEJIuwE71oweETjWhVwcuTJCZ1r64SsfX8bsE5UK82Hks0hDBMIjBsdIGOqUB%2FjOdIgaMtTYqhO0xQZtoOXgj2ytHghG%2F7mCCJv3OJ29MlO9f2ZlXh8nH5I0XGUR%2BR7dNBtMPKJ%2FmxHIHMfxCshbPLORWEIomuTyRO6q0gOEijJlNL3pW7mJu7oJXEbAGmBZ6XMEDeN3RbgFWIOA4orXGDK4CEqvyvkMGutC6NmoZSw2NdcXwF1ZGr7Q3mQcda0%2BbEREMnXnESfjG67YKDZC9q9G0&X-Amz-Signature=3faff6cc6c57a663b0d5a7cf3432be3ed14faf1fb36cb1182bb871d5e9ca2f97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

