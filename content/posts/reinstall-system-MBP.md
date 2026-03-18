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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4P7YI2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T014436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQChE17BtCx5siZOQyhh78tRIOH96wSSgou3WS8lOAYctwIgMmT5AaAUP9PniYU8eK0Pt30c6dqwzg4HLN%2BQr1leBOMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbgqqRwrWGczqKg%2BSrcA3hf55H5qRFaLsPm1suJRtdcQDwIM82manZbt3FdPW%2BfV98u6gcFU1xSgBS%2FHm1ljQVgIKJxefiNgU9AsN9I8bmZjNSauwq7u%2FL4%2B2i%2FzokrD4WobZ3NlUMbU08Ofv3K6kfl5Ev2O9ULBBcvGWKJx30AHyO0925dFTyotTYeee73uobDxgcqfoPkpXgEk6JH3Ir%2Br1BEPdVRpHaCez1yOLXmJT1jRznBs5wUHBEZKR5C2JlFBECPWAH%2B28BLNH%2F88dbp%2B1jPelKSQWjj8lOY3BmspPn818og8T1e4I0f%2BYxSMKiMBa0EH%2FKysxMg5OG13DFLqmKvtNhiJEi39mAYJMuT2jjYjCPO42TSs6e7DI6w9WnndMqSHFBp0TWXVea%2Fnbrxj0lM632SFHKVwei6VM8ELqo6YLqLkh16uzklsNd5VAqnCY3dEE3QILorbGZsOgipskmPqulXyKM5MUe1POfjs%2F3yGcVSIu6jSlw%2BQ75Fkau07e37j2pC9swKZ8epA92QPHk0gxXXrby7FGZ2BCyqcyl8v2o%2FYu7vw8Xwx7C09fRkyboFmpbTW4Ft2AVW3y64B3F5SbKA%2BAFFOkLheQ7TyS73wuizBSFOuvtNe9RfHu1oSM71JeaDGERgMOfp580GOqUBo3il9mshYj0w%2FdAvU8QOC94QET9r1YrfsIarSJ74Q7gnr6wtQBAMKxYVJgWlcuxhJ%2BxYhbO9M10QQnJJ4fNy0mRBRPs5n8arwWbZbosIScdumX8ca9xJhzGcdFUTVseFXlHPaCIh8VuYrUJQWL%2FcSFHHRjjbGwH8GwSDkkD15Co%2FTfHpLkife0PVbCFGCdLIAaWkVyKLqjiToG4wN0P1RkXtN%2FPK&X-Amz-Signature=52dda273e34dbdf45a932c0503a00ef64699dcef43c78cf2c5562c96d1b9dda6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

