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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF4A26MH%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T025933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPwKvDhQRzg7dOW5gd4jxmNWr16o3awDjWhNqdaoQTPAiBgFPyaDrH4bCl0Umi4szZmvC2LQ%2BfmYY7XcUhm%2F14M5SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVlKjR7fhj5JQZ9kvKtwDoawyyYUG0iMjW5LcglFfD%2BIbf%2Fg9tzFjs986%2FBh2bCauZCVbjkRfbihBNphZ%2FnXbsEU1qNf2Zip64DiqdmcAkQqw7vWtXuOEHppJEy9SP5RiivftzSatbGZc9t6f%2BMjPwJk70A8EoZzSCLc5NeXJpAv66GZ5AG4Xy6gzU%2BQo3ThHmmMDCxAKm199u6yPHPoKHIv5saEBNBcoM1UKFTw7juNDEeXZ3Xri9XKFy6rz7yA729POreGGT%2FUfZNt5gZeLf%2FEczmXt3HuWUIcRBn7lyVNiJtK7EC%2Fz3dPrpYrwfvf8u05H6h4MbUsTxeVSqfANduoWMg6O40fpt821bW4NpWaCot5mXbpMGA2hAtr7s5oX3qKHlrPI%2BfSyDQ7nKLck3jT3eCeLDlltiEqatHFQnydZGxguCUCXR3CWn7nsfWEKn38eTob8bpXmw2IKuZxLkHWlmErQH%2B9%2Fktg19vpY%2BFzKv4cZSFamD5zgx4JwI7LjHA%2BJMg71fTISIIWGRracHjaJ2oZyrMtzjWptNu%2F0lQixTmqqT8QpjRdjA7rnpmIhLANYH79L0Sy8pL%2B1axYZJ0CC1smkMIFz9GxUIoqQrd030%2BJZu6EoBTLnjL8DEj998ZA%2F%2BBnP%2FEN45mkwrbfH0QY6pgHpwDKpt8fWNe0ml9Xo43m2tZHNa6fz6lAjUrmuY5nCMs79J1ZL6TO4Z%2BbtfO6%2B%2BTAiNaKYO8oGPDYt9CMs9KiJbe1Er5suOolRfz6HTuBiuIy%2BycBGExKh8E0EiWiDEpiiA%2B9YQTo2zDUJuRd%2BBWXWqQfX6577ADtcxOZv2VnKtYZHWho5F2WtxKjliWU6%2FyFm7vOmrM4HDXgUIpV9dZKsRZ5N4PfP&X-Amz-Signature=bea46b995a94d0a6d4923c34b400055ec0eb7f1ceadfc90484c2f072f5afc569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

