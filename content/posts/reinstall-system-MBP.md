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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FC2IM3Y%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T005326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDaiIBm7IqcMpIS4zCzsIkbw5OdMoDTBrjPuDEfR4Q7igIgZVrTWiD%2BvqOJ4cznLP4B6zESa%2FwDU2nJUw16PUt1pgEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDFE9mvPWH54d8zJMtSrcA3DL8oS4ttJyygovOCs%2Bal69U05CJQI8MFePEbH3M1D3cxHV%2Btm%2B%2BQ4NfH6rSQyhOGEUpMAUrIdBVnx%2BBMJyycELWXWPfFedl70wDPazWhDi0XS%2BfSs2Q1AHlqA6Tzh5B17xtbxY44gqcpcZ5Sh%2FETLqnqDPPyKwWKhGFfp46rGNh10tiRvZ6JLGkVvUW4Eo7RaRY8zvjX5Xxr8%2BYrFcr2SKsb8I%2BsrqCuPBvkvQqklqWs%2FfTPAyekkUgLZxMUAgKABPtpOypzptLwFQAGxKKgdSQryhHCQXhyrvDgrRdM5XW0xBRlKctOfMUwQsdTXoR3ydayXRsJ6thNFtBNpXVpxbEe3MyEXSknI8%2BgBCJy6%2F6lUdR%2Bb4NR%2FIVhuizbU8%2F3gfyRxyJCFpVIBu2Vey0bBPJEY%2Ftnso%2FgZt2eoNcHZhUfAI3mfOEYrT6L0tZIb1xKOEIorL4%2BP4w9UcrFFNC6mFxAXSDTJ0XhKI53xXr4kHVktYdgpnzcc%2B%2Fqzzwpgo7NaXC60kdDxaWIz4RfadNtW207CBuqAfpAHlOzOw322ayG2%2BG2eO%2F%2BHZrqwGpV9uVGpEw0NPXw%2FnkvNMTnvHi1eW7k7W5heQPJMd5mQ6af4rhVDgPtHpmdSTadcBMMXZuNQGOqUB1bgoVHPsczqOWF7ZxpiFR%2BfBmsmGb5rZF7XU%2BTHQPWlAfduVHeJdZigI16If5LBo%2BfYua6KdA%2B6McxhtPNYi6i4aZ8P%2FG0qjXyGIiaqdPxtWUNEY5GM5bToWpmcXuHTNVPMvnx4LLjI1yAcCim8vTCpvIllwHM2nMVtp3eASfA3B3tYZUZg9WRY78l9bvnwCdO9ivUpKflq1bgn%2BP8nPmThNAltf&X-Amz-Signature=aa02a7dae53de29bf8ae973cae2c23ebd656bcc2b4ddfd9915b7cf2676a71341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

