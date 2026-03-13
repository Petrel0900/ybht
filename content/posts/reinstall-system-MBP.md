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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TMIGBAX%2F20260313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260313T012615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlsYKMxLoM%2FG%2FFLhLPGfz68ImfVA59BVHuqYmxPw1XSAiEA8SsHmEI%2BR17B8kW06%2FfJBpnm09Ia3QNocAHRHD8rmyQqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm2xq239VzN7fkalircA6Lx5NYmIXuyl2X%2F6%2B6EIFCr7qS%2FuqxBLmj3fIaFc1Q9Mm7QREfQtxWNbD9OytqjEqXTyqAoXYlcRHdqv28kFSBm9iXif%2FTzzw%2FHQJkqPrdlGgpcWhyk2OxCIuSOIqTwJIGGD2BMm95revkyN3awyk%2FVv%2BZKhvqnuIr2TqpbuOuIqHk89H6aSAVZl3LH5H7Sk1TZvXAGXRUX62x9ZbthpByHJhTRUawpQAxqxdhvaP2Ssjf5Qz7ULNr1zg6fq9Ky8J7c0Gg%2BqkGQHwhqOv4FfAasUtW2N%2Fy3UeCtX3lZKWtB72GfPNyfhLXPG6wLrhmbopb%2BeeiiYNNlmPbM1eYO%2BaYDMcui%2FroEeOXOyUpse3hBXlQJf8oabLlhUpV6tfAetSnD5TyZievmbxt65E%2B23tjHyZl3lFsIXJQnUxqU8dGqcPjogq8t%2FxQXVjDpXJ09bYE748lhnccA2tqWon29f1BWOhHD8tJriCgexgZL%2BjJ2UV5275fKUDAuZZkAFrkMaC2eUkavUvHvzhi9CvcVS7JfbpP450vJP%2BDLjqIYdLUFZlbhHsBChk7P2iYAlv3miq7b%2B74PPW6i7KLHo6TKvLcdVExEUBLm4wtWiDDVJk0ZWDJm%2BT9Mxv9jgf0%2BMM%2B4zc0GOqUBiJ44ue9zKV1ScAqvpDbAlJnG5TPUTz3pFaPAkH05iKhdPQov%2Bx3DVsQnDTHU%2FnPK%2FUDN%2BLAN8MTlqQQ7nQDgiJGrzL9dAS7bEV%2BEfH2dr44vkgSZYIMOCkzugI2V8ZrxhlscVAeuEB2JWSD3W3nP0dt8I%2BxRPm0HdQN4xP3LpbxwBYLOXiexiYaAWNTBR4UCGOh2AMnyblvzuiKboBEXEDGxg9TW&X-Amz-Signature=9a15de3aaa42906c8887e97bf5a1d1886e3d9f2337076f33aa7a54e2ee68dc41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

