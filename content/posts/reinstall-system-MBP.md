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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FECRQPT%2F20261014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261014T030159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtFA47FfIjLpNWCBjSr0zUMrBCTLQLQ1iUcxeAX7OR3AiEA7ODSn%2FiKB4GweW7A9WhLSNwUhGttBNUG8PDAaMY4eQQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqRjhNQhZAUcQi5iSrcA5UcUL8hFMZb5%2FghDNKPwAmrZ0AhzcsQYbl7FOYTj7aRqa2O6Qg7w0aCyCqHTTn7FPVaYt5lp6gsSJHzK1qj%2FRtTDDl5Hh6fUu%2FNqEIt5y5mYLASQ2qru4sHC02VWhacABz5nblfStqqrYsW4Qcdf4qtauy7dKDsUB9S9NlpMxMhCFN9YFgXbzRsXiJmJd5YITL5cng4dWD1%2B2kb81TZlYS2%2Bx8xS10r653Oz2GWoWZhHJmfuc1lDKFhgds%2F3Imz44vgPY8O50C3ePk%2F%2FXrBNGEQ1epunP7aaGo7x8TNWfV6mcp3NTJTtGgClhNezNmAMfDfF2GYntzx67SkbeK4Qu1DyoGNktn7KDkX6vMQutWpg0SNbKwYxKQBLFuGkVifyXwzzGgkDdn5L05rl16klHo05Sfy%2F5SSlvR0vu8FCu%2F0ipVQMn7StSOIsMnM9tQ%2FGVOoOn0dbEyOJ9RI5UWla%2B3JQQfO3tkk9BsU3%2BFfbymJaNUqyEzYGsXwkscGXA%2FFauLNFzyRBR3FVVIMmYqJI5lyAgLM9vgYTG5LzExuHjrowxShJJgMNf94Ls5cP6%2BwP34FlekLVzNkLnolqF%2F9GFz3TOO0%2BQ7%2FQw%2BjAa6rp3y8alMdQNXSr6Nt29mbMJTPu9YGOqUBQAgI2WRS3uuL8aa0IV3nm6TMnwkguQ4qrkFHVCxvWCxzyUkzQ3fCz%2BIl6yLOy8rzoKWT%2Foyzb%2F85O4VuvRuL2c3YMDDWhyivOfZUTBImsA2E%2Be3FkQoPIbrtuLurPC%2BFTzAQ4KF3lr%2FJ%2FLNfBvArrtYxCkZhGctug5foWbq0Aqp%2F%2FCcdA0VfPFzLSRkX7xpSXaqS6LMscpDMG%2FDm9VOjvYSkZ90j&X-Amz-Signature=9db872059587784becbc0133a125f810a8450a7e10e29bf90d205be5f1e8e3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

