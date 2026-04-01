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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654G5FELI%2F20260401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260401T015847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKWTRzbSwHYWwR4grgeN9UMTRZngie4CF1eaBChTE8JAiBiyRQ%2F3BFwHNR4NvuTRnN%2Fz4cn44EWQBkHo%2BOw8H4zHir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMMkirgBZf4VNtHQKEKtwDDr6YLx8YPl9Mba8ZxLKFTFY88Qp1blVLYp%2B6phEGQShABKZ126FUQ06dxNFcA%2BWXm6jBdByG7IY6beqm69xwEMR9BcCatxR41ZH9kbJa4Ob%2FEjLGP4NJ9aE8XQKkWVwVVQLcYjZrZhWgEqz15EclKnKuGVWWeIP5ZQSpt9IGs3HNGFaS3ABJmiEwUjTM9fgEUvSBMvmzKLyzCTkgmoFGPB0fSm9dI8u0SpfmLazRITyXiYh4I0lwti97a96E97XqfMGEbPOJvGeWlnckl31p%2Bdy9wiw5OROtc0%2B3ny198aNbDfMPiKSTThsF%2BT2BavL7xwbokfUOX0SoyAk6o%2FFVUyfgS6KATXmZSgNs7WIWKQuyQ5MCtjbt5824R6%2Bi4BOoF5w%2FJuqPlEaJr50PguirFY1kRxZ7tL%2FUmeZbyK%2FTrOA5Eh07lKbfYkpDhJeT7bLZEUH9MurLwhM%2F5DjyduuTTm18hcwVsqisfuODaPtqwjyPc%2B9Od31QpktroMJ8kHakvh4H%2F8TE8cOvZ30BbS7UPzAhK1jtgsPB2Z8UwO4qO5mANFTVCwa0ErgISmv%2BqdlQHCH8aJB71LvdN4r96OZoPlG2Kc7h0P%2F8lcg9xFkGrdJdU9UI%2FEdEGsOdbGQw1t%2BxzgY6pgFpsLvmgKgVI9swf27XCn%2BmQKBG73kSJ6GEMnelGFDYUfpLkORiwSufVz3R3Dewoymq2edXlXned1bOJLW9YQKP6AgGPW8xsJQjIhavbBEHtxpYsYiZUOjH4UmeIAOl6DD4GTV1dr%2Bi%2FEj%2B82B7b0CzPqRE3W9xGslCQVA8XiFdaiA6dgtuDfSmO1DKVDEvMY68nY%2FNsCuWzqOZGMe7va7F37dOlMlD&X-Amz-Signature=a8dd9feafa2dcddc178ac674b68f32da5407d521c79707c544ea65884cb8630f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

