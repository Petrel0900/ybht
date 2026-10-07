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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCDVGJQ%2F20261007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261007T034204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC4klNVoygKZpnPmN%2BEbl9e4h6LNfVKB1CpVcBryvMIsgIgF%2FQt5QBoBzLdsdykVx37D%2FvFgz%2BEXBmCK0yHBZYD%2FiUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDJUZ7x6M%2FGacuL61wSrcA8mfEGV%2BIBrBSFhrUwT5YSQH3pM%2FH3p1cGYGB%2BpvyAFkWbJJHlwUu2eJBh3ZN7lWLd1qKQNO06k%2Ff%2BXwvFKwFfxzi9D6N1%2FbLg%2BQWiuaphq2yQlUPH2fBqCUspnNasGlWBGUW8mv9%2BJTVmbeLrJAMkgunkPVElAEMNrBLOPO94JJwbNhVkya9fmUZ%2FTnqRTQolwhX2tAp%2FmfGLHqsOby1qA1wKuQtxqJDUxQlma5YqesUyt0Meh74KiVQlO4aW2OyBHHfZ%2B5DIP2StKCdxdTrlRGHASQNA3%2F92JbrTU3c5BwLLxfSaV65gkeuUzq2TY8spC7yo0lnHg6zdHY%2Bd4GP6EdCTX1rKUII0O4ErLzgI3iNxA7cFks0U%2FY3w2maTo9nQR5TA%2BUnitriH%2B8ccVxHH1%2FsEezHtNJdvk6nlyhErWcpn5v0qXJodW4EkaCKKi3AslDZwKgGslUf1COkL26ZL%2BKtxtRaYv%2FYGtp0sEdp4iu%2BNrY3aIK8kFCwkd4k8tyxTSqZh4OACBwXCXmXCszsTRVdcDy5tVx67bkqt1kJZmpfUJsAKmMhvHddsWnh3%2F3yQoGjfA%2FHE49EBvoxnzRKIj6JmVB4O7hV4WTGCLYAsX1qaZAK8pClsp4%2B1FYMMj4ltYGOqUBB40mLTAuMYFGff6PX2LXV%2FLYPwZ6NWvDklAlpgR%2FYA5amMGmY2yg0q3NsmuthkA7fbwYx%2FGklwKtf%2FCNgqVv%2BPH6DZjthKwBYlgipr6zqdznDT0IK3JUVx2b1mKVygFVjgVK4zAFUjdiiu63M%2FmKpA6yykNneRaAwZ98uHaNJmIauQNv%2Bim9Qw7zGBv7LsP22WwmoQe5ze3gLiZrYtwnIz2glc91&X-Amz-Signature=24a67eda3b8093f909fe447dde4ecfba41c0e6c66363627f088c9da8061d664e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

