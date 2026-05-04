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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCK6IFY6%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T021127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1mXNIQbDhsjkAMeGE50d66nyo3UiBwR4bqJMs%2BQbkeAiEA4khcFE0Rs6z45QAkF8MfXD4Na2gGqkjI79JFZyTLGHEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCg8pycm9EXl7vkDGircA%2BjWKXh6bWN0%2Bom0RNCim5cwKNk0ErJ%2BRexPNsni8cXhpWyn3arNz9gQzhk%2BhEu48MSdaCE5mZzNNC75WTiM%2BEtblCrFxNdLiuz7Jhmi0jcqqDDSR1u5UNnEDwPoR2MWQ2KiT%2FMmyd78XEtknEdUa8rwF52eOPMKYE238WsgcMrrCbST30LiBvBdLBcrf%2FxEXZcn5qvO%2BTNrFFA3aY9uje1Vlg7Kan47vW%2B%2BW4yxJXF0wLRqma7OZfBCDPF4rA2r6IMJbCLN9kP2ek7CggrBvUIQll2ktN6E1kljt0otv%2BonG49fbcftSh7tlvTx1hxyYJojsxOpcRGHAMRfMP3Qxw6bRoljFrHu3C7X%2B%2BL1rMchOJW4iwnqOkQk8Y%2BrI5W7dCw5Vha2z14Lh%2FccgSJsjVHZf5Fxm533q4mgUouyhBah5zwnUZ9spf7P3PXDCdgNvFpMhLuQ08EJNwYBbW7PU9Ur3S4q4T0p%2BFf8K7%2BGL1LkYHABduNadXOgQNQ0zU6WuHsIIKA1V2sPU43B9%2B5kGB9OpHhJMG3TDIgoKCFPELIlwfjx98PtrJbE540CStfJk4LFqjPaCZZ%2Fo0qAMDljM6XyxvGT6Mtf4e3nmKCBmHE8J1eCRRj%2BpsfEtNPuMPD4388GOqUBa2O7x%2BMoi5vG9ORqZHqsampp1eDqe0XjZFU5Q%2BA8uYxZuEAyOi%2FYI6u%2BhC1fthnxSImt7aU9NzHcqBc%2BeE38hsIO8L3ifZBb1poVr5HTLAPdKmE1vkylAYc1Q1RlSHYsG4r8STxBb%2FWjhtpeHo5kn%2FSbfq85thNZA4v%2BFaEnqQEDkVPoAVJk0nQzdecSRCw5%2B1i6h%2B71%2FFe4x89EktQOL41FkAn%2B&X-Amz-Signature=b1c3964e62ef308ea5f2e4fdffab9db8728d09b9e2f5a8c41d396d14caed4bbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

