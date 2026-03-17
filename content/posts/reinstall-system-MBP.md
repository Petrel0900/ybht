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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5THFZTC%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T012811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIA3RXxmnVCLAmJ5vWjxhqis8kNIbefJSGXgfD5SEb3uxAiAy54FxYgG1ah5qnLoA8brr92F%2Bcitc27KHgF%2BDxAsw2CqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR5eZJEeG3loGqBmdKtwDJgV19%2FvemMRYpqAGP8%2B7BukU55LVgBuTg7LmbNV3flkyDPjocF6b%2B5Y%2FS%2FDIkFKppxVPOOonvYrXN5ZYxoIxPRW8UQVwyGnQEX2IKTg%2FqrQtafEHxobvYU5MSeOi4K3vm01jzYlVlh2QvDrtPqpcGyBWUASyBvxrQ6flxDKhRp5aJHIWqbhUTor4yZA83zMlJy5btNxsvybVhPstM9OJTbeucjgGs6mlfVsiJ8qE9m%2FPyb2C7mRu80Fdy0b8%2F9IWe4eXmQXCbArHILyRF%2FrRkSz9ILNMEbGp14NUer6WNVYtq4z%2BJqDSMPr%2FtMBq1liyyyV0qjd%2FazuiDTwryG0IyswTFodcWj5T8YPiwheDdlbs5KvAKg8OSLhQoeXpSa3LUcC9dB5wzuZ9TuPexkzTHO1b6FxvLmVxNTfRdF3pzUlxaC7%2ByzFUsgJz2iygTDDZhvuNbNLh6FjwWQokpWsXmTC9qx3NSGLbkZxzRyNlM8dXnVzOplNpQHPdKbpnu%2BKtcnb9wSuBuoOgdBJgPO5JJ%2BsB3jDc3lvUyE6kQHtZsAFTsSJ5MZk01lkVspIqsEhEQNZ7KcXr7jchjiBRLiWeO2Lph0z1IxLcRUQ4V%2BwFV9VMRmdNwgnkXeZ3ySEwybvizQY6pgEYvj30eJdSajoNrifbROH%2Bw%2FISHb8KVMqfS8N8JAGZygHF2clJrMB0I7%2B1wWPdTzMMbk%2BXpECpf9g5tI25ZIDaHGsMgeYxcoEHj7DtCApxO6KoX7sm3BWBJfC8lp8oH921fKsbC0SWODNnUGlsoA3IORSEFLi8T9QwE1GEVOsgtzDlU0X40igZ%2F9NN1cm7NknuGeAzqV6pG4ruiYQlmUcuJwxAGWAs&X-Amz-Signature=bdfa066e882cc8bf4e281b85cd01d839757196a9cda33d1371e1bc1db344f75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

