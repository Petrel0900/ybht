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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCUZYUGO%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T022138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRMhc%2BHNswIj9weMl7udktNu%2FECW8T%2Fivmw3NqYF8czAiEAzkYenAKsUfaf67w0NfyTX9cRuiel3t8vXQna6kTgKUIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF86Mm5txMb%2F2d9gbircA43486g4bKCI26pG5k00nzVxGxWU%2BaJc8fskqsROfJFxEzmzDMyeynlDPzc7IIJ8LjWGISazbnDVZHS2%2BEVk%2Bmo9SlUFf5jZxuS3Q8t%2FaqopRaGp4s4BtqNIixaMUTO7mablS0%2BHnXaeBeF3M11NbTx21obirTQderXCURUrfnaXSM3vEimWzfU5sAEpWEr4RjvEVIu3FyVAm6NYOpqm0ASVNnLiSIR87YrkPCnPuUCTjkDfETtAU7TbUz91Ba2SE64kh35hr%2B4jBb3tWmfac6JAC0WEdfyAAE1osYTIZelo8DeQIhdF3u7Ng6YwF%2BWe6Dgy7aAuGJhbeZ%2BuV4ODNwZs69Fg%2FlqnbrbsP3NG8JPBzEFB%2Bp9NovJwPWfmys5G6%2BpSWaS0vaL%2BKsJg%2Fgbhku7ZYeyZfQjii9IsZjBMzvYer323qfCXZ8S2u7ueijWUmRmemWo6IJs%2FRdOEztNAIh%2F5s6P50Mk5n9Do8Jqa2I4wmsBuBTaG3fe9upSXjdrpO5xYDrhsbYhAdSVbk6nzKeBG%2F7Oai6FZgAxbmnQerJqmMX3z0DlVoEjjQrfjUmbJzX2BnWFuViBnqM%2BnLXrze%2F1kWPTb9unuyRi1vjY%2F1niD5LSqcjcjXBt2qe9oMPuBvNIGOqUBjmX46aX49qW1tR6lv2R8%2BKhtQr0L2GQpFREcdvjTxE%2FJSu1zGoj%2BDFumGNysWwXDJaRZ0eiDA2AsSRNY43Tx8tj5iS6CnbIZoL1v3%2BDD%2BY%2BTetPgJPjCX9DNGIlOzH0kfpEJv%2FikP57z9nsS4gRLcQ9HBkI1TDSGuyQHyb3Mql%2FgMdQB8c%2BABqrG1tPUxE5f%2FdTf%2FUCXhQ1eY9EUaWInrMZjNDgu&X-Amz-Signature=20b233a88b6de7484636f2b68f66d1d1ddd65d9de78073a61255580fdd1cafbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

