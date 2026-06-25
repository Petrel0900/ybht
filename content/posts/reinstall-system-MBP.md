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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7MEYRCU%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T023949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEBhiVtxB0HE%2B6V5Ioj7W3p1wo0xiLmuuac1aUQ1Bu1%2FAiB7NyVscRurr6y6mpg7%2Ft4%2FHKDDDyU%2BPUT00L%2FtqByPZyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMN6kHXq34gTUAR7NeKtwD9RlpotEz7oqwQNfjyN9lajXQqvNG9pIonYQ6NFWR5%2FN63gDgGeV83YX8KoTtS9NlvInClxnAoWX5L%2B2YebLJO8bolRXxcoDfGraPzJr4rMuGTcEAtpFGw4PeOPtgG6x31ikPf98HXhB22aBaJJDDKZSXp8E8J8roq5GLi3fu3WIe7iMRNBX%2BPdUh7S1SfAAe%2Fl1lpsHd9%2B6Aj%2FBFU%2Bu4Wow9KGxzJFG7BPv%2BrpYuJElMvMKcN4azssIxk8%2FgXP0%2B0UkIha7PQiaDIh5Y63qRW%2FDtdVqaMhLFjMWCYgQTBMxcRts6yPFGw7C6sXOsoRQGeIp%2FNmr40SwmjOCLhb3EURVyMQ3MVzFoUIVJ3frbvPlxT5V%2FtJSf47OW7%2B4YHd03OBrRGbjxBGXH9igWPeKSa2%2FRalH%2BdusKloHbIthtHSSX7IyXCMQcRl67L%2FmzoctbRCHNHD9%2B5jS0cLVI8qEAzzcsk%2F5JrLdJL0SkR8uONlYYvrzeJ2n%2F4WsNPRQG7rneuF3ADOoY08NePLkb%2FfW9w%2F3SIQOMwYnUoHOtbHR8ScTKVPe4mX7WNreAhzM0DT2eaXI%2Bmo3rIfHQ%2BdQYY%2FZvwWOj4CxUKtaCDUP7il4e5zvuHSuN%2F4AmU27047Ewzqjy0QY6pgHPTqowgICkNeUnn5TLLYa20JqSQ16nhmHGitqQFeTm16YoBbaKj0QzU0C1ecfdIoVOfTGPLR2SBYID2dClfXJXBpBai9wF2BPh2KOT3FZ%2FTpd8raCCTJ48K2Ezp1Tq77qj8qsr6qAKNrz0LOFHlf1yCc0P%2FFQ%2BU8YaOvR%2BOsARy3cIQIn%2Bh0hZF6VfnemxzgE2%2F%2BJ99cRpFc3AAODi7I0HZrxhC%2BNA&X-Amz-Signature=73cc088bcd2e5dce45628a76a6488df0925363000d81b5ed83b45e5db36a709e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

