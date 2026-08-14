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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVLHWLSB%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T011848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdTLJBRzeprtiNUN%2B6JfmcBMdnOuZIzlXo8aKxO0L1bgIgF7cG89ZgtilON3N7pkdfpkxiCWz2Y9A1MLhsitJ8sdsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGUoX%2BW9nvDbWRi8SrcA6zQ9Huqc8W8POnz8uacQHRRscvr8Fc%2FKcbZdY8aNku9PsTO%2BegGFEHoB5U0c3GtG3dlZLvXVOVpRiBHdrHVx%2Fi6g3gVH25nqhraPVnSkY3NZ7%2Baqk0gImbm%2FND%2BJktl4fhGETD1KCgzTH6JZRvblNKcC%2F4cGDtHDC%2BmkCtSHPErvbafM0SADOlMUKIAv0he8xmgKhtu9T7MODXvag84LtV9A6pLgCqAj3B%2FrtDsbo5JpbAn2eP9O2b9u2Lv2vQZ64zYziy7JCFJ%2BFat4WFmMEa1avQFLGtGpeDZsPbRPoL3kvwxh2QTsL5TiBV%2BW3LGoyKiqRWBJiQ5OrxgXDrhRTrzJ6WOOCNj4A95%2BocczdCP9OUMYLKAQ%2FtlfGPceU5BtyTN4Fe9xaNsKh93LfyjrNAFVlPYWfiWARF%2ByRazCuHi9HGDKzYLR8eWH%2FzsKPqQ1e3JAZ7tHUQ5wZmqCCtiIuTiRGNxaw8m%2FwqcNDq0HYX5Zy2VTdWNBgsgpeOYm0eb%2B5Szm2o31hbN1BuJjBMRmVxbH8QyDDroniPtmLNlDwKklxdf5ceRZBTR%2Bro5V0cCvh9RqQ1eHbHEKpmEf5TSkWCmbHa2akIcZ0hmi%2BgdwBSoTRo0ia0HggDeKBrnMKay%2BdMGOqUB%2FjE%2Fd0sZ%2Fmno1KwbuBCD4iyNCOD87magT61twfCj85IhEru5ks%2BzYA3SvYO8uq%2FjOV8TjHlKDKYb%2F8ejFNf1Byivph3PfY%2FFk4Ha08AmuDwpbCqSfiu3nzavjf4SCOW7ViuiLvaNUNQy56lOp%2FrAe%2BSMaqljqZbhFWavYB7o9U8S7zuAdivh7ZL8YB7OywXF6aUm66cg7ul2YgKOceHl7QdlM4v7&X-Amz-Signature=694e5137a037ddf9d9f4a95261bbafc06a5438f7c117df723c8e4892b14e9939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

