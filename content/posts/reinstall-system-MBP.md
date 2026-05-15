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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643SMNRWK%2F20260515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260515T023441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJyd0Xt%2B4opLiGpXe3womHwrelJD1euJIAkXdNjAerhAIhAK2XznKSa0NUjd1cMJUpk2Vk%2F6i35psyABoZsYCwmC4rKv8DCGoQABoMNjM3NDIzMTgzODA1IgwC8xeYfg34pPKbjZ8q3AMZnaaAnUAgpsxUQKAzWr7KUz7SMwwaLEmhWpDqjuJRbiGY8sSyZK1jTQ6T4q3jK6FzBlb7ADqATqxhLCihxkNLaZwzebXUe7cF1q0Z6DdDbMkAhL%2FtGzXSJRUy7ouES4%2BHDR3RRwWXR6%2BfCz0YHN3fhP%2BlD2YDV7%2BR50%2Fp9YzIt1mbeRYJdXXjDsWE0R89QFoQWOCbfa4g%2BhVPZZvD9I%2BRNHpBO4AjkRmKFE3UMDqhE7QA4Ei42iJo7vqdl7SDBPMNBgB4XmGvJjqxFRIm5p4tbxZs0EZ2WtnVRimrmyOsw1oye%2Bz0NGdVQEL3Yq7DPbOv0rGyYHdJoONunmL2po7%2B%2F3gop7ID7N6giZ1REHuAqGmv1ucu9LbH7LiCj5KbihxwDfyb5wTK37V5PkOiB9c9YyQKVClAMtzw9t%2B5%2B5k6Zo%2Bu05XjG4bjQ7M7jgNpKZkexFqGzHfmFdwkI1N%2FWuYxIjgN0uPngROKWm6hOW%2BE6Nkbemv9BbG9tJ2WHT4Rjry6FWBLNNqxkFSpbrBQMQZje1FHdgPdrumroCDrqLGUHBjCcbtTl0RHAiFnl0QR9rLEO9Go8QD8aQAiF5KZkUFyCwcOytm8ECTqXFctWAa4SerQ87Bv%2Bih6cIdzyjCk55nQBjqkAXudhhZB%2BEuWsHsm1ZyoVkl1QONMrMxLtJQKWwmy3VxaO5kGrr%2BUNKrofhJtFVQ5%2FRf12VrD%2B98joTTfY5Ssb1j16MHUOqxwVDacdThHqVQi7VGzY9AVeg5nt%2FadP03IakC6%2BH7IyxuzyxwKkk15KZrEz93nP6%2F2OVXHdmSAGOfCJ3dBvfGR5YJugtbq9LELQpQUZ2A%2BUGIA1zBmMlguwagGNGS%2F&X-Amz-Signature=2927d71b5af3e8a79babb87d0dfbfc51e8304a4240b15d3a0704629ec2bff960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

