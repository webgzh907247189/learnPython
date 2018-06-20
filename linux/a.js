删除：
rm a.txt  删除普通文件a.txt
rm -r a/  删除目录a
rm -rf  a/  强制删除目录a
-f  表示强制



创建： 
编辑完成后按ESC，然后输入:q就是退出;还有:wq是保存后退出，加感叹号是表示强制

换行:
ESC + i + enter

已经创建的文件插入新行： i

文件 vi a.js
退出 esc -> : -> wq -> enter (按键)


查看 cat a.js

df -h 查看磁盘使用情况




docker：
	docker info    查看docker信息
	docker images  查看本地的源
	docker ps      查看当前运行的docker进程