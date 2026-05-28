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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISOYTD3%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T023355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDufrznw9ywvegzjI%2B7Cc%2FgBQ%2BfAQNK9029RHWwCFN4%2BAIgfJyRRSEWwZ1keFdAW%2FL%2BVtoC7rBed4KgrDnA74HN6%2BkqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxmQ%2BtI2ViGubRmxyrcA%2BXjh5iBghSMOAIYv3xlyUt1pxgm2OGBPjp6puYH1rrUcQ1k4LBzvf8WBb714zvB0QDiUo9DgSltDTmVv%2BRJNLPKIGwx03%2BQZGAk2ABFyDJTd2PeO%2FyIl%2BbACKkEhqnICHVebdFlQGFGFM%2B3F2%2FOsVCvhkhsbWI0tcq3kuOAPkCVrI8Lw9lHnRnuWlcX973iewxSCevBhXPo1qLmcZPvyfC15XWB6J%2BtztklsAUgJUXKG3aWbCA5NosyIzDZqwS%2BhZqUPDJSYYQFjHVZkDuiyP1uXmbIX7h%2BSoH2N7yNwn%2F4UNolOLmPtLSVHfehs1tCDoRi1P4Kwm37aVEk3m00zmP4c%2FeLa9Uh0qRNmJh9OHoJG4p7mPfJ24P43ZH1mTDDvGtK61mTKQFz2%2FrvRpCceF7H%2Fm0UJz%2FEgTMeBH3wtj3LRJbpqo7%2Bzjurahgi3JP9mQzjp5HQUHeZ%2FnqtC%2BOcV8GCU%2BSsEfqlNf2WJCbfPqs6fepWHeqftznONu5h%2BbrjCNvvRIBFaw%2Fr3iytenGkAqEy4VVz4MzGatF69GRbQ890GNjAZXWt3rSTz%2FD1uYvIYalM5bwosoYNyUSjHfw%2BOUhntrgLf7PmAZTwlBZLPz3tGVxRVSyAmHotFjmWMJDA3tAGOqUBW8khJ0jKyRdt6XHL65yYZaft4%2Fyl%2B6NeA414pEzbcsEr7sh9oLJQuS1GOvBdlQ0uQ8mchiNNnrdHABo%2BKliXeBGjHpymHNuslj5WSTKBoU10bnnb8L%2FbFXM08flI%2FHhcVGqqHeSfCx8MtKjmoapnRhbNaAavxwVq0k3iq2KZZ3h%2B4mtFipW0EWRUFZORZEutb7Mx7coOBxNswkJ5AQDSPGS7gnKf&X-Amz-Signature=b2c1162b12c2db130958735a714d2c6b65addcf40611fddbd4d715b456383cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

