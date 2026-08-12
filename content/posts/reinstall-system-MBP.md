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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL4DM7J7%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T011759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFzBmofDTVFKpjEW67EDibNjWgrjmd7szKn9X%2FXNhipQIgbxp1JutY%2BJu7xDMQygf0muJh6VWgkFoqYLD7gEqPMJ8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4fWUZhqCmW7VV1qCrcA%2BriLvxqx%2Fv059yXIMXJYWzHacup%2F91Y8N%2BYzqRYnCKogJHZHDOSAeaoN2EsNIqbtS4B%2BkoHG9jnEJJOYmMkpgCQTiKHQaxpbXZ0%2FBO4hj7kw79DEVP49VhwsQQTP2mL7XXfMElB1AJkUSA2c9n3JNpQCnMbnxOVuvppgaMupkHxD%2Fc6YYxFpvyU9MPjPLg5rLBk6ss0AAxs9z1cajpDLg7Oii8ylDBCN6Hm4s%2FvHmlxTamLTmdS4iuLAShtVN3zSyfS5D8hCEIPYWdOZmM2TRWO82zyqJvs3NaTXovfPKsGVogzrA6XnJpPZpWEmSCEdwmZCxXYvSLixSr6YSU79fkesmd5L7njinU9sNcckuyuUbDKU4TsfRli%2Fuvm7Hz%2FCfxtbIItoU9Ql950AoBq5YJ3jWm7o%2BCuCZCL0V91VhTLggjbbOZQwygiaGLuBBnBcd5TxogVm8WBOGziI3mpohxgsGVhaPGrwAh1nCt0I8DNhagRAoe9WcIrSgPWTl1X4rQKWiT1EiKPTBvD4rXpelC%2BLu1nIdCg7yEbJSaH%2FhAz3t5ceNjG35JPyfk2ZtxUkvpQM460vcTtQO1ufjLZoFoJQRNmiDcvcxihh9N8ndCzH47Xj1YIe9QiHdDkMJHm7tMGOqUBVamOcPF8A6Huhd9dyWTno6Tv4KO1mzZXsEel8iiCVd46hxxd0OCxtjwwd%2BzTg68GSQ%2FlCTH6DsBsK3ozA%2FAtL24cN9i8lZJtmefUKh2lFaNfzp6qkmlVi2rbRSjg21Y%2FB1WP2Xh52hKrsaKNB31XlPfhYutkGxoUUT0U8gY1iUuta31%2BAbOBt%2ByYTF9LQYwZjDVwpt6rLzxW3YFd6SJ4eZaHAeF%2B&X-Amz-Signature=23eb8606aab4a66a3b66ee78b14358d7585806c348b54cb91d3d07c45779bd3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

