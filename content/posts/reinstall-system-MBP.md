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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XW4UDFP%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T012814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCz5JhoI6sJBuAWFKzgy1ly2ZlToFO7s37aUMfb1Gr6zgIgcbFviDaEPX7nxsvD0yJVhHkgyFrYGiLge4tsMwP1uRQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGJo9ZL8kcbUjRuUhyrcAzDjpLBXBqs2G9XhXlNaySVy1L%2BOnNhU43ZIHzn6s7X9TL83cEQCaeY8wWzc2okXENtBmrdgE3OPCLX1rYdfB43urjMeWJBHriSCXkQNaJmgzd%2FifOLKHRVrGv4l3PB%2FdXUK7rbtRhxbm6m%2FYjRQBnNnufXV3ZdagHyvaMwpQYFwSJmEYA%2F3IEfElzdXP%2B1XIX7dMOnQnx44GJ1gKkqTdQUuCNTKaRYxGmug0lDN90HoYdJxCYCRrq5ETJn%2BY8CTY86cpC5bnjvOoiN50sbyd%2F7FRQYt1lKN4aHIaSD1gDJTbXD7DB4EvLzf241E%2B5N%2B8FqSBdv9R4MeK1XUEq3Kj4DRk%2FI2YcQrRysjC0OXUjVi8zdDoRXS08ZXcu2FJkhoG7d1fb9yJ7WY8kJoJMySjwOIPmfBoVeoKhvbHJzl5jRjIniBJNGbLfUnHZM0iFF%2FjMCr8vaCOLkBUXtmk8KsVYq4ZJ2lOaeYPU2d1bSH3zuTavhJ6U%2BRshoth9YnozCW6BDPAMVNBrwRV6eEhInuPVftpDJ3qnGloVUqn%2BG4UzzrHjLLCJxwRj3liu9zLJT7pDRPa3rEQYv6hCKuSQAfimMyXBUKND3Z%2Foj%2F3dH%2BwsEby6qiMwEHTcoN9MYMMM7xzswGOqUBA%2BgfTFQ6fn7jO1Lv%2BKdkH%2FhcpNH2yDW1E0MLOXFVjf7h0a6BwFfaXjnhm0iQHkadjmSx64zzc8EhAPNE%2BUh%2BN%2FGZgSCvavmX07jjM8P7cSnQS2dg00j0qowD712wLfmK41SLGqMbc7Ojuou9N8SocjNzdZbi8sB4NbC3WXqTzNgBO8t5xWwSSyuzYz0rRk8b1SZGsk4cEj7zJ7pwaHzKBMpdr9ui&X-Amz-Signature=b329cb977e043fb2865d418c729f5d6d3d46b8937c15fcf7ee042334da5955e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

