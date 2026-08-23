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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRWGZCMC%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T005446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDE89Yi%2BM0VELOnpCKCWUwhHBJ2UkaZFlXMqh%2FyFSxrVgIgcHMxR45l2GOJ7Pld7CHLp2mTl6Yt40RCc7g3SnrgZ%2BwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQGIsqtjZn2AkpiICrcA4A0Au%2FeY3EUcJL8NnQVpo0F%2BleNc5DJ3yBbJnbQ88%2Bfd6H1c3yoMmQuEUuUQG%2BaBSqW9m%2BaT5FGRgmnqfDs4FrHnbD6RTm8Jc9ibFTyBzOhdfyDPBLJMGkCLgsi8hRAasqcBDIAnyq7jgL0gkyx7fG%2FiF%2BIVmg2TxFedpsodqdP1jq456QrKc37fp3ji7xBQ%2BcI9hR6elJ%2B33p%2FNNjjAJ3WUsxxuDQmkVrZxG6LMu9LDRhTkSZWBXK%2BWr7KrAAHKuBCOB6l6wUd56phSHU4bYQ8z8%2Fr31Fqc6DA9xhINsXcVFKB64Pxyj2J4ko1pNGBkjNMnu4Pl86WdpgR1aAlkMlk4fQFJIimniE3D8Ti9zN5jJBQULhcKc3ZxsKOSgJ0oLrOSroL6HgLro6KlINB0%2FUt%2F3MSIv3y53HtwU%2BFAtpx5fE9CyxohAMGsvDU7He2glfwP%2Bf6iYqGv%2FuOzpJCug8IzbAbrWI6wIdnqrmdsV9hbbVXU0my9lNUK3dkAcqBnRXGz7A6UNeCM7jPgmUbrHMwV1hhoanVabCfbOc317sQ7vyyykWt%2FuF%2BlHiERSERKLRRiKpq0zZP002ibbWNh69ECtCukOtMQ3EUUzaOn5ywZqyH1%2F3IAKjTOWRFMLOFqdQGOqUBVeNKze3onCBwiZPWD9XrotnKxYcG6YbpGPR4mWB0MvNedHtc3LAbo7oq1GfZL72304LMfNEDXzQqN%2FlRmIr22l4ik0KCylgRE0El1wPhhO34vxgL%2BQsrvNMgKrTB3jW%2FSTJsmGK8FQm%2BOgEPi2G9Z1gmbttjjkiYqMrt1T2FhF%2Fms5Mx3QzD0g0R%2BqItvEo6LRedbJTKHUtVf0tu8oqLcKGACldN&X-Amz-Signature=46948e51d6aa222f2bd4cb79f91191d8f290300471011cb6d4512adffd4ec7dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

