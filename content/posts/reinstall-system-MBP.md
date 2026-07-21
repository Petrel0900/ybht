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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVROOYJV%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T020109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B89z7N26A%2FgqsCLl3Hvniu7Oybp93IDgdLNeybLmjFAiAmTNb7F4Z25bgF%2FsWEkjkdzrjWfc%2Ba%2BSUpM6fOhMIixCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKoPYbCmZYvzdUl6AKtwDrpOGEEH6nhIz19JAPEZv6WnL%2F1JCReK8torNKyYqE9lZdo%2BO8zXJcUqOQ7drYXeM5SBZ0hf3bAQZhiLpP0l4IYivVKt8S357X01j%2BS8FLnFqdkOILEoFkc98YPINHSs2sMKDG24TlUz4jg0%2FyUAEz77lEyqhahBo35hJdDfSnt0uL1mLs%2FYZtSkG1508ikOOr7FlmcG1Ty5SzGKI%2BQoc2Cx08Er%2BJWsxaqXf8u4q26ICuaSjc%2Bg%2F6F0la83Nygl7b%2BZjdVRqTsa7w3AYTSeVttSa4s1K1WH6igdNsC%2FwBOkyVTZya9ebnYR4LYRR4SR5oZCWf3dx9vwQPCKGhAD9V2sixEXe6OQRx2uYESa662NopT7kIDeqtBCSmI%2FnUz2MvUkgATTmVlVBqfMvEWDkPlkqlOehJ272PxFCIAPQBb%2FHWAjFrVpuUgFjiH%2FxFVC%2B344o2X%2Fj85ntEQjJCpLVH9v79nc6LuevxaGU35mTpv7OvIztSZ32JdAykMvMVdACuSb7lIu5zoLvNark9oNF366HfjwO1%2BumjgY37sj2mx1L1Bkbxe8I%2BLWK%2F2p%2B5SzMZp37ZFZLjEL5sIjuOYEcxoVPK3wt5hMQoNIIH8dEIHbWCh0H1OwwokkRxhswkMP60gY6pgHeHV0T1bZShjEco7iKhHtuQSiPDL3Ag1MO9QGs5JOKsyN3LfIMaVPnHZxSzYutVqHJYl9AEoLMWdQeDJ9AliVx%2Fu%2BfbCIWPYv5Fho%2BCzYUoKA%2BbnlVfnX0o%2Bt1COJpTaWOk64QqzulPWzZD8L7zgQXx4vVoIXhpc6cOV%2BC%2BEEqv%2BR%2B%2BhwiOmxS0rPZqEIyBsznkiTvEXa6OfQtva84csBnRmxl872E&X-Amz-Signature=1ee5512297738292ba43ada06fbc170ad6f82f0e99f88ba91e5f7a22f1a36039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

