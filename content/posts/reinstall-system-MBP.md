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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN7ECQZH%2F20260219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260219T014229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZjT0t45%2F1vYlWbYZZ7m3AzTHq0Byi18qc%2BK0Azsq%2FugIgYeyC3Gf%2Bm5y0JWBudZZU7BfAv69pGyQtzkcIFYX%2F2C4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFK3TofmibHynRGUqCrcA4F9AnExpXsezM%2BAACfB5wiQIYjORBRcQnyixfM%2BKGPe%2FIAchHhJ%2Fj4qGemkZu0LG%2BJaVcGV%2BXvnZs2an%2BBmdbFECU2%2Fl8NO%2BMk1zwEXC0oBVe5Y2oCdqp6bc%2F%2Fg8iM4pQAiUFyXqsVf0syEgHyjHN5avtkkedQ6nNXz47A0R7YJ0HaWA8TAWQ8ysqNPbb2yegew8nhSk93i3WrseL82jRwh4V6GvfQF5VPiDJRqDxBlGZAzrqZs%2BgCosI85nybkb%2F%2Fx4yeDjf7bu5xreDHfsvxaIdlI2hYHOiMUjwPBICu9AptX%2Fd7WZ7DGnWspU6bvwCLi8UhjKBbg5g3YFM%2FIRqo%2Bp0a76iojnrFZdkOYthJEQE%2BoxDsQTbPFoZ2hXCeAZNjEhQClYKTiiNUZM5lPyN6RS2aQdr4%2BFk%2BFzX0Z5ZPy8XD%2B2kRUlrMbvTHKUUsfyc%2FHUWUixx2ClwFqmnRH2OLiJ7TSZ%2B5jraarFekX4sx9EtjSSKbufDGxSPWKALSJlG2zQkeOtPFQ7z8%2BfrRjrA24dcBjWXyDFW%2BHQ1QRUoT7SO39DzsQJ8rX%2BE3BHyqfsTNVZldg6alY%2Fc5rOEjcZyhLgPLYC4BfJ9QNLBEKkq1iA6O3Wp4muP2yZBjRMMLF2cwGOqUBMbcC3xcaY1L80xKWhiZvPw65SQqZ%2B%2F2OZzzuzV4fhN3C6elLAafkNIcthJ16WA%2FP%2BheF3ysRah4unZG5cgxdZIe2v8TMddNeS%2Bj4JKvuRjjthxP3lQgnXHUSjzpXNs3xUKB%2FHLwF4LqILGVIQStyQCEzNfo%2BHWKBKj8N8M4mOa4CosD5JGFw1VCPJF4vvM5iohnhHWhvwxrmDIb0UnsLyzXUxVob&X-Amz-Signature=7b6cb42e3d3899a6b1cdf86cb3a83de6f79eb53d9a2260ceebce147aab99aa1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

