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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQKD7FY%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T020651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD4kDhJty6dM2QRcdAj06CrZ6JW5wC7SKkBcePXB%2B8ICgIgD%2B3meFFLBZMqC63oHoXX%2BGXSKJK4yHKdnDW11xut7fgqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSwdmxzPpVqswe90SrcA1FsZuHh46S%2FRwwdzVFjqZShcYLcVd1v%2BIxGugoRHyu73TyZvMtON5EnDMGpmEs9Cwrf1eskeI210oRa%2F5zb6zQEDAmtzBkQXV5S%2BOE8uOPtxG3NeXyq3mg%2BBsR6cEjaJwkZ2QG1E1uJQZcIGoSqY3GcwE5jQMBGU6C32fU%2B5uO6mTDPo9iS0g16EfucafZTXTLXA0PPtPRfSAd2QJy%2FpGFbS2DQWOaKkkO5%2F2RkYjDCwEmHej%2BQY7M6yzB%2BsGSukRl61lHFyf%2F2SquF5hdyI7%2BcvFsWIzyMuETAEP7xssbUFQqZQci%2F9k3fA%2BtrE2WxB8RkAlKiYZsMr4nX%2Fo4fdDI2W5ShHDDf%2BOrXh5we%2BH6C9%2FMlYs1IBgfy1pnb9rTDgPT4s2PLb%2F3piCFuJUdZ2UeZqcCmjo2WMGASxWcsbIWyXsC1WJkN0XHyTfuytRoUVtf6Ej0z1hqi%2FPIBRUemG595rkG1B1C20uA%2B%2F4p3EWeiB%2BEdZW9LrgrAXnaEGm7RrG0YlZprhkADjXf95E6RyB8GO1fInJcWe1SA5I2DQQ%2Fn41WNSYcSfx6KWPBpJ14NyiaqTvCOlISO%2FxSEEsdHPYCizAvtJVsknOQpSpS%2B4AuyLZ%2BuZEMCTZjx7gkeMKbhhdMGOqUBXBP86Tv%2BlaUlfs70VMFR13jxlVKvSpxBdHq6cg5Gkv8mrwvQHmdNtSexRySaTxt8Vxv8fT%2FbY4Mz4r6vuHyo8%2BxRD92KcNdjQe7RRPbStqsE2IAgV0%2B0OY36Y3k9HxVPO6EsHIp6n4NxiYwIt0nAMsE5jEWh7amZbp7Mcqe3PGRGH9cRO2yaz3uLRy7XN9KsXQeIfZIqor4x2Lqx6BUcTy5VELhP&X-Amz-Signature=d5096aaddee74ba97a44e038f5b2a0481dc63b10db85accad5857f3826097b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

