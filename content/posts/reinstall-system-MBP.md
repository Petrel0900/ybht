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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQDH2IQD%2F20260211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260211T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxscITLJP9usjIilZg7%2FzQcEszamjCqr9AsQfbBO9ymAiAfaoP3gwmvzIb8%2BwwmHky2OTSqtOnwHvD2Ef8RwVrr2SqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDJlsm7Q8VKyudYlCKtwDi8hxsYsvnjdgIraYws5t9jBETnmb446h12Wk7SkdY22dOXF6na6IQwpUeyrSofi9l1z2tYFPAZdAgqESivEVjSonm6mfHti0uWqNEUiypJWgcmOyL0e5LGcXhn0%2F0wdo5%2F0OccfQyeoSpcXXLBRhL149MthUPl9NLQppIWir9N%2F%2FBDX2sft4g4map1b0R27pRuwxdK1XC8GPERk24vvh0O6eZ%2BLLDoW%2BtMZhKqzq7CAyVQrH3Mcd%2BL2gGxI6Xp8Ac1x7SH3XlltNsSgAfnoY7zf6lEy95wBmpUPXgd2IuIlb40S63b65toHRopnMd3rlD08OyqmBDTsIST94oJDNwlClEFAmzL3Hbt%2BjkbGNjtI1q2Rak%2F3AHtd0l98Izo%2FKfNJfF84CF7xZbRCLyK5hX0UW70ptpLc0HlTXWELk0aQNuGajnc8cJIQcXdifke8PS3LgHEuizSeS0w5ZxLQGNHL1ybtZTmjeWFLtYTwCWBn6xQrx7QD%2FD4NgSKaJOtTE%2B2mnUBQHcSXnwXVec4m8zOfzBVYPGQQXi0nddv%2B%2F2u2MsAvY8%2B%2B4FdKXT%2F8fv6QJoseHymcGcWc8FRB0rTrSBE2XIFDa1KYTO6EIbfA3EpFdAdbc%2BmSblAG4pegwwaWvzAY6pgH4IeeDl1r%2FefXksmgvCGQVdGvNQ7HY05VrchK%2BlL6NHbXwmP999mbn8YC%2BfaTE%2Fe1cYRuq4tcQMY%2BRKO%2B4nx0pGSMgK4cokc9foz5d%2B7NtigXI9g2Ic0xWD5o4gzQlVUJyUl3943UKoIyzuZY37IR9y07tsEqwOJ6OWfqlifzpklOQ%2FaxRCRLIdGETyfYbchh01wLr0m7qVz3m58rQvelu%2B1tXzzQ7&X-Amz-Signature=ef526b6c5f3cdd8b1da32806f311db2f05b3bf77364b38c70fecb7e09ffcae73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

