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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676Q3M25H%2F20260305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260305T012658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO8GjrDNVfvQmVxolEoBCDlXhePmDCJoafJ2gfoTb35AIgdgGJw3CgD02eAKICco5M7RwtcD%2BlyjM5EyE4bGVVEhwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCanF09tel1gBYW3lSrcA6hEJ05PTjaaXDBw0H44R2yS6EtRqu1tcG6ITgawGGddN0HGawS4cn%2FPgFYw9MHgrw9%2BOWt0UkU8nmj9LhHRIKp%2FHtrWzkqDGJ7jjucMPb%2F1itynDWCc203cBKUtk1YD7CnMHWD%2BbUmBcoPYFnLmZuPGtRlJm6S8OjfMCvbNZ0Lfk1uY7h%2BmkeP5ekL7UrqLcSVtYFYSJ%2FYIaxQiCuQGrIdxduxLS9wUMlwSYs2V9EuN7I8tBjZfNNfMge%2B%2FL5U9pxxN7nxEM0WEAZ5v5bDK4SXMoUWU96GntTsM7JDvFh3c5OIjefUxfCi8nAPPKLKZSN9SWvxu%2BHycmlLnCgHZFqoNw9Kz5Uk22kADjnB9QNCcZuzLo%2FDHXOPKLIbJkYJhFYEKRKaxHe2rp87UigvKh2BiDzq96icSsIgxs%2FeE5%2BwUihfwfFpdLsusCx7TotlkdNqnx12CHRpcGlBP93OvF2Jw%2FQYO46pl2mfrJQPn4tI6347xHaR6HHRwC76Ftv%2Bpv%2FgV5lMHkWbiOqhO%2BgF%2F72A179XbdglTNi1w3tz38J%2BU8EemfPAxHe%2FjrTvigNwB7UUHRe5QVzT%2FIHN18s0zjbpO9b0%2FEzNMSRVIQEgc7erm8oCfHvPMnzJiWa6eMPuwo80GOqUBTjdIDEcAcaxRAiEHxGxVw%2F5P4TvFjE%2BV38XjgPQ4J1YYYc0xLs1qmVdvoN0Reu7mcnKGuXyznSGL1ZEB4GY7o3EWcd2uY6IhojXry%2BP%2BQPmzc2izbejGtNBLArQ4CWkFd%2Fw8EYHtfjAugJtJR7Ss2us0gxLRVep5U014IWP%2BstuhMOTK7GDRG3CHZ8w9gbSPNVgqmv9rgKjNyxWF3AJsV332de2O&X-Amz-Signature=8bcafd46515639d10e4d2cb15802c929d570530280faa1c68eb452280bf0a258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

