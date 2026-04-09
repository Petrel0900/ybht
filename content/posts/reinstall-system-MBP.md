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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4RZOU2X%2F20260409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260409T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCzDW3uA8XQoWay2qUKc%2FfFAWQX3th3dSZ6IDRrUrUMWwIhAPUMwZRMpGzN3BC0B%2FfkogmUjVwphmlD1Ntgy5H1PEIuKv8DCAoQABoMNjM3NDIzMTgzODA1IgxDvuJjpUPez6bKe%2Fkq3AP8eMKCRGvnJGgCy6xrmR3Kl319neDYIqX3lZgCzRIcUg9v3zgm%2B2d%2BVNHlRWY0udKmVrE48T3kvZDW8xiOBSZHNj%2BDDCTVP2hYoHsvz265jc7fvrjb%2B4P8GNjzRSc3ZY%2BTxgZUhPm6oheg6sJ7AenWnZxSBv81oNSxc3%2Fhuf8bslyowEKUSjQy2aG%2Fft3fXigRUYrrfWk5ejGjguqtqg0HGxhav04s2UmrHgV4PkRKRqUQ9aKLOeCFmBLsL3WP56xyP1r7wFeFcWYOSfGf50TzTDqVZdgNv1JNzdLEbMhd9RGcZxPwJzrTsGzf6oI4elYq9vItqSgLlqGa37N9RrbpL13GuRZuBWRATNL2q%2FHKqdZy8tiMYkJcbN2xklmfO4Vyex4yftSbhY0Xq6ljYnygsSsPNiVQL1wzmB9VG7OdJyeDM1NyFUl%2FCPvHoETdU7eBNbBfFVfYe4g941jlJpLzmqmGoXFeyVu7M%2FdkTjADo1NQwy4Oem52hVwZOtKGGymRxQ6D%2FMgXzRKnMG9kKJh6q27hg35mWoVDj9ouuUd7EbchxIFU%2B5qpwXvyFH75RYf8z11yBV63RANEekLz17YCqQpEGU%2F2LWzNAOOAYgMInX3xuylFm6jflrfERzCe%2B9vOBjqkAQEEVp4DPQeYpenJ5Vv7Di8zjI%2F2ay%2FJ2dXT0K8Zt%2FWpt21qQW%2FR3ffZttItWh9M7DPQHiJdfQm6AGrikAOZiCzPH3CVBkaZ0%2FWkm4yQAAfpvPIM44fSsHHEaY7LrWl9h8rRrlEH85P5g9oVZXElsdW6mRZ%2Bo5DfX1XK4uyEAMhFCQIZ2HXKCPLSUeXZEK7LqYQgDZ7qrOnExSjtIDyfeZm8%2FL9r&X-Amz-Signature=2180d1f75b1fcf272688051fa5cffa743ae0c04898d88c7aa343816a1ec01e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

