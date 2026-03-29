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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ABW25IE%2F20260329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260329T015207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGvRT3mJdjqU4LFw1o7AbOTY2jYOMWoKMU6VH6iDTjzOAiBNUOxPkExI%2FVauLVYwz6d2tMUGKyEzEpKWZTdkZZchLSr%2FAwgBEAAaDDYzNzQyMzE4MzgwNSIMt9dspv26ekGVeWrRKtwDvtThRI83SJ%2BMiTjpWqVoZvtZ%2FpQRbnEusEPHA%2FM0Zl8nYTy7o1eWMMNQrLbY3n7tjoOmNEhtChbuYIit6dAsS3WHvl8fWPxGqH0hVjWrh62xYs3xiNeldHqcioW0nG2wMxlPDVIbdlEpFa51kbIhln%2BAgMKzLsaAfnovtRVQoVjhOgd%2FfJUi6y883ECCaZwStZ4cImZqFPcIab%2BO1AQkktvBQp6FiAkuYQ91dBacUGEfkUpGQEQZJIiO7z0Bewd2eS6oLnodrsdiBZHSmL42oYDXt8R0uxPfwd7OkE%2BVylu0m81qHNZ3HrUEP5a7GINWqLDCJwIkKCXRkl0pct8qtyGkczDfGwLi9NciWT4Qa3yrzoR8P6TJ7meeutXermHQEFKdfj84gLB1wVj6eTAq7EXPOy%2B1E7VZUJqoSe8krUQvAO9Oc4EoclNdO3WtSAK1FpfwzYXwRCg%2B1S%2F3W8Gp8SyxZkctr0D7Rlxq3utIm%2BUSJjcm41vQ1eXLcZOs8G5atDg%2BeG5CeX70vZftIclEJ7bfzYCG8WKHlKzhR9HH7ld7Qj5SdEmiF9AbK16gjx%2FxM4ID01%2Bt5dqDtW6Y2qf6pFlkp7twoviWCW0J%2FRJLrfRMN8EaWPfMlZiyVVUwyNahzgY6pgFSUwv4adGfFsBtgd%2FhzUOwkHCUVdyFGrPGign9QW3%2Bq4tYl1iS%2B0hSdiUYX0vMmuaAR2H11%2FY3HPPaStJm6WpEf2G3zpQ2XX7e9BWgF%2BWIolsfM0IvX5T14mEhWZ7pxQx3WZvKCuU%2BfPcPrMYgikt06xmEpcP5YAQDi5AkNw1E94MJTCnbZc6MKdrlbj8pR3RO%2BmtbZiAaWVzSczSh%2BLv879LfSpdl&X-Amz-Signature=2447a891592abedf073f2dafb493efa45827ce296bae2353a3f84ed20eae248d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

