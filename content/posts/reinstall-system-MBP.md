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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZTUP7QV%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T010522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2Vx5SeJ8S%2F6cUcPTwrerVktfUU1vaFqv6Jf5ktgF%2FDAiAGRD7xq4jvbZhZNuwXr9ePb%2FfMkx727hV5lIrBPm2mICr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMwThSyg%2FGv1Gz8xqmKtwDdyGhuXlQk6Ud8HIhGWeEjaQIq6t6xvTyTBt04Ky6Kk%2Bf2b2b8w9mxocZWNVg3XD77M6bd83%2BlKqHXL29xeRACoFFJ3acSCSOGYuA3GK8NNnKK%2FAbRqho%2BBYv9TDwVSJUmFojVAdOhqHdv%2FQc0rxZWketOEToMZ0Yr288wrLpEyMdMIjamFM77wCNfVnfr%2FEW9rNR%2BK2W5%2FaLsV%2BOh%2FtcRAymxMS3IXxbGJvJdJhquzy378%2BjH6r%2F2FNi8R%2BWZUfcBkm%2BPC8U87aoaS2zgMAfIFO0dwrCzX8lhFvsa%2FOj3lewZRdC%2FjgEC%2FdcJlWayzidoqw2BAeo8Ycyx33i8R1u6YgC6lUKxlw49%2F%2BvN8qQuqFztvgzEX1Vyjz5WDurl5t3j8GzxlLqJ50%2FFc3atO8TgV7MWg7QF2IcQ%2F94jGVpWtMN6vFbxx45deL0NH36zkfi5KjljB%2FAGMSfZpcWf0SAxX7X1P%2BRwc88G%2BIEZ9AlvBmKxOSR1kZbDADjYzKiQ8nSmK7vW1C87Oq0KJY8uQHPTXlVa3HomazLT39DGdAqRjS4%2B%2B2Q8ogm8cTSg9j8PvdCwlO0SyDFTpWpCbGqYjyMAHa1JYQbHBFD8wny0MhEPRFfJ9v3aNlTeSIAm4Ew6ezZ0wY6pgGWlDQMSi6lCijUHMbYHO%2B7YgFV6OYXuo6vCWng16i81fMVYHyelNG2LBxzQ1koir63c9JEK3ypi4v3J9HqFkTs6%2B47AVgQOatbRWVOa%2FVywYDtqYwcoxZqH3aYSbyP%2F%2BoeyBE55cIQaiRjG286Qn%2FwKRRr7pfKkIbnuchQhR0nGCcZ7so94SY26up7yTKq9y3uJV%2BLe1gNw0pFSnJ%2FNfJ%2BOLZH%2BaWw&X-Amz-Signature=9e8ace6f0024852a0900714ee3b10661df7ed36c7a1cc78a08cb0e0d5be134fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

