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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWW3RKKZ%2F20260407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260407T015130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCbzwqr3hKbVqpnAKuBLj5vqF90rTOKskhmvbQgWs0QbQIhAJBX%2FbHsL8kCtFTki6J5Sg4reTNiIJmda4DGEJVQGu7UKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHtqpQluXI%2F3PNdEEq3AM36hvcYYqU626rn3A2ZWLM1AefZYEkijoajx%2FMv8%2FukKiy9GpKbiagvHJG%2BzvNrPD1wj%2BjqpFbQsAy11FsiGiNvar%2Bf%2B9%2FeVFFI31kxV8IjQrRfpDOXHB%2F33Q7rreizIi%2BC%2BRfZ%2BwEpYL43jH3UUr%2Bd2bLmElpuJ6Cn7d7Gdjy60kScA88lTFvxFwuXC5cw79rQsJXVP1Owi5EbHYuvCz5A%2Ff6FIgRqDcUEWNmEDPMJ%2FU9jEXf57ynkspC8NfhWL4JzTZ2CMEeKEJKZDcpp5bJYyA%2FemRjSdiMXAJ0O1fDFcGru%2FFEgLu%2FIZSt2KqmVqAMBJHlgiD8aWRlQ62I5JvAinX1IRMG3KxoXw%2FJHNkVyCzf9OlQhif2xMEJwuJ3%2FlZnwaj%2Bgmz%2Byv32S6e6A%2Bm6eD6Uv535uaaA6gZN0C7kyztUJIXhS%2BSqkPnayjK03EUeIO9A1jlsxavwnQyHfRLDb%2FRdIrNdsFmwN%2F8TcJJ1VTudYHNwGgCD%2B4KY%2FvZ7IsflY%2Bszthb1l4CEBjXRkuOpY%2FQll%2FHx1Fg6pCKOAJf9uRQqLPLWgUxn7sABLCGNOEhuf5b0ggD61a8XZ7CFQ0PRFIA6hkxE1YOyAUme0KsGsUP%2BPwQEuaISO2ftMTDPltHOBjqkAWMZ7wrmpo%2Bf7tfho5OU6HMJSz134gotIbcqDCsdXKm94Y5Dm0ciizemEtZR9xG%2BI8C0f%2Bmj93B61dX9hV%2B63vp2un35P%2F7vgP0oPf20HcVJRi7scfQU6wZAp9eBwG1YbCEFf4HdejjygMHW8mGMFb42tazNiLfcZbGcBnfRxMGsvovHZNzifdewfFWCyBrOa6jNYyvttjz5LJkoKiOkI36jNPnD&X-Amz-Signature=4dc8b4e8fea75fdd1596cbf38814535bdb91348f667ea7a44133d4743d390433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

