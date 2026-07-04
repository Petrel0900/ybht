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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F7L3VP2%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T021302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIC64TXrx0hzyuZELJMP9Tgi0ZfZUoihgev7zOTZ%2B0k18AiEA0wBFyofJxUXTzAIc0lZMwVzqf8yIn35IxZnPYh6Avxkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDHLmff%2BnI8c7liETRyrcA1uvt8z72bEG5FFlzQQIlxJ8dQD8RgRjpdI2ubP1BX9l9NSJGBA8bjMXs3XcZ%2BaX1e4rjd3ALJzk12n8%2BqoSK6o4DFLmYBXecUFmQGLGOkDA6LhBgGYstuQbqk1f8%2Fqc2LEzkrVOe9taerupzLvKOFdSWAC9pdvj5UPSUEX%2FyGHQnvPCU5akSazWN6WSP63tZtYWVafwRzHg8PQiq9KYF49%2FGHYzjXxWMWKrFiwcBZRBI3yjNWjaG4Ua3MMwK8Nmy1mqHyweavfF3E9IKAnye9EhasrZ%2BVWGT7y3Jy7GnZ9GVT5KExrOCcZ9AVIHSNMuHyu2MwlfACBMIodOwNXNdlbaR5hAdalYsH1TinEuyUM5Ahc0VuvsV1C1xrJr4Syvhrb%2Btgy453hKMJWWsRuz3oOf76MwCz0lG7%2FOh%2B2bcuevm2V256imoBJL2oDtn29AMJoLxJ5S0ZgKRPlQabZq%2FaumVs2fg3OK9lq%2BlTw2RLhn0YuJyoRnphCwBN%2BsO2XIfoL7QSUNA77Tab0Q5fVnIcBu491VwhXhkPS2oC8xWsHz9%2FMt%2Fs8cjhF%2FvY01ypDVTkbYXCdsA0W5vY8IG0NJtxFOzjwT3LuOLiG1DIYFMUl%2B2JMIMZDnLzls2W8kMPu4odIGOqUBfDL3OpmY%2BuuwKhrIuuxnSH%2Fl5r3DF12g2BUtC2sMpNkP95LPMexyNi3IlkXo606pYbT2ia%2Ff2YDFWX2mgQz%2FMV8CoNBzf%2FTink%2FqSRZkywi54iG5nI0Dabc%2BZgHDRhSBb4C2LznIo3MRYMY2xgDB4efudPRZrKnyMCdr3Jl8ZLBKUk1IU24lqKml%2F2jook%2FvCFZqNsJMXbILPtko5kbygG4J7JQv&X-Amz-Signature=18af2a1bf619f0392cd2ee7dc17aae3e1b38751cabc78a417a787d23fce0fc90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

