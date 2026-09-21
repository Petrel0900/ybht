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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOKIWA3P%2F20260921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260921T024527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOqpfBPiPNIiIaSX0M9GOV5MTBkTR39%2FP6VOKDebgUnAiAgsSfCanIalj7NCwhuUZ%2FGx7QHy9495o9iQzo3zAIngSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMnH3LiHDQiUWWMZ%2BSKtwDTrm7BPiGk1PaFjtMxYHsqsyw16L4%2FQvFdDXilHMitenVfk5RlYQtyiApHub7w8ONdpe4QQy2004rbEfzAaXFZ50syxz%2FPduBSTJ%2FXmkxk5okUcebYc0wKsVMinDgMND8%2Bsi8KXmfcsjBSZOGGroIRzPQRN5DyHGLsGrrHpJaPvAxI6r429etCbwtm1rfEQe3ojRWXgwLmV%2FBMKibFg7vDEVzZR8uYv6IDH5eIymyBa5DVsvRuDGIItnIQ3LrpaWwArbe%2BYIz1Vel%2B3cR6URvKJKeoclzlTc2oza7fUT7B4DwK17GZQVapO6Ewq5d3WXXKbJZ8T0Hy5nHw4GkxA2qfhpD4itkA0A%2BezNJ4DNQuIGtVv4GI2Bow8TcWylkCvikJy9SKJbfuPeFFtpJMx1hqGH%2BQ8yMjlY7GwLu83vcemZn0IS%2FieatcaYc4rZgR4FHixCosSl4%2FpOl%2BKN26OvtM52hZvD%2Bz%2Ft%2Fb136VFBT30hRdE0RXzEicsXlJvKM4J7gd%2FVEcMDX3VEjrIw4d4ts74GPX87NYU5I6gxiWyoKPdkLauGtlkJzY8kNFaXnvYfVvShalRTRS2iObMUsQ43ZzBOwYokLOODQSai5%2B9Ts7qPTjUPV1pczKOr42Dgw2qnB1QY6pgFqw7j9rhOTOHqFRRRQiL9ZI4naGufjl9imVp0lX5sHFVLtfBM4mbT3EavvNSDTohPMfz5fm6SDw7kfZTBztqigsBeGBsKbiJ9hWxsry%2BFdPwldwCmjWAdI79rBFfjDewLvO9kePOQ%2BiANHMK2n1akL%2B9wV3AkuRSiNol6uPd2fVZBJqU9Eo3CPsRpOnTaXVXO5chZwIWoP6Ywcg4MId7yutGjbU0pC&X-Amz-Signature=4779e3a7dacb5209fa8309d38011b5da3f091516e335151927310f99288b9685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

