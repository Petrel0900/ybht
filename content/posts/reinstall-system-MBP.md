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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5Q4YQ5Y%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T025611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHRKAcqf8KWJPho%2FH0JTJO6wV6cTVcPFgSpPTQLL6QFqAiEAxb4GeJ4%2FtPWQkJcT%2FGsTwZ7slNpvMDICtuRWHzYdp1gqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNygYIW9T0Ulh0F55SrcA0n2iVF0W%2FIxtOFE2y%2BMF55Y13SZHIOwfrfkJFpQNYknR4jsf4PrDQDUPtqK%2Fwc5X%2FkV3wZbbwvg9kPrxxlLD2uPlZ%2BwsRa3P813KoVfz7pku5vNS7PG1R75RiWN9yFRDVRpjdre8U0Eyx3clCxVoFkUujtgAGxRJfE%2FpnbjCDFw1%2F24vZOqyQ7IHNm6lkcdqPSKjoHaxN%2Fwx4pYKX1k%2FOSkxbXQ8Le1eZoUU%2B8dwfb7I9PSKA7jDOZlG3mAlMTkwvQ0OUQwhPtpuaMeR6JIjkC8MRv%2BJOQPIuF%2FJHhEGoH8xuPiS%2FRNUZK7Oc8%2F2O3VzqZ44wtNvc4Xan5RMP%2Bs0Am3ADnZkbYlkvgP39qD%2FiXoX7veT9EjbwZ%2F8jR17MPzHtLzCaBbE3ZljU6l3XBn8wcfTzNAVBpXW0P4ayU0rVmc3fGnmGS5LZRHVyXsBrXEfAgKDNZepctZcDCP3Nj9rPKiqO4td8RzVJ1PLaSwkQkU7AVkS%2BxUxR0j1SM7bE1fm%2B5emFhqw6D1qMNw9LMn3m%2B9e5wwE7NssdrQA30SfWHV9iPXqX4NK7%2BqT%2Fy4LZyU%2BYff3XNkiQM%2FbE4Sh15x4IA5A1ywoU%2Fc2OJqGf2N%2Bm93CYGJ%2Beo%2F4P9TydGRMISmqNEGOqUBz8Rr2GyC0QFvcmBylzbMdNWVaWeDjusLIMGIThUqtPHuLdeOei7T8AYx51tKLneCCgkKrVSCuLa5T7JtRm2YkGtlRJ7WJeFDJwfRK2YGOUtKWN%2BaNHHNOk2t0HlbbALLv83UJbSTCPCg9vm%2FXBl3vuXQkviOzO8YKN1zdkk38ac2k0w9IvKbws9SPvkfiarFGEPeM38UQQ%2B7vakZ%2BnZtXgPaKxLe&X-Amz-Signature=c214540f0447fdec8e1a70960ba86a3acdf065a1c37c4bdbdc0e382083d45ba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

