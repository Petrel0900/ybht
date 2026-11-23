+++
title = "15年老MacBook Pro曲折重装系统记"
date = "2025-05-17"
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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMEGVMNR%2F20261123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261123T050652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6Wf0e0Mdr0IfA8pC0qEl3TgYBCR4SxzzD1Eq3JU73cgIgAmZuAYTfXeAS6WqAKCZJH0hsomLkvecKtlgAX6KC77sq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDNxTnOeTHFYouNGvwyrcAy7DvsvjP6Y5%2Fp9iCxei%2BmJFafPZ1kjedeTt3IEDlynAwzzFCIdaAxd4oTkIKbEnkuKYAjBd%2BS4sbxnJ8LIYdRSQrB7GYrY01a6sn589%2BrXy2tsBSpsBPbThWqInkfa8%2Bn5%2BWDtQyQSu3H9h95Hc4HW4cpQdSkMvZ1vkVZ%2BXBjBJ%2BPbx5wLb7MUYQM1zdFVRl%2B%2F4PFU468GLhsRLtlFmG25njQfjWEpxeJq%2BSuUbK9ToJqmilqmYwC%2FR9tP6m7zDIFw8G6OkVKbEMj2mSgV3c%2FIr%2BPXvDgUHMANWGNYJvpOG6p199knzHMr6MPw6J9wb31zJqr7ls5phCdURqC8PWEEs6JvZPzEbk%2BAC%2BUYRGnzoCQirvh%2B50%2FRbquC1TiZELh00p84%2B6WJS4VzrkB59y0AkEtBtGIXAcadW%2BJ5FGsMoRbyiZ8PqMVgYk15lds%2F8kxo1NSgFUVxd1V036PveWEnEmxQ9wt4NGhe%2F7SoJPkIVmNGeLqR%2BoIxmC4mGzOk0NvYLHZnxtj0r35hmmH9LUGiShxG6ybM%2Fv%2BdZ%2Ft5MWD2H%2FwIbe9uWZU8FoF9%2FYGJkWJsLfH6vMQO0Dj4XSp47iozVzq0FbP3JSG4x26OrEAORcmYMWk9t8t%2Fo9OLaMPS2jtgGOqUBYoKs1678uGcfkJgepqEo%2FOD356i%2Fz6JbzP6W%2FdETkT9xgsiGoP8B1lkuHYgjw6vQLMWyOucFW673PTm6%2Fg9rwDD8O2l%2F%2BKE0EOILBYKAo3fXjsCAyLhTMs2GolulKuAY8PUpCukYfma%2BSFcOVSXgONJgA5q%2B95ptZKy5MEHX53U5%2F5PLMBaEq0JIhYDTKFda4rg4ft%2Bhm9QAzfc3UucIJHuzKBRk&X-Amz-Signature=9e47ac6408c8a59b3f9c64de01d8c9ac509d7683fca10cc6484d432f7d9879a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

