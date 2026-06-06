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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQ7W7N6%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T023356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU9RA26ghm8464QCt9onTHSonr%2BCRJfObipj3mn%2FFCrQIgQxXhnjl4yAEEVbhTnQzrHR%2FYmDKtvdA5IiTPinSbskUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAW%2FI%2BNaQ6TLCYAf%2ByrcA55qBzD06rK%2BONiZb2OODHECeZW%2FV0Lamx6LlRjxKxXp%2Fxw9Ns64SrKH8sJyM%2BBAhst9F6NbTQzXAkNF%2FfviDCzpzjXCYEINInxmEBtWrzFgdUWO3IDA0zjtEfl2odr24qKB2yEP0scQgowMMn4H6mjNxIyjQnXEnUd6Su3n81aS9Y7TVynd2o089CfKBmHVCI1JtBq67%2BjUmjuXtiahz9vWCoip5KuAuEbvDBepGXlvSqLZhyesfom4rUliWiLhU%2BDaZ5zEJDcDwMSmrXJu4u%2BB70ohChxukW6TlczZKGXlTscS6ynADV1488CuhkKfLupevoPkQD0nbG7PDT%2Fjl9TMIctAk7P52A5YnOvMQAqUYv3%2B8ULzsfX49G%2BNHKV9ZiwVq%2BaEPUcNt87YBlmzLEV2lXzRyfVDsp9jlQQWB0YJjtK5hZENBbVAp6lTVaio14SrcfqO7%2F1kOQsnUV5ALV0ZMuNvGuGjZp%2FU8GM19XvWnvumpXEk8Xt%2FjQ02nnh%2B1abcE2um%2FAPm0OrKRMzfg6jAjfZEfukfkH%2BOtmbFN73ApR7tKpfyaedZT5dBriqKE1ruRa2UcL8WyHSDOcm7dHrUE4t2bArengdmIwSJwDIGOCRLkdd6TLUJuIHJMJjqjdEGOqUBT6qI81LLEKGHiw4zbtkQXE36E67k3ZOSngiEr2izw%2FkKwXsqWQmAonlD45IilnPn6kqpkTKrQ5Tn0mgVc%2BvZQdbZULUhnVpUhVvc8CdbIYKgDXhq6oeOFrVTYqzv81CjqB2WufRrH6Ns%2FQkq0Ot0tbXPqFzkZ41OJ9Jwe%2BAEFwtrh3%2BuJlszdQ2mm4uj0Qyexvsf9jTi3zDKhr6%2FMtvqDTfdtNfm&X-Amz-Signature=4414d3020550d66d4b59840333697e2c1077aefb20b404214c91537e80303132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

