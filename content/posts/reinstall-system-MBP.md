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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WWLD35X%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T022218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG4joN5qlkJ7WYQ0SJFvBFeZNb8FveG1Tby2OuYRIX5wIgbd%2B4PgwQkitAl58d2zb2cX69FM%2Br1u5hfEo%2BGYDsKisqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEarAlRGv8Ix8tGeCrcA%2BtUDyUQZJafGqXyxagXcGXJcJqdmrVBtKLDlkkMxFXvUk7erqlp%2BQSop9j2bgjnTVDyi2KNJyLFovU9pISW%2B39GmxQFPgRYdTxMH9HiY2X3pwm%2F8IQW18Gk5vjkZUx1MpaUF%2BUby%2F4i9R%2FzeFXl4W13GT1wiozVxlXhIJjQJYcwaa2bB9TI3ffvb4rqaAtuIhku1PNE9tYvFoKqn1K02k%2FknB8N63IfoF6khxZIkoRhkAQbDkhfJrcpcqjzOe%2Fc8DGc2t17OOEN%2BL8VrNoothpz9%2FFrtCaekW%2BUYTZhNqDyDXmQxV01GvtCjgBcWucyiOJEMKDDbWnHFtOyaIoIyHUxjTIqjqlpDdDCR6r4krb%2BAvL8rVfpVy1QUTfLndPDJV%2Bcmaz2pFAv5Kf2RUKVPVA4MbhfyRiUXSnKojAkXBB%2By5YGJPZGdMPmzLc2h7D6M1kkA70sG8cUgeWr3wCbMvmAi5CVzgv%2F1LMjyril1NM2W77KnlJXi9GUdE2cIO2Pu5MppwU9iEGj6WgAgZy%2FihAIPGXn4LTgB%2B0ej%2B%2FW5c445r%2BGAfNLU7lrC09YZJBa0pc26qdRDOuyY%2B48g7SJf47YcBHoUN6FOGppclqb3VEb%2BbmbJVfeOib91LiKMIDDwNIGOqUB9ZBxIuDRFWBEqDm4Or7mVbcwvHZ4yWtVW1XFGkuVHV1Fpe70AOCKUa2GP4wJuSO%2FPGcXX0i9VHuFQul48M4uc2ofZpgFO90X9RBd3wwPdaMmJN%2FQZYuTqMGtFed9%2Fw8w6nJaR0epJI9AVVSdfQS4j9hk%2BXjaZmX7PvSVzhF2Tf3swjamjWDozlXxQe5ImojuYxgO%2BgEX9luoWC5LXZhNLbn0Z%2FA2&X-Amz-Signature=749b5e17ac595936f7c0f997391c9a871f773ec122cbde455ecc735c53439799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

