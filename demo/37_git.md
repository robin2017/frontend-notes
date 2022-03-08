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

## 常见问题
#### 1、403
配置config即可
![pic](https://robin2017.github.io/frontend-notes/images/ssherror.png)

#### 2、仓库push混乱
![pic](https://robin2017.github.io/frontend-notes/images/err.png)