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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOJAOYL%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T005011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBaQCtWzAtWWqsX8g46nSo%2BpckRDZf2JpWZc0OUArXhwIgSIVZ%2BUhpPor2o5FqWR2g3h3GCZL%2FggM5IBe%2B9u%2BSFYMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMofE8yuRJgAw2oxNSrcA9BXPTX5Neua4UaCvtPzruX3X311YY0kgqD0sK8tRK7hLsvaNRYPDjp2kpHM3MRa0DewIk2WAPPOo4UfdcNtBmFm5Pw3Wdq5dG2dk8k4%2FncIzYvXDvFLxSsR8I80IRkjb100tMG9PTSYVs5c5am%2BMs3KlhfC4tyRLbtyjzz%2Ff9O%2Bcnvbpkz2tXW%2BSQUURx2g6KuG%2Bmyn1J3X4X1piHNcRF1kvyfnrVcJRGexvSCYABgLZdOGosVpbtUiRauQD7ARbAzw8mMhn6EeNerrekKhdE8yq5cd3%2F3mzqodZDRulhBcWwR1uCGgDYO%2F9wXoqWyIEghTgFx3UPFMGao5yt%2BhkWrCU1xyJA3P7%2FHjdSWyIfbvM5N8c9nEVJzAwnfcmejVfdNr4MoHgGGXEY%2Fid9hcJi%2FI4XlNGjuFJHaLKijErZeVY%2FtvArZQZUlr0Bw8mFYBI5KjP9kFPkMzCyWYOV80TF7eEHjxa5ZKbfzl%2B9kosUsqA1RXo3m%2FaeemtAszZUz%2FUosMervpd6%2FpgrhjLxHOAJJHNcW2Eg4gO%2F7IsZeBa9ceCrk%2B4UVsSwQM0qB%2FoFENE2mEOv9TAhXH%2BwYnj4b0yCGAWtGPK%2BI0jmBxuNtrwjnUL0ThMHPzn1lFvoQUMLabjtQGOqUB03qGz4JRPqpPiQkNtobDUsaKDnVAXjJIhHL0PffsT0tmKFCGdxSNj%2B8uLE0k89h1%2FyfUNMjZN2ELuatQqmtosEM1XgbEYqRCkIayZkGj5CR38GIAAvEth3tFgtF6esssw20ETgRQlq81ulNabisM%2BzNlwjZc2l1oZPIE58i492J7aSfkuhombEtwq3EiO8S%2BiCE66fblfOWQ3v53MKfIxCfzQZlO&X-Amz-Signature=6dab0ae329c2f05f9903a779ace2de967afaf70dd668a0a380e99e4d2072b3f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

