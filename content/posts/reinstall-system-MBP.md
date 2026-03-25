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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SUACCG%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T014323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoFDyO%2FZnCRgvUQiM%2FWjwLMana%2FX3j45pdLqKne3zNigIhAPAHqUfrIKQkTlysPQ8NbaaoknhzTrfkxGde2kyoGn%2FFKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL6atcH%2Fly4w30xO4q3AOTnIv4R6%2FQ4YYgdbyCtApEnzbN1mMf67RHIXry4V6avRPMDU%2BAlO0JNwsCpYco3iwy%2BChCBF7wjpUsbKa1Zk7Uefq43x6kiLucgko8DnsfvzQHAMHd2TgzoRmaZ%2BsQcbXBgGEma%2B28V9ISQSEcXRnMihRtvrUOZ%2FQbGLG5%2FqkEO%2BHhi0rhPvphMXRmdb5cutFwap9CqsaTm7Z3g%2Bk%2FgErTRX%2FnSsJs2DiTCHI32YttdoGAelZze9Kj%2B2PEGaTBfQkAlir2iLFqdSnijaN9RdXCqm4iTSFSV53Juk5fgZT4lDKEGwNVvD4o4kNCH9WztBnv8x3twqQa%2FrTH5OvfBT%2BU4ymh8RyU95ae8QICJhVQ%2ByWPTYKUnBVcl8WAkqxvI3W9tcmR8JZAVCamb9xwLfFPqb60uq2qFi4NxrVWQLzWt41tsRQLqnYP3ZnLHk8YMv%2BzerKtiYNk%2BEJ7qAJtE9zgC5b8pUCeJHXxwMQJMsBgx1qiHNwogvjatbyn6R2xu%2BdhTCLZ%2Fc2G1v1EkQZMlPwE%2FGwxmnFcZI12F%2BhOagOT4yjlaOfG2chQqrcySEWUX5UiiD5TccxLknO86lvztgSKqvBCV7Svg3ISmM6miYc5KnbWmRd4RWs6DxXoJjD184zOBjqkAa3o1nEVTWS30c7FKsMXmTYs72mVp8gpv3uxNUI2T%2F80HPMrYClGTg%2FLIuA0%2FYkPiZ7rXIQHaNKLI4XgKdzNlQ2nqSNNbThDAPE373GLJcX8v%2FWw8CF3nIfHie10ykNg0IJA9n1xjyuFSrWrvh5QJ51nGLIC97xNPDs%2Bizb3%2BbnRZewhr777tUUV4qrcgDk3uEUlxg4WrukKnqkFfAILsvj%2B2epq&X-Amz-Signature=4198e5a2fbad1579796a6e25972e195202fb02bbc4592b1fdd0088fbbad67f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

