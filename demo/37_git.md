---
title: 37、github多账号
order: 37
---
> 两个账号：qq邮箱和fox邮箱，密码都是c2ASD
robin2017/wangy
## 参考资料
[如何在本地管理和切换多个 github 账号？](https://juejin.cn/post/6844903831000596488)   

## 操作步骤
#### 1、创建ssh密钥
命名为id_rsa_qq
```
ssh-keygen -t rsa -C "1143017179@qq.com"
```
![pic](https://robin2017.github.io/frontend-notes/images/rsa.png)

#### 2、绑定到新的github账号
![pic](https://robin2017.github.io/frontend-notes/images/ssh.png)

#### 3、配置文件管理key
没有配置则gitpage部署时报403错误  

![pic](https://robin2017.github.io/frontend-notes/images/sshconfig.png)

#### 4、验证是否识别
![pic](https://robin2017.github.io/frontend-notes/images/sshsuccess.png)

#### 5、git clone / git push
+ 域名替换
+ 作者没有更换
```
git clone git@github.com:wangy202012/react-components.git
// github.com替换为qq
git clone git@qq:wangy202012/react-components.git

```
![pic](https://robin2017.github.io/frontend-notes/images/gitclone.png)
![pic](https://robin2017.github.io/frontend-notes/images/gitpush.png)
![pic](https://robin2017.github.io/frontend-notes/images/author.png)

#### 6、修改工程配置
```
git config --local user.name "wangy202012"      
git config --local user.email "1143027179@qq.com"
```
![pic](https://robin2017.github.io/frontend-notes/images/config.png)

## 最佳实践
+ 使用git协议，不要用https
+ 仅github的wangy202012账号需要修改git路径，其他都不用


域名 | 用户名  | 邮箱|rsa文件
-|-|-|-
github.com | robin2017 |  robin.seu@foxmail.com|id_rsa_github.com.pub	|
github.qq.com | wangy202012 |  1143027179@qq.com|id_rsa_github.qq.com.pub|
gitlab.alibaba-inc.com | bota.lb |  bota.lb@alibaba-inc.com|id_rsa_gitlab.alibaba-inc.com.pub|

 ![pic](https://robin2017.github.io/frontend-notes/images/rsa-all.jpg)

```
Host github.com
  HostName github.com
  User robin2017
  IdentityFile ~/.ssh/id_rsa.github.com
Host github.qq.com
  HostName github.qq.com
  User wangy202012
  IdentityFile ~/.ssh/id_rsa.github.qq.com
Host gitlab.alibaba-inc.com
  HostName gitlab.alibaba-inc.com
  User bota.lb
  IdentityFile ~/.ssh/id_rsa.gitlab.alibaba-inc.com
```

个人项目git配置
```
// github.com配置
git config --local user.name "robin2017"      
git config --local user.email "robin.seu@foxmail.com"
// github.qq.com配置
git config --local user.name "wangy202012"      
git config --local user.email "1143027179@qq.com"
```


## 常见问题
#### 1、403
配置config即可
![pic](https://robin2017.github.io/frontend-notes/images/ssherror.png)

#### 2、仓库push混乱
![pic](https://robin2017.github.io/frontend-notes/images/err.png)