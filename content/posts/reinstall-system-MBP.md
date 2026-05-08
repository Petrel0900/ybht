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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP27PYSI%2F20260508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260508T022910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2UqouSMzYXjLtYLjPdTUaWKqNF7ppqVC2uqnJo%2FGmqAiB9k4ifceDiWBaap60c1tBHTWI2J5OVdBpmVm%2B%2FVJDZlCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMprxYVpvLJsxJciwTKtwD0BgQD3PUafPZ%2BGvF53s%2BK9DXNjwG8UXzuIhzEgtmjakK4T47aWV0%2FyuxcrJ2Hy%2FlSN9BY8rVwZE5b8dEr113SjOjbtPG3ys8HiGM5KvxoGmHsNoykFXcM%2Buht63iP79y%2FWYRTR753E5r9zwRxRNQJoH6JvjZTJl9luwPZHiJ%2FgKxxR8hZEEzhw15SDR7%2Bz%2BFYj1XiwR49LelVom6aErMK8uU8loxLPRJXdSN%2B7s1%2BZuD7Nx5yhcpq%2F0367IzSwq30fyCsNoMzSp7AfsmRw68%2Fjx2z%2FDyMQCVfPFcdGB7xxgRnX5BEsMCAxmOB%2FdRhQx3%2FLel%2B2usRHZSzcHpMzjKROPldDL%2FZc9wOLBUHU%2BSSVg0JHSndEA7EI12sVOFPbNIKD8eBHjylhjrxseEJmHBRlRxjkKTSulL8aW4lbUVjcvQ2l4jog4VGZxHP6nroB05G5PPjIInuN8nGNW6aqY3fZlFr2oV%2BTifzkmJxweM5pWaXDonUTh0oVZZczs8pLjArwuSmGyznnBSaDS%2B9UpafkqcEHGMiJYTEJ3j%2B%2B6raYIxH4igwQJ7LNd%2B1WkJqc4B%2BeupLfh3pgmAQaxEk%2BleY33%2FUrO3W51crK26n7NiBj0L3YrVKRxwHRjnoVMwyvL0zwY6pgHJfiWiWdjZz1o924a4QIcwlGO9do96TOgnZDC5acCaLBryf9d76DPfD5%2FCwN65toHJT1c7FIrJyK7CqMXI%2FuP4NKM5aYxsa%2BkO81iJHrzqyYg%2BjpeF3ELp6FEFKLPEgJLssZz2r8UbsbhVmB9z5rbrqzl%2B2XoDBIU90u21wpo55oOcre3LCwOK%2BIonDryS%2FO6xRAlUKpi%2BkQNQ3vns2A5S3F3Zgs2H&X-Amz-Signature=53fba055d95532e65442476d0a2f9c781d40a874cf70850bced665f5b2d56d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

