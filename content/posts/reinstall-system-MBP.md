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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OEC7T5U%2F20260203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260203T171428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHHbeYUWiv2OfynxVjjvs2zgfpHX1Fk9e3SwCyUo1mfFAiA5Nktr4xBDewolvB7cm%2BzI3HwepAZJhtBxZ5Ud6yOeair%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMw79Yy3%2Fb%2B9wIiIc0KtwDzY%2FpEAlA1vim%2FUloUifdbWSjvPG5uqnURo7BfhMeOA3jrm%2FdN41ok%2Bwd4NBvVCoLMxjHy3%2FhYDzL6ujSkN5Mx2V6JvdhIPv%2B5Z67Ohw0k8GB8sKHLqjFbVUXFiEdbxPFX6sukrf%2BxXldEyoTHN6B%2FzLe%2F%2BG6SudB5ODnu2VyxcXFHaprbfZpJdXurGerGShEeO%2FrS65BlCUXukju%2BOt2E5Eeyr2J7vCN3eFTJEIH8LBOXvaSPwkLzbmW%2FgXVfye8WjG1gKzBiFZcZd5t277OCttnqaO%2BgLpGh8RSNehjgDYGFEezVu58ABIohZB%2FHEe5Bpi729Ie7k7FpicNdF5nqmuIs6jHGrUyCtnJNoV6cilozBnE1QE%2F5K3kYhOyllUh3%2BmSSqFgPK%2FWyzgioMe0zT%2BEo4K%2B1GTr0f4hgoKVkGVvzS%2F4wml%2BJhaAsjQKDbJpyQyoHJw3bzfQP3vcig8i%2BnzBQKdC8eRIPESKIU%2FleUsoyHIjq3Swgk6uQyy3Hv7YsuxWY5516wkeS9v4pWgVbeXyNN3ouEnvnM8T%2BhqFlf5ZzCrNkZn%2BBrRwuTOoj5OLQ1wpxCuO4peibMQvUyOBb%2F5iUyUkf%2BM3TgYB%2FB365ODrabAo%2F0OS3AQWIagwkteIzAY6pgHD87JQusgQgS1NEufSL7%2Fkh%2F4L9M9R0ZDrzLe6HSAPjSYdzKQGCidcdI2y2Jb83V7tJo1HNw02P%2FCBZKkZyZTyFcPkdoJydkLUmlfzfsEB4ZoSLfL9c%2BUZ0zQMRPVywKeivKPhiGmibxkH792BMj5c6QjtBU7lxdykolP5%2FIlM2GR%2Fd6J2UZwryVrp4R2VjHLviuwfGGso4mStLZdT9TSNraffnsKF&X-Amz-Signature=feacb47cb57e22391fd1b08fcef5015485f48edd726ed957279622d62c6b0719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

