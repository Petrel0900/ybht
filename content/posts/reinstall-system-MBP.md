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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5677ELY%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T025519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKMIwhGNB6JzNV0wK5QQoMLoJB90heUw2jxtauB0bYhAiEAx6VqTbtOUF3tW3GVUYOOPjb4mNAs02tVzpn98t6igWYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJW8oy5pWvJAYU5G4ircA8ROewP0QH4DquI7EXA33FvynFUt9UAKFX4ObZoplhwNPN3jVuzZKGm4katiRyfVOBdvDx5a4RCJ%2F%2BaMklF2cJ3s3b0hyDFyHFtJSG2mcvadCOQ%2FBTsONAEVKq2DG4tYjqArJ1dwsmh7Xf9HGFm%2FxkX4ZXuaF1Cp6IMpbs%2FpjegeGF2gDUuObw45SvggWi7ZihIl1mFLC2cPpas18%2F07XzuuYQRmk1TvxG%2FNxxOSQN%2FO%2FrRE%2Frq%2Fu%2FuNSRkB3BwOOits7Bk1zqrh91AMTjascwVCvk7kIxpFkOcPSClTIzST4xyysn4jNtNHJL1E7Ny%2FlfQiLyuSl60Q9G%2F4cb6Hqc0ANckVYlAxg1ImydgSw9gQsQBYc7%2BMmyg4ll%2FIOP%2Fev6NyZO%2B7xXqx40ub3v7WG%2BMGybbODCtUBjCIKOqpRYm3nez567Y6M0begkRxfcsETx0MiN2VLNLZyeaxYwe%2BV%2F7grgg2P2lbwnWAh2CDCiIx8449zphz4T2i3n3QHm0P37THAMMnrcxluOeOhCNNhdncdNGXu%2BsH6KKFtoFs%2B7IM651KKPgKK%2B01z8XFUnmfuKWrpDe4Q2En7JVbjQxc6BGWpMrxaTddvNlrRCXzZO%2FrMN9K%2B7dqpPsHoskUMOzAmNEGOqUB26W6E7Yj1EvBwkKFBRgzLHDaJfNWCp%2F2cPTDTJ5Hjf7u0KY%2Fvak1pwBh9QITIqdJ737JvApIlC7Z9guORYcSkt45QPRFVYTN5iJbg9Nw%2BQGrtZKoQdTEvQsYeyvyU0P%2FnsduV3ryUHdeiQOZ7U1mvmz9pomKwBl%2FsSnOKz3AvMn6hpvlCNZhVJFEZU4Q4QBuq7joal8usAj3%2FfSV50Qv5NZ5m3cN&X-Amz-Signature=495b1b7753e7e3b5b3578e1a36b20fe3602714f96850fcef20784c3d3aeb6725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

