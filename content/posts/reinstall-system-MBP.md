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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOTOFHAY%2F20260520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260520T024011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCtgxCwQvmF%2BiKjUKUoXcFEMe10K2sa99bVQo2xE5LyugIhAItO%2B9vxfSBIrSX7%2B0P5i%2B%2BoMUXn4dzbUEVzURQy0%2BrBKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnOJftAPELzaQZRicq3AMVI%2BH4PK8GqGPkU7Lyu2o3FmrcWGwTZ84so4tncXtiN70HvSa7H6V50BF2Tox%2FGk0Gip0b6ztQ0CFLVKWYEbBTQmzmonPeEzHNEFD7EOqgzdZMoQsPp%2B7P5gAjZNo%2Fz5t0E1h7Uv84AiAwylNXAjCPo2BIDfYh%2FklXmOf5x%2BMKtxsuVeWcb9N7nCZGbxasQ8%2B%2FmUlomP0VUR8LY%2FFhmOZaD%2BuU9o4qf3%2Fib3ZBRqKdjCkADb3YkwZT0qnq2mr5yUXIcIMHCBjORNraM166%2BqJXv11N6CMNfnkfNcnvnfAZgort1aJmVBosIK501%2FHXARSzLWH7%2FmtNjWOlk2g7xF2AG6UwB2SdMMnd8NmUhgZijWL8lyvwNFYmshoFAV9dOtLhZY95BYw81DaJ9gBYYF6Sp2WUytwMXmq75LHPdTLN%2BbFo4uqdfi8Ro9%2FPz3%2FsA0oNv6w1KX%2FO9BJ3oEMTDfDIj5k1Hik1Pjb0WsB%2F9fi%2BZg1ouz9tTPzhP%2FpYiU3bWAkmtYlR5LrjwTjNDJreyKLBxD8Sa39hZEN%2FQFO8kNnhUY%2F2N1rtfe0ED72bA0QpB0D%2B3rg99muDZT3Jkwr2XXRZv179g%2BkHBZfgXMrvyg%2BK3t2S7KRDViZJfIBL2TD5trTQBjqkAUTVRVObMijaGYgzp3%2BkRvWotMHZfcgVZwy5r%2FbKuvzxwAHStOhvmsGqUR3sC5bwnH53I27%2BL4IR9BBAEoRuJ1aKK4y%2FA8efAEdyhknBprGc25EAtC%2B6Juiy5Mecd2ZyD4rsqPbrMR3iHL22f97aHf8JX7U4KUugzD3FWlmugdU5y3rrgY7oIxHG15f9hI9YmzfJAIchDd5PQqOXdWiELBuqH4R7&X-Amz-Signature=dca78ecb9cb731216355f3967783ecd79f32aa53cfdbcfc61313e6091a5eeb05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

