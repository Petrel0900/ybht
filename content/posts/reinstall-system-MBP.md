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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAGW37LZ%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T005054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjrJT847mPddbdf6g0QHLSdVBM4YyjSnGjdT0A9TB4QQIgP4iHJ5GjCYzBK0ODim4xJymo007ea78bTVjaaoY99SMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDlMHCBUBBuOsasHYSrcA2HELMsGnSn1J7yBTDzsjV3BpCc6%2F5dK9kGeuihQaSY%2BgCVwAP1F8eERGFNQEqhz7TMfk%2FKFHr15tH4QANdtFlbXVtRncPX14m%2Bhe76C9EsJ6RoEfSNb1Eddez5R1DiYNWSV033YJTyKbByExurf7O3%2FUw7cv%2FIG0%2B4JPjk%2BKnKajceu4RTBLlnY92h8aBq0%2FpZVj6U2w4BtbfR%2BPbF5YomvJAw47naodUfAFsR8VkputF9bRVuHIHXe7WrWLkZGcmoxYI%2BIabiCDeOZK9dmj5VJZEa0mk1xmNXxCyyh17Z7e4P32907qEDV14WNaBenXdUK05B0sHYBR9bVkcPaAUjWs12trn1xWPX0jtEeAYYaxPsIvMXwMrki0BdIMvbFVckIy5yp7awHwbv9CW%2FqCJLpJXz%2BiC8dVRt48wA%2FAyCgJdnzubGW7RQj1uZKnGHS9B%2Bbnm397FArsi9PMU9ZWLTdh29Mcl0F6tTiM2Tao0TtRRE5x8kkqORtWbv6hvewCJ1Sq%2BOxPIt2XBvfTUo18%2BU5Qn5j5lDh4VqsQ8x1jA8k%2BPDrPd48ikrBZ%2BRAFwdgzKlDvGmi8ERH5PlaoX99PPW5qySVwULhuvIc%2F09lSGUCYvKxY3kMrUMinwx9MLDek9QGOqUBzbRL56tMMbwbUlDFTW5d3LbKRmDdHfrZMiE%2BPfcU8OQJNe8uB8uPpoJxl3SBpKpV8slLVjErTMxR7f6bYJqcUZgPh9%2FSSO7g1zNiUanyBKzhQEEVcKm0GEkfidcsTGY3GZTbz2Oh5IXFmzN%2FJH0zMNgO3X2c5tIoxQ3MnaycNEyK21oic4Um1hdQG7O7X1lj90bhdTJBto%2FBUWcbbH83FR1Tgw8r&X-Amz-Signature=1f73d42188684529105e45f17c1564f31f5ec7ac93cf444586c380263d3320cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

