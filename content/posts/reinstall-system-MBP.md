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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S47DM45N%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T024849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNYtjVzpzG7FmPN74SedOsdNsUNdHzPQoxllBELybnEgIhAI5xVDsZYUNZBBY3k%2BvsFNjhZ4bQQkY00e0QCqC6FqpIKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzjROawLd2dvKfawwq3APROLsjVjtodt7DUZ5Z2j8MfEam2710G8zOZGAlG6M1VXSmh16smlb%2BcJagWJnpyfaU8shDm%2BOAxBbmppnre7to%2BfIjJYXQddIQDv5AKhIlFJDLB8WntXbS%2B%2BBnS5BdKwUMJHPEkjA%2B6wUbWT7Xd%2BgoxBThGfFuSTic0rt4f0fCt%2FWjRyh4f%2BiYljTJNhuvOrAaq5AE8Sxcr85UWqWNO3%2FT21l8ckrS6H4HaINcjyV24PM35KSa1XbDqq%2B%2BlhvYBy12e9Yod9WQyNBC5re24rDSNvVDVdNCQ2tlMa2Qh5N14mLVclPrjVYmeBsdZoQHm93BFeDlczXgKEYl1eBrFVQb0MMphzo760ANtA0NBIqghku2J9cI%2FdZH82U3DBhaQULDDwjXsq36sPJoRVhCPUcK1cHNU1p1xagr22kayeRWWaAnHOmp%2F8xHgIUPkWsvctZkGJKv5lRjpvOIt9GWWPZew%2FN6cObjQaiQioGytCnSZFngCuYw1S%2BpMjyZtjGkYldMVdot%2FYkhwoYVVK0dtmm%2B1T5k5K1IPbQMA0KqOGmniov5hWlmXfzZDJUsSQbknfredl4lfoieFTLT3evUv65BKxBpOWWs5HRIz8TJ%2FlWQbKvXp1%2BGrV2gXEvGPjCCx4HSBjqkAWDjLzYveWbF1v44M2PS4x%2F3kzraXShR6VW99ned4%2BeI%2F%2FfN7sBSmr%2FgCFCHd%2FErpIInntSKbiaTH31R2%2BaMKd6xmt12xc1kJZLvv25qwr8s0XxjJH5Zso%2BLs10h1HQVzl6G%2BeZ%2Fc7FnFm8oqFeIgOFqmmF9lOuMJNgMf%2F7%2BnY7QfluzbdEPwpUEOi2buMpcnQvkl7UJOed%2BlJ9hbG1h%2FqOe8gcK&X-Amz-Signature=7cc0c878ac98dc1bbf6d6a109f1bb36bde39aff03750c306d56592bb4d276530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

