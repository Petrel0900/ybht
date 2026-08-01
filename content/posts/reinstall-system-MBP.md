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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NRZ3R7T%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T020855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR5oVSepeGNrfntdwiuTC19ycdmI5EDRW%2F3qJj69PsdAiB%2FhmATY9osedbus5j%2FlRSgj2g%2BG522%2FBMs5r4wgEBogSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpelbJE4GJ78kQ1oKtwD7b%2FtRLRij5s3biuwK2nEPjyD5TJxLfDzyBnCD0OknKZcITwd%2BAAo3RioOzJNPemTZrISF6AQss4vxNeStvu%2F0pItDq4j%2FnE3A4e0TKZ3GHtrjfksxW%2BuIT6KaXAp2XNjT2aTuzHXoeb%2BNmk8sUu9uRih0qbl8ZiUhx2idN5ouI7sIrAKAm%2FA3WotJ1TOqY840jjzRoswtbibKmLqhvNXehtio7xpsKuFq7IzBmr1ZLKrCZm8as%2FKlhyV7HkFHDMMrbPpRZzHUNU9VVi8utOgEm11t4CBLkx8rZZLgYk1Nfk48oD33Joq%2BIuXPsnJhx%2BW%2B%2BFZS44yHQA%2BiNDczEtekvgY4vVBswa1nS331JZxTQTT%2FvZ5ZN55vEc7YM1rnbOrQxoMcb%2BCl%2FVxAyb47pplAEu75PsMBIlJ0uSx3GtAwmXKQbx9facCJPCoMaB%2FYCqr26Tiatj2ApXQEgo%2FS6GEVMOZ2yM4PC%2FEwtPelDJCvEFH8KP39idx4GrXP3ezjIKBbIPIJRSweZKhopN1oKpfqkKvWh4dBsWbMvIJEsnIAYYmXeZZvSxsOIZslWbNuvOFWCxrOPAYrP%2FA0VM7Jpip8wZpz1BazxXE%2Fd4ohgQDP8VzD2LcnKj05Id7k0ow0ou10wY6pgGd0Ol1ko4UYUB5p2EENrStR0HsB31nvxeD8GPEGOJNoACnKzhTNHKSeYozyg2GpMlsBKz0%2B818kLLga2IsGzt9FFuotB%2Bsrf3fLcgPGAkMBQjmzS52TO3Q5CQdPV8cWBz6eJ5EkePrW4nGz2N%2F%2BMAsFUI8YwwtJ0%2BQu3EFwyCXoCgDewygtsk6rBVA9wJ5n9Hosfz7r87mCKxRzV4peP6e2NAzppe7&X-Amz-Signature=97dc2b59d6b1a02a5aeebbd40660eea636a1abac9aa6184b6ec4aa4bb6f5f0ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

