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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRXHEKRX%2F20261023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261023T025208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfr%2FtFtd20KFbA%2FnLzNVwnCiRa5cqS8XOzHOVJ%2FwDXzwIgFeyBwVZR6kjuVG4jCID3GNraLzSi4b8dL9IdHdzLhH4qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVBY2rEuNDmBKHfnCrcAxZ5mCruEqhMQAcOgRMXUDN2v5TnkZNusps4BXKBk%2F7xM4%2FUzbUbyZl%2BrTS5I9mRCZXkDHKnycb9yoKrgcwUDF%2BQUvtBye5Xq2rpiYMBN5RsZgKEnTbE5a0CTJb37zU1Gno3Qjnd52zsTHVbvt8XhjuXgojBpv6lVmPSI7eEEAriUqXqx3sK7XjOv3QhwXxqDnEpv0Ql9A5HMOVmE%2FjxdvERcvq2gTSRS1BmPbFDtqiUlC8UfXx6sK5B69cNkQ1%2B4GSLf66OGRTKH9EEAk%2B%2F77upZ%2BxgwjIopBpl7EHW0OSkw0%2FsVdnKqG9El2n1fJof8UcJYGQMw14iefRwRqPhVQDZZZGW63034YOmVp00KkDjfGKdQZdXOqLCR%2F045uAWgP%2FMFQcLZSn1HQPla5POVgG4PEN84aSxjXWfOMz7xuV2tG3HEtLZu7C3kUhT7wF95eGUub6Ic4RRSOM0XpFfeaem0lFOwnLcf2MIet8EWjWgSXhpnq8CuBkQxfvrpRqTqdUc8WX3SJVvsoA1MfoCoGD3dzsrrSdNVu5AKOWwFLK8uBTfSEMuRWnZMCGCFbc%2Fe6j%2Bw%2BtWi54EnH%2FuxAgCtEIIbvu%2Fm5iPSU1H6yntbvvi9i8D70BD214zASqIMKuE69YGOqUBNuGCFBwrYhIBuuKpqvV8Xt5M%2FF08L4XREi6NP4R8nOmJ5VrkFrvlDOpndCNeS94vrlaicym4drFdJ2gB3nWAeQkTzrKDVVZP%2FKOprMCmYQvBNfNfiDOFAnlsCq1%2Fz%2B5hQI%2BRc8WHvcQSkp1TFiCrAZs%2BWh4bGM%2FcIEdVgUQIe%2FFzHtgVn98gDSgkUqF0ZTkmV0sljfpxbwA%2F15NAdCKffvqXaFAo&X-Amz-Signature=b7261b365761408c34ae2430c2699ca300f11b8c41ef65f4a12359866131f772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

