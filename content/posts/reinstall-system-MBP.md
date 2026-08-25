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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655AAUPQ4%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T005238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDvVZGxiCnnCeWmp7B908DCkAXX9T970SXxnTvg1ET42gIgHoFdv3PhxkgxrzSG%2FciZ%2B1TpSKQ7SbyYJpdh8kaOiDsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHj3wzLnG501PngIircA0%2BqVH%2Bdjzk5Jzla0V03MVSlf1RCnCidxhYSpGJPkso7Vz9PjyW9DKR4KsW%2FFShel%2BkDRS53ju9qJ9IN8XEEOu8T9zc7XFHt7%2BBMHYKeV64LR7j6EE9JA2QnLAVHPDJzqQTmr%2F3SZR9N1hW7kjQj9O5QuRMaUFLR6G1uFCOPDUveuUCn2gVtn%2Bl%2Bqx9YAVfmRaeChzRNKFGAV34ZJDjrkkn29zIcumFj1uHqXcrw0jZgiAtG8mabYqBJgPdiz0kKomYl%2Fkusuh2Sp9KrNthgnCy98kM1nNHWBTmnyGE26qQFXoOH6sI9BmHOB%2BpPAyEMqM0zjR%2FIwBWzrLqEqgsfKiiNuKowZOzPMebW6BH%2FcOz86NZPIsNjU4OQuH4VREm9WBbUsUhuH5EJB6eVXwVYA%2FqRlRalvMOlo7mslpG9hcvZHtGrd6an8lXjeSGNnbjHP5XCSXFUslAc9VD7PI%2F0LV0%2BYocddyQxK%2FDcbI9ztjIhWdH%2FxIzDr3eo4jk8cHsfhdDkkWmXoiie12Vhm7qIR01PLU9T2IVT%2BJunWwX1b9NLlQYdo1Rrt%2BpfPW3xOj%2BH8vQivoRAADT4%2Bcesn%2BWWSA0m8UEMO1lRRS%2Bneoj%2Fg2h%2FRGzA%2F26TpaIJViQnMJ6Ns9QGOqUBrWEMEYPqVQerwt0%2BDYaTpugvY20sxtJ1Y%2FNkoVtC%2B%2Fy%2FQNaOs37SnlFouZFA8Eduf%2BkK4Af2obEK89%2B9UDGo6IHAt5kZDBUjMsNm7blbEcIyAfKlZcIEvREFhrjIrhu5N9Qsyqs55twRdLrZn8R5xTraxu1Puq1qpnpp%2FQcNne5xZA7DWt2zsRjWBxXvWNjyV7c2xxc%2Bnavxd5H%2BmeTgksNSkPPV&X-Amz-Signature=f582ef994c80b079f53fd1c81cda5aded38dcfa215ab9e9e89acef5dbbf8d0eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

