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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EBURUAP%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T010944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYECScIDwKJpt7bnPmsfh1xdwzDmAJ1k%2BrT8pFQHpqLAiBoqkqVuKVyflZ5oCiMi3Db0wZ25ciDOsJqsCGh92D3bCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMBSdUzHVAGhtmU3KHKtwDUzr5ArGSh3T5TLtQKmMH6EeLr0l5wHC1Enk4rMXJsqykaHBJGSWM77FMXEWhM0Oc6WIOHc%2B8KrUz%2FvRYoTFJv0AwAYlCIpm0%2F0vco3XukNC7nYsybrL4RQ0Fm5%2BEmTG9OiR2i5d%2F8yvCgeQtXi5mENvqDotGKelIKtrSdu%2F2cxuI2LgetY84x7Vf1bqwcibU29UiUxIMxSbofwB18Xmu%2FGoblKCRbJeJBn6G%2B%2FndnwxNWtKzqFj1hRsAqh8H%2FC3%2FDe9jeC4zEHQyAG%2Bpyl5853y%2BpHpstBUTNm1icbpfWGDaB8YoS9ZVOLgiYborsBU1qZEkf7rnIdLPTCXb2565RKtZqjAm7BPPNvGc8cZn68Vuv9PqvV5M1CzL21GTvKjCaCuNdEiyosRsX3zonKQufeHJfcGU4%2F55K2WSkBnPL4qvK9h8BeraHrODHvdvFjyhkz0qMdp3vPqDlI5aArbXKNRkK6MIKd04A3s3PPW%2BQXMKBCSFpQUWPzlLddmJXr1wJyvoP5SUlRELVSZqV0kDq5kAU1ch247xfKL3igN60LskE0sBhwoUn9WCa%2B2LBIyjPM3iwOoWuwTRyrWuRM7LrekVaSampnGz%2FpFOOr%2BmnFY2B%2FHZz4rNBLntQpEwiNPe0wY6pgHJXjTUGiqmONQvdW3xNIGyS5mVKpY0fYvobr5K%2BwY97%2Fd7kChPAU9PIA9v3JdMxrSondEXGsYS80y7x1jSxVPRcQmL2f3Dl7ze01JLh64aPR8hqhfsmdP3BVTDdw5dzJd2e7Uuc0NsBcWbE8KcYzs3YAdJge3KwlJmvN0XlW4Mka680dCFjeXgLhHnfqFI0JBgt1mXayxHGcWeXUuGgbAizK%2B7Pdw%2F&X-Amz-Signature=730daa641135363cf84740e635963f9b9084d59c5e21aa408a38a8fe5602d482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

