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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQ6Q3ZV%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T020742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD27yRana7vy5VTfZ4EHt1CBGZgkML%2BFZUq1bRksJlSTQIgWPZ8NiBS%2BB4PMr4BiBENsOKwviF4mueA80K9iWWsF1MqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlD2LmBewfPQYGpCyrcA0uRF513VidBKVuETYrQpM4soPaArKwLbusONcwa4x7SmSNfrGwepm8XyQDA1gKVuRJYoE00meodp3hh4p4O8eJTJw7lz5SCflPLHKMl7EG2DHeSamnnIpcQ1eUNRKvO1ylf42k1KbOSEQyr7oBaBdMF03dNNs26hFvs1x%2FBcXZfDC63gaOLgyAYfVvxRAx%2B2ci1WhIcMUSxIpN%2FpOHAgkhuu67AmBqriauRwRMF4yebX4Ns3ND94UdY5%2BDrWk5ExAOf0%2F42aXnGOtj5Kd5CKfruBaSMEfE2XC9ggLG2ZlIX1zQfeQRRN4AwzRZm%2BllziEjuI9hsce9%2BnCx%2BahkEjCVmrfzhYXdcdQzfl90E2BSGFYJBM0mH2KLe5%2BTzD32vKKCKmPaX36l0qAynHbfQHALWyoDFvSAPaVHD%2FNz8OjqgOEUQAMTgXT5Xkcd1%2Fc4YhNuQnvS7gkQeFDCg5yNtAWwNQ3cQkvkrFhit6EFy5HFkIQOsX%2FX8AeMXrqpWV7afd5YPTHoa%2B6qAMzSFrjluEDyXnu6eAOd0vcSFOOeMK5ujB4IhmkGLzpAuGZ8VvKrVJpjmfBoDyFmV%2Bu6gU5XDZYRmpSmmR%2Bhyb3bg8w4bijsBjscaNXx3BETYidK2MIXkv9MGOqUBDAc8PMaBI86UHRzgaQHCWYcJ%2FyQTZQrdo0xKkHfw%2FNWS6zSRrMbAqTHx3JJLrsZVlN7Wj%2F%2B0QKAPWWNPRC6nOttPuGX91sJJu3UiwOt4giRihSZ6UUpyj%2Bsuboj2mYkqORWxS%2FJ0M%2F9Q8mESp4dih6QB8%2FvzxsNfZSTihuCEmgJp38CeVQBufDhGTk%2F%2Bf7O1oux6hCOY4c1OJJDb9JmAAzRjdXfg&X-Amz-Signature=b307896e4fac7f56d20dd9493f56f3061be64f55d6307acb78a82e6b7233c7ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

