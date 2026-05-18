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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HPSRAEM%2F20260518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260518T024205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICITrI856lwkSMWZky7MTzjKrxA6wzreYV6RahXUk7BBAiEAq3KDiool4qTUkckbll3T%2BbMZnBGhcZZZ5rXmSR26QDkqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKloFa2%2BqN2SKCv6JCrcA6yVy9MMR2nn33I0SI%2Bp2geEq6%2BlG4VyGrE5UU5J2j0LA2EVgJJLC5%2FPNJsw%2FZEuyL6QQdqzCufLbM5f0nlMBSelBqvQYBHdfV4t5bGuEt8nwinkdkgUDO52xrPVigEhz5uA5sLH3ecRQ2gXjYnImlXmcLQTpUp725KU5dpNVjsSuVlFlBr09MkDSl6DSI%2FNYNjcNJJi9sSXbi5u4EDFt4EUtPg7pF1gADu546NGsrBYLbULS8aX8wf6HBuuufC5gOfRczROQxYJTDZbILxzYpDI%2B5JlrIUxSP7%2FlaBSlF7PWbpwGG%2BwfPFN%2FT3mUDHGowMpTEztF5jbUfwgnWt8wun%2FlgOtQv0ZtPDTF49A4jAewYyq1nXAYiBiRtBpt%2FqsANq%2BeCwAbrcV2KdxWz3hHkR1xJTrEhQgsIPznx1Pr0Yx842BGR%2FRL16n1QDOEa%2B8Fz%2FhQ9c9C%2FxM8p8DyeJM1zr4jfkie9TdMbWYLJPGyJIY89d9ZNKUigy5s0WzgTwfkZ8V7sVZwuewUB5wEPe5o0rHJFJqRHQQ%2FTiUzcpoHPaGzCubgIc9eyY%2Bj9h8ex95plrYh96MwS2H96ywjRCEPp9MTa6%2BmWdFLx%2B3m7ShLN5x%2BtLu7fA6ZulqVyZlMIqsqdAGOqUBpZFHLZy7eVzD5zfj3iFOEHAOxYgM30Pyv0J7fVJLbU18jkP%2By1yfnwX0qDk3YBuJ%2F%2BKPhH5PBXdbvQk%2BvJ%2BqO8Mx%2BU37uLzmldYvUJAezGq9pBLorD2nWO0wZzZAkj978Flc07Pm6QsBCswBuMfElSJOh605g0XEnMP6aeffQ1KJ6dc5gxCvGU%2B18Mfq%2B7f3Ewz117EK9ZIMp7G%2ByDlIFYJVVecR&X-Amz-Signature=8b7f45d4570ccec754e235be32b81fd014ef812ca3361905fe01dbd07a89151e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

