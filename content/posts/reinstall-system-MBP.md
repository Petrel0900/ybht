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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPBQNEA%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T024806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyxYQXVNxpT4lDL8AQdXc6XFggBj7vUnA0My4js5o7DAiEAwtm39%2BdJE%2FTovTARQn0xc5zU3vGfOmLDBuvEVHuXDAcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMAeBjWaDkgPUnaLBircA1ZCzFarRNBQrDAEXED15HLnNNV0DxfSyueIJWFU%2BAJxDvI9P1ZozJd6pduJbjrdDg9%2Fik3rZSsNCOK6S%2Fq0CvGAGLhTtUazwebxqx7M6r6qFLgLcBeFZeF8uOE4hwjWIJV6%2FmwPky%2FM3bFVWjTtiBMw3xh4OR8FOLTMiHo9PHyNoj8Aemim9Hl1lQZ41gVMATSBs4LVMhzxb%2F37%2B20sGEPgDHaRzFTgir5FrnElMdIpfsloRlfTMFp%2FaHGn9KGg%2BD%2FOXEdEGmpLMe%2F9TF8eUWFW3EtJ4L8PkdVR%2BCJzjJ%2FGjT7l%2FOo3rBU4tXb9naRsbrOyQZS92oICAi4Vsd9Y26wSMF5G%2FYFsQ94cnAbe4ZQwzabMCg3FzmlLwvbC8c8Nf%2BZlj%2FSFxPah1AqAIFXHxiO4fB2wIEleCEduDMZRyXiQ47KhgwKS0t%2FqyHYxrhE6FaFPAsf3BShHaXtrYPBcCp3V0aUs8zRs8o0t3EnxZou9jH%2FS9j0Nn3V7Sdd1x65ndITGlKpETYRSNKGO0XxdpaA7OQKPjbEwrxR6PXKksOs8%2Fej6cHzGz9Jwf5sVUuUqFDdo4GICmZg3KgJ34sy0FrClh6Lvx%2Bij9BGxq6G6wuS537nWzVXetBehAbQgMIy0ztAGOqUBeN%2Fqko1UdvJghPUeunqG0032upKSMyt7t20j9uj3PUwnw82JKot1ghqgqKOYK0PwGkCKN9%2FezIUSVVEy6r%2FVFjjapkkIxko5rn%2Fs8ihg2WLici%2BXcdHKgZ%2FoLDqWk37EO%2FSAqWbjyGZFUrLJUvmxtX9TLYVgOiKjIt44158jCGZY6JdtPObaLinaSvI7QnVloRwWcbprJd5YhIVSZHOb3FKKYEa%2F&X-Amz-Signature=366ce1ca1666e3bea5b5302ca0d5dce79981a7c4b9d79e00ec4ddd5874c70c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

