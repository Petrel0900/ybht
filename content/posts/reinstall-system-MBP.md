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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BGENASX%2F20261101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261101T034320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2xXMNuCEh%2FEI2xUjIpqVrHI42qPeTkh3LC2Sjw6z%2FMAIgRu3E1cui59%2BZBwmUDtxdmYQp%2BPOSjm8jKQmcQlaw8Joq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOndwtSP35xTdIHsgyrcA1BvWLa42U2mr5rAZLRk1A9b%2Bg490XoB%2BxpRT1nQhQ6B9YtLljiBL0U5NUrh9yA5otEZagmlTQ2nlpPRVaojicuped6JsJ3ItbhC6xc9j4RvvPaF9HOKKNnM6r8kf0Ns3fEhqvq%2BVrR5JguJd1pxq9qh1oF87Emysrwvt8uhQAsDJYWBAE51F%2FGWKZ0JJUz1mbyPOoN0NH8MnLu6bMPC2f2Hsvm%2BHEpPWQvk%2FSw%2F0ysCSXOUa%2Bxyioj544%2B8J5re4RbvU5GH8yY90MMnFlR6b%2Fz29HIm3XdXPIQfAbUAMP0gywMlFuJHdwMRXxqzcGdHUnx%2F9Nb3DqicmBbk%2FCA5s%2FIL8b2zwQocxcv3%2FpwK6TjOJExt8RO4PwPgmrnHVfLh77Idy%2BU1i8p0%2BjI6pyKckVUAHG%2FVBjQ4WE4stKfs4alPbnctCK9KiaHSDyctb3uAmA6seyy3YQhKaVMKPZqVoeFp1cHhAo%2F6jUjSfPHMywQfCwEbM0e4lUj5RIl6DkcxHJVnUSfOi9xmghQcmFk9eJ8Zluj0eAoa4o8mP%2BGISnfiYamEnyUTcrEhIZRQZjn7YELaBEtHbA1kQVcQ%2FhtuvOkzAUisPnOEHGnCPwfWHQWUpRCHi5hClsKtsASWMIGZmtcGOqUBDCBYDGyJQNHkvhTp3rcpB9YXh4PyN4wfRym0nC7V%2FqGybq5K80ngGsYBmH%2FTMevtUuT2NcIlvnkGnNdGUsESTRWXmqmsgfaiLLznhOC3LrXHgfQPsRNEOHeIyM6QgkCFbTkTwzVwcPP2Pnz%2BLPLK%2BWpMXT6xXfy%2BN7WQCr%2FyBPkzjAdsoHrBXh3UxfEJp80xTcsPYewdFoGR7KKBbGWC8dxtm07X&X-Amz-Signature=c7c26f2053baf7beaff605ca4bf1085e57641628a0c440cf6a4ca6a4e238a4e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

