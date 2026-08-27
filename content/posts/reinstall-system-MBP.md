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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FY3H6YR%2F20260827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260827T063539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC0SvfluBjlT4xzF2neKBZVSiuQvPPlEB40FYxfog%2FCKAIgTKsDfj3g2fNuWPojhOXDclOFJerxKunEbF7srKKA83Mq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJYmM9Yl0VHkPXxwYCrcA4dQMpD1y71GQfQSoJtkoZrXBH2hQPpo%2B2THLrB3PmYYL0ut4AJaEm9JP8DlvkZFY5519R7yoV0P9Zla7B4OgxSBFqpxjJgrCAZJH0IIfaR9NLa7%2FNmdhoKI4B2O7gWaMTdQIcrQLaFkxtRSORfvPzwBVPZUIzpdxyjHebBuHPudKdS5tcExQ9VUT76z6oVUISldDQXFQBtm6kN8FXnlcVduZ8jUskSLtGkTynZrx0vDzJ%2BocdHMbcx69Ry0rLtppdkYxz7id2b2aCKabw0eaeLjkYKchZOFf1q1wb68NSW7P8LHSE7VGF3dlfUwhy6Wja0C9VQefivTmr5%2BJwtzjPrwh%2Fiq30Vj%2BHlEBa7fOfDNTT%2F1zNAYK9EAX7hLudcQXi6Vy0RzaUVth%2BUvfZXCWWLN07WM%2FqSYa5h2HunHY%2F9J5LToj%2BQmy0XLzjKbvWUTJUM4t7x0exW93R6QDPwxd3Me%2B4kxK8VG8zJ17dEOPw5ADGsFPSoeq8BySo%2FLtWhb2sogzEasPsuL1xClOngu83U73KMkm32G%2BAN8qvTNjJXWui7FPm%2FYPKvGvrwom0qty7WpTJp9F1quYV83vJU%2FR9%2BVHKqWuimS%2BMEg37YI4Jr5H25TRojV7PQXirikMP%2Bqv9QGOqUBpcO7X78%2BioUIDI%2BQ8LEY9%2FMQFxxETVQ5ZAJDl4avq9T%2F0x93xTQNo2yR5CxDaIcA35zGvhFj40jB8hjC4%2FsF%2BTom14HJcB0s8PCEwdzFQfnnL78k%2FlUDsjQYHc3q5nD31bhkmVhXpt70vJiN%2B2yy6XIock8CSrKVCzKzLqAc1XclnZWKLxDmiCAONhxMXluA6xOpG6CIzKOZmfNkYJyHXcwo9nVg&X-Amz-Signature=e32f43ffec35651873a5e772e070a3e66ce0a0f2bd2bb04dcc8399d555b33f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

