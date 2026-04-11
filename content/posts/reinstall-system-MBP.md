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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X35VJDAR%2F20260411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260411T014647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIQCvDp54kHk313qfVT5lhtUsvRu7xphvwDc3OYQJQb59zAIfSoDa1FPf%2BWQSqZHzRCMS%2BNPZKK32pTkj%2FuOfclDNbyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMdi9AvjRkultmKfp0KtwDTV7mJWsqnvYWLCIib9u%2FodqRNxe%2FNBruSZ1UMLztj1XQKXCbpJye8cerpBAkhKzafqhm8FTvYn3MEC3AGbDI%2BK7P0tn3EQyLJ86g3pUCyfW%2FInNZyOoWkU%2FLKbQ3xjv%2FanjzeT1fmHTnRX4g63iOJ%2FznEx5Jly0mwS36ADNEQGaF%2FL%2FA%2FRk9JhtxGe8LjcToIc6xDuldAchybESwBMwtxqoY7XGsnR1xTbAc4k%2FPrJlkS%2BkVorWbk%2FNBmx9IoMTGqhWxY%2BAcwYoikTdypLpEGOckKDCkMqenHeTFXmJQxYDIuJjkSTKOG8ooXqvbnUEv8P9Y1bTWrGBuWW1bhj8pGhafRrPWMKBQrhpD7ree77SXkvT4tapUdK%2B6NUR7biMucDF%2F0VDK3sZ5Tb7Mih1p5GRjBKJQIaG0%2Bzqs7twOtJeLVQkd5MWGs32O1VYninMcNJTTM3JBu7nyT1rLNRqV4VjIO%2BNfgdXChn4k8Jj5OW28TZRaQs21APIbMYP2D5zJdnLvAoDcgBC9qZOI9nRSHAEQPx1f1kVytMXUbiCIsE7IHjg70ItPxErgBfI7t20nI9VnVw2wwosTccLlWW6Vn8osLtR%2FbYsnh%2Frks2MzzC%2BInsdnVeGl%2BaEhpoUwtbPmzgY6pgGQeZTYcOn6yJm6BycXJw%2F3Orm9Hr1Y%2BloSAPoUMm%2BNFUsDSe73QCIzouBOGWAO00Sk2H78Y%2FdAzOfWLg6SROQf8WAUOvgd5ray6%2F9%2Fm3QLppNtKMXGDBcGWTMo%2Fnm5Yw69P5v%2Bp33YfYFeB%2BXwVhQl5zB%2BCw%2Fi7yNmt%2B67L8E%2FszjzFwFUTK0MQPSLQVIpThp0bz%2FAekL%2BcBDXQSynnoewlBkBaoeE&X-Amz-Signature=3399f1b8e13c180adba1becbe682988562399c0e8c5a672af446d9194263ac89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

