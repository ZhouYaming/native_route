路由模块说明

- 拆分路由模块
- 重新设计路由
- 添加说明文档
    + statusBar 调整 指定地方去设置
    + 指定路由不能回退
    + 路由拦截

### 1 结构说明
```
- component    路由需要的组件
- routePannel  划分的路由模块
- index        对外暴露的路由组件
- utils        路由相关的公用函数
- navigateApi  路由实例对象

```

### 2 ind-app 路由

#### 2.1 路由层级 
```
- auth stack
    - guide
    - userAuth

- root tab

    - home      stack
        - proccess
        ...
    - repay     stack
        - repayWay
        - repayDetail

    - myAccount stack
        - accountInfo
        ...

```

#### 2.2 路由使用规范
```
- 路由命名定义遵循变量命名规则
- 路由不要出现重复声明
- 路由层级严格按照模块划分,相应的模块添加在相应的pannel 中
- routePannel 每个模块需要添加路由说明
- routePannel 中各自的navigationOptions 各自不太一样,做好抽象隔离  
```

### 
#### 3.1 statusBar 调整
> statusBar 是顶部栏不占页面布局, 主要用到了背景颜色和文字颜色, 不同页面显示不同的`状态`
```
- authStack 
UserAuth： 页面监听修改

- rootTab 
tab路由监听路由然后去修改样式,可利用后者继承前者的方式

```

#### 3.2 ProccessBack

```
监听回退事件可以限制相应路由
```

