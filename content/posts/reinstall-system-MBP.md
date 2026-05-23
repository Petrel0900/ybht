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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R23H4A7L%2F20260523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260523T022859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDKV9fyDyVD94RcHngKnHyTjQLdgCfVu8RhYpzcd7mhhAIhAIhJzEoFj9JhV8Pmhri%2FW96pw%2FwwtckVZc05whcZPibNKv8DCCoQABoMNjM3NDIzMTgzODA1IgxXNHOkrnbtWbXmf2Eq3AMrlqupsu%2BmHjBmZP1HltJdmo2JNhovIDBcXCKjgo%2BDDL0cYWXXPW9pvhAMEqG02GSGX83ajHknRr43G85dv0HYF3A5WVgQ3wzdwhcAgXAgL6E7ghesOqvWTmT5jsahWY6z4obP919Q1UJemT2SJ%2BWODJalc%2BrtlS6Dn3VD3BlYmQ0M6TRN1utstiSEQp40qd2Vw896T8Y3XbAr5yujz%2BbZ8bqwExRi4nGouuaGr0kX6zif%2FkM708CEevEEdCiCqrjsL8C9Q7w3kB%2FGWyO1SeWsMk47%2Fy9iQUQxdvyIid2COi3TUMv2QN3KZdstAbPLsCg2Y3dBQuxJkIAI0VbJhRH1p%2FoBlOgFLod2Pajoh0W1vsXYz9n0HiPnRrPorJb5yBdkzsmhK19X1iQEqgxUFWWllEMoVAUd%2BoNhnqTGYMgR%2FuE5OdwDMezSSKDqGqBBYLBE10rxXNF%2FrqK6ZacS7JpHHdS%2FNBysowy0jzZ%2B%2BD7KwmxEtQlsb%2FO%2B59yn71QeGNNNyHpZczw3uAguRr3xgLLXDITDS5yX1sD0qe4B1fltJdGxK5gdGenwHlDvdGBzwIqHljPIIy5yZhWV1rrwI1aeCSmv%2B4aHItbmA2XktIOimnM15PisF8bCbqffZjDb%2FMPQBjqkAdq%2FS8964%2BagDuopQlxHlKrF7k%2BXnqUHVZBSINYGHUhK7%2BsRHPSENcLLsRzSPZc5ADwPfEMPznUUdDtcowJ1yxQL8wEGPDWR5ElxuRK%2BYrbkbBPOq3dJ7ZiJaF5vqmt4Ka841HfneY%2Fq4UkGfE3%2FBr3ffyIj%2BhoXeA63N3cd7T3%2F51mdFJuU2MBuoyROVXdCo0EocW8KQ3GfxKWrb19MrxMfB5SE&X-Amz-Signature=d8a240dbb6cbad6123d05d3d6dcf8086a66662aff2642f5d66b3d6919c278904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

