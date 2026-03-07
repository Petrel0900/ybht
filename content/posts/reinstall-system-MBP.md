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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WO4ZZOO%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T012150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCq08K2kuI4b%2BoYn6zOKYT9Lf7K6RxurVAs%2BTTdQ9k7%2BgIhAIpBsbEQQGuyxNaYqPEjM7Efj7BomNg7AGjmSRd4BLBmKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG0x%2FsJTUEJ1ffCq4q3APSwIdP2lsGexmimyKG2eKqzBZ7PBoRrakUOXCfK3oJB%2BdkeOeCe9ro21U2KNHXHlsQMSihQQv1l4tsLWUb2W3%2BYwzyDPLBZkbrpUYUcvRDMEc%2Bqe9T7tzcvEYXMfxRJgQzwUE51S8UVqMzCKGrTpzze96ZoVzDrWDBN0jPGQQBJWH7SYKobk9U8xU9ylZqR76mT2B7uRfqB4dxAfZIuxL165MYAm2k04KD51wlSx4THHgAD%2BIohfikCZHpXUJnuoUAnFLn0O7RG%2Bh5SCJZDHsO0JPshCQTgwBK1S5m1A3w6HWOyHmOUijLCSbrKpl1QYgKUKmHmGiXBnrz6kAHpSDlXR%2BOs%2BTesBicsfR1A8RhLx7Wt%2F4FwgCp4WbBxg5zKVDbydGkJkC90bgRfaoMr7C7wk8TBbjA8xi%2FnbExkwS3KKJ3lwYAB5jfjQMbSt89UPooFGi6l1eHX95%2B%2BGq5bDyLhy7VUXfSWHITot4%2FmWr1bNiDwL5%2B6zERJTEyklVaecdG0t10D9i9jyKZsY4gpLLMOJv4h9UBR8nciuZBTvXRZ%2BtbmUnf7aFb6G%2FoBmVpM4lajPqt%2Fl9jSWOAzISBC7dY1txb9X6vKcvAUbWEFoBhykoKC1GtlnqSw2QLhDD56K3NBjqkAV94dS2Keui7RuDyvfJACng3qe9ZhQjp9Ib72T%2BNHJjF%2F8oB9Jz%2Fg6N3EDC0GL%2FNufodgO77okHxrkLeBg3OgoaSpKVT%2FiDIzKyjg0iTPxNU2%2F6c0vAhoix0angdT6Fp02hVTAaerBg39c3f9PvxM019NqNYRGBnm2gMEKujwyAZ9TPJxoy%2BPZu1hVZf6dvsTQrvupJokoIDghV1%2BPJEJAN0ffl%2F&X-Amz-Signature=1cf7d300c94403f28cf1013021e0d682f85a46d5a5cc8c496bb3d5430cf2a7eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

