+++
title = "15年老MacBook Pro曲折重装系统记"
date = "2025-05-17"
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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNUCLKJN%2F20261124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261124T075305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5ok3JZdAmpWIrmJ5eX3huB1z6cRL7rkoiQdiPKXWTBAiEAyq7UGTlFXT8x%2FBF3v2hicui9QdyZ2nqvEBHLWf9v6qsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuKoHbVIQjWT5%2BHBSrcAxmv9cZyzgafQjFzP1mtKCtCQ%2FCZNjhRnqLFFgTGqyVH29mOhpwSiYbJczB5joLdkB%2F6GnmRv%2F7qf0qGkDm2%2By%2BgaCc7CM27X37OODDvOMZWbfqz77Je90riBGkc0LnKhT%2FSHsOO%2B2NKDdBgEf8rnKwAv%2FIifOhy6Nh6%2FND5p7xIjO4yAErIYl16TfXO84tk4aPUFdtAddugyz8S93%2FJD9OMBZ8D2gBY7SITySmfzroB6KDM1l%2FmxU%2FLOzGJdKcsXQcDtSJ%2B76pgIAh4SoIc%2BsXqYcODdZ36MObyNOc2kmdl3qdmqzYtwcqVzReHgBCcrVpe620Cgo0Nnh9Y%2BgbMFJYo3sSo%2BUx1DBuEvlAoEDShGGaW%2FWURF%2Fg8rvwRKU2bO4aFbxBJ1YcrVS7HfKwaYUEB3Y9Y4snzrxczqPPFv3sMGVN58GmW0kYA3RSgKprATHvOsr8QsebtZoYQ6AB98bOLpmHxTxoc2HmIsJvmaLKpNVyroZy1IPdsWgzHrjRk1nKXCvUGIndROkbM6xPnziCJmi5QbcOVniTkCgZf4w%2F7aYoev9YGZdApCcThzxMoXcRdH5GGGHf6J3UpMkZvY4Yp164NdLQi33rBsI7zW8pql0FEQAZH9Oluuu6fMJXflNgGOqUBAhnIR29cGL3UX0wC69RpkSuTtQlfPK3EPYm5wbenKOP8WtiLzUAAJpFnJ8eg4JOF9aMNaS00ys7Tu%2BZ%2FrEOVxW3qsbVYMD4qThDBfPC3mnhX4qMrApyXQs%2FPibCw6mN9vkSFZmBkeBObaEDXW9cMaeykcphVTGxGM7GBEI6gHbxNR98bA4sDUY8e3bQMvUtPReuT0SHmRzRppaf2kLjqd1MgPSyl&X-Amz-Signature=a26461e6ac483bec10f550d4e3d1aaa339a052a18d44aa06b25095089ddc4cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

