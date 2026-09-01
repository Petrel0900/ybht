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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257TQFJO%2F20260901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260901T025934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKv4omgGMlmNsVgExm%2BQU8qPQemEdlzTDXzeyF8ypUfAiBEb5jUjMyAWfFU1o6Nkn03EHQEGKZpsokJg2uvwyvCwCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML3dbA6nU5wCk40W%2FKtwDiTtxO379ah92WdzXIpS7bhg9CAaVfSH1gTZF1Wu9JpMJTXTumx%2FlfgETfVj1rkwPJRja38blmjW8vlVO270%2FPZAHhEF42%2FUrby1%2FYco27%2F4SKjWd4MUi5%2FaD7dkcLwXVWmoTQbW9e7P1Rycgu5DPKksEy5Sip%2BnfzIzXZ5qit9SB1fNt%2BpMGz6h1u9SbZKUCaxadb57n38Oq%2B85LskSaPpGeSQlTZg9N3n1gLapzvS%2FEb5fd2jR49YcKIy%2BRN66DEtme5MkxcJMWUdVYqlWtCy0zxlxS2sw5ZGiCuLHyRTmxodqWGCNvRao0aEnqY5s8b97yCUC3KQ%2B0Ofq4u6Purdd222Os7HLXQKasfrsVxgGrjxj7yboNt%2B7wURglBFVXRB%2F1CZv4gBXaYdb3U%2BDoRtprSkSVrzC8BfZwrcCzQYKO7trUGUi4lUF5jSn1hewfYBScSYxY%2BAvffTrrVOjwa03wyZL8HeCw8UtTzVa1%2FrkzdyayD%2FYYeDa8JACOWSxpFxzCQlIMDAlrGJLgWppfxvdhBAWG7SgPoC2KezArDQzqqHFkdd7Xui7%2BrF5t4bYgQmWDYU90vMoh8BLcA%2BCoVJlwiXZGTMMYT%2BumM%2FYWotMZipnLdKDnsKW51jcwqfnY1AY6pgEIjMmZRFx%2Bybfw%2B63PIF2ZHiEnSafY2NvKdKXEI9sBgpEfXHj0kOllfAm9m5sjw%2FHH57sjTDP1OcurZ3l8UUW8bMObYTMPvkpxl%2F7mCgWBIzzUeP8oHMmoKQwVbrpL4%2By30bubHcJxWaH2gxcXbARcvFOYQumoP0wFbD%2FPJmxWr3bTZNKqX7rZWCDl7z%2BCfQM6cOyZfhZnOgbNiJm2s4koeuQJADT6&X-Amz-Signature=703827ce1d721f022f7c3a9bd4b6c32c607f8c8996128078ce165d6082bf7327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

