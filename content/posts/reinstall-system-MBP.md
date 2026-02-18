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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5Q6B3K%2F20260218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260218T014302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDniPvCWCJGBv%2FK8l1cuML9Hnxfl9mqBveLGJxEkc9f6wIgdh%2FhQdR5kkLjXRu%2FsBYLBNJgsMBINuHNn4Ii%2FG8fud0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDL%2B%2F1zaYrVuchmgRXSrcA0LBbtymAYprujXUV8DLfJgAQkz8g6sfW1R96xgT28%2BG1jCIwNbWIl7PUzneSpC9WYBNeAoCKxACvCmybXh9lmixp7YBvr0EIquuRQFjOO0VKcG8%2FOiW%2FVSgDi5lGxV0b8amm3EniOyIBV3QvW7MP%2FGQdcckJbLcVevEmjf9OHfYaioDqskiigkmQAV%2BkBq72UtYHBXvTA6zzUMLWyO5A91oWqPPyTD5pTqHPMY3woAdUs%2ByVXPSDekE%2FMpJ7tyXdWnmkdazUyMT3aKYGa1qrVZguzAYb2VO7d2uIw4njVzNz433KsV5dGj0PHbO%2BqzoTN9qFFyHh006MOyfooALYa3%2BkJxflRPLphry9cN6LffxJwu6ycq7pKjQdD%2BSRaAmurCqDyRFG0B9KjFS%2FQwiW4EHBLkgv5qF6usrK5n%2FuvfpCVB4JMcYqZlydSYk2zNsmjnV3r28eGBmezZIR11CXVId3TDzZesTGqC8UIgQ6AlNWHSwEBxejZn7sa%2Fz1Lwg9osCzBvp5KNiK90FxsLAZ3rRNRNNc29lfZXKj%2BQkQ2ZvvSBv%2BnSIb0lPeWbiVAIawwao3ilV7Q13tRahyaj45vRJg9cNbQb7y%2B8Qt7vB5Jcbcqi0mLFzcoIappv6MO2f1MwGOqUBlGrmIPizgxciy%2BmnuqJx9zdx7IHxdW06WPY0HsRH%2BzISPfn3%2FI4UY58Hs2EKuTxY95zM7u6iCzknAaXKtdLQfREzR2mlTOOb1cks8tUKQwUCx6bswzPr7lOwi7Mgn03VuFgFz5PWpj1NradJMYllbnIXrI7UkVqLM%2BY8aN1%2Bgeujb886tGaHrOUGDdafvsaf%2FM4Xh%2FnAdr8rfEq5LVqbt0Jvjsv4&X-Amz-Signature=efde3d3c785f190e47c392db1ea7fdeafac00db9c2da1279f804b77c5527d9fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

