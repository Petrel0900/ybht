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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU2YBUQ7%2F20261114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261114T042756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCksgCALWK094ATDMFaGrpGAf2uw8WA%2B2Q%2F46F3QXQHMwIhANUtJeUhP%2BqbfUlIzl9LXItYfbhqx2UGL%2F0SOP%2BuQPcLKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHO0d5YYBEzT8XuZEq3ANXFMTZGg60D0zRaM%2BhGNKURbDbpy%2B4baHiNcfobXKL1J19kzFKzwY1bxOmD0mgEJlBETzdqm%2BdsesnJYEOYPj9SPBKIr4TANKFqP605iHaLZmwn2khZai6AFCXFp2gAPiqAasIhn8iK4VXIMXq477uksF9BWNFaqIdWfHB5PwXSEtdI%2FQ%2Fo0iirHQZmc1MRT4tWa%2FrSSROr5zFsNyZYZnrcdxziRoNDkwrHQ9%2FklftXyKZ6z0tNIWlKID1MWliPBcdA58CTr54YBpad%2BRPYZ40LSvVup0lnt%2FFDrIJh7ZBtFeiMivbh1NvODbS9Uk7K9xqm0ljPGSuFPSUuWO8%2FaDxMP1EcdkkZS5hYvqPFbyugCvxAZKLdiqNn6Q6%2FZztvJu1qjI0Jt8a4SwAPqZ6fq8yyasKl0GQA6C8qNOcKWf%2BodDSnjhZCzhUR%2FoyPvx%2BwwS7AbEm5GebTqiC6yBb%2BbF61MwjEWfV7%2FMpQUo9%2FXSxMF36h3rxsSm9pkBUlmhmOs9pCzwBm%2FdAgQxXEImytJ9au9x9Yd%2BSmXMrxqebDR8xit1OVMJMHedtr%2BADkKDguCLHDBaDaLTBS7Gj1PBMiqN31svYQpiJwIdjUBCz%2BOgXfWRsKqCNF8wv0kZTkzCG997XBjqkAco0PIgiqb8k5amM2p%2Bt43nOU%2FAVrkLrYtyVyKi0PRhHAl59a17qzQkJK6T1wkIm0ryA3Vosp3WIeD9Q7KdfAKMPg6DFeaS%2B0eufi8htRQofE%2FJQPcf27Cwkt7pv896wYXwEYGclnEUPHB8lWurQQrdhNYHOzQlImQ5Gdyr9KjBRFYmXP97WstmDaPybzsUjijJHj6q7u7ML0jCDrRzso5hm57Nj&X-Amz-Signature=16b23a804a0ed53101e01ebf60ce39bc47691e9dee36bea5ae597a177238bc4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

