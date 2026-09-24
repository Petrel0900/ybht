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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2V4UDFK%2F20260924%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260924T023623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEla0IKA4bCb5gpoo8jee6Q%2Fe8y5MRcTadwUadP6S4LeAiBNH%2Beq%2BdJBVi4rjGm3XR1lqx4FngzmSOE8lQIWD2AYdCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfNcB6ZaK07c5ufj%2FKtwDgi0bzN7q8AtifTLTxEZWI7%2BxXDzEcWMGjfWxUqIilzgC44i4IqdfdgSBsjpcFVIy%2F5EnJO9zBX%2BX%2BCgoV6TMlPMBkRSACx85sCkVrUrrL7pOtNkMK22Jm6pQE41hr234mfv%2BO4rvVV8SrpFE21ggbedkOpQJ9u5tweYPIGOfB3aLPD9HReixFtkf9dGhkn1PCNemPCBxGXlxnzc65SPPxVt8JGxNV4AKwogO0o8K1svrMQXZg%2FuTIReaFjfFVXMfFEXVytje%2F51kw4IlRlUXjnQZGQYXrhCRp%2FmOm2L4VOB4sr5D3KNJ2L4Yf8yQdstoHd%2FBp22SYQNh6eg09ZDl7iG4OOM6skmfbMUd3bkqTYYiBBdBVaCucdSb1whsRGmzd5%2B5%2BfUXArxfHFXTSWEI5XMCBmxoXeaVlpBYsejkvuvfaF5g82ceQ8EpxU2QLmuuKZU%2BVu0%2FLz81QxqjcU4l51xJ8yK3xxdqRzCaBsWhS75m5BX1VYyY2mftFfQIfcdYLPwAXKNlVdIHyAWg7eA9AGn2fEsRVaE1lQemM9LwOVCdNEjo4OCO4XFpCx9rBjtImYR3TNSq1iJVD2kNOMKfvZiGgj7vLsQrA3x4oq%2BjNvgdZ4AFrOjhbz%2BPlQkw8%2BrR1QY6pgGHot%2FNoGO3Au0PcCUbwnRvTEJvy85tVXqS4C%2BfISVKEndL58BKvxPQItGdTccZKOohry1BtYkjdQzZL7EvcQmW987h8kdLUbVyZDlOWISgqSm%2B60rq5Gm7vQ25lC6ZhLE3kYEbqpwg5d9hwcp7OzFUcnB9g%2BBhpOQelEXSoU%2F2lUPHEnH3aK5dWHfRbKA%2Ba%2F7y11Hgc5CiVOPWF8FRiILGY5wggZ4l&X-Amz-Signature=99f7dd426fb0f87737becf4c2c5308e943527b10ec4335582cd0760361837b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

