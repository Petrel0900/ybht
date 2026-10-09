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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPZZJLG%2F20261009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261009T040109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIACZm9R9DX6lsbSt2NHPZSFuOEvAFEsLLI%2Bd8m3Bpe91AiAQdl8iXJpmNK6voNkM9VG1jOAE9zFcYyxsJYlKufB4TCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM8RL6MvA%2BqrbMP8YBKtwD1l1ai7eX4KTty1%2FmDTVvWMrqfWnmk%2BO0pwUK132YzMt1jim2XIwuhMPfai7w2IuVFd9ZcdMFEc8bACldd2THRDGFovXN8pUfOF%2BB4BFQA5DzK2YXx%2FWgkhBzz9vWa%2BBeFNkidJbsLX4y1LEaDI5sPF46JmDAUzZILMN%2F7OUO3bPdVl3Dl%2FqdrGyLM0psWREu2%2BFAoGGvek9PT5aGQoi23kATeZAWeCvL5gxo6vgHpqtfcYLsx8K6jt26smnIOWD1X2MeGa86nCb%2FtyAOjID9yvCIFBBtOsAqq9rnNUrF2%2ByMk16w57SJiH5M3z7%2F%2F%2FLyPGr5dksRh9l8xskU6KfaZPjTJwWSehv50SHlftGJuB0YtS4maVEIonkn9u7aLrsbQmb24JTEau68csbe9Pgc8NkGUHMfSktKQCtUGAJSeztSrRLUjPxyQc0ouo9cjmjShY4SUF2nZs7dalG8OnerHkxia9rJt1G%2FTi%2FLbGrntmTPcq2cdWoFYg3Fm65PA32LbHo%2BNYBxHJow39DE32%2FK%2F9LYT4HHPLLZNFS8gWBboGFfJCzID%2BdpvQrmB%2FckcC6C9dNfRzuz023bLe27RfWELHlh5zLrz1QGV8aiWIk3amq5qb5zpR1Et4nl%2FRswqp2h1gY6pgEF2heWtNfSy2pSlRDikVMLZa75y52T0EgfpkeTOQVDcOW9%2Fo1iH8pVFCMji3ms7zBRvrcJimZ%2FSKzF1OScz57sqab%2B4dMNgaS8Q2XgbV5UCPC3cXZ300BqeBNCZw0UJfyTfNn0CWxwehzD0TGpjuarCllUtggrLHH4MOkFqOGun%2BWwUyA%2B3yUfJFie9EfiZq8xQFvAPBDt%2F0dVX9mhQWp1Xu%2FXq1IY&X-Amz-Signature=8bae3f681fb88a86d17767a8518068c17b0638fe1c56f8089134281e0436578e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

