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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHWIMOUT%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T024407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCLzORHuYPD9J%2FZn%2B5ZbUK%2BfTFjti5NwoGlUiAGOwr2BQIhAInv5YHNNUo0bacapPm5gty5FEU4OYhbl8YMsKE1pyHXKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZrRT3kdzXhtLJU9Yq3AMSIzGpDdjn5EMKpk%2B8vf5JWmsFLeKPeh2dw3vlwC5yHCM6m1AUsUBtFoOkJZuMuKthov76eCqSEa08omeBJKuU5fpZrK%2B%2FvMmXOPL0i1lg0jbA0DzpFSbORlxuL8iKc8TnT1DqOQWLwa52vmrWbm4GXTyHFJ66t9p8EYmpyTCo2gkqsIkWnEmZppicCEUpz40j5B4vyKCFwslfYGs6ciBwLjKDQo2HzQKn334dvy%2FI2mL%2FozE%2BJNaPuJlhobhhKkZheFb%2BswLPpP09vYQDTda8f%2BHW11ubFOVYREPr06hO96JDF0w%2B%2B9j0liUbfZF3XzCI2utSDbmz8Gt0UMzagjsN2yq%2BPuWfj5qSDOqehbc7WFu%2F6odPIrfMkEsr%2BOVHdRV6RWOaQHZRY%2BBkBumxqQFW4iTl1l52chLSi%2BRl3%2B8SuIF7TdwbysLoDpPgu8%2BwzPg1QNtWWGqVuhw8Lw%2BO7d7BEGdf1Cjpa1yNEvHgfmV5EHiyLCaazIUXgRQvNq0MtwOz9MCcYBBGj0%2F7fkGdnNXzaI7XnztvabS4a90jvgMYH%2BimACvIfphk94DhntMz7FbcVv3YeGu2v%2BwVwGB4bJqmLdYHFnVe4IvXImcuCXhyB3HRQgKsMJE5U5svfDC09tfRBjqkAesMFZb6wqz%2Bl1NhmeyggiBUUoALmJNb05a4UOEEy5x94805vU%2B%2Ftg3ql8N2Wv3kH5knSy%2F1jB6aNkm1tn0Ku%2BmCJipPf1DqnEaNu52oAyPWMHT9RIQ4gwp7YjTRdbfcPEaH7hXAaLCXuBPvzU4H2lvQE8uN%2BuDkGPMsrGsiKUoa%2BtkPxjQjgUXM7nI8V15kpL7O9J79o86sVFUkcG%2FGqqmvlrFw&X-Amz-Signature=73587d0786b5462a306c50b0f65022424fe8c600e1309084c2da443becb2edf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

