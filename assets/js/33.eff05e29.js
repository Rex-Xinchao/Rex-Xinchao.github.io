(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{396:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"docker-发布-node-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-发布-node-服务"}},[s._v("#")]),s._v(" docker 发布 node 服务")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("准备文件\nDockerfile 文件 && 程序代码")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("dockerfile 中复制文件并不会复制文件夹"),a("br"),s._v("\n正确做法如下："),a("br"),s._v("\nCOPY model ./model(复制 model 文件夹下文件并放在 model 文件夹下)")])])]),s._v(" "),a("li",[a("p",[s._v("进入服务器目录并生成镜像")])])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/home/backend\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## daydayup是镜像名称")]),s._v("\ndocker image build ./ -t daydayup:1.0.0\n")])])]),a("ul",[a("li",[s._v("生成并启动容器")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker container create --name daydayup -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(":3000 daydayup:1.0.0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 参数说明")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## -3000:3000 第一个3000是终端端口，第二个容器端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## -daydayup 第一个是容器名称，第二个是镜像名称")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看全部容器")]),s._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 启动容器")]),s._v("\ndocker container start xxxxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("容器id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 进入容器")]),s._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it xxxxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("容器id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" /bin/bash\n")])])]),a("ul",[a("li",[s._v("文件展示")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("dockerfile")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 依赖node")]),s._v("\nFROM node:12\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建文件夹")]),s._v("\nWORKDIR /usr/src/app\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制全部文件进入文件夹")]),s._v("\nCOPY "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pm2 -g\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" pm2\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\nEXPOSE "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行pm2 ./bin/www")]),s._v("\nCMD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pm2-runtime"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./bin/www"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);