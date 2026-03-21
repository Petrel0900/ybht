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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD6NVIJL%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T012258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDf2GxdRJQiDg2u8HyL0V6UFn%2FPL0lqHfwF6PtvRtSpUAiA1BDk93Q2DWzYL9bwG2V1JRFcD9L4ZFAj%2FiiZY7rD6Nir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMU9e%2F802iG3tnAqpUKtwDKKF66gd%2Bq19IFmA9hXj5cn3y82hQziSTERR5lEY0AliFzzh9h3gqMkQcDe8FHN6UB5lOmrf%2BSj9oect0u4W6i3UxdiIkpgL2w7QU8BRD40sAU0dJZRWOun0ppQ3WsCaydQVuLUbpJ9htI9MuwGIF7NsN6oot9mCyxxHy%2Fnpz%2FDPWccIl0tpToD4qaAkxPbKnmsy5AAQyKsDCrQzCYoE2R41jJntEKd%2F6wzuT8vHtJQXTZC%2BB7dUlcOJPEGnQjgkSxY57bgKKUik7cosElOBa8vezciWozQIvk2bEqK0VQoUZR26nx39a%2Bu5Ad0HGQ%2F%2BdhaFOfhsJjtpGEbeW20akiGrJ%2BuHmJuNF%2FLLixSgROli8rAjSDp7amxcuHbf2sfl804B3YycbI%2BElTj%2BwF8JiPIAtptpuW8SQY2Vxy%2Byc1RP9RM7%2FfrBxsH%2F1WRpZr8G7IMO0b9gkfMHITAFA8YdvRtIUBDk0qhQ69S4jfF9suHGl6gkj7yH4DRl2T5qWs100hxPULi2pyg58ZBAPKypfZkTN1MMHS%2BnOClPBx9N5qOu3UetgYnC8PgH3DD8zWnD%2FrBOO%2BnOVyyR8YAkH%2F%2BdLF41Ppnpx247%2Fb0o%2FiTTZcuGXLNB1blu3eylDtOUw0b%2F3zQY6pgGukmrz7AxH%2F1qp%2Fl5T17Y%2BxG3urdoTOo2sJpqNgPjhekOuIRKz99zY5W%2Breo7JYbcD4PC3lMLgGPJs4qxI0ThiFq%2F1cD8n%2Bgo791LnZlLcOYSPKugB2zRLItSpyW%2B%2BCwomSBx76K%2Fwmze%2F0dAmQXsXf8HPvnL2ALPG7v06%2B0ijav0ip3N1JSnl4tVbxPgfRA5fvTe2R902NzPSoWAYcHtHXlMdgVch&X-Amz-Signature=44a8c2d08fe51d737bb8d64d5adb65f6cf5e4097168c634896282a6960882387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

