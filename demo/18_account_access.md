---
title: 18、账号权限管理系统
order: 18
---
### 1、相关资料
https://zhuanlan.zhihu.com/p/31219790 [3]  
http://www.woshipm.com/pd/947233.html [4]  
https://zhuanlan.zhihu.com/p/347572760 [5，难]  
https://www.jianshu.com/p/91361944c993  


### 2、账号，角色，权限之间关系
+ 账号：需要进行访问控制的都需要账号，一般情况下，账号和用户一一对应
+ 角色：可以理解为权限组，只有复杂系统才需要
    + 如果角色和权限很多，又可以额外引入：角色组/权限组
+ 权限：一般分为三个权限
    + 数据权限：后端读
    + 操作权限：后端写
    + 页面权限：前端
![图片](https://robin2017.github.io/frontend-notes/images/account.png)


### 3、RBAC模型
http://www.woshipm.com/pd/1150093.html  
https://www.jianshu.com/p/44bfd8d6184b  
https://www.163.com/dy/article/GC4J96HP0511805E.html  
+ Role-Based Access Control:基于角色的访问控制
+ 复杂的账号权限系统都是基于RBAC的，需要引入角色的概念；简单的系统不用

![图片](https://robin2017.github.io/frontend-notes/images/rbac.png)
#### 3.1、RBAC分类
##### rbac0：账号和角色可以是一对多/多对多
![图片](https://robin2017.github.io/frontend-notes/images/rbac0.png)
##### rbac1：增加子角色：子角色继承父角色所有权限，然后再进行权限删减
比如经理>主管>专员，则配置好经理权限后，主管权限直接继承，然后删掉部分主管不需要的权限。
![图片](https://robin2017.github.io/frontend-notes/images/rbac1.png)

### 4、权限系统的四大模式
https://www.jianshu.com/p/ce0944b4a903  
https://help.aliyun.com/document_detail/174235.html [6]  
http://www.woshipm.com/pd/2174816.html [4]  
https://juejin.cn/post/6844904056876433416 [3]  
https://juejin.cn/post/6941734947551969288 [5]  
https://juejin.cn/post/6951712306598248485 [4]  
#### 4.1、四大模式
+ DAC:Discretionary Access Control,自主访问控制
    + 常见场景：文件系统的权限，如NTFS
    + 缺陷：控制分散，没法进行分组管理
+ MAC:Mandatory Access Control,强制访问控制
    + 背景：弥补DAC控制分散的缺点
    + 特点：对象和用户都有标识，操作是否成功取决于标识的关系
    + 场景：适用于等级观念强的行业，不适用于商业操作系统，因为不灵活
+ RBAC:Role-Based Access Control,基于角色的访问控制
    + 最为普及的模型
+ ABAC:Attribute-Based Access Control,基于属性的访问控制
    + 未来的权限系统模型
    + 缺点：规则复杂难用，而大部分系统没有过多需求
        + 让用户创建角色容易，但写一个策略json要骂娘   
#### 4.2、ABAC模型
> RBAC问题：缺少更多条件限制，而ABAC可以满足更多条件
    + 比如特定的时间才能访问。
对于大型组织，基于RBCA的控制模型需要维护大量的角色和授权关系，相比而言，ABAC更加灵活；对于中小型组织，维护角色和授权关系的工作量不大，反而定制各种策略相对麻烦，更容易接受RBAC授权模型。




#### 附件、其他杂谈
+ a:access 权限 / c:control 控制
    + 与ac相关的名词:rbac,acl
+ acl：access control list
    + 阿里平台：是权限管理平台，和账号没关系
    + 通用概念：描述用户和权限关系的数据表
+ 账号是很小的系统，权限是很大的系统，账号是权限的一个入口