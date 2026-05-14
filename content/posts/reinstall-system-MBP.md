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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2KBC5ZT%2F20260514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260514T023441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnAiQFe0R9rEfaX6x37nqynonH4Mt3hhdG6DCybLKLWQIhAKaxWhj1t52zSKhTheh3GH8hq6%2Fds2bVg%2FYxwCia%2BihVKv8DCE8QABoMNjM3NDIzMTgzODA1Igy478l25FaO15ihg8Yq3APTq1OsUo6H%2Bg7AB%2Bml7OcWBBBWJuypVUx%2BrAm5i2pK5P9I%2BZD4Ch08MZ%2Fait%2F0Jt39KF8czusq9aIOo4FhTCFz0CzyTbR5FCCJ20NDVfbEmizMqLGeOLDm1d1I35p18bhuuVjMXX96JvBJ5oKwYe%2FmlFzGINZOHnOHZG6%2Fyxag7MJz%2B%2F9OUU5YlVmEy5smgazMtLByL7udDyvm%2Fj7ibSUbc%2Bo9D9tl5lZkgKfkAyzVAbqs1I9H1LV5c5zeQTjU2fgu6qpdG%2BzE%2F9ug8JbRDZZS%2BjSj%2F4StTfx5KHBA%2FHO12a56xup%2B%2BaTf1w9wISz%2FgqvFQbhjms3kXpNgioTp1u5Pg22dTPYCMwxxIRyBeYQ6XDzjkv%2BoooymzpcdJL68GPPMRhuvHTBmOlCq1hhSsRtNdwBqhACh%2F9u%2FlIWXHPdK71GOPTiFKbJ1TGi%2FNaKK6obksZ%2FM86H8DJsXwoBz9NCsY3kWQTrYSDFHeKSIL3C8a3PNUaZKX%2BSfxsjTjetfgeUh2Vjo5YDosZnzOU%2Bny%2Ft1I93b8dSDQ3ReDQG17R91jfnDnzOxYNvGGR0DJjHm2ifYxtqXPqC8ZvttODlc5j3N%2BVrViCwZUmpCD30kw%2BU%2FOuwObX8Uhv7Yj96VfTD%2F85PQBjqkAUKXcyWS8dZmbArn7C5Fb0Tpcjcu9BakGVNWnV82vs%2FsmgsL4fO4iS6yG6wdfrH8SBHpuVBuq5Vvp9bpo57SsBtIrlD%2Bt%2BK6nB8St66dX4Qk%2FR6pQwPvfWVNeqkdcjefq%2FX98piX%2Fu%2B5C4LpzScc%2BFk%2Fz%2Fffo2a4Ma%2FYqwTAdXVQVhxWEdWwvL3wp2X5c%2BX7KRFA4UzD%2FYuTNpq4%2BZzQhhGjtTic&X-Amz-Signature=00d8289acc24ce51b219e940867341ce71cb66300375b1f4a70e0615201e617f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

