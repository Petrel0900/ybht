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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD7CLLDF%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T020417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDHfrYQMToKlTeP08u7xGDaLbQKb86hNhxcjQUVECuR6AIhAPIMD9csMUTr1EdAyWMRIevPXoRVA%2FD%2BVfF1tFgaChg%2BKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCYKErEETBNp5KAB8q3AMBWrPZaTfam8UqWznHKmm4E4YWL4Gmk7qePn2zEsA9RapcgJRpD89Kts%2FvrasxvH3Jn2S5fCcTg4FeSXlA2jge%2BH341q%2Fvrf3mSuQ3XZl4HFyjvO1pNEF7tgsfuGa2l0wPxa0BVHxpsX8qzZZGd4usJw0b0fhg6R2sopfD2G3gxqQowc%2FwqSlKfjISklGZ3nEET4KBAmLrRDtnEoSdutjBghg0dZdlcAeH7iMc3qetg0o%2BWnryW5MJ9c2wLQEl%2B%2Fa3Ol1cxaWCfpT97MNT1i1SgrAuPHfVdJ8HEgUqQcLNp0Wh%2BzF4mVcE61Q4QqVlB1evWineSuuJFtwNP0xCkBMF5rGT1Y00g0sAgxl4%2F6mo50j3jA4WOs%2BhkkFJFg3A6wq%2Fep78wUq8RDFY%2BuCpGrOacntm0uAYXiDQmMpP1r19nYur18uPa8Nen0AUU54tuCfk1hrGv6sOL52AcuAZsBlj1LwxrlQdPriS9rwBeX9m%2FUpiQ%2FpRKA7OeV%2FH%2BTLHDeEaMywq2Gjik%2FkrdgYCbhTsl4RcufB2UObgcrJbyc5ba0z%2F%2BaP3wWe2WgJZtU9r3UBkVBtXk8aShZoKewQkETLsZEv4T32p9%2BU%2Fi1AaYW5SJryPLIjUHkplV8T3pTDt3cvSBjqkAW%2FwQtzjNS27wxZW07TINFH9%2BkHwc%2FsY%2FK14zMX5BJ%2Boj%2F3ysdD5r62QVzPlyLwymJEqjGvgku6SJBnJdEFdsjy3%2FQuKZTVTnonXNVNGqI5d%2BpD7DBUqfN23DgYAPEhrVQMYNOswbnLzEl89bKmnXSDvJO2eHVxJx4PRYwugyhRG7AotTOw9DdqhS%2BmvraGrWefzcjYyPL79fQ9OwxQRYeohbQGF&X-Amz-Signature=d6b349cc034ac8b72fcf63573000d2898e19fe123764925f83cdebd7b066b055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

