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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EUG4YKQ%2F20260926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260926T025710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHH48nL2SxdwvzAlQ9hSey2WW8zIUaNiS4hqlj3nfnmoAiEAzAm%2Byd2HBZth%2BevRL4M8gnkeb0ZUagsZ91nUV19iVwIqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ823TgQx%2BcneHKJhSrcA1Sf%2F3kizdCRfm15ggQMH4q6mho2acRTDGcf2mUuW3tJ1JNgeeeWNQb%2FO5RyYs%2BJqSJb5PWSjw5OTQt77tUaqxfdVWmAv6mRuiqA5JJSIoeUOUbQhCvTcbsl%2Bdjt9ZaMhNUUax6qI%2FiBp9tQzBuBI9zUkRKg8GA605fTA1ps%2BKiMnUWmea1exakDyEIWpwyAn%2FJwh4aIEal100qy14uuNQIGfnxheq5hRBvkMmH9Q8YVXH0TsZS7vDYP4zAxJqz%2Fm9aPkiv1Y0R6XmM%2BTmFws5BxfS8KB4rSH20tvHXzGQhia1YVlP97AN08HUNrddSUNQ%2BN%2B3nmVn5Ek75U5UgGm%2F8DstljA8avrA7YKQ3QAexKehJ4bQSEhkK60FxlLg1AuUlvRa2C4Tc8sUDNUu3bZ9n0i%2FMJ9MNMif%2BcQAr%2B%2BXK2n%2F0APTQB0grWY6g7Pvf9ES3a8IOHqAYxBfYFg2oYJgPfaOw%2Fby2n5UsXFwtrGO903NCUUHp0jI7gQbq3BA%2FFp8Gk1byNGO3g1F%2Bi0smhhlABdTLaBvv7sfIcdYpCNJnXxr5wJAE12%2FTAHLLLSzCok%2B%2BNQqjH7BT3JEQNlkkiccjm1ba9yowF7a9TWNi460x%2BVJBZ7FNkbAKc5IFsMNfI3NUGOqUBKSuPV2G55TUoxYKMf5PDMG%2BP7Oba1xTT6GFjNCkCd%2FKN7qywHefZ98cpFE02uttfEGK%2BOq4LGt8azkEQI3nv0MtHBtYYyQq3s0BA%2FtIWRU91CYNvFmbj6H3Ef%2BQ%2Fbmk%2BM8JGndDWk6r9R6z64Xc4b6hRbus7zRUCVeuWttQd2AJv0CCfuffmo%2BUo7PJmLGuXo3laF%2B35uPzGzg2mrArLwoj07JBQ&X-Amz-Signature=6f843d46fc3096dd12e918f743f8229f1b4d1d7332495dad1c0f558cab375813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

