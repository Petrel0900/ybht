+++
title = "15年老MacBook Pro曲折重装系统记"
date = "2025-05-17"
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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XND25DOK%2F20261022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261022T030237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0NdoyiL08IPP36KXG8qsAb4%2FhhaUA1kSzNhm8Cm6VkCIQCWlIX766ecZTeEx1BsNIFzxY2t1Wsv3QnHUrx5R9x5BCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMXbT3zADwjjdaWEx8KtwDnjR3%2Bq%2FLAeY5nWz7J3he2qrgCEpSaW30Swm4X2iDyRHvtWACylqAEMEB%2Bk7iL%2B6S3M3kjxe35co6EskXsiN8e%2FB5ZPdrw%2BBFT07MWovhjFSNwj1uBHM9p5M%2BlWoIcOaHByOxshgg8vO%2F2armBVRx1NrDCVhZULjwQmNxc%2Fe4j%2B%2BK4pfVOpYlgDqifjR3%2BqAgBS1zQZ5LEplGG8%2BgQWYpZkWCQe98xmrOg2%2BYsOqPSImjNutUwBChPcvsBCVBLCH0On4YKKXUKzSR95NXQaiiITIBgIGHc%2Fz16QWesMsJB2mo5%2F5Ccu7%2FKvE9X5jm6zMVYxlq6pEfI7YAodp6qwjnchlXxkGwDok8rS2baVk2Asw%2B49k7ufTU%2F52uxp23ulIAbIw%2B3ashFkue9PRuRCAGj%2BqGuMOL7XOD3Tyue0E1TwezAd%2FnIlRWoO25lEVkUpJ7kjVRfo%2BUT%2BVnd1udLGhmPw0F8zqZHv4%2FnYfwBeDztzvVSPg7ji5scXmZqwDm40uOA%2BF%2BeYCpqeK5qjzRvosh9GhI7%2FVuPDlDWnkOGPObUia3QHHFDxH0tNQuCy%2FC%2BwNO1XBiKFv5FubpSWemxFhSbpKP15I98iXZ3RuVKf1nqa%2BCKhLx04dc7fC5VhswgfLl1gY6pgF18Jm6tR8N7VwRO5m2jmA8XZiDDDwjQi1PKRcbF30Ers%2BPFSZz4oWczq1vHFE7210e8gIV8yGtzhfGUvL6Yi62A7S4BaZr9VijgK9ZD1L5F0FVQvVD%2F%2FO6tn%2F4%2BXktNJno1kC0DP576XZt3WOJ7H%2B0VZWggBSym9f9gieXyaqPG2ihqJNe3sHQYCHYuqhKMBGIKWDxFxrp55%2BqNh0IvsTMtacFFCG8&X-Amz-Signature=cc450d8878e140c35297ceb18b26c4d3ebc228630c8933745c9c5b33f2a3d1b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

