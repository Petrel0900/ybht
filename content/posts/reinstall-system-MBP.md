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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UO4PVC%2F20261113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261113T043056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNP6hSCSD1hXNScnHqqpP2uHD9YkTq039COto4S8u%2FVAiEAlHH%2BhxcHwbz77BstGzDDxaK24zGYZy1tVNW5uJMUgvMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBBKqxd%2BNTVogUoqCyrcA6aXM%2Fkge1QGNEk%2FUW0Q5K4pXvCul6CLQl1OKz5t0KQQpj%2F67Ld%2BSXDmjYjGt%2B2DE6NDjEBLt6FtC1ES%2FvwLZNIzKZM2eEVdBlGfG%2B%2FhunOT9z0GXaAhnavaK2T%2BjRIg%2BxwPEZ3p1A5I8%2Bk%2BaSQ4cRpVkOm27ao4xul5%2BUts6ANm8pSgGnTuM%2Fdo0L3KSvmboNNrmAIuX1uEuXsy%2FzhwEiAgUtsh97KTxJ3HCx7NBi5ecHh5zYuEnj7rcQszleH%2BVyt4tD3%2FB27WtMr7jKRuV2zPZH7ItMyLAKxsnbR8OcortmtL9UatmNYcXmjALLPELX%2B1lQABuxPa9gPueWyTBfQ2ZD9%2FsckLK29cWe5yiAhs6rJ4Fsvz3N3K8GSXJRael4Ia7N2%2F9eTAfdumTjSSK99iLclXi63ClSdwF%2BbJVUW4d2u1mrEui7OCpIZgBnujIWRWWrfVuXFYmbUcCtFoAZuR%2BfL8LLpfv7rCiBg0rr4ffLX6FsvbzHIlGMHRLFdZhm9KZSwm%2FP09LBbcHldaB6NO0S5mnB40ruDYHZfDPlDSSMRmBv0Gtu0ZIzDifgePA3B0EUeS4d2Tlx8T1IkT70b2%2FQ7yrb16SpXWCuQWEtJMtzTGXlDwBZIO2ZCMMMDz2dcGOqUBG5SDLtRLJ6AT2NG03%2FmvQswqvEZP%2B4DdDqzURXDNqhRqJKGdZDaAenWybyPB4uxabLX%2FVb8hUIUz56Okar6b%2Bq7WpcQ446NH8r7317qGgB%2Bynq%2BrVA8sZPdDCCXkecc14JGV%2BwvMcmf18Oa%2FCuKEptLF%2F184%2Fc68pS4qosTKm7aRCWzu6%2BME0FjMud1tHURt9hc0sZ%2FFb1vfzle2Y869Br0oAAf7&X-Amz-Signature=64d38ab8767e287519560afe7d7e55b4e05a7207c59155e15e0fd59e041f843d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

