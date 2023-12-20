(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{364:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-使用手册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-使用手册"}},[t._v("#")]),t._v(" Git 使用手册")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("官网下载："),a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-scm.com/downloads"),a("OutboundLink")],1),t._v(" 下载完成后使用默认进行安装。")]),t._v(" "),a("p",[t._v("安装完成后，在开始菜单里找到 "),a("code",[t._v("Git")]),t._v(" -> "),a("code",[t._v("Git Bash")]),t._v("，蹦出一个类似命令行窗口的东西，就说明 Git 安装成功！\n还需要最后一步设置，在命令行输入：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Name"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email@example.com"')]),t._v("\n")])])]),a("p",[t._v("因为 Git 是分布式版本控制系统，所以，每个机器都必须自报家门：你的名字和 Email 地址。")]),t._v(" "),a("h2",{attrs:{id:"创建版本库-仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建版本库-仓库"}},[t._v("#")]),t._v(" 创建版本库（仓库）")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("仓库name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("仓库name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此命令用于显示当前目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把当前目录初始化成Git仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])])]),a("blockquote",[a("p",[t._v("也不一定必须在空目录下创建 Git 仓库，选择一个已经有东西的目录直接"),a("code",[t._v("git init")]),t._v("也是可以的。")])]),t._v(" "),a("h2",{attrs:{id:"添加文件到仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加文件到仓库"}},[t._v("#")]),t._v(" 添加文件到仓库")]),t._v(" "),a("p",[t._v("在仓库目录下放入文件，如新建一个"),a("code",[t._v("test.txt")]),t._v("文件，然后使用"),a("code",[t._v("git add test.txt")]),t._v("命令告诉 Git，把文件添加到缓存区，然后使用"),a("code",[t._v('git commit -m "提交描述"')]),t._v("告诉 Git，把文件提交到仓库。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加指定文件或文件夹到缓存区，文件需添加后缀")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("文件或文件夹name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("文件或文件夹name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("文件或文件夹name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 多个文件")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或 全部文件同时添加到缓存区")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把文件从缓存区提交至仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"提交描述"')]),t._v("\n")])])]),a("h4",{attrs:{id:"提交描述规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交描述规范"}},[t._v("#")]),t._v(" 提交描述规范")]),t._v(" "),a("p",[t._v("在提交代码时输入清晰的说明有利于版本管理，建议搭配如下关键字编写提交描述")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建(add)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除(rm)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新(update)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 改动(change)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实现")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发布")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修复")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("h2",{attrs:{id:"版本管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本管理"}},[t._v("#")]),t._v(" 版本管理")]),t._v(" "),a("h4",{attrs:{id:"提交修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交修改"}},[t._v("#")]),t._v(" 提交修改")]),t._v(" "),a("p",[t._v("如修改"),a("code",[t._v("test.txt")]),t._v("的内容后，运行"),a("code",[t._v("git status")]),t._v("命令看看被修改的文件，然后再使用"),a("code",[t._v("git add test.txt")]),t._v("、\n"),a("code",[t._v('git commit -m "修改描述"')]),t._v("把修改后的文件提交到仓库，提交后可再次使用"),a("code",[t._v("git status")]),t._v("查看当前状态。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示 新增/删除/被改动等 的文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n")])])]),a("h4",{attrs:{id:"查看版本记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看版本记录"}},[t._v("#")]),t._v(" 查看版本记录")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看版本记录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示版本号、提交时间等信息")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("也可使用可视化工具查看 Git 版本历史：\n在仓库目录右键 > "),a("code",[t._v("Git BUI Here")])])]),t._v(" "),a("h4",{attrs:{id:"回退版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回退版本"}},[t._v("#")]),t._v(" 回退版本")]),t._v(" "),a("p",[t._v("首先，Git 必须知道当前版本是哪个版本，在 Git 中，用"),a("code",[t._v("HEAD")]),t._v("表示当前版本，也就是最新的提交 1094adb...（注意我的提交 ID 和你的肯定不一样），上一个版本就是"),a("code",[t._v("HEAD^")]),t._v("，上上一个版本就是"),a("code",[t._v("HEAD^^")]),t._v("，当然往上 100 个版本写 100 个^比较容易数不过来，所以写成"),a("code",[t._v("HEAD~100")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回退到上一个版本")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--hard")]),t._v(" HEAD^\n")])])]),a("p",[t._v("此时查看"),a("code",[t._v("git log")]),t._v("记录发现，原来最新的版本已经没有了，想回到原来最新的版本怎么办？这就需要知道最新的版本的版本号")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 跳转到指定版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--hard")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("版本号前几位"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("但是不知道版本号怎么办？Git 提供了一个命令"),a("code",[t._v("git reflog")]),t._v("用来记录你的每一次命令")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n")])])]),a("h4",{attrs:{id:"撤销修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销修改"}},[t._v("#")]),t._v(" 撤销修改")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600/897889638509536",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.liaoxuefeng.com/wiki/896043488029600/897889638509536"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"删除文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除文件"}},[t._v("#")]),t._v(" 删除文件")]),t._v(" "),a("p",[t._v("https://www.liaoxuefeng.com/wiki/896043488029600/900002180232448")]),t._v(" "),a("h2",{attrs:{id:"远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[t._v("#")]),t._v(" 远程仓库")]),t._v(" "),a("h4",{attrs:{id:"ssh-验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-验证"}},[t._v("#")]),t._v(" SSH 验证")]),t._v(" "),a("p",[t._v("使本机能关联远程仓库，首次需要 SSH 验证")]),t._v(" "),a("ul",[a("li",[t._v("第 1 步：创建"),a("code",[t._v("SSH Key")]),t._v("。在用户主（C:\\Users\\dell）目录下，看看有没有.ssh 目录，\n如果有，再看看这个目录下有没有"),a("code",[t._v("id_rsa")]),t._v("和"),a("code",[t._v("id_rsa.pub")]),t._v("这两个文件，如果已经有了，可直接跳到下一步。\n如果没有，打开 Shell（Windows 下打开 Git Bash），创建"),a("code",[t._v("SSH Key")]),t._v("：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建SSH Key")]),t._v("\nssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" rsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-C")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"邮件地址"')]),t._v("\n")])])]),a("ul",[a("li",[t._v("第 2 步：登陆 GitHub，右上角头像 > settings > SSH and GPG keys >Add SSH Key，在 key 的文本框里粘贴"),a("code",[t._v("id_rsa.pub")]),t._v("文件的内容")])]),t._v(" "),a("h4",{attrs:{id:"关联远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联远程仓库"}},[t._v("#")]),t._v(" 关联远程仓库")]),t._v(" "),a("p",[t._v("SSH 验证完成后，在 github 创建仓库，创建仓库时记得取消 "),a("code",[t._v("Initialize this repository with a README")]),t._v("的勾选，然后在本地命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关联远程仓库，仓库名一般使用origin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("仓库名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程仓库地址"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 示例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@github.com:xugaoyi/test.git\n")])])]),a("p",[t._v("下一步，就可以把本地库的所有内容推送到远程库上")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把文件推送到远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("仓库名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 示例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" origin master\n")])])]),a("p",[t._v("由于远程库是空的，我们第一次推送"),a("code",[t._v("master")]),t._v("分支时，加上了"),a("code",[t._v("-u")]),t._v("参数，Git 不但会把本地的"),a("code",[t._v("master")]),t._v("分支内容推送的远程新的"),a("code",[t._v("master")]),t._v("分支，还会把本地的"),a("code",[t._v("master")]),t._v("分支和远程的"),a("code",[t._v("master")]),t._v("分支关联起来，在以后的推送或者拉取时就可以简化命令。")]),t._v(" "),a("blockquote",[a("p",[t._v("前提是目录已经"),a("code",[t._v("git init")]),t._v("初始化成仓库，并且"),a("code",[t._v("git status")]),t._v("状态是没有改动的，如果有改动则先"),a("code",[t._v("git add .")]),t._v("添加至缓存区，"),a("code",[t._v("git commit -m '提交描述'")]),t._v("提交至仓库，然后执行上面命令。")]),t._v(" "),a("p",[t._v("如创建仓库时勾选了 "),a("code",[t._v("Initialize this repository with a README")]),t._v(" 则需先拉取"),a("code",[t._v("README.md")]),t._v("文件到本地仓库"),a("code",[t._v("git pull")])]),t._v(" "),a("p",[t._v("可关联多个远程仓库，注意给不同的远程仓库取不一样的名称，提交是分别按名称提交到不一样的远程仓库。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 简化的推送命令")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])]),a("h4",{attrs:{id:"查看远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看远程仓库"}},[t._v("#")]),t._v(" 查看远程仓库")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n")])])]),a("h4",{attrs:{id:"删除远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除远程仓库"}},[t._v("#")]),t._v(" 删除远程仓库")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("仓库名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h4",{attrs:{id:"从远程库克隆项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从远程库克隆项目"}},[t._v("#")]),t._v(" 从远程库克隆项目")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从远程库克隆项目")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("仓库地址"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h5",{attrs:{id:"克隆指定分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#克隆指定分支"}},[t._v("#")]),t._v(" 克隆指定分支")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆指定分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("仓库地址"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"分支管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),a("h4",{attrs:{id:"创建分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[t._v("#")]),t._v(" 创建分支")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h4",{attrs:{id:"查看分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看分支"}},[t._v("#")]),t._v(" 查看分支")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n")])])]),a("p",[t._v("查看分支时，在分支前带 * 号的表示当前的分支")]),t._v(" "),a("h4",{attrs:{id:"切换分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[t._v("#")]),t._v(" 切换分支")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h4",{attrs:{id:"合并分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[t._v("#")]),t._v(" 合并分支")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并本地的分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并远程的分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程仓库名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[a("strong",[t._v("注意")]),t._v("，是将指定分支合并到当前分支，并非当前分支合并到指定分支。")]),t._v(" "),a("p",[t._v("一般情况下是把当前分支切换到"),a("strong",[t._v("主分支")]),t._v("，然后把"),a("strong",[t._v("子分支")]),t._v("合并到"),a("strong",[t._v("主分支")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"删除分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[t._v("#")]),t._v(" 删除分支")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h4",{attrs:{id:"修改分支名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改分支名"}},[t._v("#")]),t._v(" 修改分支名")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改分支名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("原分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("新分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"帮助命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#帮助命令"}},[t._v("#")]),t._v(" 帮助命令")]),t._v(" "),a("p",[t._v("如对命令不清楚时，可使用"),a("code",[t._v("git help")]),t._v("命令显示出 git 命令介绍。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 帮助命令")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v("\nusage: "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--help"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-C "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--exec-path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--html-path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--man-path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--info-path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--paginate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-P")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" --no-pager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--no-replace-objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--bare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--git-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--work-tree"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--namespace"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("command"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nThese are common Git commands used "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" various situations:\n\nstart a working area "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("see also: "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" tutorial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   clone      Clone a repository into a new directory\n   init       Create an empty Git repository or reinitialize an existing one\n\nwork on the current change "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("see also: "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" everyday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v("        Add "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" contents to the index\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v("         Move or "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rename")]),t._v(" a file, a directory, or a symlink\n   reset      Reset current HEAD to the specified state\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v("         Remove files from the working tree and from the index\n\nexamine the "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("history")]),t._v(" and state "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("see also: "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" revisions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   bisect     Use binary search to "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" the commit that introduced a bug\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v("       Print lines matching a pattern\n   log        Show commit logs\n   show       Show various types of objects\n   status     Show the working tree status\n\ngrow, mark and tweak your common "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("history")]),t._v("\n   branch     List, create, or delete branches\n   checkout   Switch branches or restore working tree files\n   commit     Record changes to the repository\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("       Show changes between commits, commit and working tree, etc\n   merge      Join two or "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" development histories together\n   rebase     Reapply commits on "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),t._v(" of another base tip\n   tag        Create, list, delete or verify a tag object signed with GPG\n\ncollaborate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("see also: "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" workflows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   fetch      Download objects and refs from another repository\n   pull       Fetch from and integrate with another repository or a "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" branch\n   push       Update remote refs along with associated objects\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git help -a'")]),t._v(" and "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git help -g'")]),t._v(" list available subcommands and some\nconcept guides. See "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git help <command>'")]),t._v(" or "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git help <concept>'")]),t._v("\nto "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("read")]),t._v(" about a specific subcommand or concept.\n")])])]),a("p",[t._v("翻译工具翻译中文")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v("\n使用：git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--help"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-C "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--exec-path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--html-path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--man-path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--info-path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--paginate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-P")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" --no-pager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--no-replace-objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--bare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--git-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--work-tree"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--namespace"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("command"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n这些是在各种情况下使用的通用Git命令：\n\nstart a working area "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参见命令: "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" tutorial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   clone      将存储库克隆到新目录中\n   init       创建一个空的Git存储库或重新初始化一个现有的存储库\n\nwork on the current change "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参见命令: "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" everyday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v("        将文件内容添加到索引中\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v("         移动或重命名文件、目录或符号链接\n   reset      将当前磁头重置为指定状态\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v("         从工作树和索引中删除文件\n\nexamine the "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("history")]),t._v(" and state "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参见命令: "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" revisions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   bisect     使用二分查找查找引入错误的提交\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v("       打印与模式匹配的行\n   log        显示提交日志\n   show       显示各种类型的对象\n   status     显示工作树状态\n\ngrow, mark and tweak your common "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("history")]),t._v("\n   branch     列出、创建或删除分支\n   checkout   切换分支或还原工作树文件\n   commit     记录对存储库的更改\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("       显示提交、提交和工作树等之间的更改\n   merge      将两个或多个开发历史连接在一起\n   rebase     在另一个基本提示之上重新应用提交\n   tag        创建、列表、删除或验证用GPG签名的标记对象\n\ncollaborate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参见命令: "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" workflows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   fetch      从另一个存储库下载对象和引用\n   pull       从另一个存储库或本地分支获取并与之集成\n   push       更新远程引用和相关对象\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git help -a'")]),t._v(" 和 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git help -g'")]),t._v(" 列出可用的子命令和一些概念指导。\n命令"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git help <command>'")]),t._v(" 或 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git help <concept>'")]),t._v(" 查看特定子命令或概念.\n")])])]),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.liaoxuefeng.com/wiki/896043488029600"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);