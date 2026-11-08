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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466276N66JT%2F20261108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261108T034732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDmlc0eQ77tMnrP4tqwLMqniL3pMGXJkGYgi%2BrYCbZsJwIhAMdViZHsqKn%2FaEWDQjDtaNSWcnciVo3HYh9mP4W8D6NeKv8DCAQQABoMNjM3NDIzMTgzODA1Igx0ONhb2FHFEiYQhd0q3AMnGTf5sUO5mkVYe%2FcaTCKuOWDXwP6pjrccFuZY7Sq7JLtiyj4xe7PHjLU0WqvK%2Fy%2BQsJVmmVhR0qdaCIWnC5Vk%2F%2By%2FWjKET9RHtxX3UPKdJeD6OXzDeQJS30g52ADg0w%2FFSVSrxljoARZYGP8fG5KYitvEgyIa7V%2F9RuJUtLF05RgwUartDH9XTu6rz1Mv4sN6LabdOGSQp5nx1GO0TKz8NRa6v9KaoZX5k1qVD7EDW0bjHF2YxPAENKHYMcq0A51qC0rhqWEPHVE%2B22b%2BV34W%2BcDIwM4VB7DzucJS7LxJnKj4VVq8wh24lfMF%2FwKKpg2iikMZSV%2FsgUC9J%2FIpz3tIqLCdalbSqkXbRbZsR80EYp35NzyDnf9W%2Frj%2FJZoUoOZFe98Jt1DoRPKkIclBlHRn%2FGlTZH901MVUI8lG%2BWCg8rW5Gf9GmTwM4SshKu4wd1bGkBzzwMF2hAqkSBfLkNSRQ%2F2Gwwgu4RAwmgkNa26IwgEhR8ka88d2W3ZY1Q4MN75Twr%2BsUer5yAfxy%2FKYVGCSxDw2OPouMX0Yrc7EjEtDVXvEC6BwzmBBB2DeBfMA4dSWdMO0hN8sLeAqbskdcR%2BbSWtO7v3OlDyw7l8snczbjPn7JAOgZw4HL4zCHzDmzL%2FXBjqkARPH0HNczF7W1%2F3rePAoVOwtk1e2iUSczjHshSTEUC3RXKNkF0aaGceM2Gk7qh%2B1fLOKfZCV%2Br9VqRjmoQG9Jl%2FFohHzWchA1lcj6VxT3jvrb1xkoXiT7FUE3%2Bma7priNR7mTpH6AqI6VS%2FoZnCKqlN%2BhHbmXGzUZn00j0hq2s3fQGwr9OtwEDw5RDFNnrHxhnxexiPGuqijtz7S8kCz0eAJ%2BxCB&X-Amz-Signature=ca0f37725975763a47aeedad1adba6617983c18f91c1a42a0a6ddbbebfc971fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

