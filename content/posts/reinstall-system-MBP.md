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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRXIJ3ZI%2F20261012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261012T034227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2kMtRgxlwcZNSkbQp2%2B%2B3TdqEMvS8jXrvTh8KuSuBLAiB3WqgNBDm31grGwa%2B0YzgYIEoB23zjZM5fKCka8sWFsyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMEljZz%2BbFAtUI7PVNKtwDcPVgpUpH4TM2M1q63vGw62Ye69zNCBwghl4fEPpSNak5JdJF0UgZj3bdmWcAwA3r4Z8ESyy9kyNxcxn6rXJPKtr7a5RZYj0asJOSPS6ZjW711udq75G0DKxtdWeDw1wGU5o%2FPV12%2FJ59ph78Pulat%2B53xVCqXiqLeKj4FOCOQxWXUkJ%2Bfljn0orsnUqGR6To9whlbDp2y1r449qzjJ6FPpkViC4C10XN3y%2FhIAiDFWgpCqWSgGIeiZkHJQJKG%2FR%2FguDKV%2Bly8PIGJJi52xyYzq6zGrC8MVuvm0OAfsw3PH%2BDvd0%2FjLrsHUR7lTNrJZNBX8hvYctqoJsHxe0bwp4StBQ43G1VOIg%2BMU4IY%2FFZpZqRY%2FBycvK23Blcad%2BjwoEkHVJfXRN9HqhBvoC7JXcrG65i1NN6c1itnGzUGpXkU2JS%2Ft2qz2Wm%2FDEO0lClhLNzgB9CRJrrQfjP70F6MEJKUPSAx88ynB4GyMlinaV%2Bu8CFtTtAEMd7QFsEM4x3mn3sPIQ1dmEQm6GuUkcCaNUCpJvA0lyoo%2Fh5bnT4xAlG9UF52zTAlKEWMTXTRUWIQaHz99dxrftbRQT0exv5KolAjOodBvGOgiUFYu6xEcaU0PyfSFxTv109k8IwsYcwsYux1gY6pgHyymyC1W1KCiryOjxCcvMggTonB6ADyizA7U%2B5MDJ%2BbUVnQ2ZBR%2FSCb%2FDk5vJFAogRF5a89Prr8WHXDZ%2BzHYuDTmijiA7Ef0YsdIwmomNCMAryZrLFF2Qvmf6yUJqNsyK1sKYmxccVzoQrT5mRIb4KLuW0GPrkAid7aws1vzi%2BT9m8pbgXmeqYpFmxPyX24xN6t6FKTamhTUVph4iS3MVQfrCE2Y0o&X-Amz-Signature=50d7c92e654ef4136208c2be459220b6045965bbb364bcc7aa16f8b01df52088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

