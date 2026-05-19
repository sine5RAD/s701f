---
title: racknerd服务器搭建
published: 2026-05-18
description: '一个腾讯云难民的故事'
image: ''
tags: ['互联网']
category: '互联网'
draft: false 
lang: ''
---
# 前言
在遭到不可抗力因素的打压之后，咱决定从腾讯云跑路到racknerd<br>
# 账号注册
首先是之前说的验证码问题，咱换了一个clash节点就解决了
# racknerd的优势
1. 不需要实名制。这是咱从腾讯云跑路的核心原因。在国内需要把域名转到厂商那里然后实名认证才能让把域名解析到ip
2. 可以直连github
# racknerd的劣势
贵，我租个单核1GB RAM的服务器爆了150块
# 在遇到问题之前...
咱照着之前[在腾讯云上部署的方式](../域名购买以及腾讯云服务器搭建 "在腾讯云上部署的方式")重新跑了一遍。一切都很正常，直到咱运行`pnpm build`<br>
爆内存了...
# 解决爆内存的问题
为什么会爆内存呢？<br>
当然是因为这是个1G RAM的服务器<br>
VUE3项目构建时的最少需要1GB的内存，而咱的破烂服务器在运行nginx之后只有大概600MB的剩余了<br>
所以构建并不能在服务器端进行...<br>
首先的想法是本地构建，然后把dist文件夹传上去。<br>
但考虑到每次更新都要手动上传，咱决定把它作为没有办法的办法<del>（咱这该死的完美主义）</del><br>
于是求助群友<br>
<q>github workflow</q>——Alumopper姐姐<br>

# github workflow
不会写，遂bing一下<br>
github的官方文档说它遵循yaml语法<del>（什么是yaml）</del><br>
那么我们着手开始写<br>
## on
首先是我们的需求，要在推送到master分支的时候自动触发构建<br>
那么我们的on可以这样写
```
push:
    branches:
        - main
        - master
```
## permission
我们要将构建出来的dist文件夹写入仓库的pages分支，那么我们需要
```
permissions:
    contents: write
```
这段代码的作用是给予脚本写入权限<br>
## job
接下来到了重头戏，这是我们脚本的核心功能，以`job:`开头<br>
job里面是运行流程，github会自上而下执行你编写的流程
### build-and-deploy
我们首先需要构建代码<br>
由于我们构建出来的网站运行在ubuntu20.04操作系统上，所以我们添加一行
```
runs-on: ubuntu-latest
```
之后是运行流程，在`steps`标签下<br>
#### checkout
首先我们需要知道github action是怎么运行的<br>
github会给你提供一台临时运行机，然后在这台机器上执行你的流程<br>
但是我们要构建代码，而咱的代码又不会自动下载到虚拟机上<br>
怎么办呢？<br>
当然是前人栽树后人乘凉，
```
- name: Checkout
  uses: actions/checkout@v4
```
搞定
#### setup pnpm
想要运行`pnpm build`，我们需要什么呢？<br>
当然是需要pnpm了（<br>
我们依然可以用别人写好的构建代码<br>
```
- name: Setup pnpm
      uses: pnpm/action-setup@v4
      with:
          version: 10.33.0
          run_install: false
```
安装的pnpm版本应该与本地的pnpm版本一致，并且不自动执行依赖安装（就是`pnpm install`）<br>
不自动执行依赖安装的原因是我们还没装node.js
#### setup node.js
仿照上例显然
```
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
      node-version: 22.12.0
      cache: pnpm
```
#### install dependence
既然已经安装完node.js了，我们终于可以安装依赖了
```
- name: Install dependencies
  run: pnpm install --frozen-lockfile
```
#### build site
就像教程里说的那样，直接
```
- name: Build site
  run: pnpm build
```
就好了
#### Deploy to pages branch
然后我们要把生成的dist文件夹推送到pages分支上<br>
恰巧前人还帮我们写好了<br>
那么最后一步
```
- name: Deploy to pages branch
  uses: JamesIves/github-pages-deploy-action@v4
  with:
      branch: pages
      folder: dist
      clean: true
```
完成
#### SSH Connect to remote server
接下来就是把我们的page分支部署到服务器上面去<br>
ssh链接到服务器，打开目录，然后直接`git pull`就行<br>
直接使用linux的ssh命令有个问题，就是你只能传给它文件形式的私钥，而我们又不能在github上面明文存储私钥<br>
好在前人的智慧还是起了作用<br>
```
- name: SSH Connect to remote server
  uses: appleboy/ssh-action@master
  with:
      host: ${{ secrets.DEPLOY_HOST }}
      username: ${{ secrets.DEPLOY_USER }}
      key: |
          ${{ secrets.SSH_PRIVATE_KEY }}
      script: |
          cd ${{secrets.DEPLOY_PATH}}
          git pull
```
现在就好啦