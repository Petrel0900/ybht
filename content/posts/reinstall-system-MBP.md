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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJKGUHJ4%2F20261030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261030T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHoWRrydYRjy1qFLuJx%2BelVen93dQ0m1k1q5TTTmA9N3AiEA4WFux3YXuJAjjND4NUb%2Bev64kf9kvZ0NgcvgaMUK574q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJHU4KBbvTgRRKoi2yrcA3HkSa4iy%2FNJVoVpYI1n0BjIBugH9FWpd%2FdfsKu9ISC%2F70Ux7U%2BwB1TgIbTO1J%2FWip0sHH12r2o7xA0IF2a8M8rA8u87cFXYvXb5yvKRcPelC2SdtO9IKfQcxtweDgvmQ2pYdAnoYop0DezIfgbYy22JZsCDvKSzj%2FbwB%2FEUFVW%2FEToC%2B9Yoj%2BjMCNzqDwEN9qtUzKibpreZhcfzc634H6S4K3OV92d1B7%2B5Da6arp3UoTu8goV8g%2FNh4FPgL%2FYvmqq52xtGzXHUiHPkz6GeNNK4wZY2V6ceFs2fVCB8uHo%2BP4BEURPFHFYmJhT10MKW2guEWZjh%2FDV0nbhXx5MTIWSQ4f3aPoe310hzevAfAvIQM%2FvPH2K7umbh5Bf%2FJgN840PQSaJ9giwr%2FOss3xaSOsZ4YmtDB9thosFvFA1TILME1xjVmyKquVsWs%2BY7eiKNeODLUL22aOWUpkw7dRkGfcKw3f8u4wBthfA0EWP5jofFJezlUSz9cMMUeUsg0H5WOXHzdzBTDQ5Ad%2BqCb%2F8R197qIHLhdiPL%2B%2FKrp3H2q%2Bg7ANKOTx9p%2BuLCqkLyYcY%2BNg4Q4ANttU2gRLtRgZn6ejBZdKYASauUY8XJXQDs82EV%2FQ%2B1Sg1%2BNtAuMrYWMKPsj9cGOqUBHdukL7QVFItoncBQjekfMVWVFSWC03q3BsEAhi0Tqr%2BMyqkVcULAluzvleipLXOQBMa%2B6m%2B8szObR5VNKDXGx%2F0dtxuHxxJeBMaikWwqqc0fGrWBw8oKgomaOpwTP%2Fb7IREmXV8PxyBPc5t2Uu%2F5h2udmgUgjLpcTj2StMpqj3M%2BH6fdZz%2FLUnDnyAweP7%2FsI0aOrDR%2Bc50Pqpf6i0nGVGluOVZn&X-Amz-Signature=278cea8c65e7c96431bfb2be288cb5b6686270f01cd917231b0cd75aaeb731a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

