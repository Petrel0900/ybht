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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645QIARCZ%2F20260916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260916T024639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCdql8VLLkwFd%2Bg7HiSsnv806jmN%2FR%2F9EMihVsXHqR%2FbwIhAOHke4FFk66iDp0%2FU8UOzUwKreEDbEXlsK5xzZgm4ef6Kv8DCAoQABoMNjM3NDIzMTgzODA1IgxLvG%2BhCu2%2Fd%2FsDnTsq3AONKcp%2B3r3xUxSOqhPZWZc0mYAw3XbtPLVG49TX9X%2FCMBWu2l1UJjapOYEZBlowIy2bcI6YBJ%2Fq%2FSzR67SdDq1Az9fTUhPN7CTsItZ3gTuKGGJSM%2BPb1NrmFCRFQkva9iGej1QOUdBiCrwYxCVfMFGQnBoYt3lCDxVsXOGgGri%2B7FvkBWA9TiLjhTdyHGIKzNvLtAPPYigqFhC6UVbzPl956L8fDPuVZI4%2B4bfVrsxjXeT9%2BVj6leH9o%2FhZPZXL8oWrlsp6lPM%2B25voPcB5v1hC%2BWhGiJL5lKLKVazU6hfwCJ97US6znvOsDD60RQS5SHw9HcyB7zZSPL0SSGsT3cwNCRpUvB%2Bh7AtwqepegidAU%2FGGEFeTNj9RK170NFb9BhQ%2BQC%2BZjlg2HE1F3yVaSU9UGiIcEg1W1zcHpY4URdUQrHZz26BNGiHrsu4QdwKNSETREV19JkhEsC5UO4NA5NUfJPOlczoCXa2Kkz8A2q1lEZyMXY1qHUdczszvCgjnM0QBsOmCnUZ2jYrzki9xQMgbnKq%2FNgos2s%2BEQSjp23a0DhMK3iBaE7F0mFhH3rKNnf5m%2FioHN0CRsyiqJo97n1tWvGJQVa4ya8S05iYNpl4D1T%2FqVpL6kq1CH9xWaDCuy6fVBjqkAUHK3LwsiWU5X%2Bd%2BwYgjwc8oPMSd2TPl0knBzNM9x86Rt3vWh9RjByemZ6aonUsNl2vLQLF8U7kpjzssVxeY%2BuxHWfYAHxlmcNuz4SQ1ZEXtOdctQJWUI8fypVWL3uzvYZLYVw8Kr1F3Y6bUXcyiKc4HHiE16m%2F7zZcxXIlve8LQ9JgNV2x%2FowK2%2Fdbo2V%2F3J1j7CHZSBYRBktsttEB5T46f4IrI&X-Amz-Signature=5d857e418df71dd34ff4b1f961105b9d568d3dea50bbeb2fd44448b26a4d1a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

