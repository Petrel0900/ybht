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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5EUNLC%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T015937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIB0uXoEmhMoMH93E7CMs4VB1aQwYdqAxXercXAtrf7NjAiEA8PcYEcQYjwOytTHWvpLtaATctIc3pSOeG2pJ2M%2F31TwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FbQbLDpABplFDQ6CrcAzjJNFHnJObGu2TDAcLlWGyHgIPhw8rom%2FQp6m2sL3QHVLpHrSJrhRkzpoNG7hV6Kr20grj3lPHiE3%2BghuZF4IpkHvddxqZeQQvop8Acs8JEChObxss1PJb5C26Gk8CbTBvhiMuM3USSuWquBnPs%2BeZBApbssJje53pJHlv8oOq5baVQBZ3%2FcAahgF%2BSXSoA7OEqNwIEhtD3FJXtmdrNOUihc0FMURCjmZBlsBuk7yzo6GYXCcMPAxDpBidQDqftFEo7NkAM3QEywpPSCtZ7PCwP%2FZjUE867%2Bi0hE1o%2F4UATuAMxJUoUyD4%2Fy5ki0ADP65V2EDD7bZktNynlLfPVMrf1jULgWNIuKnJhXVitLlm5UEc1vL4Ca0CWXg2Wrb%2ByKnp0l7SAR9ebYs6bf6MRHyogeGl8%2FTHZniNyY3p3%2BdN4HPO1CGRVuyKdL7MIs54BYd0hut0QFTJdkyBA6BZ2AfF1CZWEB%2Fy51vwI0eUJ2sVE%2BnR8%2F3BmxNZGqPBq1MDK7gPRZRLC%2BVD3rJ441dvVGYA%2BOCXROIFZ4jFB%2FKvVO%2BQYerMwWjTw9y%2Fxr4W2vYkzsm6zWFkNFtU0EYsCb9V18l3RFvPy2f0AJ9CHdm7gqwtTib3wONMl50TxcVtEMMXDgNMGOqUBgPtlytEU0CzvSTU5ukqP%2BD3w6aWvV2R3uhcdi3G4F1PnJ7xtutO8qpi5E1hW9NyKcC2%2BIxY240UqBvKPkGbXjU3pdaxmBotQq2y%2F%2Bb5JpjeVL4p943dM6Dw%2Bpsfj%2Fw%2BYYtEYn0lO4vd4m45IGmJU7tjvZCcsQoDKLYQureMOgvb4waUdU2KHSReF3dlIaetrefKXDj4N%2BDkvl%2B1PxjrAkGNlwEEH&X-Amz-Signature=6446f5a0ddc3694aa17f54262538408e45bd08e80a49887b50d80813dcb0a6b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

