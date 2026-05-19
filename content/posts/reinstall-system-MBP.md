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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6QCIACU%2F20260519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260519T023948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIGe5Nz%2BCBPWkazW7AFBjcjGnMP3qCESl3aeXQNbvOkL%2BAiEA%2B1tMPCeGdGE0EPyZy3GylXC%2BELnHmTG9eLYnDWtVehYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUEJ07gbSYcJcawrircA0ImjvN6m04nArgtCKR97zjNsK1PHt%2FWMx3pUdZcr3xp3kENpyLFzznu22F0I5Dz%2B8gAE90HRWzK5iZwM0451Pc7PmzwEp%2BI9KJIIejatI6LCCmvSsfn1WBFyTYTrolTvVLtKu844cHt0Bp%2Bma18IaEJOE5ohxXgrlS2a5xURoXX46JkXEFBfvJcyaQTs%2BPnqc6%2FpzYOsmFAMpDCcFHp5vcr9w8pBjzwe4YN%2BRo5vP0eXOFJWfCt8%2FXwfxJFMCn%2FhRJnRgVB%2BA9LeTtiG2IOx3gT5VVUv8qdRz3LGXc7ARdvCPyXFE73HsF6iXML4i8QColp%2FY9A1dGCUU7M90XDGn0gXWVz9Gpros9hig2aUQEY3RZRZ5%2FoPCZVgwyLKdaq33Qj0EyxLXNjGIugqmJws03dL%2FjRQ9IDOTUNDBfQMsanJDwEUF00HkQnHoccGL46deINGa9kEph6UhXR77meKi0POF6BXzXjuyIvSOLgTRrGjj5cEa1A00HtPo0DLHmZLQ2PGUpm%2BMqU5cLqyus7hh1tv55EtObLJyz31vko0XmcsLGVBUx0srXlSDSU%2FxEskG%2FXLo1kcDrg6cAQs6u3KO6ro8mVhWCPhqiElDtcVhfywBwv8J2%2FtP8gX8BjMLWWr9AGOqUBu13z8nQYgZxBbKA43ncskx4XWACbNl70WEFNhDqB%2F6KhIe5nkChDO8lOLEz%2FSCgXGEy2jcYfUemXEdL8z1mzKwiWeU1UjqO%2Bztdi%2FYZDTlDvk2942bOOyYAhUUkCEqsTXfFp%2F7Z93FcHsWv0tFhn%2B0Qj%2Fo%2B1IAnr5HIkNQNh1AuQNV2%2FWSu4bUFgdxikdpJiMrOZS%2FuSe0k6duCv3VvhgaDIHjdN&X-Amz-Signature=023508fae41459379b43236fdfe9a20812b402a5f31df6641e11fe27a1c57e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

