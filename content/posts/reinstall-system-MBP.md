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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOOSQWGH%2F20261105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261105T043743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGznYjufRqpD%2BW4lPdYzDmfyV3CYqk5uJdvSjNDgRe0gAiEAzo%2FQpyFbeiqfbmgUk6QuA66tv8ga3qQ%2BwOVtAz8I4R4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABRW6eV3bQri%2BvkwyrcA5cGl5Layd7ROP%2B5ED%2F4vWLCJH16pHjMZudSUsevpJymCzbXOulBmrNOQ9KXRB7pNe%2FXfKllpACMSRhFyxK%2Bo%2Br9OxfXggeCcxkrN4xhPT1PCfiljnW4jIjZO0a3Ou1WrpsXHFGsTX1hvaVTkWZVSFRss5MSWXHpDeXyF3x0W%2BJfRhrjS9Tg4RFYtmSYA0ezVzsb7hr%2BdBcZUZ1bhEAKt%2Banay7bRbAUmbWApSuY95TbtO0gv6Dptc0Sz6R8rDOIgXO36STn3JPVDmdLqR5Zvm%2BTR0s%2FMIn6AYCk3beSGlsS18y7nWuhN8WThbR02njn%2BUqRNitqZEoPInnZOQeqRIQICijtTrAHS%2FELBc2Hl7kw9Qsz5VT3%2FVAO2K75syn7GD39yoGg5pMgyArf9%2F0qI3Hca5PB5aoF6K5qs1kvHKfyroV38oghtaTdLeVLUJBf1JQXWFJXPczYhCGzlMTOkaDu6F27CfDSKw11So3Zwj8GrNFXBdJHeggyRLMI6efhvPhiDHH%2BKQgymTcq65ox3b%2FdbMtvomW9zYWVFeuOTrUy%2FCCKsMwtzpT7UV%2FlQok89788GPua5MEr1%2BuEO6AVpumjJ3Lsar%2FGvHFDXHwCsj5Nt8q8SGCP1ZbejmAaMI6JsNcGOqUBV74Y9NCNJo6v7nsx421C4YXHtf8rFECaokZyPMVTmFbi9yVSKQq44CccKrbI1ZxVSi00MHodrH0fNKVXXuzGLyOsgUeU%2FnC0qkyx0v5bWym%2F31JG3dOL2ulNQcwucWAi%2B0OdPYiQdOtBhJqpq%2F6zzB20ZEGS2WPscfG19ILWjp6bmxsor1HmKzF4NWVgmYqbQZWHKzgOT2E448jWCVCyH3pN%2FGrY&X-Amz-Signature=2566a603acee27907330d6a4621e8b1dbaf40e42351eb121d9319961e133065b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

