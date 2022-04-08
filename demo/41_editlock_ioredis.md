---
title: 41、编辑锁-redis实现
order: 41
---
- [一、基础知识](#一基础知识)
  - [1、开发服务器可以配置https](#1开发服务器可以配置https)
  - [2、redis  vs mysql](#2redis--vs-mysql)
  - [3、ioredis资料](#3ioredis资料)
  - [4、redis安装使用](#4redis安装使用)
        - [客户端界面（AnotherRedisDesktopManager）](#客户端界面anotherredisdesktopmanager)
  - [5、redis学习](#5redis学习)
  - [6、常用命令](#6常用命令)
- [二、编辑锁实现](#二编辑锁实现)
  - [1、客户端](#1客户端)
- [附录](#附录)
  - [1、转ms的工具:ms](#1转ms的工具ms)
## 一、基础知识
### 1、开发服务器可以配置https
![图 1](../images/59450f5d5be5ee67b5b80b39eb602a72f0e176c401063147f82f3f83fc97f5d7.png)  

### 2、redis  vs mysql
+ redis：非关系型数据库；存储在缓冲中，读取数据快
+ mysql：关系型数据库；存储在硬盘中，读取速度慢

两者都是c/s结构，都需要一个远程服务器
> 目前mysql是所有环境配置，redis只配置一个环境

![图 2](../images/10895abeb9c02c15d7f773edf6eedafa2288d835d8b4e5aeb3fc6916d020fc07.png)  


### 3、ioredis资料
[github](https://github.com/luin/ioredis)  
[midway redis](http://midwayjs.org/docs/extensions/redis)  

### 4、redis安装使用
[官网](https://redis.io/)  
[安装教程](https://blog.csdn.net/realize_dream/article/details/106227622)

安装指令：`brew install redis`
启动指令：`redis-server`
![图 4](../images/960eb2a55bb7114fb879be40c330534b0b47dc60ca891f4b37a7126b59406000.png)  
客户端链接：`redis-cli -h 127.0.0.1 -p 6379`
> 服务器自带客户端，默认ip 127.0.0.1,默认端口 6379

![图 5](../images/6a547e0f929ce80c3f18b812f5e2006d8c7aaa1b305fc163d031c280c5877eab.png)  

关闭指令：`redis-cli -h 127.0.0.1 -p 6379 shutdown`

###### 客户端界面（AnotherRedisDesktopManager）
[推荐](https://juejin.cn/post/6875109882006077448)   
[github](https://github.com/qishibo/AnotherRedisDesktopManager)   
![图 6](../images/fa8514d2f2d3011f2a5bc7dfe1a76e87a02582732468c00612798b5e4b991a05.png)  

### 5、redis学习
[redis入门](https://juejin.cn/post/6844903639765483533)  

![图 7](../images/100ca99e6e15f6ea6bc8d3bff8ccaaa33a17988966fe4128f4ceac0d9b871f31.png)  

### 6、常用命令
[文档](https://juejin.cn/post/6844903462279331853)  
+ setnx：设置成功返回1，失败返回0（如果已经存在则setnx会失败）

![图 8](../images/fa365895aae972e52590118ef8d9fc6b021cc7128278e8c9f278aaf379b9e71d.png)  

+ exists / expire ：是否存在/设置超期时间
![图 9](../images/0b684c24686c8302f8a0ff1399a74abd00f75f12897339de0fd133ca68c7a5fb.png)  

## 二、编辑锁实现
### 1、客户端





## 附录
### 1、转ms的工具:ms
![图 10](../images/319e46cb2d2aecd148790a1998babb722a6b313798877ae0752d8914a77fe40f.png)  
