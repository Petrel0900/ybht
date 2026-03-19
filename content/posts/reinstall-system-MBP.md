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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKS5H35B%2F20260319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260319T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHQzQXXJjjVrhR82iTNjg%2FEZTsirT1Fiki94UnKfpEsTAiEAni4iR501ht5FbJ2WR2gJ9tVD9Gqab3phsavGK6dQlMAq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJ1QewDcPKcf0rtYBSrcAy39cayEoFsPomXJxGDAMN87Bzi6UGUgPt1zh8Bkdp5jRbA57hMGJouq84%2FCFOakT40KsJAzHJ0wcmRcObO%2BqJ%2B9ABqwt9rnfZnEsuMxfwzNvFJcQo%2BacyCC5u9gaNtxRfC3vnuMVv5ndX7qLOlobQnpqX39CUOUK%2BpcJjwJGLIirahFqhXOXQ%2FJk8OazIYUwauT00bd6EC0YLEbqb3ON%2BBeOzAkE8Lz4eFuQIvqq9g4LwiWLPrMtoZmhhklZoYO4mj09ja9W2JgH5ZUUhf8yX6xBLG6d9JmyBNYI7LDsygUDvPpHaNpK03NPCx0sZkNoxGiV4WxuVXItb%2Bu9F4afaY4thaPZQE0wes2lM4%2F0VIZ%2Biai6brjs26E2KKjUnhu7vhGx84W%2BurJ1o8fUQj0OBkkl6AiZ6dYzuNcrpsqVIsn1W677fejMiwhh9XhT90e7V%2BfQrgOlviLQOq6z0GWl00yGjRIWbeH4%2BMyVkxsK6IBNVXaSbuGWixoLMyxDkKklFGRTqox2ZA74OxybKBzu3DuEYnSIbAsJDwirK%2BWEG2Y7VRvdbhuUHKgkjmUmclITBlBasnOvyuJypBWepQ7M5t7QnVX4F4wt5Wjvwsqr3B3DE9ZbWW%2F2iMlb7bSMLGW7c0GOqUBTjl%2FNrr4qz7IO3BulQ1u9hgWs7HCtc6EeQD1fxUsWxh9Tu4pek%2Fhh7JT1bUzcMFrZcIqXWlGTINbJ5laHpQh5%2BteBfcg8Fc2XiRhSGa6UJymyh5y8bCau7EDJXy0t9FY3zw38gjQGWaEu0YCqdSlYFm8Ky9JnviXLsrhiEkpAGEp0W%2FvpL93St%2FYn42n3NRv%2Br2nkVAGzmVJxfHYV8dV9xY%2F%2BP%2Fo&X-Amz-Signature=064b08d8f16494c1e53701b6bac554bf448d09d2b8a1685ce4bc89641c3d191c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

