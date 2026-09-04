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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F2XRSTG%2F20260904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260904T022840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCaHF1j6fUvn3Qk2CAck0IheWZ7ghoS4lJcT1dSxWX7rQIhAKMMTn0WYOgU415euKNZQ6EYbLnFP6tOX55YJIAo9kS5KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3Wp6vHq2INxtacZYq3AP2tOswmAoJ%2F2wFj431Q0Bkr9%2F35tBYl%2FKAO3VsTi4DV0%2BWp862hXvI9Le%2BFsW5ZPOYUWyCR94MfVNYMgfcatbzKHnQq1VcNz56MmxszB0A3l2ZD05%2FC2I%2BuWvQAvGCNGrwJCHNJfZnxXKjtS8IbTW5R%2FEDxbihPSvRJkzGdH92KLZZUOwTJM0AWDrV8OxFbQXXFY3Ehz4UxaigDMKuaE2%2FDdg%2FoH%2FSvqi1YmVmu4g%2FL3kKsCPWhoocwe%2Ft%2FMgSU0p3QJTqJV4xIYFcXL%2BVQRDBflnZCIVG4clLVj6Vc06XUVMs9t8WcmeOk5dOD9GN3gn3d1FY473%2FLJeNYy1oY%2BSDIiDrG56AgECg2Xe8XKVYSE%2Fg9Mb4DQnScw%2Fp3o5Y3Hjo9U224HDNoedP60EoJOBz6gWJn9Ej4FHP6io3IQk%2FN7d7UudV7P5WagF0ZYy1kWwr9raZFyEdkcMpTTeUr5%2FG%2FAJ0%2Bbk%2BDZq43Adg3csEtCG0ES3EKb3TyIOp8C7QhNGwPWtZ1QtEPpElKEgYElH1%2BaoJOTfSAY0d9pJCk378hWUFazpKPTZ0KXOTdUhLsGRBH28F0chUOdy6%2FcmSnYwM0sXaiZW4SbRpdL8fi75y9pMEYAtYX5ysMmYw6DD%2FpOjUBjqkAdablxG4fUGRGIEWA1zv9KQgqpCMKRhodc%2Bw%2BX%2B%2BJ1O3v%2F7dR0A9EcD3k76W10H3ItyF%2Bw7ZG16tI6TyriD%2FNzDn3X42AXAFKI9yH0GnRNAB5JBg%2FMNDd%2BoKefxbCtzx7Kh5ga1xqxTAF7e1qYWHzFNzvldf9%2FxrOmaA3aOO9d6Ubxad4l0omZmJgJYJC1FhJZ5MaZuFsAEYxW3I4PX25dabso2w&X-Amz-Signature=6f58e017aab038ff70bb0460790d6a2cf19d1cb5a0dc4b08e80f62eb891d7495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

