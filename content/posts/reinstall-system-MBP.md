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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672B6MYBV%2F20260312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260312T012243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCISnsxoDOwKbD9baOBuD42lKpB6ka8BS%2BDZd6k6%2BVCNgIgS7nR4688y6IvxT2a%2BlAZDNjbMMgVYRWqu0MKkhJwb%2Fcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDItllJijuaH67VRErCrcA0hOa0JENxvznKzYr6dGahA8lfVoFXgsa77iHec2SE0uAqRA8aOib59KOzk%2BFw2NdARmiqd6hTBf%2FV8siZ4DXf05JBq3JZhKP51%2Bo5HNHuogFxexhpAcJ%2B7c46%2BY7MAVRgcca%2FOh1zBfRVubZqGfQ%2BQ0UX0502XchXeulQzCO3oOHSs924KB3966mIPFks12%2FUClWiFFf2RMjsOHC4U9hyGiuuIoARU4SudExQlPld%2FusmQVZSp0xuGWO1ji05RKCDAK3LoywK7IJNxw%2B%2Bfkcz75wVHVspZ6SIgUmHhcVR%2FRVtMePySRU8qLfODZl6PF4n3nT3iVDCqtuwLFSO4VdvgJjY5h4l86EWJHaLWWxff4Oi6drLSycv14hLsQlg8GMEVZ8xkv6ocwVq3aYxK5TexYYbG7dFq4Nnopx7gcSKrSV0iZ%2FaCYHeJPC3lCY93WI0QVACvUQmq%2Fsim0f9s6f0HDrSD%2F7Z6HHO6K4C%2BWznEHbdqvb3Cn6m28gOMUV9Oo%2BWFvnzXX%2F0I7GRY9KhFGLJkE7he1R%2BlnB%2B15b6qGSNFlcnXKx514D%2BqzYFH%2FnPGxSt2Nq%2Ffhqx4bVZLECIpDU6yFRRimkqAjsNLYkIFR7K1oC97Sfe4kUULTaTQvMIuDyM0GOqUB3is1W0AUejqoqUeCj35%2BoS9aptznyIrmsbEkrq28woyK96R4odQ8CsnF%2BAwt2L5SMDvnit6W4p1ZFyH5TWqvFC%2FDFTqfeNKQBCLSIJjL0Qz3JTZlpjMFG8xBYGuVmjfAcyJ%2FfMGO6D4L900rJDHBMcjuxttQw2H%2BtB32QbTe4swNVz1ZQC%2FruCNvhJV9cB3RJezQRpYLCEsI9O3H7P9gQdkPqn%2Fa&X-Amz-Signature=c4cefcc78ee0297f410af7f78caabdef52fc592d6ee792dfedf2541c0dc976fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

