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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLK6CLMN%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T014948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH36YVYFExwLJTwRes5hVoApnwRZ%2Frli0ma6pk9kEzWvAiEA0GFXOqIIKTpJ5s1ruIp%2BVcBJIceG37tWl%2Fbb%2B7sPhnMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMDDARq0bQYL3V3aSrcA3q8oC%2F%2FUkpTFbOZXcgZq8wRrBH3QL88qgtzv%2FTs7%2FJ%2FqHKDIxx21tMIs8DS1i2HHWiuJcJPNI1HmqwaW7KVFW44lKwq4kFUIjPSo0Wi9UnyZWpEwmo6MMVygcMC%2B0wbz4VVf%2Ft%2F5ZV9IyjoEOAwH9uuhjl3GYWC%2Fv8jQdlOocn5z7gXHKRUt92%2BMFbi%2Fbe6JVWRvfraJfdWjPe8A1dHih8V9gToTRoueSsaY1lYvc0BdT1uRmaP9c5LV%2BsL8cHDDy2ocagzGej9WPO98kFaB6o%2FJcaHhswSgy7Gny0cJ%2FlzH4S174V1XJHHZw7AWEBZlCa1igIQNVmmYRaGQpQ2CEYSufIf12Ayp%2FIvaUe5jjAoeOWS%2BfSwF8JdvevoXQbBkxagtFfaVk2muYgI6eGsTsGjLn5A5ci1wTg6b1Tid1Erk21SKJKgenQl0U58%2Bcspjboa%2BYZ4cxVF3sRZ9QBd9wenCNhoHsXCA%2BFwy9GtqxT%2BksD61OPjDoIqEvGPJo%2F4NFDAFP8dNe33H5YRPiZVrgPKTDtf2%2B8QA4JVDv5KeLbXVEbiLtnmPy5JXaDPktJnIDFMyF7zkt4VgubtaZIU2SEU7pHVqFbSl3W1YC1qq72nli0fLHYOGDlkkSPFMJaR2M0GOqUBNBid3%2F%2FZrQejmIMI9RG5DqOKM88hFNEwAEIOZd%2F%2FLWpj81DkUuYsAx%2F4IAkAjQ0E3XVOnBJ3WpPC2HRw%2BMN%2BrqT1OFg1f4fZ1r2GQVNCdgPU07NLejFIBKG%2FwKgpPr%2FCVNMCPpPpQy8%2BouZBClyH8B5y7rU1ImZcZ%2B6RiCSx5%2BUmXXGB6cnG%2BXaQwZmGzgLGnprCRX12MSKyiycwJupn4UnzO9wt&X-Amz-Signature=8acf335b2c7958d418e3ac0ee3d4099c484a2529027934f3cbcbe9154a13d453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

