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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3S3ZMAG%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T021840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxzh3mIJobP70v0dOCsjRjaCgG6cDm3B6j1JSB7T0eGAiALzIGi6iN4D0lwISQwW24eANR%2BOws%2Bc88QrYCqo4ld1yr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMrkNxiU4l%2BqgZRyFBKtwDwUNlsJfbT50ri%2Bei2YjH9XZnBgWsZmU%2BuZoxCzSX7ExfMvNUJ17cv7zS71870CO%2BCPerg9fhsQPdFE4cLt6Yv6%2BxCZP8XYVGbnXOsTmwQiWxPYCjfFiXcbFkzFjVqGMfhZ1zqYDl8DZ%2FLOYsKPa0M5MDtnPDr%2FPr8SYWd0aL6%2B27xdcw11Z7sxjfUEp%2FfWHIEUncvS5EfJefn1SXt3GRofoNMa6OVikeZz3wrvbtdvHPSe%2BmLFoGKHXQvXXVtSNn5ibD1rRhYVNCmWebaGIx4BL721E6OmQuUTsm7HzrUcyKMoUR1E7e%2FFliWt7butVqMafBEbg1ZbQwc0%2B0k0XXqwu7vR9mm2QNCSSLnLR40VW9lXu9vwGqkjMmT0PPNbOn%2B2iWYIGMxaSF0BiuS3UaN6Pl1TtYxepwMJK6UAbAFXs5BUTD%2BJdcV92qCC23xx1EWM3nyGo%2BmXRYfw%2BilJynXQCVI5RWNktcvjXPiyEZrGo2xT%2FNP98Qjar13%2BeeDqIhan4oxZpJ6azaoZEhdjaGJjX%2FKKgvZv3NIzdeLX6%2BWOd7nh0G7TnQkzCgwXEiAE1E5fwxghbUGWuOePkVrczzZQz%2FgOMjHVqwMT0tjXn0JREnr9tAv7Mw2H4Dn4gw2dXU0wY6pgH5OL14HsUUmzmLXbjySAVMjhZBMDbw%2B%2Bce3%2FamCvf9CIQLOOaFptaNB3vhM45nkvMlt1LpMhHn%2BWROcYEEoHSVU5hbF%2FtBELvLZoq%2BxzOgHZtbuEB4BijkHLGh%2BGJSF4gYevgeD94hQTQB9qQFrPehjBT4rOTK1rZOuAeH8kjw0cSSiyBjPZ5PPsmv%2FCBpynbPPa%2F%2Brynp9xmq5sObruxaVgl9QEL%2F&X-Amz-Signature=b202ccffd9d732271b3fb6e7b00eda1faf65ee6fe37da7b64c688fe3aa1f25ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

