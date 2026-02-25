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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZBUXPPK%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T012940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCWYWIuYTi4SKdA9Rr6dtJsl%2FFvb28PNM9lGv4M84MLxgIgOtApkVHw%2Bb4nPq8WIIrzA1GMgRcajZ8nlM832R2UsTsq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDHr54qMV%2FLxGb%2FJ5oSrcA2dM%2BvgidzvurqnmRUrC1FnEGMICDhwdmoxy6ky12q5Iakq3Ydpu9AkLgvs%2FiqcwmkG%2FepPYzPJ9juJTetOeR%2FKZZXddxLblebOdEvIZNiaOFO2dMTimXkXxRYNB1Rmm1NaX8rHfPkb876qzs39fljluzmW93kW4FnWLetEgqckU%2BkFJrkZhNrKWinojhSYB2qdaVgqnqTqh7k6l3UcO6bJFXRGHrG%2Fhuhul5LkKlYXGdIMDfhP2cRYNUaL5%2BdY43wa%2FFeYThZcgqnrWTIG0mgpd84aS8w74X6RWnsBBkmgRYa2pMxko2CTh%2B48GyZmUmmZ4a%2BOe6Xp7leMSpHhR8MwoTw0PdoUTWlV8iNbId23Rgz9sigMBUtvd17s8yruFC4E%2BRRn%2FrOX%2FC3L1sYXGy7EXL0O2veGpRRISjIq8NFtuwmDy565CGYQ8uaa8sGkH2hue2kZNx%2BWjSAZXVxq9n8JpH32GHBA67BUrBP7Lr08j%2F1B6g4XVFEyKna1wlV0HQYGyLqZgwt0APoVh%2BoaVzDSL5wP6jZrapDEfVBSG1kllqJTntjRoE8wzoITovNNNv8iXlMuFo431cqNCbejhN%2F5yIkNz7d04VsEBGZxcYX0HSSTQXHggYXAfkn%2FGMKCD%2BcwGOqUBQfUA0K7l8lf3OKj4cz2h5a0YSgnml6%2Bf1C7cVwQ1VRC94DhK2wjzLDL%2By1heVQ6tqxexwFhsNABbwAibDR2CjvzMx%2Fye2BaLWEHoabnsBdLfKSIr3gIU%2FtgV95ozxOWU2I2lHIgEjDEMedAbgfKvRqxzpffL9WSFv4MdoTA9Q%2BCvELVL4d2MlfUAZfNEQCU%2BqHj%2Bq4%2BgNrd0SZqhvSazyQmELj4E&X-Amz-Signature=888a3a16ac2b22abd61f3e5b68901016305f8117f72f058e8f0a788528fd13f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

