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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JUFU5AW%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T015435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL1OUdbfFxte0ZotJPBJDDi6z5dBss5mBvn2BQJu5gvAiAWwex%2Fpb9YUIM82Ss2J6AjQwEM7gtDmKfpGJTLwOmrpir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMN5uVncgZJpBcFGsuKtwD0jUNv3CF9x3seglbvfXOxO9%2F5daVczp60njWWsqd3psx9m19tH2rDDDjxSp%2BoFxd59a9B%2FOVEEq0fwCzP8RT2Fq3oTTjuq4IX9%2B4va%2Fe8Cq%2F9CyazXhfwYQy9hTJuKs%2FampZbJFZ95tlif557%2FjrQM6%2BBDR7mHOmvdkkL45AK2gwuFESYDaRC2BpM59m4SlrFYfG9kOuk6qUSX05YDc1QTbgfiTqds6%2Fqv1uRyTW5yTtVbpw1UfJxSoH5wGFryb5K17EsqjL3muryjjPpb5%2Fa0cKqMa5Ae3E639oDbECsgmKHsy9lhrku5YZAE5yK850hniHsVKSE%2Fh7zBebyYEBNuOIHZxLZi0PrzN8KK%2FISRfU%2BxTwIiDOmnR7X2ijEPl9z3RrpareaLR5NImpWkk7UiIrPQt3du7U2pazVQH2junR%2FJ17KzajvYfPn%2FEa9VQBAFEdvfhwM1hppUMXr6qlcqzNOkUKSP8FB5yXuTefQGLZ3BbuKpKxtWpC8ItO29dy5kq6tecI8ZxZexKzBJ6XcIanQQnUcgEk9k%2Bh34jIE47YY9GAofkVhdknC8genz3ovxrfT%2B1%2FTunKFG2HbwFahVR6Sdg1VT1dUj5q2jFhMs1%2FdhaITb2ZO1SupMEw5sSf0wY6pgEgO9yaSmOrqx0LdAptad0q25%2F0hEm0%2BDi4WX3fORMYt%2Bq6%2BFdRgIONaCSf9D%2BUg60cNeuMVuPicAvWR2Rg0GVAoO5o%2Fjx%2BjM1pC00ic8ysmXEE5wgwgZ8u%2BdwhQpYuJDi5OFXQv7V6c0k2chY6IWRu%2FjVQF3%2F7G4sSwYI7zQN7i1l6G5obaU21d8nJKvtYGlGB35AdZMM13zO72myUTnzoUgW6%2FSLo&X-Amz-Signature=7afe704533263bc0ebaa0740a94dff045ad6957babe607334918c4ef723f56d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

