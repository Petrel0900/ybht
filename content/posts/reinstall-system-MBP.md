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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SQXMBPM%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T022839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGF%2FIZx4A%2BZwn3FZeCjMS%2BooV8mCPLMqckfOBkAjfrH2AiEAlAzjsUkamB41GwAN3QmSJBKrJk1BHf8mQCpaXdiskTwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJur4wgM9cyhGSn%2F9ircA0ZZbjoF0gpgWH8%2F%2BjVxXWZI2rLRTyHL%2FMYNNrynQcQs22%2BHGSPTon4oEQ6jHGWmIHGE8r6EE%2FkLaakiR61IszDjP7g7gcPZicfXU2W0s4ozl1Iqn44nXR9Elf9tEXGEDb%2Fuw6XTqA9XZHWhaUWEfHEYB2KSF74TovKOBBVr4khjzgFiBcPWsqcJnd1s60IvTyyacY9zVbEQbpcJKIih2lG%2BEACnrpMBaM6ZPf4xh36A5ew%2B%2Bhr%2BMJirVrUN7y62O4i2S%2FpWPdYOIV7gb9w5mlDAOQPX7fGEQQZ8Yot3CifJ62elEm1R2lXoLATYcpbNPB2ykkyBMLy7Nnqbm1%2FRlG9%2FxFHcEDTxvuTJ9AMpE%2BSeTp%2Bjo57USKQ0b0ufk9AO9oMhNBEaeL9a1mAMTeEvasz5j%2Fi0VVYNv1MAgQ32c%2BaCz4c5B%2F5Z95DiZC9fpbPsoKyZQlTBq6rsDNEp3IgvzrkKlH9fah1AqgLy7PQeQ1xsxcub1bq99nRFRbkMwI5RaEyiJdDz9gs7Bxykzx3798zlaQAXJvzv5UKUy6byjLmpFQuNH9FkMIJ9Kd4pEHh%2BJ5HYw%2Bu6YHpOpUOOjTEiUJxcnEVhbgsQIFUefWrSFOpY78VUZC672B5WyASNMJzcptIGOqUBKbSOAQjtHJvBD3VWTbyxndJRorSqJXBKtsTwl5iMo%2FSTPLRpAfBq9r1jScxQaxLdA5ZzRB%2F3pHAYRjTQIYDDI0Nac4ahOIRMHs1WI1%2FMjqa8vKGW9hfpivb1lYQVPtXaTxWVYjSYWOS48yKXvzMtxOWFdE%2BgHDyfLuyPl4%2BN7Ht6HT8K6%2F3OYVb5B%2B47Wg9qR9%2B7xjjLh0q%2FqI%2F1%2B%2FkuijgRUm2x&X-Amz-Signature=42d56b6669ef74d68d04e8c4e959454a3dc7d09669e0afcd0705596449c51f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

