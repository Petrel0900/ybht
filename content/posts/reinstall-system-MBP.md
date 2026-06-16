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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFMZJCAO%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T032725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpEYDnRhzjamyGZA77XYC%2B9431AK8pyp6Cat2PlDhCQQIgeCFmkwb%2Fu492wVvyq77Kwx9CdrwzJXZbwnakxyF%2BFmcq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFaWFUdlcdqxBni7jSrcA2YxRIZg89KhoWB44cCmbnSOd8gkeIwBTjGS%2BVMot2xjHbk8ngVnrla5Aiswk4j%2Fyvo6I45rWG6C%2BAnQduWcDeUGXuGgQLaCSnBXdsvGBdddVUONnx6gecrli6EWPndRoeDQZvGjTIQk7JNjCWPY0FXl%2BqzDU20kP13r25uy8U0c0hWKgRj%2F5IcAgq3bq5Mx4nyoh0RCFgxES%2BxiQEXlATiGvS2%2F8xe4XrFdX97m1McHfTrtandJ%2FZBw9NDrvQW0fuUCa79J%2F1pZw%2FSX3seuPQV4Jg07NObodUk1cC%2FISESMQvnktbDoFIIM13HKkuV2vMvflrDj4rzkqZMAoNrRg3WpWQixIpoBYFJI5uG%2BcDHqgU96HzdF9zZr3lQaU0jbB9cZdq4N60y02T2poXWoV6X5FcBeG8uBMTsClIzaKwG%2F%2BrTtIGfi4z85xFMc3p31Xm5%2FbT%2BzsnJL1w248K%2FH1Hq6gvgCZVujcFAL7wv5LiwSKGJGXaPGbsxZ5wkceLvxC7iCvg0xFWurImQgQBJ%2FRe8mdosDDlRLDwdUJRvYHkEzG1BFrIFaLYftQaXkdPqkXOSTqwg7Pcmi%2BcObepGiWhUrafqQImJ54gX%2FB8hpqHa7sDnWE0HmvG6PuFSrMOXfwtEGOqUBIjT94kIOzhkRs6q159X1fzjjlUwe0yKwUlfxV28b3JIInt4kyFTg0PAzv1jfAu0KVSXRM3r%2FBGqLRIqLAfPUMqMx%2Bsc6kZXVhs2sMB7XySq7kpsROw58X9009ZkdoisTQI%2FRfJVk6rd8YYl7TRMGIEwa8jxC1Pn%2Bw3XKxobSTZidcj7OJhExPYnUSZx5kHbmNSa33zOCizvAHem3jP7a%2FrFCiMU9&X-Amz-Signature=267a3c8d544de9f6161d100e3d76b18588ce272c11bd60d2b91e2e07e07ea13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

