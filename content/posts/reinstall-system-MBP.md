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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RETXMLTU%2F20260330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260330T015440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC249axHpcviLM1DcrDEkrP4cHAAcmAbsfApBVcoiSfmwIgNpS6jR%2FGy%2FSNFWysukCWUIHHLPAzfsAn07uabdFXqSUq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOFz59CZ9QceR30NRSrcAxt%2FwcQfbtE2sdQvRfRC%2BIRM9d5qAjt1%2FV6s5DLDR07zsFtLy6h5Qiy3pvg89D7azenLTH5MzQfTtLAWQgZR%2Ft3VXiTpgPIpOjzwEDtk1vCUU1eshFU61ad%2BZHEzlz%2F84TSZqgMKs%2FF5H6ZbuKusepjhx%2FFODSWueeUWRN%2BNyolVKVEp4E4EHSEdnhoe%2BQGiwD7%2FRk9TPU%2BfdCVw6xA7FM1WKtc8QurBbST9QOWkeOqJQUMu3pOnugt9TK1jzBcfKIUFoK7VaERZXWUoQc%2FrLTVx8uoI%2BWxUhnc8igaqXA%2FhHNRwnmgaI18c%2Fj%2B5bwJ98lBCjzyV3wsBEy%2FWmShz%2Fop9aB8WGeFK%2BFE%2BCblQm1iZhx2eHp5DnUimCf6C1rno3%2F4xrlxS0uPJqy%2FxUAlvJuMl2rm6Y7C9%2F5dLiEq68aGG6hnZG8WR9jDBsQ4UPvcx3fGtCSeVbjzRQa%2FzWCYeFz21lK%2FZRzYl1w8coAsj7zYTcUV%2BGr2l5YyDGiOm%2Briw%2FYQHyT8cf6929skOpdvaJxVeHanmQ8eaBl4mc%2B0UnP%2FYsGwzWk0ADX6xffiU4GfZ8yJRBMrafB77JZFDzQ2Blzv4Zh%2F9aGtt3sxdIHXhqBse4f2eCM4E2nqmJgiDMMSop84GOqUBu6iSFkJDf2dA0O6xsJ3uV3xgR792jznx4b3fwLNnwU17yibywEmKkG4%2F6mUsxGV7MWslvbrr7jLWUfBM7XBnLHcevI6qil5LqlTCsnVCJd%2FjwEfxdk9btnH3rmt3JkYoqNDY077vPqVdlR8hIk%2FuJ7Y0ylKyoBPcaKtZic%2Bd81v015EwWqnDMiR79NXjiJzpm3LpEJx%2FwXyPmaXITmvRR8r6slBL&X-Amz-Signature=3329bd63368276ec4e107b4de07632910bdd4e2163f30e739d3ae19bdb8afb57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

