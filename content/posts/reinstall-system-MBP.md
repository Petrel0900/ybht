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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WYKH43S%2F20260510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260510T022446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIAg3IVMajqJsbpms4v%2BL0frntX35HoCfORrcTqT2bZ8KAiBZ3wBLBzaPV2QtuEir7oNAXUkEFtkjQoVLBufjvmkyniqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPF4irxCYlHKQhCG6KtwDQhMwt%2BiJCu4a%2B2lnsYr4Am73zyO24okIIrYvdAVpsz1GFvW5VgxHSrfZMpefk9g0hoK8ejJXB3CybK6p41HivXqwV3jW%2BjtmuWNFbrF9QbNPxzWiCXBzEH6GOGAgocsKj3qhyRZGpec4PoxieAfzMCfof8MCDodSzJgjNeXPcyW6gqNRgLcnRykyRJkRUcWYXURpbi8q38Lko1UU3rX5ZxHxtKY6O5Y8mZrIUded3vky9cIQAvsx5j8L1zSmdyBJVLKu72qDF0PnmLNVPopjRq1JiFUoju51TDBG1Pc8vV%2FdLgYFBxM4yjw8prxr4M7n1F3rUqqzEXlm%2FggTq6hYaQ6OrdbcQh7MKmA5t9eoXJ6LnqGrMJJt5zR9uBNw5Ne3EHeFb6ZJOCFdvC2JiGWKLRvpUghpdL7Y%2FMQzbxoxRFLdtNP3HcxllgjuWQXkzJwEqlR8TQXxdM0dLZyfTzerZ4GJo0svgS7U%2FBMdOs53bM9E27myWnGaUVjQgYRHEtbnG2avf%2BIKynLjLsmEBqYc5QtJYq3nPBJMaLdjnp%2B%2FmhaQHCAuCX23xvBIc96ZjTtCsHgK3PwHUj2KwYRfNaUbgehSaoU5xWjhwV6or93lc3m2P7m%2BeJphkISeoa4wpL%2F%2FzwY6pgHfMzzUty0Nh8GuLVhLA8D5HkwrhkDBQOuFc45OOVkvTuQsn%2F84vGRfNB7tVc5H79FLNS7gsWyemdQUUR0jQIMwFImHW28Tgo%2FPkxfVz1SjdQVfHr2oz5sZkbh%2FHhjHZhbqtOTd9iXD6PQkdGbrJbuufacwVHBns6HT6up2b%2BCNEUjY6%2F2pAxS1fs49laqQKXQrmoWUFI2Vtn5AuIjHV%2F8FWERz67jz&X-Amz-Signature=c583a9c416c3d2875a5806e213dac049e08fdf4fb93c51a32b28dc9861b2807c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

