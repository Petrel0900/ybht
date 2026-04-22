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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MAN6DXB%2F20260422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260422T015751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFiH0LaFAV5bg6atFNPvh0YncMz%2BivENG72cgtuARl2ZAiAL4rrEYQfGQx5iNkL8RYyHCtA5qFj1s7qDaJGUE%2BnWmSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMK12yLVPPLTmLw0YYKtwDe4Q8qesJEZGGUpq8WJLt3ZoRGbPjzOo5OjyKoBTN%2BghnVgqqtfduOgfZEoS6O27cVSFbJZZ2WstBEKExc7sIcuCH%2F3JTNR0ykCS%2F2Nee5C0g4sTO1mdsse5dtlmPjetl1LF%2BLu1PcKeqA1Ae1OFatnlVA1w2enDsY1AKfuEjo6patD84btYAFxRc0W8F8%2B9lu6Hbq7cezKEJ2XhqvB2Eoh%2BDYuS1McjdtifNMfK3yCnEa0BMs%2BnAIrXhLJiWMAGccuSlOJUhdFTD3wsRGqjuoSmHciBeW3Zo248Afu6cZseIw2x9Nd%2F1R8QxBBGLXFNumS5qawA8L3QyvvkofVZ9FD9nNXLbMIuIzXoaxHo58M0LucZwa1vUQSaC816fZMGTbJ95Dw%2BLSMtQIWmDo0QulIBzPvhbPVkL4R5sL7B1YzUNRVtEJc1nMElZcbKu97ahNIlH0kvzYYn94ZZRXhhhJODKMLP%2FPOKnuCPWKntvQayZibr%2ByhXi9JPtov5Hz7gAg1nTaDx9dwvvfx9%2Bl0Q1sX0W40Tqxh%2Ft6HmuCIBowT9P7xNBnZt21UHAv467GHoUrqHsqC01e40PL5yP19McjeLIP7EizNxJR7lSjCJuJhzi0w%2FBw2CR39Oi9%2Bkw8dKgzwY6pgHfwX%2FFH%2F%2BK2qikey2qEFPVww4gXEsHpYvGQvGre2tWBiVyUQI09EfSWLVMQSuHgSUZKSGyR7u6TM3gygxBQocKCQXGc8O%2B%2BJvgLWdKviLn2GyLqGvHgIgXdMhV9gnHfFeSXuYRDRd6Um6Qtd%2FdDveb8T8ZuG7xSOm4awJUryG7eyuXcj20WKFgPb%2FLDc9Lp6TsEgdlh5vATJqKnJyD5d8fpg7B%2Bks7&X-Amz-Signature=6a328fe9c573fc6d38423611d48ceed5051357b259e2da6ae6c79db8683932fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

