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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDG2HART%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T023202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDeGJf7ZOA8%2BkNt%2FYhPNkr3dcpgUhAD7Am%2BfNJL7x3G%2BgIhAP90d5n7FjAeUgfVEZujIX1JD26qnCrl7PzSiuc8ix4jKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS1IUcsXdhKuJNMfoq3AOK5nEjQ%2BAM9Hb1iYOSE0JEAieKo4xv8GUeWXNOrz1Z9mz2e7XcmGXXMtkcNB2BDNWwDRBx%2BDvb9jbWl5e%2BFHjw1Lo99yH0Cud6Z6S%2BmuNRKLZXD5N7we14bYdMuJQZNWVJUAP%2BFs6feR6EgHB8QzcaEX2083SGO6NwKvqyOF45MhNya2rofZ1RGn7sJGxRPME2q9JfDglMgM2pSZgc9ep5xWgEJhh%2B%2BYYmliECht4%2BQca67JZ6%2B%2BbK9cUEQtNrxMcHYOMcchsNPrkX96SYkfUmBmmCskzSPrG9Soq2ecOklOdU4WcmfgSbAH%2B1CxN9Pgyx6uea94CiHOmGoG9bciJrF2svr9KR0UbNfMX80TemvwgRVB8%2BCp3JGA36fSYXE2VxZatB%2BVaie8SLVwtsZXO9lgROKYrJSZYnMP67j8acKeHyKqZ1C3RftEtCevWe0JruKw%2FlwVugh5oN2uNqluSSQ6PNaeHPCE65PFJMNE82SOqfoHphu2Y%2FGPYWmzRGiiqSV6jDQaHEws6kzi0XNnMOlDsrZLQYmO%2BxOSH19vl5jrKn1BTd9nLzn%2BYcmJ5YtpR435Xp%2BTNnoKULxrl6YwdnJKNadrlv%2B3LYg%2FJJY4sQliGaAkUFIEXVPnOf3DC3%2FejQBjqkAVXVeKzgnSVy8ejOFmdDkTHmMJQqjs9qXBAh5mOMPl9prB9MkrMb7Q1NSMTai7OOwmFOqaEeyNhO%2FGba55kALOWl2rI8NfhSm9xt5cK8KQjAczYcu1w9i%2B%2FZSqa%2BS%2F%2BiiyZYJVPRazqIcOhmMOJdLGv5xHf0ozdoSodsPSUnDA55fRZrbT4O9abzVRDqBsj8T1Rd8WiE1x3T%2FtiMcWUntrnqBo%2Bj&X-Amz-Signature=1e3d85109425b45b99e78c86d28a9e6446a091bb4c9dfc49c55e1c7ebcd2f0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

