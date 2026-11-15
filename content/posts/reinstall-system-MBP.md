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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JWMOWNL%2F20261115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261115T041331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCxdCk1u7lT%2Bx4jHTOgyJP4wPszOhuxBjdRB5DEcvR7AiAFHtc7y8MvbGtcp3f2rbsDPF1kTP83b0NFc%2BNmEHCa%2FCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb3JePNlb%2FmqriHOpKtwDQuNdq%2BoQjKnIbk9P56%2Bz2zMDmvot%2Bx1Te9hHdyq1n7nGD0Rg3cmbo60zGz4vCxawgS8Qof%2BHNZr%2FaUYS%2BbO7LPcTBqSNdbFAhdtrm4Y1Xx5dsDQk1g27cjEXN0BTMXub7cARuDz4MxlRdmyBDSjDRZsM2j8ASueFNt8KyOnEYFw9qP40vNUzcPnXswJOnxqAR4q3obtPvHMWBY4B4YwPRZZ3qrTEyMjbBFf4UkEqN547FMpgy7hz1E%2B7e1fzS0NypZLj7l6xkPwTwQfhmyUIuAg8a5A8jKfl5Y8UgVYcWM229PK3soeh9m5dl9%2BGnsaUSPcXiTIbjnQmtbWDQ2Td1vzV8FAr90Cpf8wCJynoCN2E9MVP10Qn2Z3MnQhcMRwO5uz7HEXGYLLckiS%2FSPMyjh47iBmDCoBW4tXV4HaZRD5REGH7aXiAwu%2Fs4QxY1bAUk5WlUzcdmvMxVBCFIGJ95KO4vwMluZVHaMt8TlOW%2B72w%2FE4m4nSibORg2uOKUh9tkUFet3QCt6Q45tNRkfzV7uK9zHJYLp338G3SZWjHX%2BGA9j%2BNI2gOCS6%2FD1xxq1ipsny3bL4DOdbh7EmY4clpzIdkIphly0ed7HMSlwmYieCYp26O3AjDTFpGt6gwrL7k1wY6pgE0z5wo7mFtWKwGoypitA0635e0IrZU9ba2dIC%2B5KNkPp2OHpR6E8o1%2FbdH0s5%2B4tnT52yh8cCwi3qIOWX1rXJj%2B6yPFUdb97%2F600AbU9BTLSoyjYr%2FHbiGEc9z99WxoR6Pb5e2jlM2oqCa5lWNnaGK5fhBGTGCQ53kBhGMzNOl8rdal9QbMV5LSEWhE%2FnFp9%2Bu6uMPrWC0ZuZZdBlBy9Crnil8b6hL&X-Amz-Signature=5b97f0702440fa64cec237e8f4b26958b09590bccd062c97b88070cb34ce2eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

