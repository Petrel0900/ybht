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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6MGH3B%2F20261006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261006T041516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDJQEipVZIPQM3nRPkqyt7ZKzQhdzL5zZ4cLVbcUdTZQAIgFyLaCGwczmm7m6FMbRMznSIfIHsvXomWB9%2B9AOi1mrcqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZOrgW4ITo1bnyp%2BircA5DnMNh2xZXKY7RiNkHRKCvqWBjA8d5rgwaZ5QsJX7vcSgZRCaI9PaAPkmaFxpnuH%2BCfJhDR5kN6ZTtSk%2F9zrJtyC6HkP14TDdRq%2BjLtbTLILdIL4Bl%2BPVD1YVsAESEDAQmOqVS1CK91qbLXOIcagbCMgVQwMfwyVGTH1bfHQwmYB8kVFE9e8yfz8LTiCXpMIznzqxzG5SM2M%2BC6OIU2B%2BBquCe73Bt65FKH%2BT4kn47917TAnD367oU855VvnKyYfnkVfprs8jS4k8D7Hae96SHMjo1Sc%2BYqdTfmJTSV40yJeYY03EeiFx4PnVPpAssbZqcVDNz435qsF%2BUAPf69LkqPQjJnOLsfaGw%2BwBGqogC8OPppcwpILy5g3gquTBltmfEQNt24Tu7I9sYrNZXRaRKspiDw2e5csja0umAAiNa59qpRrpT5EMlWNfDfYn5%2BDGnO%2FORJPZZKdBMQKJF8pt3Elsgjoa4CsoO7iwVgUWzd11VJw%2BoK7ALsjJqlzZgiNgGO5A67W%2Fg1pmmwpChF%2BzmlDkRXFCTFwIko9WKOLktoPlJvko5bGnukQMR66YDVP33Vt%2FIdMqliFue%2BWp4YPrwRVB6dlzAaCER2ET4byfp7Bi5E%2FtVh2pGkKM4OMMG0kdYGOqUB5vJ2Ka8vXZFUE%2Bz5RN6FsUaJ%2BilQwUqRKcbCXN6TxWqM29z%2BZofr%2BNEeNbkzatixHLls3sZGUJ92ER%2F7I3tZ7eiHUhRDXelJLs%2Fac8PvyGudj3HhQDyK5SI2eJBhw8dEwg4MspTpCzg9DvJTeKXbiJ7aXJK6nsOPU2F27CMRYwZwXG2DFK2R3dkj1lOV8aUP8X2ay%2BDaBdLEmOIk7IyQEZYoxH0y&X-Amz-Signature=56c9da75b11c85ecadf852ec3441b3ff23756b6f94dbe97f033164704b1b8819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

