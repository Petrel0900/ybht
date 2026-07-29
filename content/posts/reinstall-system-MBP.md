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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLLTSGA%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T015815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc3ZS3sNBN6IDiElznC4RBy5JQqM6LvtUwp0UwDQlZFgIgJaTVRyEzWrN%2BWbaaKuwPydMWZkXI7bf7BYBnydshNj4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCrZ6HP4HB09PkA0JircA7o5yb2L86beUuydmA5sI1S0wr7NUpxG%2FWYe%2BqK1ne134XMStA66WzuTXMFSW7jhLGnNXP9DHOGg2bQwxLN7TLgVrN9JsVx7vnJHD5lVCQN8uDjnoEqSj0z%2F03soOx0H%2BED0p0CTmtB7tyqYTwtYaz8iBL1hjHAJA6YmjYMJVHJJaqtPZXbQcyfRnc5Kx1i95cVKRVRUvUjJtuj%2FmJLebrMrkc7MFcndY%2BdHSmorzsdq9veR8qiQGJ3V3Y113VVP%2FmJvNeI1gM6k5xQyyPR85kKVAOKJ9qdQBbrJWh4UbZSJaz3G%2Bld%2FNd68hQaBy7Vp6jME3eSsCUIJSKYKjStdpTMjYwm1JvutBSHHUXIsBKZEnHgcv816Wl5Ng1EHxD8bJdpP8K8BIL10JJ2S2lW7T9w2qLffV95bFMsL%2BdvT63bq2w0v8T2ZoDo9oVSOjQFeZ%2FH8%2FTKNVCeiYFu9R%2B1wmuyqYbXdXJ500uoLWc%2FAAB8X3%2BSrA6P22v8rBJNrXO6J3YvCV2mdR8ZoVG7xCkqKXpkdiDQg7vPI7pQV7qrvPVyNSuigWIBIC2jxSr6lAh2g3UUdO5qK0RO8GY3PBqX2eksmFJVggGJ3foyGPSSOwuULMUsJ56mbAoCUZ%2FFfMJCipdMGOqUB6NEhDg7%2FHXnQqL%2Bwb7PSXVKqWtk3C1xVLCfniLcC0YUJ%2FLevvar04JQQ5q19eEBYEG1NyptQtOqTfkYzem7j1twTGb5xPJyw59wxbfuH9jXnNcPI4Pgw4ogzHjLpjI5MYmWHpPamw2OIpuirBS9GY5zXyK2nrQJ7GG96bA3b%2FPuzQHfbLwxs1vicD947lIE2nto25J9ZJcKiq2GFt5Axl7xzZ%2Bxs&X-Amz-Signature=e656446b25c738143529dcdccedfe5609b23639398e2fe8a58402ced75bc4c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

