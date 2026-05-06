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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTLN5HBR%2F20260506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260506T021040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0sKzWncRPAmeTsvbrdmuN12IO815sF07yQrIYBTW%2FFAiEA16zVuv79puh4dANMomoVFS%2Fob0pbSGxTsv0wtzu%2B8vIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWrLEh0VS9jjNZNOyrcA%2BObmHmhgGtWYHA96%2FbJJBR9fQlREt6fF608UdQqgdzVRqWpBA23aeEUuS8zAiUzhtSwFa%2BJnh0pUn2mK3N1wkc8Aw4VRgHQWZzTvSno5%2B1w7U%2BTQ7kwj7ApWNpD5i2N8aWNYvhjkjbxIUgIPhP%2BaTIa3knKtV3e94NwM2%2B%2FrvgLcprvn%2B5SqbGqetEHZh8FL6KwTni02o60EtOAQIFO6n80nLOJLdZxSyWn6hY86fbcbC%2F9db7fITGinvTX8MlfqHvLF%2Fd2%2BtwSvzPY4wsi%2FjItH0WIyjB24Y32sXlxEkAKexHb3H7O%2FogfPyMVj4aLZs%2BPeHS7blAU20E1BOQXR1EvbWmp8PVU7P11Qm3BOIE16mmiBlh8pIrxbi41d%2BUHmJFEkornhUN9u9auswIJ%2F9fIkJbpWPQseSjjg%2BkAPD5OT%2FUIW7ZIyYrexJM9xby%2B2hFW3Ct41Lkxv%2FCk6wYXigOhoykx8xBAj8k2fzAk2lT4gzp7ehuGxj%2FCMCj6xV%2BmOZNgJq%2F9BV7hPWrcP5BT%2BD%2F6qFJXZXB0N08rxfBT%2FmfEa%2F9SM9chK%2Bf%2FeUR0N1Xur7ukkLgcPiVhc%2BlRGgMs2DExtGZNX91qpCs68fbDE%2B7yNQzzAsDCOEfAhzjKMKC66s8GOqUB0k5YP6POTEaE%2BkzxF33oo14hNG3fP6lqr7sHAyQdXQu1fi8BCtpRcmuFgSjpwUWqQL6hX%2B2B%2F0HWGOx%2FxKw2lQfKMp4PCggSvenXa1sbe%2Bl0VSoTtuxHlQvShWdgfpUPRrWuIcqwFZDIgulCi7mga13Y%2BLP2hKHrnD4lNibHUJBOkOwm1C2WNCRqeMB45RqaW9NopNGqa0NRkUlH210hg9peG%2FmW&X-Amz-Signature=0fd4a9f1be1597be5742820b10353765814dbe724c362348ffbe72cc0fea55f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

