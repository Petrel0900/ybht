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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLTUFZ7A%2F20260923%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260923T024714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn8fpLS%2BkndCIKZvB5B9WBAN8qnqW2K7IekAzcWd9ttgIhALUtT%2FaIuAG9tE%2FRQYW%2FMkebxsLsGs5tFfMVO1uoTDqaKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfsJjSnO4hJnFlLaAq3APiJiqEpSVFJ5nkc3whX4mz7TVM5sqxCzeN%2B1cqksU31l2YVnFYMwRf16CpN6UGErRczQOQPK62trJQ%2FZj8zYGHQ016Cd1inZ1IWjVoUkkabRk%2BLWyeWbqJdIXmjdxnBHd9ft0zbsbx6BscXHTAnFi9GPQW6Gj49x8FFhUO7XHWauz0w8K6o1cDCoTdsXXTY8db1ZFgaGZhUd5krrtpSWk8fcXoz5HCIHzEpQPJbOpTNnHqeSTgBCkq4QnQ2vcZDg1jvX2IyAjxVIKrnL4WTEHfUbpEXVJkBgKSeZZO1LKpZwbxav4R%2Fcm9qNjmtnNsul7WzA0h%2FHpZLCm9KFZceSLi%2FzzibSS1NK4TeoPqdX5oH90R1vrSsdK6taZPbbDS6MLXEjFzaptOR06LKhsXLrV7iMQhI9UkUt8S0P8BGfNo6mEGFQXIhRVQHzeK5%2BIJXENhqFGm%2F8FoRBi9Wled1LmjqKY%2B7R0IBlA6CicePu2If3oGfeV%2B%2Bpg91syQE6zSBZfUEkkiBoBC6Jb1by50bZ9UCZ8zVFBMMx2xi9qgOX%2BPEl%2FlwQuR55v%2FTOUHOM%2FKUm16lEx33tL%2FKul2sxaEpOfIujalN0Dh4akfS43OYmoobyklPfUn2MZA4%2F4W%2BzD61svVBjqkASgS2OpNQjIKlUUTT11cqJDdN5b4%2FdEOdR0Zp4iZa6abxusPnrn1hTUruQi3i6C2XgSmqgK5NMsdK7yjMHgs7UW%2BNqF%2BOXLmsYNVn9D6NYtQNq5vwRR8ofy8CY9IU0EAjvm53AKpMH2L7DiwVn3zj%2Flm0q1flgwm1gkxmnD8t4mPvRDJ0aWukhxe1oFuOvWyM5DnuyislFVp8mR8ZqUiP3VFYsOS&X-Amz-Signature=a1c2c5138be8707565b50b5cb88dcfad9926952d10732bde803a14fa36a13def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

