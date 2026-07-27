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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU7CD74Q%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T021350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC1rsacjJLZUEOLooanYeszhPANibjw3qixrBuWcRbFAwIhALBv%2F3S6i7RzbKPRGC8wcrkwL%2FZg3mwNC41PQ8P4JuDvKv8DCEMQABoMNjM3NDIzMTgzODA1IgwNHGWuN2vXgsDm6fsq3AP4MBQ6Qq9ABD0RuGpJwnNVXQ%2FAd%2Fur18DY%2FBu%2BAJTIvfUkC3scb%2FtT5PSLRxjFgqmGwWBn4IUEd00qFWOL%2B6hbPJ6iL49piHWcMP55qsYKfsQzKlfj5FtCJrTeXHxyaIBWPpkOwzYmQyaWFyLA29KKxo9xm%2BXjDgQ%2BS0yxtiNWXRbHncpM7PoO6LjJ26l%2ByTr2D3hLsym7NKJyPOEEQLBmaAb61a5tWN5yf2KOIzKRRP1Uxvlw5ODwDVTOMmo6KMryWf7Gxbs5K2qnW68nGF6zdY3uWfMEmJ8%2Bgd3F0BvHyktLs7sSy1Kl87a5p6XgBwR1LmyV7qcb%2FAw%2B17ITHvSRyVNeRGVwnym4uioXqu%2B0QI4rnHa3W4Y2QPWdV5xB%2BeU79yYFU7aeWxImVmaBueE%2Bb3N84VIKBQxXzm0SpiH%2BYTSsuLQj3FZh%2BqDS83V%2FORNrlGByqpLUTimQVPuEaCNKnoFZi%2BxsrivlHnejFEswMsBf2tMXVJ4%2F5%2FTpEA6PWWI1b5kxu%2FRKOzLPvOjgHJfcYF6ieFCvkoe0N7S6EgJaZmBA76AWR9FeDaY88aoreES1pylZFIJm4XAD1aw%2BdcvyNemTgEDV2yoc5npGJvOy%2BSX4nk0GR0gCbcGYRDD26prTBjqkAc4AsS4%2BOBvSOo0nYPxzq7Ji%2FQEvLbumGkS%2FeEY5g5kCcUezZl3sLeVJlX1k69HF2Qtx4Z20umqYMVLgHsxe4Ufxb%2BPqM6uENEJx1pi%2BYw5IHmANZalLgBurxlIJEC8fQ0eZ4PYZUx5x8kJCbe9uJkCPMeFelDwqf0SBmDMtSULRF96A%2Fo%2F5%2BExVtbyERM1KiUf6uE1gnlw7npG8l9%2B0es1U0NGk&X-Amz-Signature=1b7cf7d49df6dfe05ade108a12bceb1afb8df0e195157b445f50eea9f5612436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

