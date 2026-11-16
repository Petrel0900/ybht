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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZNZIYK%2F20261116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261116T041259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXJSm40%2BSnFdg2pAio9YG1ca1xsKSviB8WMelhiUt64gIgcun5W3Fb%2BOMvpMth0Vd48shURH14HH7OrEzyVlqQJ1gqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGibC7ypt3x%2BdQcUSrcA0ZU1pkzvlYgOK%2Fd7eWFUTQmWvy5tQR0f6gi6j1HbELysnpBbhV1HxuXyDaV3lk8AA6Sb1msQ4ADdNk%2FbYAn8hoKFLn58VNFgZTvU80vQEmKormhMMIhW1kDBPz%2FEZ1YZApCE6ekxPUUiMuMSqB6hGU4R8hMErCvn06mbuFmTfeQ32nbZAoC1DV1zP8e1jKy3gKCuH5V%2B2lmknf6XqimgPTrwawz9thWaNj0l8fjmy17pH8nr1HQO6JSBlIsUJGDPb%2FDpQPUGbledHn%2FNCjzgYo3jFoQ9i7Gc4zAq0e%2FWqxdq7egTA7GGH%2B4uQIJjAY94RNteBIcd1dXAmLzWUiAn78%2BxOww%2BzEBi8I3XJ6I0t0VkpAO%2BcP%2FnPX4wPIvle2eYwT7wOUvac6DC3qfxJxO6ua4cQR85D7oFBNsU1b3X3k2tkeG9OYw35lJcBurUkgDywqK3bPDf1WLV7INGkKppZpjevhdUNFH%2Bf6lrIt2rLwJYigzQ4XEv2jSjDZZkwPLe7Yxs7qtx0JE7HKv6nJZfDQg%2FvFjB3ncV9st6ZjPRUPLXfDfj%2B2vECroDkD36iKiUNpte0JKwqMCvlIzJuzQmdUCE63gg2dxLQgTpVdyEzLaI5z6JHtGfftyYFN1MKfi6dcGOqUB5q1KeBEBoBNNloqlNM0yw4X647Le5ocbU69S2rr2%2FDowFKBAI3JSQuri38wQKzuXroBoSEbkeBNnjvHpeAjmS8e%2F%2F%2FiHVSOXZLav%2BxJ5kc1bjFREAYcAU1VwOks23%2FsmhzCIj3J1D%2FMFBiIxWojZRvaCd44pgTgjBI8HRF4aDu3gQVsSLnWsxTIAjY5YeuOGZ10ZfPsveTwlI%2FnKY55ofl5GB%2FD%2F&X-Amz-Signature=d87a863c24cd4bac1d39d1725a5a737661a9a119f60c33689edf5af39dde929b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

