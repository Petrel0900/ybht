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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674ZE2O3I%2F20261117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261117T055847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBKjK7sLOez1qvmG1q%2FaTMbP0FehedclGONCyp0Xg2NxAiAuiCxqLrH2ajj8N7HHJxhQfvSziUK%2FIUQ%2FCcRbTUX7hSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYNE6lxKgxuKqoTJ0KtwDCGO03zNVfTOqjacOnp78bQdcCbebGPT2sRs7KWRjP1rvPOl4O3Xxl57jti18mxyxQFF%2FnT%2BxHP48bqUNHtP%2FAgOQijyRnNBdMzV0hGA%2BL5RquFAQTnZNaxEN8iVrR53Z54t7dYjViSMf%2BJQ1flD4eo7NKUH9I6W4ovMD9%2F%2FFtNYHlf3%2B8Zot5XMUbwTuGGolz3D1IMMOMieUoMWnxvPwu9C0vt62jBnvz%2Fe4VpXzSKvN88joyoyYFgs6hK9xiY1Uc7n658kmgulC%2BKYo9%2FSDNE3GPVhepABRhBZJoxRiumm%2FfIdzjqfuh0n%2BNvSG%2Fr%2FItYK1Kn8H6TAZwndBNx3TZZ64li7UDc70JmKt8QRb5YI%2Fdaf%2BxPh5wG6Bp1oWb9yiDYuB4tumcAHo529YC0XY%2Bi%2ByDrtEqMF9o8IFRbTRsoBlZoYx%2BHFo0mQg7VbeTeGFZ%2FSZxECHxaYzHd%2F1sm79ur7gOpJWtqPu1mSK1Pc1KWkVjn8TI3JErn4z8S6HkkJyQIsVv%2F7fG%2Bn670wZjB8UWf32kgRlMEPMOT%2BcHyTnruALrjmT1z4wmKkXbXpMJAsWMjbnP%2BQC0X3Dve42hZBUYZrMl%2FB9RGV0auGNL51JGRs8zOSW4Shk%2BiPdxwAw2dPv1wY6pgEc%2BT5AEqzA78pLlZi2y1L%2Fd9GqaIlRnnearrcFN%2FjJUtjZWGL1eKAPOJqP8vtWRLj6QLV%2BAkVKmEU%2BPYNN%2FfNCUvS6rU3EbjjgMd4F5H97tUCljfRCpUlf1ddQOAAeHqHi9F2FhDsa2t7Ts%2FOxIVUo77KqAJhjIJjrUNSxpdflPbe75RiKDujuqqJ4XWZPGs7Sv2kGAWvoA6L70zsl3JkQH8w7J1Vz&X-Amz-Signature=d7ae3a1c93f6dc4a31f8ad04d6a9c903d314b2339927abb34de15a1423d9eaff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

