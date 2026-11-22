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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSUNNKT%2F20261122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261122T043048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpU8mnfak3nZYI1vlDUZX7eDSPc0M2RM6%2B1jDQhl5ViAiEAwsRz0J2BdN%2B9KAoR8Wt398dNzdUUKOpfidvDZLehuG4q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDPozMTSf1aYRXdzOLircA25U5cfHYz9v8qK%2B%2BJjnOzVz9pCm3Z1v40v1vOVAHzwH7phKY4Cbz2NsjGTEE6lSIky9N6d%2B9xRdiQJAguCmad8bguXWmDDXMGth7Yn%2BsrECtDMp4MENiN3CyV21zIhB47KCQRE3%2FoyBNQPy6HbvTnEnSwk9RpbEyhu0nJfT%2Fz4S334OY0T%2FvjLtYHi70YjsqiRUZs7DDe8hSI7r8XqXMeHNc0azjCr9wvE8ZSalg27AbqWwM92nQ0BJRYr3oyZYoZzotjOtusoW9tKeV1%2BINkdAfdPzNZ8OeL%2F9wYrUb1WjORrfsWyLm1AVFOfRH4tUjmfvJaVx3ScNqRypDfT9Eja6o%2FWbX7wMOFnZrkgntwB%2BlbaPkLp4VOby%2B6A9o1Ww%2FHZntxtVhd5ng%2FZKQTeXgRmIQ0lOUpdQG8OEW5Ym%2B%2BjGUjdIVDmIbANeHH2z62%2FGO2D2KMTTz35KcBygheXl66U%2BslAvjdYNunHlPXlWS6QdFMEoQqZddNSI0ot9mFaqWsGmYbZQPSeOLBoaEpKcRT0dlpBi5n%2B4e8UbiAXO1HwHb4ktVz8guKxoA2xZyBkArmEHxG1q6%2FCeFM8yaJLRAtZ2RKiyqjKazB8N01R8cBSTX%2BFw3cUeCuJdi4TtMMK%2FidgGOqUBFSAJL4xIPou26NDcLEI8%2BHjStmVxUS2vnSHS7j1i5tdkNFZ8GQLXfDPLYD1iatL9yaXF9kVVCobbMEL0m65tFUpTJz7HtNG2%2FIaqcK9DsVGeesjtx9jr3stmz9KKb3tQzr%2Bbyp3NL5jPwCof28ZgBiom%2FJDqsbEru9MHsewb7acJf76CV0CYGMyfDG4JXz5aiw1b%2FPJI7h7T8wvRcbVjoEFQU1mQ&X-Amz-Signature=06f24e0e126251fd570d0e1bc63f8e98005ccfbfd33b4914bbecdf430f7cf9e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

