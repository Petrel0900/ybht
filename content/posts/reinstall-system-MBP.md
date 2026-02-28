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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOAXL4DZ%2F20260228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260228T011845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1ueCynhT4CIMcZw%2F9E8gei1WTuZL%2BNRCNShV4bmt9gAIgZKas%2BvPPLMbhYdj6T%2Fsl5Yk9YxJb2614KE%2Fh9QOkae4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDPfNX6N83W5vBqezrircA%2FhcdRvGDGnD0%2Bv6mMOg%2Fs0T4FRZRusEcQJPSeUe9e0sJ3Rgq%2BZeTwnpD4wB3WLlPaX5cen2wnOM29wT3YcuyjIG9WaTfFWCXu%2F3H4ZR1gE3qzxFgEirEeLyY%2FOxDlVO5QgkcC%2B8GhHxN3nXa1H5ILofkgNpI7aU90E2ihD%2B%2F%2Bv2e9U%2F62%2F3%2Fo3KuD%2FcM10oHaZL%2FOsCljDV24FgyB3IQQoDeHPMbBT59oa%2BH%2BfAhM9LXR%2F64PM7HqZTbbvn6MFOOdnZJUqJbCFsCUJmbQ9CMQhV2aJeWNVBvHG%2BlYpaJJXZhFuPe3asToOiLf%2Ftixm3r33HuQtbiXnFMMgv0MVAepnlGT49KrsTjos0fKDjrGH%2FfZWgDL4HAzcZJYNgUe4iqCRh1UkcPkHQ5NQVHRL1Iq2Ae5Z0MIcxxDfV4CU%2BaD82LoUbKwQt%2BCf7InoEJsJZQcca3e0oS7%2BMxcy8Tb7sUIbmgiPo4SQhtzq4sDMATgugoR76Lp5Vc68A3X2kVfLb%2BXIuGJramYneBB2nKWlCWMA2IjO6AmQYQYsn9Gjf9WU9rEMrOgtfT7IBHTxg41unPM83SFP7e%2BvIfjKXSEx2B6oXVSsYyBe4iIy8dz6k1Vb%2FceL3jQZFp6NmSzLXMK7jiM0GOqUB%2BDm96cpJ6TDGDh591wx6Bt%2BfosTtqDAmUfjCyA1etUnPsRa9UhBbvfeBg%2B4URIlq0wSjktYTkffjSQ61bp%2BW5jYiY1eUGz8LyYwWXHfKxQNB8ch5NVkh4J29Q8R8haT8LsnUis7%2Fmb%2F4wSl3oQJ92iQINTPVXO%2FrQkNUn0xM6R%2BPV4jxn84J96EVZWJOBIlZt9lbZoYdEhbaljBoPbZbJzCAmIbu&X-Amz-Signature=f3f0092272d073be5270afa83500ac23111e6ef85d319f76e770031c3f24ee6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

