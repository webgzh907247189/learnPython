删除：
rm a.txt  删除普通文件a.txt
rm -r a/  删除目录a
rm -rf  a/  强制删除目录a
-f  表示强制
find -name xxx 查找文件夹



创建： 
编辑完成后按ESC，然后输入:q就是退出;还有:wq是保存后退出，加感叹号是表示强制


换行:
ESC + i + enter


已经创建的文件插入新行： i

https://www.cnblogs.com/cbreeze/p/6080872.html
文件 vi a.js
退出 esc -> : -> wq -> enter (按键) 保存文件，退出vi命令
退出 esc -> : -> wq! -> enter (按键) 强制保存文件，退出vi命令
:q!  不保存文件，强制退出vi命令
:w   保存文件，不退出vi命令




查看 cat a.js | grep '关键字查找'
修改服务器的端口
sudo vim /etc/ssh/sshd_config
AllowUsers xxx yyy (多个用户用空格分开)


修改完配置之后 
重启ssh服务 
sudo service ssh restart



df -h 查看磁盘使用情况
cd ~/xxx 进入目录


创建的新用户配置权限
	adduser xxx  创建新用户
	gpasswd -a xxx sudo 配置权限



docker：
	docker info    查看docker信息
	docker images  查看本地的源
	docker ps      查看当前运行的docker进程



sudo apt-get install vim openssl build-essential libssl-dev wget curl git  安装更新
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash  安装nvm

nvm alias default v8.11.3  默认让系统版本为8.11.3

npm --registry=https://registry.npm.taobao.org install -g npm 切换install源

echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p



/**
 * https://www.mmxiaowu.com/article/5848246fd4352863efb5546f  
 * PM2 的使用
 */
pm2 start xxx         pm2启动服务
pm2 start xxx --watch pm2启动服务，自动监听变化
pm2 start app.js --name my-api   #my-api为PM2进程名称
pm2 start app.js -i 0                #根据CPU核数启动进程个数


pm2 list        pm2启动的项目列表
pm2 show xxx    或者 # pm2 info xxx    查看进程详细信息


pm2 restart all                     #重启PM2列表中所有的进程
pm2 restart xxx                       #重启PM2列表中进程为0的进程


PM2 reload xxx
pm2 reload all    #重载PM2列表中所有的进程


pm2 stop xxx  关闭这个xxx
pm2 stop all  关闭所有的项目


pm2 logs  pm2的日志
pm2 flush                           #清空所有日志文件
pm2 reloadLogs                      #重新加载所有日志


npm install pm2@lastest -g          #安装最新的PM2版本
pm2 updatePM2                       #升级pm2



ctrl+D 退出puty
cat /proc/cpuinfo |grep "processor"|sort -u|wc -l   查看服务器的核数


mondodb

sudo service mongod stop  关闭mongo
sudo service mongod start  启动mongo
sudo service mongod restart 重启mongo