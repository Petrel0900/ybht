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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RONRPE7C%2F20260203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260203T170539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDCwnf9BUBb5mF2xzkZRekv%2F%2FKWiS1u11uLJ65fClz7kAIhAOJunNZ%2FmDWkIsidL6utZscOk0UrDDwfuUboKGiT86PoKv8DCAEQABoMNjM3NDIzMTgzODA1IgxrTIKPQA%2Fbz0U1%2B%2FAq3AM205%2Bxuf4HDk9dM1dqhETDvMAfk%2B80Jouzd8tqb97Lc7HNvHFpfVllw3WrdOQrZ6OxkJdwuz%2FIJEx4nSORXc%2B4tjMQB%2FQKDgz0QsjYgQoh5FmXIvswe2uOxpYZ3hVIBAUmm%2BxIj5gI1uehAIQ93hE5MvAr78Oj2c3yAW6zvPmGgnd5cbOlsGzKUwv28svM8snoITseKsn9p9CcHZLn4DNOAebrOrnlPEvDoSIxOzLG%2B805AcBf7ZMvW0BFWcMxQO9mHGWcSr83tiGGalUSelw1vGZw6FhJOnZIqzXS7nuEFmZWX9CYxh9u0vTtE62Go6oyGocV5QFVDBPwLxdYEdM%2FjYygTwhTCnFebjhibeCR5efULzLIH3n2loeSMle0nKJKk0zkAsIhs0WNdZfBQJTOg7jo1fgFbncch%2BoDq6NL9j%2B1GmavRF%2F5jPv5xYeuXjLym1mZ1ZxNVQXfCuLlo4K7AB6mm4%2FfxYPmGiJwJMdnWAKm%2Be3reYt4Q4dFVziPpEoLFvmEkg5ECJMpXs965fADP08FQc%2FGljwEPKkJ%2FrmPP%2FYSJjsTG2vyJYDBBgXsHWVayeqIgj%2FYcwj6rrcVSmxkb%2BTkc4iTAcInaFSngwsq5xmLBoiTrck%2BIE%2FDKTCytojMBjqkAVvUV5PuQK3xfUm%2Frx66GxBZuz6K%2BqLiFfOK2kERiRTiwUos8MIjDSMG1FBKtB%2FqzDcig3%2BbSN%2FlsPyl8DfG9xIk2cidn8r40fZbQpUbvJRGfD1yIkF1U%2BZFHd1MXdgygea57x%2F96GPDpKrWv%2FSBE8jDKH%2BgG9bmL%2FS70dR2tPyy7Gpm0uf85jITVGH5bDumbJSyTFEwnwNmb1u7vUpPB9kxdRbd&X-Amz-Signature=f7295cef2aedf6e82c9dddb6de061096e377018c8e987f870e16b9a024bc9c77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

