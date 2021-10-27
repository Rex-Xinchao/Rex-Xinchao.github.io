(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{394:function(s,t,n){"use strict";n.r(t);var a=n(42),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"环境搭建-ubuntu-环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建-ubuntu-环境"}},[s._v("#")]),s._v(" 环境搭建 （ubuntu 环境）")]),s._v(" "),n("ul",[n("li",[s._v("Nginx 安装")])]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找Nginx相关的安装包")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-cache")]),s._v(" search nginx\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装nginx")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行nginx")]),s._v("\nnginx\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看nginx端口")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -e "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制关闭nginx进程")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" 进程号\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新载入配置文件")]),s._v("\nnginx -s reload\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启 Nginx")]),s._v("\nnginx -s reopen\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止 Nginx")]),s._v("\nnginx -s stop\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭防火墙")]),s._v("\nufw disable\n")])])]),n("ul",[n("li",[s._v("Mysql 配置")])]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新服务器上的软件包索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载并安装mysql")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置mysql")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行安全脚本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mysql_secure_installation\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主要是sql的配置并设置root密码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置完密码还有一些安全设置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Remove anonymous users? n")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Disallow root login remotely? y")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Remove test database and access to it? y")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Reload privilege tables now? y")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证mysql")]),s._v("\nsystemctl status mysql.service\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录mysql")]),s._v("\nmysql -uroot -ppassword\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置远程连接")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/mysql/mysql.conf.d/mysqld.cnf 文件及下注释掉# bind-address = 127.0.0.1")]),s._v("\nmysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" GRANT ALL PRIVILEGES ON *.* TO "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED BY "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'您的数据库密码'")]),s._v(" WITH GRANT OPTION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flush privileges"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最后重启mysql")]),s._v("\nsystemctl restart mysql.service\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#备注：如果报错密码格式强度不对，删除密码验证插件")]),s._v("\nmysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" uninstall plugin validate_password"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#备注：如果远程连接不上sql，看一下服务器的安全组端口是否开放了3306")]),s._v("\n")])])]),n("ul",[n("li",[s._v("Node 安装")])]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# node-12.*.*的安装包")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sL https://deb.nodesource.com/setup_12.x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -E "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y nodejs\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清理环境-不需要的内容")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" autoremove\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检验")]),s._v("\nnode -v\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);