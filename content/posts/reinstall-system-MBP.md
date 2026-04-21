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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUD726C5%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T015941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDtuDo%2BO1ZLzxAmAIYyqHmi90XtCQszYC1WZVA5S%2FAZfAIgFpk23O3YIosdaYycFn9ozWIypqUefS8KIQvjiGTpa%2Bwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDI3cPFwXYK37jSfZ%2ByrcA6wK8715kFtIpo%2Fqy5arA580aPje8lKrYuAwoXSmdsOau2LT8u42yOrCQDpmlNwxfTzOeWPfm1qQApu8sr4nC4OGBkkfwrdFydGcakAaYGnmoSXKj5YV8IpI1sfFGvfo5MhhtI8Yh64dnqGBMJ6cR0L5LyzoK5qB%2B022TF9hyWfFfOKD1VDFj5JzvahC3OzohcsRgg2MWlaTciHCBC1wIicZ68408l4XlsSsll%2B4zx8L7BU5IchR2vqvLEFNdXN2OEY5sewkpM%2BSSW8%2FnkjBdSLpPlZSLhmCXQzZxtPHeDpuZy8GIBViHKDr53VWcSCZhrCa%2FMEIrHpLgSMz%2BL63t9qVBUV4a17frSM0i7C0nYvHwCbRUqILmsUVSEqCEk%2B85YtwijgKZWEyjDW59NTMSBUHpNHdK0tcOVVoue6a8DYGqyzVNLsWna%2BsHakVQ4wtgld%2BEA5IH4XAIkESKhOzBqMy2eROLim0hiU%2FQh8R%2F%2FGlJtgOSiWldBWquqYeqKn1YD4AY7v2nRH5nZRH2qhR4DPAqL99PQqpYVE2i9v2f8%2FQ2U1t4MxarWGTfGb78q6%2FoI89d5iGY5J6PuqhbEd6XMd9RUW4nlM8xYLA4ES3Iy4Wg8t4%2FXU6HtYYBv6VMP6pm88GOqUBernvKHz1F1JE7phdBqVm75aa9C9dC8wfx%2F62FUTn%2B050IFmSzPXz%2Fp2E%2FQqkk8lbOL0MQ7lYbBRYvDFMB36Hs6MX90EmRW91mC4F%2Fun7Jp7ZG7NF7UWScUz54UsGb2UQFoyTYyzzvBDBFwT2AUW08m2JskTbyrgLlZzj5E7%2FRl7bJALnPEriLddDppA7Rs2A%2F1ikrQ7OkRsc1v6WGmKZb9XX2cVv&X-Amz-Signature=c37e7af08783c2e373358c410175d446aebe224b6fb93d0367b542dad3444ae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

