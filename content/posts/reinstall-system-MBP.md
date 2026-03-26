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


![IMG_0673.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/eff1a0de-3c22-4ee9-a177-21771cde6a4d/7b9293b6-dfec-4966-bf43-20b9bb51ce1f/IMG_0673.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5CUQXT%2F20260326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260326T014919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgBmxuPO6qUIPfi5vNPLLKei2roLIJnrB%2BIl0T8O1JOAiBNoaBzre7YcYsIXAClFoI3bKCdweQ%2B%2BkSdYAVGyr%2BPByqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrbWaMxyWJY5brVSNKtwDn1quTYfhggFT5QXj%2BQsYxldbkoFnFKhQSqg9E3eWsGg2VcLMIu9mROCmAGSH0TdIdwe2zwMxwIr6gEiRFs4dLArNKjEFJk1JNSlDwDfhVclgCr8gymiqkvSk4MIRstC50BtL89sDcXlvKf%2FgHAOV9Sb1leO8L1bcqRLCePRsJA%2BZUlFD5nZt%2Bxl4MmqTmPcYPzrUEzwR6v81ZAmFnsC7K9wrLAYst95IFJwATjtmOVKQGxcopb0dcOWxNcaSQv8mbxArWSYaVwBZnFugW35LCXqlOEjqptp%2BJKP0ox9aFLLL5t74mT36t35p7JLttI%2FILy6AC7CQ%2FAoR6D9AICR6kO8JUa0JYSbQAyJg0kpEdfptMTqi1I7aw5%2FhQGNU%2F0gWnZNekDLhqR3KBUKnwr6pplYCGMofzAddGSQJf3Ygju2ECVhiyetO%2BEGPdekDcTKqOgAzK2sfGxxLyVjYA87BVB0syH6g15vjrJaDSG4Uri43Vui%2Fk0h37pkrsZn%2FN6ADCcncbRWTWlUp5UbEznATbTkl9UqWgibQv54KH2fZ7iKUp94UBHnus%2Fj8iFGzjLSX4Pd0ndwkCrT5SBTPwRecquMYINsjXcwfe1XwuxEjgj4palPdTCfJcHf5rS0wzcuRzgY6pgHFwCEZ%2FOYyy%2BmR0o8gcILeK5sJjbPoeO%2FT%2BKXH65dmdVFZPz6jfitcLlgrFQ92SY8XL7gHjtOqOWlsYi2blHlmGkk0zpF3nKOS7h9%2FloTeHUNIxNZBF5yzxQqSFuaak5WsyYGgmJMv4fW2xaAWVQ9Lrsm9k%2F%2Bp7Dzgn3QEgk8lIuDvV6wFdTA1DQyRP1oD%2FvRP5rAvHFZ70fRSrmOC1oybYdG7kdHl&X-Amz-Signature=04a7b542d92fa3a309864d6842c2091d20a78e9ac7203608155602e2a1138775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

