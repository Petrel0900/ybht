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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672QSB7QK%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T034021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVyl%2FX1i%2FWwpChKyy%2Fu%2BhhXkdHnDku3ZJNEU8vwt4vlAiAeBObaltgmLcZe2YtcOa0SqvbPY5K1xfVpNiJ3oY7LGCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Cq3mjQ4PmcmjdrGKtwDY6bOp5OM6Vu2ulaGWczm6B5ZKG8abLKznhTKaOpI733HqmUPalAIM5Gal0NqnXeVXHsRtG12TmE9CRskhCnRXxed06iQwwNE5gqWMMWJ%2BZDTRqhHxuohH%2BLwXVtig0ofYOKwv4pget%2FWWUikBnV3pt0bridd1VXdz9IC3441AeU9bvAlQvXwRthM7mCdo2p2SKI5Zwz8T6LFJOtJJgdR0F%2BMt47ohaK3C%2BDMDKYgLL4H7Qhi%2FrkPLr026xJ6xE28FRkpY%2FJf2GdfYJxcmWpUZQaydNYJVO3ljhhnhvjfTJKPdcqsJhseA4f3RJV7e6YpUkWkld%2BevVyO1U7LBOpvqmLBXW0oDUPznK7DFnuBNcY9Fn%2BxGMXUp5TehPRt8XIkFqoYGeIbcbAXTMZ5g6%2FS9z1aBCAGnaQSvFCx6lRXL2Lb7WiJaLvXo87bgEIi4m8jbRRd%2FtnA6fxkRDJV4gzfLogWWOStKe%2FBlJGeFjx%2B%2FPuXbJF3IsF9E4GJ2kJDiZz33bkzZ%2BtR0qjvKsFo7lHjGJe%2FBX4rLwPOdo8GYZWZbjarIt9C0ayKcYzrVh4oc%2BFdg7zDiimsLq374GxNLBqLM6456d9p%2BUEHfEapHxSLO60Kqt%2BLAtUx9F6YVf8wp5%2FS0QY6pgFFHYDMGV3JlQkODlllhGT7lEz7MpzsxTeaM8AG4vf9ERv99zYyyePjwOV%2BfDuQqeT2U8N%2FM2DwFtDc0N8AyYeQQvg0oLqEXUlwZz3%2FD4Cf3F0DWeUF3FA7OfG%2Bwx6TogvKPsnrNW%2BMEMyIylWMRdy%2FFE3m8l%2F6F0luYlchc10lQUjb7CtUdTw1qKZh2BzXqPoCozloBUwrYVfFUTcK0ojx%2BQA2gwS4&X-Amz-Signature=ae37eaf0f578904dbfd000ee1e00eb2f6caa6fc0108e95c113243f09fe039090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

