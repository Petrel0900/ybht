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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STDOKPT6%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T014834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCID25sVnk7InxdNvS3QS0Pc1yCxxxB9SYgeb4iSVOlqhFAiBw6t6cpE4woF2mAQiTpEymB5M4GEq0uyuICgQUtY75zCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM5JLr9YSkx2joX2FYKtwDZoRHrIc5bx3KxCk4vlyD%2B6c62QJCUX%2F7vcvBlsErCXMmHwKuf39pkwo35dtaa%2FEFEkrkEm07x29PdIcNUiHHXmpRF%2Fhx5MGLTHHwtU1Di2rP59yAKVSxQPdf%2B1SW50c3pQ06Obkujmr8fnROoKWYtuamAG4wJHiiRf3MRQC5YNuCPwO%2F%2Fr4oxb%2FDwD9r7WAt4nsFigymEcEjkWzK%2FaAzioXVQrhfXrd1pGJFdkoZdGeaN%2ByZeSbRSJIVFhiaVv46R3TW2%2FEwaJPfTzBEB8cDpsF%2BuftHzUWNu%2B7nDKH9V9%2FThH6KGZWf3224Fat1XHACqLfhpbVm4ykEdtgDoKfWz8YBWOr17Zc5d%2Bd648eYI7wppp%2BSRUcrHMBvZJ057LqE6%2B0b4ulXHUs3xIHMlAqHsAMYv%2BpJGImwXjlzfh19lhldoYqbFnxYnG815%2FPUPee7HbSSbz9EkwS9a0aCD%2BsE67o4QBnrxYjxrRMFZP%2FG7ZlCA6FfVjGu0YV%2BFJUqFjAJ7t26qaqcrJQirges8W0sf8BUrdlB3Ml3rGFmFoMsygzgPtVvI8%2BBmiYJYD1K0ta0jvRU3%2BmBO733eM04tdTPx2qLsdttkQnGaicSP7y1%2FQOZCxW1I1unjL7OvJUw%2FITb0gY6pgFjZ3Yz6KjmTMS433NVFg759JQIwhpKY3WZ20FTWD7SizO34M%2F1Xfsywi9iGASuV0PUUOdI%2Frobn0N%2BaD11o0Yg%2Ft9wNgWJnjlj6R581JhXlyQGjSvrxPgHMwmVsdCyCh06C9iT%2Fop1UY4gD%2FIeCEYL1CYSakyUt0ygnTbVtCGeNdwuSHWI4t3%2FyF6xPXEXDJJbljj0sOgKA5QLWjmpm%2Fs8%2F1BgDXm3&X-Amz-Signature=56cc0bb0c3eeed2ac686fb3c9f28faa20783aff34212f21a73961f3204aaf294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

