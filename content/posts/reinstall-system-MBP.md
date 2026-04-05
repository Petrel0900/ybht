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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466346GRY7D%2F20260405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260405T015354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLezPwOFogPIiRI3tJ5PelSHxJREuldhaduHsKyC4J%2FgIgdDteleqAhYsoETxxRp3bG625HYyOBrmQomWSqD0YPtYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdLfliAlLGK87rY5SrcAyV4DEviEeQcagz8jeYxPeY0yuG0y8f6awBRaX6ThkpyYl4veQp4jvQJbazLg2I0SS6s%2Fv0ysVXRH1J4TBrhofvMH2%2Bz6IpELFEyyyNUtp%2Fpzt3Ah3fOz7jiVXFJH63moFoJolMg2BPCmSGmd7KoT%2F6Q9%2F3n8gN1UHMzwyUGM8w%2B6urtqNxVMW58NH%2Fmuigv%2BXQTHoWSq2o%2B0y5vbz5JuLAgAF6tBqlHNqrvCo%2B%2FsxhrccMAO9GvdK1X2hvHvLlbvcAlb5SIEFA2qhB4kUcaTPDhz3h9IqmMhnqWv%2F%2B46elylnUZXse03CkVf7clMrv0h34ocvWeQ7ibvQ%2F1ICiS%2BbRzwPojbPphWRlzGLeAyRamYakhm%2FlBo6dDA1DNXzqftcS2KrWJsWlDSQmgrFAc9ttU00i6xLKHtfrZStPYjI1B2wD5wyKfPFWO0bmXz8hZ2mJI2ALkKHLgkF7TGWKmKP3cwxHztHVt0CFJQekHDs3o8TwRRuu2GmCvzvIRh0et9jmFLwgXz62a2obJ97UqNkVWGhjhpGOF8fKKsHcnP53c3mSBC%2F99sP4HOx6gFyir2k%2BDoqyRz1Sbx8NWIup5MSb3Mh2aWU%2BHvNLD2ZdRuucXVCncsD44gQUVYAOlMPDuxs4GOqUBCA0pdJG09zAsy%2BzpiUKvkLu%2B0If7d6TeS6Atn%2Bm%2BDtqFT1qpZjaHoJYll48vjF187BJuSpEW%2BeswaNgdbFk%2Ffhrg0ejSow0%2FMzMffCJl%2Fd0GtMhpiw%2BI0xflsqBUXYj0C8mnvbozixx2QZdB%2FgalJp%2BmL0U5omuTdRrWvEvUrHymDOb8CaEtMtHQS4QBJbTFbG39PMjQ%2Br9VJ4BIpTjT6FVS%2FFWx&X-Amz-Signature=7dd4a5f8b97736c50cb591a937d4382e45ae7b53be74fa432696bc564cdb0d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

