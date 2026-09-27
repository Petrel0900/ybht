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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UIQO2FA%2F20260927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260927T030026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGK4HSwARJebEXgfcm9i6jtnum2nLVhqDHRkaChzMWoIAiB6WEH6k%2BgXDicJFoB1em0%2FT61%2F2DDS5usq42%2BXsxdK7ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM%2BneccwIdQRlBkvpjKtwDFP29%2FHjp0N3a6RM5EdOXEVGHG5DvFfQRvkFxxwD5qn7zB2w%2FQ3PYR327zTv61M6br08b8vL0MsKwEmoNwiyEl7lQOH1kSB%2BlaKe0l6rEQaO%2BG2kH4lniuLZfrJnHapWq3N1DRA9w395CFYdDvl0Uj6gYvAjtnkYscDiQJwmrz4MFVPTIJWRpvDadhJ8ftm9wNX37ErQhTtvEJtXC25VDChYX0G7ziZXtl4fELtbrYmbyERJdOZcPbLmvEPQ9VAgrWzfag262zgVj5ZDEA1PqUYlBO0lBfv3UnNe7vlaZDzfO3K3QDzlX%2FZJPny8IWMIbGPWKd6cnSjNlEzTTH0YxvnZ%2F7TqQvLHS6whV0MNgGR3rsONJpegngBG%2FAmumzfPvom4f%2FriSW6M6mtU53TpzL%2FMKv7kwDQDiXCHnw2pZ6XdohcOjSogBYPqH%2F5DRUqkCQrROFqGt8k5DoWp7rjrakOI0eo04N5mj5ZulUEYbCo0bDhXcIEmADqNOsVr995zV8dvfWMlIWNvLP%2B1K0jIwoc5rFJ%2FGta2H4IGenQYfMCb9VGAtBhLs8QZId9fyTi0wgNGaMk5GAGUqyMbTF9gPgkWnwGBf45gwXZzn9Y3Y7X9YzyofY06s4NE1N1Mwpqbh1QY6pgFTV5j5HSnmxoaMZvL93mRXRShFVRxgtWoyFSYhKkF9Cyflfxm%2B%2Bz%2BDj78DavUx8GlMT9XrDLyGpWIW9o5M%2B76vVFN9w476N6gKLUX663blWxanGX%2FqJQtm83KRYxe%2BrPOTGxh7CCKjrZ0LKpy%2FLh%2FcMQB77AegY%2BjTteZxLc%2F55d5DlqFM5iEhMoMFOv7Ndq8Ddg27tRuDUG9yHidEndZl9TldOg8h&X-Amz-Signature=dcfd78f70a4eb2398117a0115a4571027efbb4c4839a6a348e69967afe8b134d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

