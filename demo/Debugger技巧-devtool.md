---
title: $$Debugger技巧-devTool $$
order: 5001
---
## 1、从dom上获取fiber
> https://github.com/luke93h/git-blog/issues/15
```
function getFiberByDom(dom){
    let internalKey = Object.keys(dom).filter(
      key => key.indexOf("__reactInternalInstance") >= 0
    );
    return dom[internalKey];
}
```
再通过return/child/sibling定位到具体节点
```
const formRef = fiber.return.return.return.return.return.return.child.sibling.child.stateNode.props.formRef
```

## 2、查看dom的具体属性
![test](https://robin2017.github.io/frontend-notes/images/dir.jpg)