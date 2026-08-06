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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2C74NK7%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIAT7s00Y23p9EyIQK1xvpHoLbua06Hlu8AbeUvJj2kzSAiEArGcqQSxXizBa%2BQxyr3h3994DCHqpIZ8crYdyk6Fpidkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNDvOSyhv%2FMgG6OhcyrcA8xMgpGowaSaGdtMrQ8Ohyf0ftgawbt%2BSCDzQcpiM2zNFvz%2FnzmzsFI%2F4nIJCGXKoCLYz%2FmGxZmwA2tbW8%2Fe85iAgOMcWeJpxLpfkZN5MkizYgrcoXJcyAwn795BPNF7YogWdUQmXUVHBAVlfffiM%2Bq2U69eHQltyRem5kewM04MV8g%2B7bKwFk%2BExyyL%2FUYlzH%2BA7jtgRsCUpsmjjA%2BVpIP88R3UQm5NoTOZsisKUd8S5H9Kwohl3TKXgQX2JeYumiqcspj%2Fh8UvG9sQn9OoTOolXyUJDo5omiNah1lsXKsKBF90CSzeHytJWBn3qqRowBMIHlalVa1szkRowpCCbHt2TMQgRx7nVtcE15CZWMTY%2Fyx8%2FD%2BSeL51l7MpqvAPti1gA7kSVPu3%2BlWxuUNJqIjq9KR8WOL%2FhjON3827vBuJa9tg89%2F7p7DzYFwm1mEhG18CSEDepXbJ3%2BYOgWArMhch4ekQyNYEESO%2F%2BdX5OFugsL2BcBwy4DbMFqGJJV2ET%2BHo8pvTXV5HgXcFVS8z7RdqW40T4LcfWqPRgMeclTMabrrdeT2PNyAO0VP5%2FZmUJyLSldAF78rCZYBUuHhz2MnR6f%2BksMTMh91vUAdWhS8KhsjfCVamVWcsMy0PMKalz9MGOqUBA2C8h%2B5rBh4ylbLoMXWkQEHje0o5OvT5ep6INfgdcWJQGVDubFsNJ5P%2BCoOF0l2fIzVcgx3h0%2FKOZC35h4rBGS3z6sLVomlK5Mb8iAmi%2Bju1I12wcrJQptPhuA5G3McbQsTbkKfBEHMNutE54K%2Fgx7j%2B1%2BWxnXxJs3SiG6AGNWB7UoRddFxGWWbcm%2BS0clr4kQKeT9kDdaVZYkzX8229rG%2FG%2FCUp&X-Amz-Signature=0c26356ef6b725d496913763891e92c5f951409642b734a255715eddef237f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

