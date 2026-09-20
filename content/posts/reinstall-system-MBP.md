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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLJP2QVQ%2F20260920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260920T024814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0e6Sp5aMSVw3oAi7z9BCXqOM1XwowsOhD026cAHcWxAIgN8LsPoUjYH%2FMg%2FYRHXsUSVNZaon366hkZ4r7QsdK0Hwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDEcWzRfz%2FpNOs%2FXiUSrcA8eS2xy4ilKVsCv6rVe4%2BjxXRK3CrRAnOnAvl5c2INTUaICtShGoUAg8UEi5KcWvukwT2M1k%2Fiaw0%2FKWlocIt%2Ba8UWw7tKcHlK4gfOUQPLH8vPX1AqMdY45pnd40%2FlC9L2qDhp7T9J8WibY%2BYt6xOHeGN3g%2FCjPKGubfOn0waVX%2BLvYzM3ttgiyoMEzJuVGacs1ejG057OPur%2F9LAOAyw7uXP%2BQ09QnDvvkY8SQDem3HGPHOu58OEf%2Be7ihGU4vPdgrz9PQc330CxGnbEVZiNEsARln2fxwYu1TjUoqSVB%2FzU4TdJ2S9akybIoiCWbHHyZZQ8zYMvMC9VfMJJtxcrpd8yRA%2B%2BLdmdgdi%2BmJFCnTr5Uv4CfiCvQTSdzbspfxZnXSgA8lqoAFz0FXrgRZU6IKphrczAxGBlfe7yd29L8O2YBF5dHr5pnBD%2BeH5ffAC0L2EfA%2B%2Fvbrm3lyi1CbLLgGMI2%2Fdg98b5VBXOA%2BshmV8bXMBoOvfjgB%2BmyrVg0nM79B8fTSEsKAX%2BZpKqv8WDvA6XuYqOQePhho9AgY10gNtfLgYcJCRkR4OOJP5lZxfiYntPxjWiMf8hoVqivX4cVLLdsF5D27nx9QGWAMnIGkKEWF%2BPI4tyGBA%2FF52MPzJvNUGOqUBv9OsxJ2WQ5g0mQOikOaBxi6fvWGGDRmizxwnPcCptJotrXd%2FP6vAMqAHITAJ4%2BlECTEvR0ER4PTiy%2BeGE3M5bXfcoo9Y5T3BdrXxORg%2BsUaOhctKYoIDB3QUXP%2Fq2Hpzk%2BkPHtmEU3K4hQ0zqGBpBTuw2C%2FfWhNUByidTTKaR3pPVqqAUw4c%2B8d6BBHJIkKKhO35krR9T3BJhhWOkH6nDQ16oC1B&X-Amz-Signature=56ed95791383be94d248f23460434488f0aad914e676779ca4c31983406af714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

