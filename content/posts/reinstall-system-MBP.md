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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C3CNC4T%2F20260524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260524T023916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDAKri1Fj1NlcjEBRDD6Es0tMbgtEUC7c3adJPbdMFEXQIhALsnO37a67S9SxefTP6%2BJ2W4Mzs4yGW3OAcPVfbeNhL3Kv8DCEMQABoMNjM3NDIzMTgzODA1IgwJnNiG86Ci%2FFo63Q8q3AN0KVx%2BXarfC2VAN5FtI4E7%2FHSjskujg08OB6mJMl56EJWQb8oigFQcrZePE44ZroS0Ck4TezSf9pXp2vcFPQKdAPJuCcEkrHtYj91ZlLjoZPzTK6l%2F6%2BO91y%2BPpSLQu9pP9iB%2BeNaLS1tRluJ0xTVhTH9XzJJ4bKrmyz8Nn1e%2FANyWkAeaaCB2DGJpl%2F%2BaFCr%2FBv0hameOR7%2FoUTj90My%2BeLnbDoVPH20EpEo2VrENqPgEPMPjdVoaQKrZQ3Ih39suEWD0YL5UHB3UyFS7VDP3mbN5sdd4pK77zsrBBsbsBYHzyEN2vcYLZ7s5YggVYH%2B3IleAOOSbfIwOmsNBIB2QUKfzCNDVR%2B96WapWZ2TDWMex0IsG%2F53tDV%2B3Blpg6KhVlL6Lz%2BMHxAutX4SGA5rY7eMRauAa8b%2BhSZntcHT6Q5h2rUobDZ3OWt%2Fh4671opkYxWeM0QxB5OktbvTYdYovTRk4AJ%2BWdkho7qmJV4Gswfs1thDu4hOtA1nBI%2BUOVgdMTDpCf5vWhDOCllSTrS3FXRRK29Yohgp0P9I6VbYnUWmoZj8%2BFT1J9htH00d523iSwyaAQlVgXrMdVQ%2Fv%2FY6ylbqIg9ZItSU%2FYscf7pjAfQebSCON3k060upE5DCbp8nQBjqkAWkKkRRmeklg33GgyOqphZqw4vkubbbKQ7TarFpF3flkfe4IDO0fLw3gd1YNwVVUnA93ub6Q2Kn%2F2ut5BI5%2Bl7L0g8cNDWGBf8V4Uk0ZUq2Eyw18MkdnJM2Z0pWExEMOaX84h5ih6izY4yvPM3iHJop85BMv5kOQgR7Rzvk2taB7os7pf%2FIUSsnQFSVWOGzv6seXIEV1WRhbT6OuHjUF8Hdjs%2Fy%2F&X-Amz-Signature=1b05290885e8c6489a3c899ee9b302cb286b46c7218ec211e4bef9b12ecb6688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

