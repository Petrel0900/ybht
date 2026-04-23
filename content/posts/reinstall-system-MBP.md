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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW2PDOAK%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T020201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjlo80Rzh1RdotBTmSaoaljMdAei8XH9bpXfaNP9fwugIhANJBp5%2B%2BjC0TCaXG1PG1LfuQKGrYi4Du5JXlVBIC2M7gKv8DCFcQABoMNjM3NDIzMTgzODA1IgwcmLLqw47PM5zR8wkq3AN6BQA2iEQYTsfTrerMOF8qVukOq%2BB3z8cOryePmQoWX1q8PRpv%2BMbGUVp223BRNpJpFoVXLcPulQdJ0px0RzNXYka%2Fg1DBSmJ62VZ8qHF%2FCkhpG%2FRQoNSAoWEl17P3nmUKvMfi3MyB3Wd15ymuMVZm7LeU7pZ%2FiF1EYLrSA1Z4kO2B8zHEZFK8z6s1tb0NtSgZfsjZMZxtWCQ6jezVKuwXVk%2B29Nm861K4IHh2Yv6hA8jAQ3tDrgbHvMmLQrHeZaQ7hgnVSrbOeomEv70RvpDtaRr%2F0FtsVDFSG42ndC1obnVZJfkNPw0CnfrZ7HivBeOIPl2mNud%2BFbTaRpS3Ok3GqRG9%2Ff3Ub4%2BfdPqJthcY2kNvnVSeeFLWw4veetFSI%2FMkj%2FeFS2TjaID%2B4BNjIviGGA6sG%2F5%2F6miP6lV5oHnsYKWVKn2Qc9QFBsZX4lqjYJ1dNZQTys8vTOJPgLVI5RqSpZaCZx1JxUjaYc0Uw0t%2F4S5kNRqQ6UuCmqPDsEW%2B9snX7JDzJiQKh0rAshOm4vMYoknUbsUxwlHcCHYdcApqmSqytMjHtesc%2B6%2BvN7eErbBSJV0mt5fwAg7H14bcigPm6cIy2QbpdOiSVA5B5rmS280Mi6DuS7gVbCmlzTDz%2B6TPBjqkARtesbp7ylNbwv2vM7EV3Uap4OLacJn%2F%2BxxP5310MDeBle8KStHKiv5qz1vNMt8YCH7lfe7sHh5BaMkSMvcZOua%2FP1yFagU1nVWKNK%2Bv3OtKPPiDvY1e2Db4xGjZuzqZF6In%2BdJvLcsaPR7oLjZSWWFsV50DNzbgaO0Nk%2BfPaJlzG27AEPHmmuwvHEWGHLsQwdQlwWWJuImMxzUsVZEX6H9Mv1n4&X-Amz-Signature=776f609d267b05931d89219eea86a6a8159b3700157261070d4ba98e4d52f860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

