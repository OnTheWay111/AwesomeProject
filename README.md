### React Native app 代码覆盖率示例

#### 参考横捷的教程(https://testerhome.com/topics/8919)，碰到一些问题：发现nyc不支持RN的js插桩
示例代码：https://github.com/OnTheWay111/AwesomeProject/blob/master/coverage_middleware/jss/App.js

#### 问题示例
##### 尝试过的nyc 版本： 11、12、13、14、15 均有问题
##### 插桩命令： 
```shell
nyc instrument js ../js
```
### 可以插桩成功的代码
```javascript
var App = React.createClass({
    render: function () {
        return (
            1
        )
    }
});
```

### 插桩失败的代码
```javascript
var App = React.createClass({
    render: function () {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
            <Text>你好吃了吗11111？</Text>
        </View>
        )
    }
});
```

有解决的方法吗？
