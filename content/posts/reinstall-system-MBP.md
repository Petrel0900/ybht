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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3RV34Y%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T015230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHf5ADbjx43PT1k6sCR4Fn3fwwWrWVlOIMZIHe4hMrF0AiEAsKU321IFYmZ4DZfrBo1w0%2FK63W8xlRYuWLuG4GmDmKIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcoFuM%2FM3zXiNQhPCrcA7YkXX16JTFujupJcpaDr2uTm1sk2EQ6OwrkLT3H6Ui0S98rVfIY6m%2F9ATmYLiPosJup18CmH%2FFpWs5I0w2uesKApF9B0a9PKVqljJNLvRLfh0c%2FiWhXb6sdeQah69dMMHq4TaHguYoXxX10vmHN7%2BfX7FDUesbJKtLmUcFig7NGPEB2iiL3RD%2FlBAVofKURCV4MQ1RRG%2BhScXJ9qoGTiRevxLA114UNA%2FAaQmnNZw7QL%2F3Pxfw3qid3nS2g7B8VotRL606DFwxZUqC1rgDhP2Uab5DLQlvm%2FA6Rf6%2BVBqn0XUTsCj8e4wX2tgnEY4UjU6SDVft77qIRVwrtIQKqmU%2FST9ucqfD1C0nzb0RmRsESAHUdm3HhU%2Bt6Ph2S5%2BmH31JeJ%2B2Tb1ajfo4bQnKXGDXX%2F5s4A47V8bc7tDyr3KhBJK5PzeiOKEk4PoD4uW10XNenaOZORsmrsF7NngSEhnQFJZmsc5ii7Q0Ru0FP3vX2eZwEEnWn1sdw%2B6Twj8ol16vu0LW%2FI6xHrvE3stgLYupH8SesFj3jA%2FxIkZel5PZwPCuI2b3iGxdLlo%2BAnyN08xWJsfW8ZIL8ed%2BUWvc84PQf2OouudY1XV%2FLh1Rh8v8ePgxwMRz3GwBBwBPlMJ27sM8GOqUBhm4PAEdLwVsOPMVFFFxSqBhimmeuYK4pPVVIF9ibYyd3Q3%2BQjsU8kkiQfOhZK6Gbeg1OZVpFOeuXYXe8aT7VKA8NXQu9KtfBUvJ%2BM9pH6ZktTK7wAkFAHNI5tFy7IFcsILk2p4q0kGI9clCe%2B%2Fc0A0AkIwDkSQoOBuMqZbsFzQxVX95FObzRkSShmX%2FBbWLj5eLvaXyzCI9fhRudQWlwm6uFSBhX&X-Amz-Signature=991a9b2723797fa50aa62827652393c49b8ce886e1692da28e488a7784c393ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

