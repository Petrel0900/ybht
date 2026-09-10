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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7POWY2D%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T023145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvh%2FihXttXyAKApKNXofKyAt534CVLOUX2J8%2BdzsMejAiEA3m%2FFRbf0Tl8I%2FOv55wbqCpHL3uC40fEruHKZmg50KUsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAO%2BAlgRVmQCQu1mCircAxdFitH041jU06flcNLkf8vumvdaE3B1OKsA4pP7HQtE1cN4m6HRK%2F74k4D3JE%2BqGytMjbj3q4Bluk%2BnsjLrCgBh2NXm0pL4UyWJSCsYYJ5Cc4cNYCPNcErhR4w%2FdKq8R%2FzgzmNmvlv3Oz44QA14ygm0aF84uxrkQRLwR5iG7cU2b77IlbZUBRyi2iBONvoPVkQl70xnM7hJAB7jRVdJiAwntHBHTXuFZ15dYcmn5oDKBUlxvLcUnbl9Y%2Bo9AWqkF5wDX9p2Fqr1mkhd7zYv%2FzLp%2BkPiEdOS3kW8%2F%2BMbXcAbTPGA5x%2B8OlOlAPLxapbvJn4h5utxSHBQGr%2FE3mSOfEEDYsxlusr3wK7XWoSRUEGutkKQbkuA71Z8us5saoCxu6OIlzxL4bFranKVvL7MdmmqLLFilIICdq5sD0YEoXUbxDkFLNrK0TmkHvTRWfzrOAqnaVAZowwnoAxlCRtZqABP9HXqeNeIYhLuaPp4x57RoeClFiTq1MrAZb0Se2XChbRvTAmUiT0Yp2RUG9lCN2AqOIv6NurLEqg46Bmk9CPaOODPGeBc%2BagdG0EbQvpcGaKRjte173J0FPfkVplosFEMMhampswXaSPHdhTh2eTNcj%2FxPDUTcWt9W5QDMKbvh9UGOqUBYzzzQLkk6FT9cQZIItqmbGZ3pR8q2hkg1lpzumnZyhfftM5K3ijM5CkCxAahjih%2FuCxy4pjyBMmiqzJx1M6KntfQM5%2BIws4F48VIfAp62liRcSyAeMfESWtMjBJN2Ga4Hsg1lDRCKwhfdqo0y%2BLgLkERugsMY4AfsuWwcdDjvKRM9i4Sh80n%2BlBIyPZ1asLA40AIXIEotkOa%2FTgwP80VRqqZnlym&X-Amz-Signature=ff9e42ae361db564107dc936f69f69a2f1aa02f312069aa25da60285715e3856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

