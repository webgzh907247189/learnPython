// > 期望通过本次，对日常工作中经常使用的react和webpack有个基础的了解，知其所以然。

// ##### react相关

// - react组件在初始化的时候会经过哪些生命周期函数？
getDefaultProps()
getInitialState()
componentWillMount()
render()
componentDidMount()


- 当内部state变更后会触发哪些生命周期函数？
componentWillReceiveProps()
shouldComponentUpdate()
componentWillUpdata()
render()
componentDidUpdata()


- React 的 setState 为何是异步渲染
// 当执行setState时，会把需要更新的state合并后放入状态队列，而不会立刻更新
// 如果不通过setState而直接修改this.state的值，就像这样:this.state.value = 1，那么该state将不会被放入状态队列中，
// 下次调用this.setState并对状态队列进行合并时，将会忽略之前直接别修改的state，因此我们应该用setState更新state的值。

- setState第二个参数的作用？
// setState() 第二个参数是一个回调函数，表示 state 更新完成

- react diff算法


- 受控组件与非受控制的组件的区别？
// 智能组件 & 傻瓜组件  

// - 列出你能想到的所有的react性能优化方案

1.异步加载组件
2.react-addons-pure-render-mixin 的 PureRenderMixin  ->  shouldComponentUpdate
// constructor  ->  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
// 默认返回true,在state更新，props更新   默认是更新的(默认return true)，通过PureRenderMixin来处理那些情况不需要更新


// - 不配套其他库，你觉得React在使用中有哪些不方便的地方
// 跨组件通信



##### webpack相关

- 基础的webpack配置一般包含哪些基础的组成部分？各部分的作用是？
entry   入口
output  出口
plugin  插件
resolve 解析目录时  默认扩展路径    （alias -> 快速引用）
externals   如果要全局引用jQuery，不管你的jQuery有没有支持模块化，用externals就对了。
module  loader规则

- webpack中的devtool有哪些常用的值？各自的作用或者区别是？


- webpack-dev-server的作用
服务转发  起服务转发

- webpack模块热更新是做什么用的？如何配置实现模块热更新？


- 什么是bundle,什么是chunk，什么是module?

- webpack中如何实现长缓存优化



##### 脚手架

了解并学会使用yoman自己搭建一个脚手架（类似vue-cli），总结下具体的步骤。（搭建的脚手架项目不用上传）