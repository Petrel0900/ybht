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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRFKRNE%2F20260203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260203T170414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCOL6ywz3oKhfMnIdycIuwUSvmi3tBYaYqIeUa%2BAVA6BAIgGZtrNSdK%2BOE5D0l2rKJIdtQmRYHn7xG4N3sgh0bg7lAq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDGvqC9qJx%2FnSdDkw5CrcAyxWkqpmHlzgLuf%2F54v277Rn9k%2FbFPltLJlYzMKD1Z0jo%2FGwhJ9xu6Br18H71aRnjHt%2FvXI9iJKKdmNjpP%2BimnuwrZFSF%2B%2FmosXZvio45fBoA5JokrHg9SErt0m%2BHi5CVyWWse9bQs8TvSX8jjSUzZfoltS62eLc6py4uaL5gKO64%2F4SFgzFlKnvWQsDNWRMuMle9en%2BqwP%2FWsQYmPFUI2TurTkb5HS7wIgwRsEEE6Hs7MwWx%2FiEML7VEoxC19a1mucODpnftrpyrq0nNDd51t9Q8uwuNz7K%2BCdjKNzqh3FjUobazarfkuzyQ10gGsUrwo9vBstnHG2YhAjQGHK1q5lE1p%2F9NYirVQxlIatc%2BRlDooYQd9vfsPPGGdD4zWLOdrQ5GtscMaFg4NfEwujCIvSb6y4u7imc2kQErrDvkRfohuuYBOeUl%2BOXorexQlM4s1qd23jCew6o6M8BSzTJ4rZD0jXy7Qd1STVhyABw%2BjHQFMp7%2BcZ7DbhiWfKhIM9NtjDy2Qyx1rOs3KkKtoOrAVfXL113ULq1F7RabIKzZxKGcat%2FmOLv0oGRm4yap8vrrKSfBLaWv3Gif5v5%2BvAGXZ6Ocv4NrhnMclaldETTLkstR6PdVKbjw3GMv9PzMLG2iMwGOqUBHJrpEkSa%2FY16WxhoHeIOVZsbKWasiE3LD%2F%2FdgN7JPfYB4qAIcxv6e4d1QrSgHj29z%2FOC5D%2Bc7R84Tk194hAhIoioDOfEMhkSyAflnYK6zBmyFQPqkYzdj1feDEaF%2FSdqnVIr8II183u7t1jQTjKXY7%2B1ZD28NuoFQkkLqqotjzZwErLhFF7WQobXDvFyiMCLqG%2BKCrgDPtb6sZK0MM9HqF46o5xb&X-Amz-Signature=f068531c5f622d4d22ef35ca2f1eebaffaecf12187b30953e4678684d91ae88e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

