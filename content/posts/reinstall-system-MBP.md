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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDY2PBZY%2F20261013%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261013T045505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvme2JHAKUTQ7bXxJ%2FIatJy35anvGW0Lf88JwbR4j%2BLAiAmP%2B%2BHsWmQj%2FCLf5oEyjA9oC%2F9fBs%2Bq4S%2BJ0lG2Gn2iyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM99%2FrdY25R3qyesocKtwDPcSyRZJW%2B1W6imW2mce2lEhOubyYlhBC2MQzJCN9UBa1cpmPqfwTKwJIFUzI%2F%2B9sSNy6w3gJQAaCZlxMD6j0TbdB%2Fqvuw9cCs5kq4cYsEXfFtj0uCNlnHucE2KnkfW0ixkJA1PpZl51eIwPaiASnvv2UN%2F6WcPk%2BA7NMLWHJQTSyby%2F%2BD3H1s9yZdsue20Ypoz1FvRRq7O%2FKKf9ULQViSfaHIo%2FYhI9cmV0jQMHewPMJyhrKgUgVbdkEr9O7plo6gBmlNcLG7bfHBGocFOzCGMK%2FMBSuomb9QKri9RRpiIr1VSDqJjOVzb06Jmuoa7YJJYyYLgi0Wd3%2FkyDQup6FALQdFWv1QReDT2Hw3TPaQ%2FdzL16qGXRv5y5tjgC10cMeyt0JT%2Bx9fS3QfqzjpR6gPbSUWTYhc2iwVuxt%2BMmSU7t1l1pfPOWIgrO3WvsoENTNKi0xLXshN2WTKJ7yd2ThNrezYqhMCGAN52MUL44EAQ9ncL%2BYNCmkQgitevXV%2BoMnacMuMS7voZS%2BoM6pJGlHTFbL5shDk2iEl0Hz1VKwLudbUWQR1EXetqUPWyVo6MGi0Zu4HefAy1Vxv%2Fn1w4yxdlYPAZuSQyXfSW%2FZmDw8C%2BDRlQmN5RopqmXDRUkwwOG21gY6pgEpiLIeu09ekEmqXieWJnfGvYs%2FWMsCBc3tMydTht7drkW5JMeOzutxCYwT4xNHcBlb8TyDTrjSHL24bhfwRotRH5QpEExJ5mngAJJg%2FYJS36dkHknmlbsW1ChamMHylfWcuubL2HUAnPyYnWtYz9ika6iB9VpRlu4xI6k8QEiMTYaOconPLK4QxerlvtxS4EBx5gNpjhA%2FHlvcQzQLY24yIFx5%2BYbC&X-Amz-Signature=dcd1df39d26b1b5336fa820824d9127384f109b3a52dedf989848d2446b2d236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

