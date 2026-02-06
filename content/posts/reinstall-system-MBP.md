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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTF7HYZ6%2F20260206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260206T012527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCih8OAMeo2X86m4vENd6AeaJxMUhMns3%2FgJnUZgQUBEwIhAP3WcJHEIZ9E3h0iyRSdflQM%2FlyNoceBYv3uluBCJePUKv8DCDgQABoMNjM3NDIzMTgzODA1IgzdEhMBgd7jBESuVgoq3ANM%2F62ZtsrX2bTnQSPrWht2QidSJAwOZuht7GiETfNEii2OkjsQvgM8K%2BSn2mcdQJ58QPAnB6bGO9yTT2uDnDv1%2Fl7rUeQKvPmGXvcVp0fFTXde3SiL3O5szqM3Pz59JtzWC3Bx5%2F%2Fmt0T%2BD2og7m1uxvI1Wn0BDrMPtSwfA%2BY81jwN2x%2BXs5K20zEbYE%2FKsr9VrwYyA5a0PUO9hWFJF3LDiizbFOzhyjnMlRw5FqTaciE8Ee7Q93GebbKmCEmvcFm9%2BpZzf3%2Bq3T3sqYQSzmiuakGggvfHN6TzKRRKbgj4HrNCG%2FydSi3kJpIeX7geyNwipLGHMNnIaMii7vxpOr3GbLhO2B79S6OdVfJGkj162Tlw6odATGfp5ggerbQFXNTt6VzIEzrKaKkhFHpjQpQ%2F8GU7W1B5LJO%2Bnz5Z4SxyhuJw5HIwsGdr5Lvmdgi3hsafBq1mpOJKqbxJEB8ruXM5myizrTpbbcyYHwuSfmogUZXU8fuTZQzgfYFFXwlunrHbV%2FRdxZbWLawQhm261eYeVXb%2B7SGeQY4rlvp7gF%2F0HqNO79jf5Vd8Mn%2Fo3PIyYgAgWX0dDswex9G5OtxwVF02UX1R%2B2FNkMXpCalC6UoXol2Q%2FhgRwte%2F5qymoDChw5TMBjqkAey2uC3x3D9PQwAbIULfEo28B7WxPjLNwxo7jsI9KNYxsCinq8wdkbdSsgQTUvyhFTnG%2BdUT6XZ7ci4Fbm%2Bro%2BjyKUT1t6vxc5gODYnwFr7SPqfy5PrN%2B0mkqu5kU%2FHmAeol3wTTIhPbBq7XJHclRiw6pTIuCISHwhFsHiTITXbyirp%2BrfcMn0pD2Btr28wdARvuV8xrZYXxKBPljpmcvZi0pFQ%2F&X-Amz-Signature=e9c3ebca4311faa34db5002556c15a6f04ad094095bcf5f386dbbdb5bf568ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

