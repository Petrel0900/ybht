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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQ7NRJV%2F20261104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261104T041950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEIv2MTUZ%2B7VD2iT5LnaaThZ7kEMA7xEdphkiojWh%2FHgIhAO9DA3VJv3%2FKNpyJTjYh2Gtt38%2BnmgfX7fOzR%2BB%2BWrwcKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4cFugmgtXJlCjspsq3AMaoc%2F49rWFOCWf5bj0a80TEo9Rdoc9%2BtBaOR5D4BQxba3zD9nkj1qi5hYFzr%2Fxw7crTggakOD6mXsl2d1%2B7jhtzwxVaWn8Hn78CfxhS0pKA9EIhvuz%2FXFqvOm58RO19NEHYaEOsyTHu9JYztmVDP7%2BADkRe%2B6v8VR4W8RacXTtLNg0yIUnofqkT7FJSl15qrJ078ehui7JVQxyzLHmDPfjpq%2FZOBcIJSvjyHeq6d8tJSxFbCDkYTUlVwD%2B6S7iMCHVX1GWT31u20L7ZVi%2B0BC1VUXdn%2BeqB3M3V4BxqmciqxUs3rMnJKuxmJTRMmcD55g5RS10BsD9csi9Ox1sc1agsAGH11SrIvBr3A9DTth7nqMJWWlzMxuzt6mcnQ7peMAkrYhuosY9ArVPibWSWyglJl5gXcsJYk%2B6Qfr5fXwhI7KWct4vxLjC1QVhP%2BkYGCXlXIxHT8i7fySdCKz1pThoHji0QLrQE8PUe49tVoyOmgEZKmD4hb0v6kmdpElj0xnfbg0t05A4rcRKImLPfB9dxrkb9bKuidhKgJ0tq%2F3C%2FKxmW%2BSSXdOrtJvwZloI04CrIHAX%2FEKNZ8V0H6IwpL98uV%2F1jbfzGy8mxLi5uEl4sC%2BHK6tsIjun3SH3pjDFzqrXBjqkAZ3LLALymqJ%2Br4jRMMOHLiCTWO%2BLxpUDVDRygswJlYOVGXD1itXqfcbXfUkpYSyuiqFxRHdyngcqIZ6tLgDEuj1oThK7sg%2B%2Fj0Smq51aqiLwoWF6ucgsOYG6ZPxMghL%2B7EVtwtby%2Bla3DpJiuq6p0ijqiPpjCnMBkJvJTOgHa2QZimOj1myc6AzHbrVEpLyOtyxaCdAADCnS6Cz9cRa2b7rfW%2FFP&X-Amz-Signature=3c4daede1691d37c9b45ce52288a5d1733e073565db8239795a8088ae71041d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

