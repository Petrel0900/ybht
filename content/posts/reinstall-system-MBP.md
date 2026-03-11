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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676RDMIIW%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T012243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIS7Vh1UDeuNTzd7R9ae3uRpR8JxIyjQSK5qmYmfjwvQIhAJHSm0p3m%2BwkuKOOrkbVkMQt%2B1pVgr2Cnr1gnmEMI1XXKv8DCFIQABoMNjM3NDIzMTgzODA1Igwt0CGYp53JLFJF5zoq3AM%2BBe2zLfJVdbfMAK5EM%2BYRXuc3IowWdZ37zF%2FJx9u%2F7Dn52PFlyllNckebFPfUG%2Bgxgdf5C%2BmmZ%2Fi2eLWsj89OjCN4kECgwU2e5VfpnmfcAbEbaDa09jXf5SV0ZNbaZSRineQtnXUBPNqbGGvqIMN6o6nnldIZYlWvTK6cNVs1TfKDUMzEayu0%2FvQRFDbUvW7zynJSzFygiLq0fry7dN2oFg0L57HlYVF7CnSLmyb93MbWZknJw8Iv5zSK2n6cGQB45bg36jLzhJ28z9o%2FdzKgLs7kQaZbNKz6lEaaZnYycpcvoiklzKqIvywccjE6xbNsfSOSFxwAoDTHRPi2wzHUrmkmrOfG2eUvmioPYkHoQQ32I9VIj2mQvBPLTKb1IELdxKatFApJNvBewWbqIhHaCGHTBmYUDJroaNH2SQtvDubkEEHGwxB3rJXFMPh087GTxNOQtyENXm9AFx0TyW%2FWUiAoVd%2FZjnTPphQQ7h9TRoBNNdB8bpp5C8eUqfvknLbsugQ8rZmPqS5xxr0JYPQpLogrlHKUXZEyzf3DxdmVXgS0B5pXi6aRlRFjogDOHnc4GvZVJ3%2B%2B0bkj8L%2BLaXupueZpL37k%2Fh2Wa3VjMiTQKEXSjiaTy1%2FC3WkiGzDq8sLNBjqkAd8MZfqjftagGoCRYObs0EcTefl8PV4mn0yr9KgMdjqZl0YBTuOmM6PFdZWzA5TbVQmu0OAqNJIIpqaND1PdtMJzD8%2Fn6frOgC8emfiGcFrTmA5CzYwByLAtuCHP48jjmtLzs%2FqidBIc%2FjilnfhajxIL9%2F3Euyh0qs3lCpm7nubpOZ623f4HCmmIr6LXbAp0KVK7I%2BcAy7rXA7QAApyGyy6LNPOP&X-Amz-Signature=6b94a6d87a496114a59260270a4fe4973607a7279aa3d688faec35aa8181461c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

