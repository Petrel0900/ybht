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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKP545DP%2F20260418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260418T015003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIF8S2ginr9TkrrfMQzPucf%2FlBq99wcAX36CkwblkrgEYAiBYMfQsC%2BGZnfOiJw13Bx39PiWx86ekc6O%2BKIlcP8qAFiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiRuXKaSp9wjd8lUbKtwDftc4DawXs5fJBOKtRmcOz7wowpW0tin5WUus0sSEyP%2Fd3iy9HzRA7GAud8bv%2Fal4dafV1yyqv%2FgeFcFRBZI90RzySF%2Fnh6LebTOWXsw1B4HmjZ9YcuijKv5MAn9LEoxBexgAFI0QMgLtEH7sBTYA%2FXFjZVZfMYQgJ%2FFr%2BPZ54DMChKck3j1FJAPytIe8nNMwY2TvRiiwszRvEiYSf%2BYP5ROqQ9bEvYiGHGPE%2Fob9eAkK%2Fav6w72yxKWr5%2FzJKq1knBfwwf21%2FkYDm2aeW9S0RrW7e7JsTEzpHi7H5skRRNlWfll%2BKnK8uYpDJlRCt9SIPOu3w%2BDrft8%2FVpiUmtqr7ZzqFW0K5jqLkJh8%2FAs42Xko%2FLFI%2Bi1OFanUkohkJj4dev3W5ryQ5TwUgANhwbF3Bb%2FyDO5853lYNsjUEKGEMb5xJRIsLs2H3LpKRYkf7zq5cef8awOyu4yqM4qDQBngtOrSovItJiP1tZyI5Wjx89pRqIUUIPaNJl8sWnK%2BUVvODdHSYxED93uFMZsPJNovbxzEiub47sdS1e5OyGYdQoicLbcIjf1bP7Ws6sEpbtZyKKTkpSN0VapAs4genHAFsYwYrAsd5V3cW%2FvTXp3LxYiSHva%2BO7ecIEX71WAws6yLzwY6pgGqlaNNcrjlLGTX%2B%2BAVABj7qHJIU7loPFQ77uL7JVLzt5O1CxDhmne9ffG4wQ3jUwS8R7LNWa4BRODgJSQd%2FiRAYHIU%2Bj8B1Hwrqoe0BQTiEI5HkIJrPmdWaTbKQs2fuqkbAUeW5Hdnvpq9ZAE26kjGvvQeNTovpvN5eTl0v4HQk3O88Xi7mfMIHfdYvDJT5s%2B3dD%2FKuhB%2Bibro9MpKb%2B20KL1Z9GtD&X-Amz-Signature=ddf5ec022f69a947fbf44ca4cd034dbfac7f4ca5eebb9dab8901bedd38091824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

