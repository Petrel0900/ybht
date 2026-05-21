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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STG73CMS%2F20260521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260521T024227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDcOV94KkFyI68Z%2BV9DWKhE6GxbmO4CSmyFkCgSU%2B4spwIgZ4PkWsV%2FWfPe%2B9ZkTO42QcQWxA%2BpV9ESkv3PlnZ32WUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2Dd5vgS4%2B9gWInjSrcA%2F8y0rXJ9GUvD%2FeO3BNSBjOveW4TDl6NmVcl8Fg9dQtXfz3QMZ6krWJZKm1j3BsA69K9YjhMuWGdymFQy0zKjV7ZExEsjQx%2BM5MNyW7BWVjKQwgCgJa5NP0Ocy%2FUuDDoAjG%2BV8M2zugy%2BOyTrwOtljqoIPgpiArNXq3GtbxDrkV9UHKDjeaz0bDIqJggGr6lD6t4zz%2FMhC80ovfPBhm8zqehUstydJTcAA3nBzKK2SGrM2XNVl1z8iQ539D5R29%2F3rlk7ceKAEnBFBbyQ6RY4fpsU2P2ODa1sEbt5G3ZVb87WVYWWDs4OD%2BKY73RK8kdeN5SSKgO8MqalUDzfayMiNUN1zS%2F%2FrC3MfNv%2B9liJXVBlQ%2BjtqAfZ%2FP9GfIHMvUgpYfItGnKfpBUiExmlmLTdl%2FWd5JhKCCfbjWEQHYroqt%2FMWgw2IXFWwhDto2BzcCmODhrGy2t%2BBfjONTel%2FzHqcNpA4vCM8%2FrepA0fwfs8G1RFZEqC3wzKg5IKJjmf1fDPKi5disxv5lHKnmCHhw3gtwVgHDqDVb8uCJPmsI95%2FI37khq1JpQMDDAlGMlYGw3BFSFcHssaAn45GX5t3xjwgBqZ1cOiOg1R8META51UdHXk%2F%2FkNx2iITCu7MCtMNW7udAGOqUBf33CdvEFZ7M0q6keEzb5cY8GNKLspMJapR0AA24C2LA0B6gwQGH9tOj9nPPRe1ZXJSbpRkNHZ9woBuTqY1yGHy6kemEwmOI%2BqTSHx0Jy9tWydNyJukfsXMauFmBSycCIFfuqM5lWPJkUt9I631I6%2BxOfyOkCJ%2FpBSDZu0YdOMQnaKYsmAEPwlx%2BjzMKWy2%2BiLcB8hS29ushangVsExWFhaFYt68T&X-Amz-Signature=a705bfa4d5946f90ea53b45219ddf433933dc456b345be15c0ef7b74088b6589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

