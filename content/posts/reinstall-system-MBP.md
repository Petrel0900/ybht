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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4G23FI%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T024646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtMXkty7dK8qqSPb8UfrEcGPFk8BBPqbmXlxfcDHujQAIhAPMKg7FwHIN3cZkKVgx7FuDaFPu6NTse6cK%2FFhp2W4VJKv8DCGMQABoMNjM3NDIzMTgzODA1IgxsL3Bm%2FVfo%2F5swpjUq3ANCRDgeUPTaPUZ9PHH5eBF37UJ%2FTXaMV%2FyA5ZmJnwAbysS2r4rhqBkUWNOPhhTGzvrNnYfA%2FjchQIfQUU2%2B4WAX%2FzZwkg1zu83fPyTbL6d4X5QYW4vJCRlKXigu%2F6S59vqFUpb7PmnA5fWSKQoNZcVM6yqp%2FCR26u9L7BhC8i4lKubFXB4ssa5jAuERE8omb1NqgOmQjXo8vRILs8V2hEZNuBhIA69%2BgOCtbDogF05RoYfufmxjPkFNJ0QcIru332p3%2F8zZE7EOBwEOqEP%2FZs6%2FwwPAY5me8bHstYWnsC0nphwbgwWxhjAJpeLwRxs%2FEEF64RdafQoRIf6G8dqfwPwYWLqKx8cNy441pbEJD19IXupT4MvmHo4DLJyGNCk24qKWki5vqzaHfD8WF6VNz1eL6wUkZ2I56GjFFVl3bgVQRkLf0JqETO512CtCnDzGQ23U2iaIQpVLYSQehBT%2FFREQ%2F%2FPUTYQc9oAbtOXRUiK%2BzZAdvifTXbmBAtiUKsh5zP9vFc7rS088VATtoxvUZaG4t0pXvmOEfsS%2F5nEsy0K0uXTuufqFyfUdgJfTWYgHH0ByTZO0kl2jKI9WvkGL%2Bzhv5N40uL4lCoAGG7GgpSr3pHNN0mT3OfVvLBnpMDCSzIjRBjqkAXkeSkc%2FQ%2Fikv9XRTyb6DT30bwpLQP%2Fk78%2FbswK11c0O41%2BNXDJhBJUWceTf%2FFiNR23V4tBNEI8LecfGes39ak0vSnjlx8fW%2Bv0Eh%2FhNY9EpMA4mvagTeLxz2%2FHgtENCgBuLRnmjjskyLHDNlKGyGMcxYk8eBv%2FM8%2BVt0Na2ApJLj6VAGWmqYE0Ti0tVCam%2BEeC9pC9lTEgx4CJsi6GJdnz8p5V1&X-Amz-Signature=7ed4244bcd2ba204b946fb3b691a47ef2c642ec5bbedaaf7694f963489505f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

