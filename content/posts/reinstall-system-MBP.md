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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNS7BHCT%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T014329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCALFLNNxZaSAmt9j7Im8wkdZnI1g8TnFFcChjpYI92fQIgQpCLv%2F0TtJ299td0IoeCYyolF%2B8aNHduV1IntPbHvkEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BM0G%2BI7H%2F4VuxcyyrcA%2BUwq8m6RFag7jCnYJylK99uQObzmpCmqSa7xfZKG6uKXzmhKPwneMjCptwJLXX0SaE3U3KJqwr%2F5XN3CZAMCLjdOUZxdr7EBG07e%2B6t0HtQVsIDN%2BLCKLtEUI5GLZ%2BwhEisoiGQtsLN9sYscgFQ%2FEweNoozZcg1sIxGVFkDjIphVY%2Fk4GkhuAdcrqTVqatgLj%2FVqBlKRDhTzMI%2FDkyFKSW8preAdiLHQnzqfIZq7GXLmb1eXzs2B5tVL%2BwvQocMWEvs7jkuF7ImsYgHbVXsO%2Fhnab0Cq%2BSVNWim9Qa7c6GGyPdyyK5xzyLGS3tSYdMro%2B6a6q6aa0LkF54gmzcg1rbbcg6J4QX8e5HHOuUZnxMngrR3z8TtpJL90LHSHB2sbIkGnGfZkqtt35sBRYRVjj0iSYoaMgi3eo5zdgY%2FMVEiccaagm7ZtnIt8USCwwWxCVqZ0LDqJQK1GR1CTr%2Bc3HcaRMvrT9NvaAXshVtsoDGs%2BUXO%2BGicKDgrhF16nfLQN31Pece114Mr9c9G0804Wh8stAFlDDCwYWUg3H%2BMsdMIx901dBbgk1dtfEFwvA8wyisAgmPLa6lrn7IcfYJnPIQvlFmu%2FY%2FPQuBxSxfzu8budYR%2BEABpZkrIBerhMKDPtMwGOqUBdZsU1j9aOdFBmFiLssO1%2BYGv5tRqgRxKFvfhYYLxvhkOWD1%2FSgVHF%2BvH7hbEn0VmubEi24gMmm1gzw80dIore5%2FklOKzHsf2Xu4JQDWLcJShh%2F39glgbiuTZOjR7nTboio2gNQv8avfQQSjnkxKaSOnKhHX6mv0rEGNzBQQvFNmiKxpkt4A6dL7RkQxIFm%2BY8UCNPhQE7lc1PI4E2kitbf4IJxl3&X-Amz-Signature=e384f32b6b98d1c853d6d3df3a8f99ca291b0f9736092ce9a084f878520113b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

