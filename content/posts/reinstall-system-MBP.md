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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6QPCH4%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T012923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFWM3dr2iMaTwHNpx8AX%2F7tOKnN7LhIjjFSq%2BeN0OPMAiBvYgbmdee%2FOhFCWYge1UAXfgkAuBo4YmdjuJY8%2BOI2hSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl0F9%2BdXv3OxtA2NkKtwD4Z4nd9dY5Qf2u56HBxNpYjraoUwG32ICqUNmFOBlXrUwnse8JGSP2i0hqQ2FxsaPcJJDjAEm4xzc0HMblUzCF9iuM6hxIwqeQUvfHklQcOOc2hqOw6PdpLG%2FPOvRMDDEvdcYtaVSDjPxIJLhaagwiGlBDACcD8tPUOT0KWYOuvuWXjoqYNAJVHCpqAZtbFfUEO813uj%2BVP416UfUjDZvATJyU3F9zQKTBrVZ187B%2FravNgEwCFqJEMoyabjAjD4IYwHEfaHskyvioRxlSp0tB7ZNVzs4GOpw23jMwl5UxACALlh2QZnO9oUFLF9pxRhsKDUrDwRMJjxwQzpXuSRJjbbfxGFLCk3lzaAvNZNXibQOn8XuTfxnbjskWIVIfenpLrkcLPlHWvSCDiChS7qp5b%2BZHmrpWarLqHvWCxwUOt9DnTrC9xFlX8fTrtsL9ThlP4hM%2FQ%2BjQ5GkyM7d%2FPZ6v3No6aU8tVC18ZDbRRz2Uf6D6Am8VtMI0yDRBuUbvz2FLms2n9X4hQVMADXUp1S%2FpPLy46orxhzwSGnTG0fHavi5XxDCjqJU8oQ2gwIGQg9c86B1wCxJZxnRY5iouwDBl2mv8OkHRgmjXKnLZTBVN%2Bbol7w%2BH33JJOX%2BLhkwyaXpzAY6pgE8%2F36lhYjlgM9KFHM3b%2BGIhxjMJ8rh3EuUu6skLOJv3kUSAmNlNeuXYg6SMdPPpFD%2F4DvKEq0M7pu%2B3bQMc4sL7CCx%2B8%2FXY9Etvqhhb7HJXT29s79ESu3HAZF%2F8dEQM23aK8LZ4E1gmV%2BTTK1h5eKgbxHVi26MQMwujuEqhTfRlkk1mCrE0PJHPT98zM4VKx7tA1uiqoIBv1j1ZZzG3mplfHrCBf4N&X-Amz-Signature=cd61f9844e2ba33abe3125f45a0c9177679f607e0956ce929f9e1dbc6fe3b78e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

