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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL2QXQQJ%2F20261010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261010T034616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIJ6ruwGLFixvs%2FwaQTUNm9Set5Fmckq4Hous55dBvbAiEAgIGMxvmxPWpqNt%2BWfcXST3JY7YkBOLs3FxNaN%2BKlTl8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDC7mbYqRFbxewa4MUCrcAxGAwH%2B%2Bnjug0hx6GfCz0QPzl7QM6d0zoRGPjyruHid5wvgX9zW%2BbcjiwAgQHYhWuecCPiEW%2FSq2XkBtaMYFBJ648uIuAtxcnwoPnYK9I7afK2k2dpbstFXMBht%2B9qgbDZ7opMS2698%2BfEKaG4WB1rBnvRsBfJuPnArmJ7YJPz7dnW4qXUMLkYTX7sjGPUkqRZyqxjnDbz2C9es5ra6aZP52xD1hi7S3vWXG%2Bb0KkTpXsMecM3Sj0ff0zzTe0Xy2XH6nGTiDsqxmwDw5f3hzRG4aYuqgfkLwjnSiEgQM9vKcHzgfSEWPzIQ%2B9EEs9wOi7BXdpLlcCovRsJL%2BDvbfBJC1yvFKKejSJ8x4qs88eF1B5BF95LyoF65272uiOtQT0Ww0fUBjftwvV44rpiGR8%2B%2FbV4EuDftCVdbnbUyjvQzESULTUtG5bVnDLcETQWh81nuaYsPMBkiLUkAWeinodEPOEu8wkJV%2FJn8OfOS%2BxXsPzgQ1IfzTrVQ6Y0JtG2R7FQCLPBPSEPjxw5jxLJwPSIRp7gJkHWGJlsvz1%2FHUGH9ERDWa4WnbbH0jK7eUEXiPy3V1cxziO8IyBqjNOljxQ2PokJooRE6GZU4VvKJSlKjLE4wcWp3jqv1iEm%2BfMN7fptYGOqUBBSL9F%2BvCzNvR08TCgKWSC7Ih3mFl3yS0bdqRbR7s2zYrCQ9PaXC80lXL7KPi5UxcLVh7B8C8qiCSkWo5xKizPy3vdqvoYGQPf%2BONMqO2ddUVgng2q0DoWvjjAF8uwEdFRRYN2NL%2BIyN%2BE5Eo0h%2Bvz1DzojYBVAqogCAiUXVhXL3N%2Byz8n3ZNXKDvOm%2FJmIm%2Bb6aXhnA6EW1W%2Fic09TJWF4N%2Brvqz&X-Amz-Signature=8bb91b7fba1871e7f60cf04d8a96cc9920e368b1554f25b853cd35a419faa393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

