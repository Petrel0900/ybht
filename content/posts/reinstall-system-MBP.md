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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CU5WH4C%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T032610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIC5hTNCIa2Sg5NpnzG6IVZuzBlNkdcDHbIl%2F5TWJzAl3AiEA6VdNWXNjJ05fbV3RK1WsXS3CemuW%2BNrYMsgtyeYDHUYqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKLn3%2Bxrf9JcxwpIyrcA9A0WlYOSFlE0ngOlV2kGYs8nr9O740R%2BCPyiaZPDqYQQ1lEpOW2Pad9m0Sn62rttePznDn0v8%2FzYtgItnV3Yo%2F1tQwK5CIBOVdFDWnrY1giC4XczUOdZmhGeMdvXLE6VaH8nJqv8BHzd%2FWAVDJMYIBNzQNTdN%2F6zlt4LsVLDCp%2FmLk%2BtvCv85iRxvhxbHRr0IooiPDhiewqjyOfBxvmY1ZyEYZNPuPciGlUfFvJrw%2BuAPGvBRKiggOiYYn6vzPI6qcs7HWkcvc42OmFnKbsisRkPwbIQVFXMCaCs6qzA%2B%2FslI6huoR%2BTouhBNVsc9Ukrn1oeE8pLWVh7iOIfpSZ8%2BpGThJANfyr5pY1iJcpnAMOEDKVo63dRM5OmmxxuUmh825A6RsaOPgE5mzKsxjDUpYKJhZSfsOm2a4NksBuF5S%2FiNKYc0376Lhg5yo3wdhWxpfoEHiG0lFAARr5B4TBF6bwHeFUTYtJj4xdTb1BSHyCJSi4WGjRU4ZTUvu1RyCA5qVp%2F%2FuSK9yo%2F9Gp%2FymijP2%2F8A7mxak8yOycIix8fjTKjMhdvFoicVyuDr%2Fr25PoJE%2BgRM92eDtZ2NfnQA5v2qpXFg4K6PS%2BwFZGLw5Z3oSd0m89QLko3tYNcPkGMJmv3NEGOqUBmeiGY%2F3J7gj7lOPPVzCy%2B6EQ5HJB8I7B97JGUTXH1gP2ZngywFtQw9nPpHpEpWnl1Nl9BmaaMsbHGRMZy3nddR6s0eWnDJbpXmvcHbFp6MJ8UGlDl4%2FnxxBmoGJ4cT9z8z39ARek6xpK6vy84Qrnb3McvzM%2BEBzBqbBJyAjMdXNJkxyG4jcJJfivOA8ItvXLB68eOx39Xo1sN1FQ9Gp8ZynkjkjM&X-Amz-Signature=f3aaa2b81c9a8da441482ec6ac42f6703660534eb94e54afb7f431f7dd061cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

