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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XZ5XT5A%2F20261025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261025T024105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICd21T0kZPKmgCclCz8lqMPELsmEp%2FUJs%2BDHwyw80GArAiA8qOO4Ij23Z%2BmRO%2BSQdlrOcwL%2B8m%2FeUQpjb0%2BitTM1pyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMumkQrb2F0ov1JL35KtwDUXNxuAhoeYnFkzLKtEHZGiNjCC4x1M7z9jRuAB2XJrYChJge4hL3yMfAZVz9iWGdtCGd93E3ObQMRwEKKeuR6t5GFvqJZcFcksFAcXaYPu4WrdAQP2K8%2BnlVkvMyYV2Ktdi78d8%2Bw5sy%2F%2FOCwprzSUl1rE0e8ppGHAJT%2BpZTVsgfMSKZe9RViUtAtbf7BqDXltOcGd%2BiYB43PfxIYxuY331Sgx8MKGv4BZKTUWbnPuLReVi9E3cMdikNssVXKCSiGbSPTK%2FaT53T5p83ej6WeKl%2FnFA%2BYE6%2Bg4zvi2cGbcUEBitCAPoeMPFitp944RRVenpqZTaSzqimGimcvyHH7bn8HIpT%2FG69Zs3hyqnyN7Rw%2FnQ5naImqr%2FZ420ATI5WXifysvDns7CfpNyMY%2Bs1hg2NUlsTW4UfoSiPvcOaYSLrx7Hx5u%2BAJZz%2Bc3tA0tclE44N%2FEyjM7w3TtcgnKJEm41MY6r%2FQQI4lR2%2FNbgfgiEXTq5QiCvydN%2Fw%2F1cFyMkgZ%2FHoAGfqklMQ8Q%2Bj9WC%2BEi9gJ00AXurtZnOCyG7Zuk8%2FQ1dscjFPyuyqT7J0KlEc0QxgMdv2oQu6OHjBCALx5jq5DH90VjHcOsGsDyExNcsw2cAAg3nItNTUHcYwve701gY6pgEfqxDhJlT1ahncl6uh1lPXoZMnwwKSG9QR7uFLa2UPh4dv%2BoIOZRrW8FLwlCmDNEgs09Cuh2Hs7UuGBng1CQt%2FQ1FdhdegbW5sKs176nN%2FbxuD7WK56QJG%2BzUIf5eybr3Nec5OYlBo4%2B%2B7zKrehq%2FUNwOgu2tS4MDPPiLlj5MKJfCphXB4%2Feu0dgn8ZG74XABHa7mDQXlCtxYKKPiuEKL23m9ywIwE&X-Amz-Signature=b1f4576944435fdf3742728f265ad9508087d085f5ab121b77f663a7fb05f653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

