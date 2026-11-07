+++
title = "15年老MacBook Pro曲折重装系统记"
date = "2025-05-17"
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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJUTUAXY%2F20261107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261107T040125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCCkVIt7GgNYpuyWGJRYTFFiSvGQV9v3NJ3ofBR8QZNnwIgCJ7LF48HBkvB6f9DVNJXMblYx1ktBUkXRdipsSZNYVIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FeCFIHdj3vHstG%2FyrcA3kZQoTTeg33KgrN8Gaiox2nDfsC12WNSeT910LCNP1xssDN8GEe4w3IVzRb0G1Tf4xTu0502Lv9yVALJ9Us%2BE1N3qVH6eUTB7c7IEob6qr70R%2BbnqOt3HSAtT3A9VEixxid0iTktGuV7aAWYlUJ3rNfWPCN17qsevNGPVjnigxXFuJKmE%2BTfQYAaHAfmz7kw8H6c9wSs5unqMpO145pX9k9QC6qtCgQBPrTsSlz%2FnnpJlMFubeP3MeHvMEOernJ6Lq1vA4F9NwtzMbYlh7D7qQYRA3rg5wmmQw4xxBSh%2BWkKdTYL5EWHCCgGqNSl5zvNwZDV539gWMOkPmZxtBGz7A02DTpa4c5jTJymSkG%2BusK630eUQgeyXK9gpDfnKjhwvQTyEft6TbqqYbJ1LX%2B9BKYgm8Xc2wNqf5VEPrRelGicDeUMeoAhG6N%2F04F3vFncNiYCK1QRVsHMg4kJvkJJ9lOfX5Cw2HuQLcOBrHu9qK%2B870dGpzVfnZi1WWbmbSIrIAGDlQ%2FFJ1NrcksA1Ta03GaO8JvO7CIlIQmv5tWHuCeVAICH%2F1ITDblPJIyxGCC6luINAuICxr6zcUQcLxEJ6dkOQCpHoQRs0kNbhZxbDObaNPyYyV6S%2B%2FlFGZ8MLmyutcGOqUB5A9oLi8rlLYJmaB098lR%2BNHX5wy18zBA0iDhKj8kcW%2FAP9iuWoqG4ixrqBHvfZzfDbOTllGYu2xXeVBiy6k9f1EUsevaop59%2BK%2F33LAiQX8Sew%2FYP0rEP7EGRZtsFRPEo%2FDfzNkLSAz35mYkaipUqoJ6f08lX1qK0p74Z7YxnOEzIweM0GOFiIP3pZjf1ewccVGTpMVYX%2BT9LSVrj1BZ62jlndPo&X-Amz-Signature=61cdbe9153232110f37c517035570840af82d197bbd68ffa14e38e97a2db8403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

