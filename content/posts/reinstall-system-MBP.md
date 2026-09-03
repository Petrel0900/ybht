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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U7DKKKT%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T022712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEieSw4Sgn3%2F4zbKNGTCVo2PBMIK0%2F42zq5hYmmAaNbxAiBolFWBOeTVngBk98Ui8%2BnNUsfXocPDue5C%2BbRu%2Fe0XcyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2vr9xb52c7twG4kPKtwDCcdqlsIMMW4Nwq8lRx9o0jSjoRtYNPzGOItL5Dtswq3i0797t8ndT9rC4YwN0sMrT81%2Bk0rIkx9EZnGYfHa2UxdvtZIGekjQqf8zifSa3rOV7%2FspHFeYeo1PhpX25DqFU2Pfvt2taZij%2FXJhclDHgjzsqHuwAHDZrej8hVGHDrn83zUdYUVczJqfXTge4jiEi9HlSenVvwUTycjDADjtf3ZKzVVMNYP7rx8tm4cSaxP8u67qjgIOI2ZlQkVpVdfcVIZKNLFAe0c9%2BzBfBQaBWZjwXaQsbamHZWwOAU0e%2F5LIJAvtbcLoXZf%2BozFjXHZt3BX%2B2P06ng5%2FhaxcH9xTif9gBURpKNb%2BCr93s8BTzrFsTQAgrOZFG1bPbysPgC5rhTlMll1Yjbk%2F1JnG3TtsKMwbj0P0jWQ01Mi2hZD3O49iD2zORsRBffhv%2BQLMs4%2Bri2Q0xfSr6A6b5kGxHDhtAJw9ItI%2BJ8CTuKd2Tt3jQUJLRZPKScPJFEipb4YZ2LbdEgBdzdbupvZhMkEFuVE%2FV30ctLCo9J24THSvEGtN06JQWMt2F%2FG7I2XOZw6o%2F6Jh%2FfmRSzzOdwbtiK9DgUjK2GewRVmSr8JUvlKy8tUercfUjpvoPiNWKEzSKuEwvcji1AY6pgGVYbRhtYbffd5onp6FZxL11b%2BCtrpcgHWq%2FIzodc1KlIoeeth9lmIBauzvLKLMs3483opubb6PvfDVwKYO2Df6HAw6NxPN5G7eykxCvPyKlmvm6JwCY8UoNjQiS6xFAkhDIbqaIh7sfBhkK8KvRUPN6PQd0zi%2BEjEujA1ZUctJd4iOvPXQBBnpzzzOeJyAdJk1ZoYzXzvRrU%2FSLVvsZYj8I3pxdJW%2B&X-Amz-Signature=237858636fa70f9cc90d43ea6311449798cfc55dc06123d50a7dfc2f41fea66e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

