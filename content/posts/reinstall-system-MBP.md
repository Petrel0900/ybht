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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY7FVEOZ%2F20261021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261021T024952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDawY8kvAf8n4pLPUCpvhft8nJLPmMGqnYQfBJi%2Be%2Ft9QIhAIU%2BZ27gWJNUHirhNMgrCV7gilvT20sz385RML%2BiyH%2FsKv8DCFIQABoMNjM3NDIzMTgzODA1IgyCbsUE5iBMbJUu1qYq3ANPLT4oe7nnXTf7rUR9YNq4MoY5aX%2BQpuLwcCByQtCP4YK0rEx7AXEOBqzh6ATBr%2Bv30HXMHSmxdsAnZUD%2FmzFLKexEifOUh8lwBr8z7jxQikY6KXvGOJIe4fWyZEvn9q1cM4snjp6aomUdnNtln%2BK%2BSZ8pun7W7U7PI37GI4jH3rhWXhdCP645fKjiMbGPGtdwgOxNufyBsOzBy%2F5Jf1De3w3zxcVWx3EAByjdOmbOulWIKxxws5sNSqfwnOJu0bZg2gW4fHvVeDSXqRnCo9sdEfAvax3pasMkur%2FJvlNliTYHzvX98%2BXFd3V1UTjiODEra9y%2FBPWATUUAgSNWiPNkJ7ZvXzw5sK2ykHhLiEx%2BrI5bAQKMcQBRKETEgYVxkdkhfFccNjDgo01Fj2wo27ViG%2FKexSIqcbghnQib9BjQea2yWcoJ7osLPUB8rM0RVIwjyxxQt67REC9XY8HHW%2BdoyP9GTTN7wJrmaslpRsvvrh4cF9ruCe0bWV3LOPdkUJM2KZw7YIJL9pJjMu86hxvYY%2Fs5Jgd%2BSb9r4DTKL7gxIqaJh3dkYhLvyQPiF02Ia7IBrjbZOewOMr92X0kwl1mdW7eZuF0AATD1%2FJFon19KW8CNDyvEjE8raNZC9zDbl%2BDWBjqkAQ74RYlhfISTRe5e6jqh9Ym90diLM2xCG3Qg6q7DaTFjMmq%2F5vRHGLtoEVkR95YSud8mznwfW7Z6i96gNEVEhnAL6wc3Mm2noJAasBEzUO%2Bq2lQut99n9BHzb7EFMuQvVOCJeAnGoQWwQPdHXb1qEq8O1tn8QJlEfpVYyGUpZ8nY92JuAaMiJbP01yo5ugmEC19Vf2ZwLRSvdrcOy8mSq0feOLKC&X-Amz-Signature=9e3e222eb119516aaf8597cd0d9495bb67ce4dfff74188e8e0f316b7f65f7d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

