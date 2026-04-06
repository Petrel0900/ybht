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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFDYHZW%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T015502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIxwLAJOFZ0NKHNfAkzdPKZRqJ3GlRS4id8l0EaypVKAiEAio10ttieJLlltaIhU4jnnLhhkBa%2FU%2FOeYMgCOCO3M%2BkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQ0Nt%2FBA0V3TOKLCCrcA4mrrNZSYQoZWEU1onw44MPDqk5x%2FP1EPNJDuFGvjCXshL1%2F2%2BvKpIKDTgaDbIWMIccgefM6KOhwDaNRhYhD%2FVYmR1G9BX72CsA4gDcp3vIk8%2B0oD%2BRmDK8TZOezpp5EiAWcAX8bhBOmQfCH0Dxfoj%2BElhA4Gq0S7ap0uwMcD4GqpzR0m2fgbGOwRel7v4y80%2BW9YysvFrCkRNeBRqpUAcUHtnNVwYh%2Fee0rLftudRjtiCyEXdB1hZaH59iVhuUwIx0BiXBsDLtT%2Bmdb6esMDY3l5in0le81zkzGBgbINy7%2B24sYQbPV5UV%2BUYEjM%2Bm1zLPQfTFVrqYLJ4CrbWFp%2BJcix%2FqriG1IR14LAgf0ie1AcIVax2GxjyRVgfpSXmhL9989Wvjyqm4YBh%2FhqoGOW77l%2BeQ6X0%2FUjBEXevDYrEL%2FUH7U7oCgk7Awe1FJv530Uy0O2YGlrk%2FrPZtAqD9oTsJgRJlFZclQSVC0g8aLGiFdyrTelPXDDkBUa4fTNE2UmWpC%2FWvG3BdFkdxu66BSXLAiv4Tf%2B3MY4F6lQKaoR66dWmdt5aS2D%2FuZ13c2PRld2QDda5lqDeBBgBcSYQMTYBPvS3i290PUK9GgV2Ree3UJoMCxNEKm6rXxxHopMNGMzM4GOqUB%2F0OmUHXxSKkH60bnXml98CLl%2B2yp7KMLwQeOwXgggB0GhkzaWFjcQ%2FYYOw1LGCcVMv0ptGolWqeC3wI05hoF4jB%2Boou7bI68tK%2FiA5DGXr5xRiXp9QB2H2lDOjibNZtPvqicP%2FWEx4Prea%2FL%2Bjgf6MrrSCEQeEJX1EEWnkiDsBBhvoMRAi4ar%2BSrXFiJZoa6cOmwCrNO5c%2Fp%2F1IDsVnpqBSD%2BSMu&X-Amz-Signature=667efae760fc1289f9da8b9023d2a2fa53362b97428badce9e3299f47f93cc40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

