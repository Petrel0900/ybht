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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M2J7QIS%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T011142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDviFDeBYna9UlcRmlOEtMFZgVfYmCDe8wf0T%2BhdWlptAiEA8lvmTCN9ZMyiMyVPRmVsHhQJPB2%2FT1JmJlQdO7hy%2F3wqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmV8vFXlESgaHjhqSrcA9nCOBEagFzxVBIh4gn7FZxpb0glQMgvGws%2BOjqTV5f8YDxy8tdm1Y8Knryv%2BJnx%2FTQ3JgZGDXzD%2Ft5RHycIPHl%2B5FS%2F82uQGpyGa8%2B3C8ZKQe65mdnFaHGvAkUMsjsZ%2BuiVUplmNjtFR9%2BogyWUIbiJkRGTB5lj6tWH1s%2FTj14khm3Qh2bwbZSxPumeVoJyxUWBFfQtuoaNpyT3Zi93zKPalBpY4vuniFI9X1K0erbR%2FYaiTozLCQdCCF2JQxBcWmBu3wI1D7aJyDce23DDIpM%2BL4XYRfSph8r%2BLgdkZ2OFZeeHZnd9pZxJ7Ogp3ZaaVcrvagUUyaDrlItpgBXpW24cM%2B8cuThStcSuQl7mmJOGYVhbOwP5J0d1lmfC0j8WzRz1oQ51jWabgflDhu74C7P6rPfIbQHFrFkjhzK2BM51WRPN%2BVBrEjA9Fy09v61VPWW15Xk3mjycum2qGJj7Xu0JvuWO43sQNOinb5BccFM2r3zzcsgKURoBSF9VS%2BPbzJ22gK0qL2iqNbTx2bqY2d5EHkaOvsfjd7j04kMicX4LqRumKCjm67EyoXX2Dq%2FqYXcChtSYa2tntGcBFapty%2BjaWttNOTW7c0wUzjkJ2gAuJlsiyHQc6VE224fjMIiu5NMGOqUBreqLZ51IMtXmRhamuVxH%2FheIskbSthvQpvAwohMHFMlYR3ZGEihOKxcMbAhsounv9KcHFPnCmSBgbaS3xXvpQE4rG3%2Bbyl1GMPhgy%2FgjJ44nu5t%2FIg4bVy3QTo%2BQjhzRh7tSWqB1Df6pLSasVWtaBqUbgd5bfGeT6yV5504r1DM5ngOElnaLmCNYnv6BdqdaEisESTnh1hxi1iGuVrS7xQdELtVn&X-Amz-Signature=4befe2a4c53df02b7613ebfde59687e92a991b7c7f390f99bb628fe19c9f659e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

