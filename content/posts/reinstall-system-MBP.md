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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5J4NO5%2F20260209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260209T014349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCN5CrRN0mouYIc%2BkdzxRJYMDG2Cg47m%2FEmX0h0h0V9gIhAOHofyL4Q7FKQiQac74vlfH3Wq38bMEdFi9jEaVjFwVxKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8%2B1D00VZR7vA1r7kq3AOpUNkZQgJe6wSd07X4qfUlHpiXs%2BbXLM9CWwxk%2FYlBtnOP00Mkb9IKQwN%2FESFyyRicecNgZ1wIVYw96d57eea0FliNWCsWZTMEoXX%2B6AEm3BZYH%2F4HW5%2FHTh%2FMJm4cH3puJwepf%2ByihIHy28bx7nEb4l1gYwao%2FL%2Bl82awVnXgWnFCDxxUGS2XPV7EThtyl1iRAJ0YbvnbFMEXgSudVcEkG%2B8oSdcw0kZEvjpkIO7awapqafewRRSX8WUVHAK9BLxzHl3XLjUwLSva2qa8DAzL6NMK7rL%2BVg2MK6Trx%2FAMWEal9PG9G3tS%2FU%2B11FuXtdz34GIyLtm3jvjfbgDOUIqagMISIkqkCQiGuhnGJ%2B9c4UG%2FdMtunpmIsAdgqPJ%2BrsY%2FRSUnDfuJ%2BOg%2BocDSQAaDO7S0pehUCNuuNwCmLpnovOkgi%2B48p6w8tT0TcnBDW2VCXSAJBmPlnpW9QO%2FIyxU0BXNs5Rz6Z%2BisNeoPzrdLmIcerU7z11PW73BmKzMUNXzSccinClnwevTKJCW91aiVOP6pVjpVilBNbOAIofM6DWM7X442XTkrKs9rZqUpLxiyJ1xSiaIEBY5GAL%2FN8OSiLVspasvObPTfvaN6xV1NWTv6gI%2F8fPiBGiwQGzDE1qTMBjqkAaJmESk12y%2FYL1GiAUGPfXDtP28WJtpjW5erBdvrrIEwQz6cHObJ1f7i1GUyKDUN0KQoSPR8Ll%2FFVPellz8NnVKUZv%2FOdTUl3rIyNBuS4aztL1aTEF%2B9xa5FQGnoMRm6WJFokxb1Wsp4chiiztBN8Bp6hz6FhpXXakSxGLgFBY2kiasfUVmzgEBy90uD03w%2B3rM0Sjm1oy%2B6waCJBYdzR4sLikNt&X-Amz-Signature=a40219b1b490bd38bb5279eb0347760a4d976665a14b25c748dbc5013622427c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

