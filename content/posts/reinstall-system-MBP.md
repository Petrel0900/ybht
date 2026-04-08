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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4F7KVQ%2F20260408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260408T015206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCldTv7%2FfOA%2BaKPzV%2F7XssnLNkecAWjpM1b87u5j5SUEwIhAMt0fJZHYjHRoCt93i%2FULnlQW%2FqAmMsWwP7cdrGsEfAfKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9dA5T9x2Ttd1YgKcq3APC7A9ijIFZoLVdmCOmygBG7%2FUFj8R%2B4R0HvfLqAFwavyuYVTSXezODX3bxISXbuu1RAhDC5E0dQhXOkwYxYsV3q7wNgGwZGeAfA1rapw8vRyG8OXTb6%2FbpxTU3HaRsbhZZJ3T4F30T2uiNIfB3euQ%2BS7jZZpH1lyk5M7udJTRWnanf5iiAl8GgEPH8HXLO%2Bm8uTnrxNbXqvBw7Qj7s1M5YdRua9q3q0aHGFwBj1Dgv6JhzxpCIeeWrLBMv8wVF%2FUuvyVlFll5fI%2B4KjXV4GYCZBHDe1c0MGw%2FX1z9nNNrCglW6hWHe1SZvLZhvWL1ymGc0oqGwzvRzH8KbcF7F2O%2F3x8uypAxifDCGXl0ctqiVUzJeaOURo1QRDmBMM1Fky6IUV0HdC3pXZECfiU0rKvhHG6ZgXrRlx3zzEjx2qT7hXYe7%2F%2BqvBuaC6QnhMZpV1qmz6%2F3pmzmjKQUu0U4HQRPq0zvgDkY22uT%2FklvMJj0EKs7UuXhlBY8TqUPBsJSehk%2FN5yK1ykYvRHHoJuWAOZ5%2FJ%2FKmpXcjwYR%2BXpfSlZYw4DrOawYr87dn5n6tJNtFssIkKsD7JMP60kFvNBkVS6J1TyOXucL3XhDdi%2Bg5462tct2IcnEBMzRrfky2WzDc0dbOBjqkAfE13%2F%2B7GIK8sNgrRgAJlBWtFXGK%2BMjKsKL6CLUVS0Q1z8DhbN18EJ2qX%2FxQULfzjFp%2FB2diDbkOz1Mqp22j78tRy3411AEvFUwaHORxWVV6MGndgHur%2FXT4OoAZ76g7IiZN6elIaLNQ%2FRL%2BxUSFQoEn4kisUC%2F1vzTJKuKs2YtSosu2dkoFEnHmW6fAM27tWB50mb5spgpUhoSl3IHbXWon86PM&X-Amz-Signature=39fd5f1f2f49421b294e7dfb5bf6b824c6ad3107776ad6b0c1605dd88a4c0e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

