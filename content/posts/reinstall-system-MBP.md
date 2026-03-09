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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ELQLARM%2F20260309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260309T012747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBTBwDMXTlIWm0jxh5h%2FCxjKVRQOjXdDWteiwVPzhmAGAiBGdxpVxT2XHpbzcQ%2Bji3VKlHm0RRVuSQd6G18nQPg6bir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMiZMvzs0kxv8tc51GKtwDbimlJi3%2FkzH1Ivu9PAoQR4R8ipb9jWIRXi%2BvHXxXYgNhkGwXGa2ZSiMpi1ldz2PyotiZ5%2FEVJL3%2FG7Emv2g3eYWWrZsyKndTOUbHTXrWo37Vc5eoqnjO8NALaHLVlCRUaaYGz5GUoST8GZRstk%2BWsjIU6igHYj6Kr5CDIHArMzS%2B2dqvJzEycdFKfNtgyKHEwfcZD%2By7LBD8xv0oJdGaD7%2BilOWh%2BgF1WxW4w5m0U7RED9kUt3sUTdviHlK1KR0DIjdD47jGJzMLq4J6BWuox%2FjNYA8HcnrPzgkzIJMI%2BI9J0NWQUY3w%2Bot5qATmCqK4KY8e7di290VMS2FeUjU%2F%2BKv1cGZBCsxbqRAe6owKmpVj4xSoSsWC3fbhSkttXhRiKie0ZAfkuiYV9Zj3YFEsZiosbU4kBXX94DrhDmtUECw%2FoCRrhnGtPZRYhzQm8rpocPr%2FiRRKVQApzec1yFp0XToSbwZQ4C3SvGjxc1YaiEPqSyoGv29zZA7uGpbo4rfQk2mVEKzpxP%2B5pH9P0R88UNT3Cmu%2Bwy7AcF3hBK2EFl3tCwzhugb1y85HaD4Xc3Qr5icqdD2fQx81kaq4XPhASajL8PonBh6xIQ5kHk9tjhAhIMaliFe1RbgCF5gwp7K4zQY6pgF19HyGgLuevoCoFIVUDJVXoL4qFNq33hupF08%2FNlXQUap8YSintB%2Fty7PnPQfV%2BpUibhg6L2KZb%2Brpv6XbSprHaF%2BOoSeIEZqz9CTti2mkFIzpWTP%2FzlifH4TzCwcW6VhJkPniS74rFkPNOu6aWxhqPQoV8w9G0pVm45CEDLo87F1tLMFlDJse%2FxeCNbY4SpD%2B2mgFO%2FkAWCZTr%2FEvfRc8%2Bkyd2ToB&X-Amz-Signature=89221fec344644408ecc0c893eca239ab30cc93b5231d28e0f564a9241bf9a03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

