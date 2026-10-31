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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ6NPECN%2F20261031%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261031T033732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD8K8QmuZNylov%2FUZ5jRAlatc6wYGySoGXXfuJKsBLp2AIhANghmyewcBXtztq3HIf99x9aL6kbmn2%2FhMMyIUZKAtJSKv8DCEQQABoMNjM3NDIzMTgzODA1IgzxDtAGhjmKGSwJmEoq3ANfSgwyVXggpOu1CqY7PxmMXR6q%2B5n8mh699l27rLavdQghvwPxFwdSkc1jejbOGyLPrU5BGnZZJrzMze3r041xBqpCNpHXltNFhnXXsDOzFy1B4L2uSJASdHqtSavrJ%2FBOuPzJ8ZNbQRCYbOapWBBCFG0oUF1Dsr%2B1YiYP20%2Br7EJpRME4SSfT%2F2Q0ezSn9X2ylEYrHKxbxmRlUCypY6ywg51e52cDFgDybUouiusD12EjeJ%2BVOo5cSv16%2FAZJl4q6VWrZbXhKC41S2we2aS0X71LEkGk6Hsm3V2pSPGlEPAU6Ng49NfbXN7TX8iFgrtQ33Gc0TuZ%2Be28fxyeOzJ25PJKC7cT7s%2FZTwo3Fnpe4aFLVd%2BLOe9gfryUFhvM%2BqrPO0iIimLUQ5YvxpH%2Bjt02qF%2B5G5nfLxJjERE7B0D8gv5xi%2BsHvGA5KZ%2F4TPewnKV1rt%2FSSlE2LZE%2Fzc4DiaNGFJ2m49vq7MPUChoTXRso0d47N81BM4%2BfpCSz%2FnEajTV8y0YYY48J8kIbu%2BD9NxcBsOrke23OqR0SL%2FrCU622xPdWgNwikD6YBdPzGN06crCODeTlk19M52Dq4wC5X8pxdz5lxObNyJzf01PXgiyC7VVjR5wS2EbipZGtTjDCLr5XXBjqkAVNDUfKtZqJNj39t2iZCHtGTb1PH27%2FxIBBp8yObhouvfr79I7lUYOJccprBn%2BrOTEEiLOhVDjqy2TtZ%2FCBXRg4d%2FpbqulfsNXpj5050hLGOuk32%2FyVTNcqHTVs5erkdi4seXkmh5Rx8n2ESGzixwUxi7DXfHkdr2UX6%2FlSJjoC6OuElaD8%2B%2FWtGBBZoVHBOTAz4ghBclIWp9z5SuCmff6H%2BwHqt&X-Amz-Signature=177ad2c07b449bdfc3f9b73a934cc3f3e673b301a8bfe8dca9455cd062b00fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

