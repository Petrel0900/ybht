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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXSTRK5%2F20260417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260417T015844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9J85G5wYAog1ZI%2Fo8vbMo96XvG8M9rphoI5qBUnrrTAiEA%2FtCr9gfy1cjl2vzc3tqyK39Xx2yy%2BWC3BS8VYSBgnk4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcvE0K0VQaa5tFXCircA7yz5USEF%2FYotJIBtEIh18vz2FoqPrxosLQjSxfb%2BpR1Z4t0cooqyzf3Nib1rtBvavBUVVfQVs9J4GYiz26Wjm0wbZcgVPCCOK4qpSUp4NDyzGeVYnWJF3Kmtbv%2BB1JWkjMWe7ZSvAlqOhMol9NUle5Lj%2FJO28syJi%2BddG2BHoVoTYTQ7U%2BQKchE8HZI%2BdyHClwH6jdvaMzVK9tpVIpsjYTtrFTbnl4uubT9XGUTlUPURXuQHYCFcW2lYyjU22K1e4JZEqBHXLEJnCT7E45P7tg%2F6OUn5TuF17%2BGKiHMyR1k4KqN70N%2BGvOwbHCT6aYixxXxz7cS1xf%2BKqTct8HXYGYkDyk5ruaPc7BGPQIw3pYeqg2xucCgKUjCzAcNVM7JhmwkrcuwRU7pqGDX5t4EL0XBIPH78g1qGR9EhII7tJwe4bw5UlyMADet5S%2BL5nCGr7gDY1kllJ5glfYUX1GvTcYT2saII8oHyoiNgrugDPg%2Fm2nM1MgaPLfoxnVBjcL2xIV5PSOlXTIeE0KYJslwQylFPSoH0nyoWBm9MzkydQvi4PnWdgTPbK%2FKd3KBZ7pqzqwMdXtGMQyLg%2FxD7D%2BnYUVE9%2BmSVHslj75osp9HBqQzAAx29B8BB48uPogLMOLbhc8GOqUBx%2FQe1zSuyhVSlgjTlgPdaMZiyzZHZFlyni9aI%2BAZExto7tyYykLkAWLeiVCReouMQr%2FMkOKaqMUMXCeIM2X7lZ92%2B8nVYor3ApNjK1UYxnVPo7RcvjnwB%2B9yIDc%2BP9U%2F6OCsLKDqnqKwRTO%2BOHrIWGRs1LSQaC8ouWAQrJMpMpqtKsgjdHJMJgt2zFSvY1WjfKqUBNhJAvlq%2Fdc%2FX4LtLN0alePS&X-Amz-Signature=63370ab6d98ca29fbdd2c03d50d8fd0fcdb383f38aefecd29aef0692bf8dd610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

