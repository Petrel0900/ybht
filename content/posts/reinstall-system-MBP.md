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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHIXYFX%2F20260310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260310T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIH1DaZiK%2FX725kfWQfmL2OSrjyf0N5FIw6o%2BXM6OF8kNAiEAqdlaD4%2BgB72HWcdgspJcp7iRFYvU5XuJLotENkt3IuQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKt35FvP7uFMjHMrSyrcA3l%2BVcNZvOuXKqvgalVv6oJiaKjoiWpcS0jd9Wre7ShABpDP9im70skFYKSf13GMGlL%2F%2FurFHnnFoTheJXRhPtJSj8U%2Fh9IBvu1Tggh5uR9RhZvnxsXbPAfIAnIMCdgh2Yh49WP%2FrUhh%2BIuMCIB%2F8nZhjOtBHNC5avHKmIaXrAJQCnU%2BTV43cvf1szKoob5Tx%2FdWUeUIx0TxdTYqFAhs%2Byl4TIAcAMrzIqP21gbgsT4ZXeCAwWp2N50Y0zhNORpiHQztnuVf4tFO4G1VDqN2rOb0zyHtWhTZ2y3OYWlfPsrqxRjVIBoxkoKrQRVsrK%2F64X0hIy20bEPIijFk64Q45PglcrvPalvBfJTx9QwkjNzscpd5zTgdJY35yoG7vSd%2BXO5FcZlOhaUF5trqF9vw8eTOFW72QwB8MRC0kaSnTih3cBoV8y2jUl251B50anGcUyRBpQNjNKsoLJMB3fZfp6RWYJ0PfsSJJdcnik%2BIAtcA4rKtVHv4hKdY4pgvTDBkSIP8sRtGl2cOWVW9YU%2BhlZQyQArfO6WrALaiP98Chv08D3FjWG2sqtkOC1z%2B1M%2BNJkSxj9%2FsrL07ddh0lAj39wRSqp6HTP%2FT2HTkeGchkxtTGnLSiZIF3sXTX2EhMIi1vc0GOqUB%2BD25cy9GQAmG5McnmBpGyh9jlImtic%2BIqcaC15Khzn7ASEb1LMU7rNQ85ZPKVfMTEPRyPxHJ8aEEOuwpbiWy3s0RvXuOpTsaT%2FP%2F5t5aOO3leKApoLVZQaUYLFWOx%2F11MCSy1brKWsiRDSIYv7tzIlg9229G2owCY0tMKvrjbonm3hpUE8lvysMl6GQW4fiOMHEbC%2BrA%2BW60htmSD2TlKvbpaWO0&X-Amz-Signature=98ffcf11993d64cd0ad79c27ec6ed3b05b557d480e01d7c9dc55ba96274ddf4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

