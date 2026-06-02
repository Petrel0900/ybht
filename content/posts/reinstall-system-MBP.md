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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCWMSW73%2F20260602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260602T025419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCDsnyYBU6Nc9CLZ6TZYwEGEisyQgsrNpIqOWHutBY6MQIgV4m%2Bfg0t%2FwkenTmkSyNithqGT8%2FYY9KhLS4UY3gYTtUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDI20CMhEae46D3wvEyrcA1qZmn9vNDPxqfr3Dr4fRhyz48DSsBCL8ExgVNpIWb2qQNiOHFVd2WtwThmL7MT0czlhBgZfM83qwYgaU3NZHAm03s8b3QkXlRuFsw7tTxN7n2AUdO3yyeUh3btLoBgGgTL3vNxVdSngc1G7dTjei9Cy5N1mqr8eQ65pq930oLZBf0vfkR5ZDlJ4CYGfYDU2hypw2AHNXsloWCQ%2F%2F7K6M1e5msIJvSCWJVHz3GAZbiIeHNWCc7ZIw2oC11Bk41pJthG3dNOZhG9aXrR%2Ff6B2sbSCnvb5f0AAuHH7ep5fZCmWfHLpfnD2hLRFOn3m5axmxq3Uu6TY2RjJziYFhfEB3rws6%2BRviMMv6tuZJs0HE7m01Gjut%2Bgrj%2FzwE7Cnt7RFbQ8Fi4PWOUf3JLY1Moxt9R0dmkMywoAoPc4sdzukdT8ZRywzSwWbBavho%2BH9mqqdV%2F%2FqyY8Nhwn7ST8o2nxYJDB6R8ADSrMf2iz5g5yHh2HeCZft68zy7OmcPFx%2FKhtI9V08U8qNHxCXuX6MrvOPr8AFjAwA7JSckdraZwdVFl8hkjwaN3ZqQM%2BhXsnGB1BXL3vwb%2FGm3fduSIdf99skjbXWap2CYLSfA9LzAyE1k1LYAglmFY0BX%2Bx4Ur5GMPKG%2BNAGOqUBpzKZSq5IiSde9mrlQEVfuPHPa4sFkye5vNQkoFkTqV1EgpsuI4lYwgCA14X82oBVpHpybW6nsUWV2xER%2BuF52gLJEM8h7i%2BLk0FdTkhdQ%2F5NMUIKlhQkT86pBkmFQYyXHEXNSwGMaVjar%2FvpxwoFpcRQDNnVv%2FZSafgMRSBxINRxVKVAAjnj2AjdGgBLUhUvxXCMaaut9WXIUUfe%2FTfWRLlYMzUM&X-Amz-Signature=13c1ecfe8d442b066916baac5c965a8db4c76497afd4679b4c18b1561f959b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

