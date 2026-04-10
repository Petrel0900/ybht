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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WIY3S4%2F20260410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260410T015628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCgu0QubXmf41rgOHIrKdyN3MEvOwQaJl2e4O7uKfmZGwIgHqcpDzIDqmLm%2Bqq%2FaTPFEo2Lj%2BqKqBLqOE%2FBOLy9WB4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDK8PNHm3XkD651RgVyrcA7g2SwHug7Ua1HRWwjWs9384VdDqnJDRDxfRsG%2FfU6nQRbbRxvgfD2sC9GGdtXBhk%2BhNBnWgcepOI4IPmzP3usIMHZmKjdaxdmi8FMjfnDJ5zjsHBV0qyyXtR10AfepUf1eoaNCEAVRqzDs%2Ftzved2NHeiVCr4BqvZbTInqradWI39EVw9RKIhH8n4fXr20KQSVuu48xXrEbuHwjXONQ2ij9qKRWa9bHRfe0uqPg91jKrhUP8XQEiki1%2FclPxw6F8gL78nRDdxbpY%2BPrFJCKMlqwH7q7CnENnnlQPE%2F3peoVI%2BT3FwYNq3%2F3WyDx0YuRAQHHLDVcDE2cS%2Fw3rNzY%2FWq0cn2gTSipSdtS7dRa7BmQq79sk9364r6n5y%2BoGuGQeV4unpijJCZmmsMLQdiklV3MRiFPN8Q8mj8LUR3c8elaYXIXdo%2F0CjnvRIHeZYjVcOi67V%2FKjWxz65vTwdlxy9oca0P1olGvoB%2B6TIIJDFOCg5%2F75IGKQJw8jdJyem1v2mX9kLJcjUZ5X7omDfAdXjCUg9PG3NwfKdYFz124om0C75rgYxNywwBrn2wQtueWdXO%2FJd5SFqV9SAc0eDicVo6ObY8YzDTKEi42hyWEK6qNrDc9Y7jdEthis%2FjXMLiO4c4GOqUBTsXGzOnGN1NNL9kYP3gpJVBmSZ0h%2FGuXg5K1jNBzA%2FociXqONxUKoXOUbMUfxx77alMzeSo2m9oRgrftOqRxTXuj9N7GyH1sZzExQlgjl96YHPTcIrbAkQ4P7HT4Dz4xedBKl1DFX1Ua8%2By4crwtSG8L2qDBFbDoiV2YDke4H30bZ9YqptMG%2BfQKxM6XvrGLGR0IxeqcNCLphNXYoXwfL171Xag2&X-Amz-Signature=e1ed8640ca004f9e7d9fb2d37ea90ee1d33f3c15f6cca3338b505cfccee90795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

