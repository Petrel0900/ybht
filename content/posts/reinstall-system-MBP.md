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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKSI6VQ%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T021638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIBH4tuPuwmRMqfenewrKmXR0uZvrBNFMWkWHc6Pwk2JgAiAMuAWCSMNNJRZRWeibAESC5fQZm1ZEr5o6nVyZpV%2BgOSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMeo8j5m5bNi7VebiTKtwDbHhWpRhk01deODILaSmu%2FN%2FOB5WqHwCPbtFfjm0uhuzT84xlo79GCbVZq3Dvn7%2FTD0ttQWz%2FseFufkah7NdcHH%2FLYtFMnp4r5mQHxJyTkdIIAzFYw3OUPUOPq4oSkM9MAJNnIX0ErpKyXsJgC%2BzmL%2BxJNA3owZOkoG8MJY%2BQ00AbmwcEF%2B0x41RNCandaJ9AcHycHFyllPyleVI43LzVG6MxB2NwtWTa5wvPPg7Ym9Xtldz2IbU1ZN1%2BOTuICNxAOoXXWy6dtaj4VzzeI3m2xz0rtoUJqdJdBN7oZ8bigpZZ9oHTTD6fU0vUrEc2uHP9Sd737MSMm%2Bl4vO6l29TNO2JFpiiap8UIh1Zbi9G9PxD5ceK2YhoX4lRxrRnN65t4O2qQtTmtj38lQ9MXAtw26WDxkA5sWek8rhYWIM%2FALgpYrxOMc98bYJjWsNDpXZsHJMc6zqPr2xCcZOvL92fSrLZEQNVdx1cRLzASsAi0CLVkRzwrTGgt6O8KEXxfeZGsAbTT7LkP%2FFchn7ChxvKzqXX886bakdRuKO%2FcUl3uOeA2YtS0cJjSkDhv1NOZjqfVm0qiejvuo%2B3hTEaWYJFzr1%2B1lN7j53hxz2%2F9T%2Bsd6AmRye8CdwAMWF%2F9t%2B4w3Yn41AY6pgHlWh4FVmXOmyBkXj6z2F5JY1bXzsOpPaAfTAcFzkx4%2BjgxIdqfB3gmHgkWkK6RD5XcXc2STOychIt0WIxjjp73p6ZcKpcgVOMNnaV15C4LhruBD%2BnxCtZMCxL4g7dZHVplHlYbr5y%2B6Pi2tTA8n16bdkFQ2Aid1bu6vb6wmUliTdqUU6wAclBM7sf3kEc4%2FX65w2cWZ%2BFp68Xy3HorH1mIYgegYn1q&X-Amz-Signature=9943ed650f6a889c2fece70cc3bd52c62249293851176261d9cdff5cefabd2f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

