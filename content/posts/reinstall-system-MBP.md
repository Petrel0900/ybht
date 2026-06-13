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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MLRHMD6%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T024546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBPgage1rBp7m0liLyQaFMnHHVaVsKRdtgF%2BbykHC7KiAiBrG4JWRSmvWRTZIxjuu0IrmLRFNf8eo30W%2BKbSSMe8Oyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMq7xkmoktL3Y4EYd3KtwDzXzDZzBVUXWAekIXk94TD18sYPby%2B4CutnCDhZTtDqSf71T6qCXbBX7qlecbb4joYcYYKP01WhhSe72vfr8NOgxTIJ0WyMzihKDveyFr10K3UcgUYw4oYsr8SnI3dEFepTAXbNpdOAkiMVWd6x2u%2BEwDiwjFODQ06xLxLR88lbrFMjxw82bDR1S2L9zfwHxwtJnJn6Vx2iADpBUflAF0TJ9nb75mIY%2F2xGy5LHR181oqKGnEJ4EImEHmBtlzSIj9c%2B753mV6guUYDv318odYszqOYIilWFgLNpRKZdqEzqwrBoXxBbdNaJZ6KkyYGb2qQhBD%2Ba57sbkAmT6Jbsj%2FQLtJu2RD8%2F%2FVUCkUlYfzXzxu%2FbHLSSHWpklDllhwjypxADTvAUfEviYqq7pPz3yGmTWAp69Qvos%2FA8LYtL8tQIOC5k7HJZk6rgCO1sK1V0FLha5SMg9mgYhmvai%2B3ykX5XNMLMWNaK93KbHsWUiFH7%2BYB2AsHc6kHsgmaAY6pVuzU9woyEURRQnrhhgmsgmzinRiAsQJAhBz6wjotyAAKVdVXAhC4nNZy3FHB%2Bk2ReeHd8ZcXwtpqm9naQM6od7e%2BHhRDjhPsSbchnoLo56Rm%2Bc%2FvtDZos9cHY9s9wwwiPuy0QY6pgGuFHC77ePUwiDg%2BQdJfMSFfLjak481MIWRXn78hy%2BrlnBiSMLVRjgPFn8ZxFqIQUsC5fW%2FDI89j477D%2BF%2FcrcPbkJDbbspHaSTGpa7LBLBD1hU8nuGj9rl3B%2FqHwFKe7EXaewdW3gR1wBJfcPBTQx%2BrWLoIux2WDBxx9H0GkXAwJSZf5fdvUDzVGohUFjuSo2XPV%2B7UgFXoxAtmrE1veNnaToGWwQI&X-Amz-Signature=a19f63607d6b130b9972cdc11ccfd5f7235b15219b80acd7e59fe314db737473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

