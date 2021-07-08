* 组件的定义
  * 定义class组件的两个条件
    * class继承自React.Component
    * class内部必须定义render方法，render方法返回代表该组件UI的React元素
* 组件的props
  * 组件的props用于把父组件中的数据或方法传递给子组件，供子组件使用
* 组件的state
  * 组件的state是组件内部的状态，state的变化最终将反映到组件UI的变化上。
  * this.setState方法是改变组件状态(state)唯一的方法。
  * 在组件的constructor中，先要调用super(props)，来调用继承Component的Constructor方法，完成初始化工作。
  * 在constructor中，通过this.state定义组件的状态

### React组件可以看作一个函数，函数的输入是props和state，函数的输出是组件的UI

* **props是组件对外的接口，组件通过props接收外部传入的数据（包括方法）；state是组件对内的接口，组件内部状态的变化通过state来反映。另外props是只读的，你不能修改组件内部的props；state是可变的，组件状态的变化通过修改state来实现。唯一可以变的方法为this.setState();**
* 有状态组件和无状态组件

  * 如果一个组件的内部状态时不变的，就用不到state，这样的组件被称为无状态组件。
  * 定义无状态组件除了使用class，还可以使用函数组件接受props为参数，返回代表这个组件UI的React元素结构。
  * 在使用无状态组件时，应该尽量将其定义成函数组件。
  * **有状态组件主要关注处理状态变化的业务逻辑，无状态组件主要关注组件UI的渲染。**
* React提供了PropTypes这个对象，用于校验组件属性的类型。
* 组件样式

  * 外部css样式表
    * 将静态文件放在public目录下面，然后在index.html中引入，一般是一些对整体的基础样式。
    * 或者将css文件放在src文件目录下，通过模块化的方式导入对应的模块
  * 内联样式
    * 使用css in js的语法，用js对象表示css样式，需要两层括号，一层时为了表示style的值是一个javascript表达式，第二层表示style是一个对象。
    * 属性名需使用小驼峰的方式(fontSize)。
* 组件和元素

  * React元素是一个普通的javascript对象，这个对象通过DOM节点或React组件描述界面是什么样子的。
  * React组件是一个class或函数，它接受一些属性作为输入，返回一个React元素。React组件是由若干个React元素组件而成的。
* ***组件的生命周期***

  1. 挂载阶段
     * constuctor
       * 组件被创建时，首先调用组件的构造方法。这个构造方法接受一个props参数，props是从父组件中传过来的属性对象。如果父组件没有传入属性，那么这个props指向的就是这个属性的默认属性
       * 在这个方法中首先需要调用super(props)才能保证props被传入组件中。
       * constuctor通常用于初始化组件的state及绑定事件处理方法等工作。
     * componentWillMount
       * 这个方法在组件被挂载到DOM前调用，且只会调用一次。
       * 这个方法很少用到，基本上该方法执行的所有工作都可以提前到constructor中。
       * 在这个方法中调用this.setState不会引起组件的重新渲染。
     * render
       * 定义组件时唯一必要的方法。
       * 这个方法主要是根据组件的props和state返回一个React元素，用于描述组件的UI，通常React元素使用JSX语法定义。也可以使用纯的React.createElement方法。还可以使用tsx(和jsx类似，使用typescript构建)。
       * render并不负责组件的实际渲染工作，它只是返回一个UI的描述，真的渲染出的页面DOM的工作用React自身负责。
       * render是一个传函数，在这个方法中不能执行任何有副作用的操作，所以不能在render中调用this.setState，这会改变组件的状态。
     * componentDidMount
       * 在组件被挂载到DOM后调用，且只会调用一次。
       * 这个时候可以获取到DOM结构，因此依赖DOM的操作可以放到这个方法中。
       * 这个方法通常还会用于向服务端请求数据。
       * 在这个方法中调用this.setState会引起组件的重新渲染。
  2. 更新阶段
     * componentWillReceiveProps(nextProps)

       * 这个方法只在props引起的组件更新过程中，才会被调用。State引起的组件更新并不会触发该方法。
       * 方法的参数nextProps是父组件传递给当前组件的新的props
       * 父组件render方法的调用并不能保证传递给子组件的props发生变化，也就是说nextProps的值可能和子组件当前的props的值相等，因此往往需要比较nextProps和this.props来决定是否执行props发生变化后的逻辑，比如根据新的props调用this.setState触发组件的重新渲染。
       * ~~注意~~
         1. 在componentWillReceiveProps中调用setState，只有在render及其之后的方法中，this.state指向的才是更新后的state。在render之前方法shouldComponentUpdate、componentWillUpdate中，this.state依然指向的是更新前的state。
         2. 通过调用setState更新组件状态并不会触发componentWillReceiveProps的调用，否则可能会进入一个死循环。
     * shouldComponentUpdate(nextProps,nextState)

       ### * 这个方法决定组件是否继续更新过程。当方法返回true时(true也是这个方法返回的默认值)，组件会继续更新过程；当方法返回false时，组件的更新过程停止，后续的componentWillUpdate、render、componentDidUpdate也不会被调用


       * 一般通过比较nextProps、nextState和组件当前的props、state决定这个方法的返回结果。这个方法可以用来减少组件不必要的渲染，从而优化组件的性能。
     * compoentWillUpdate(nextProps,nextState)

       * 这个方法在组件render调用前执行，可以作为组件更新发生前执行某些工作的地方，一般很少用到
       * ~~注意~~
         * **shouldComponentUpdate和componentWillUpdate中都不能调用setState，否则会引起循环调用问题，render永远无法被调用，组件也无法正常渲染。**
     * render
     * componentDidUpdate(prevProps,prevState)

       * 组件更新后被调用，可以作为操作更新后的DOM的地方。这个方法的两个参数prevProps、prevState代表组件更新前的props和state。
  3. 卸载阶段
     * componentWillUnmount
       * 这个方法被卸载前调用，可以在这里执行一些清理工作，比如清楚组件中使用的定时器，清楚componentDidMount中手动创建的DOM元素等，以避免引起内存泄漏。
* 总结：只有类组件才具有生命周期方法，函数组件是没有生命周期方法的。

---

### 列表和Keys

* React使用key属性来标记列表中的每个元素，当列表数据发生变化时，React就可以通过key知道那些元素发生了变化，从而只重新渲染发生变化的元素，提交渲染效率。
* 并不推荐使用索引作为key，因为一旦列表中的数据发生重排，数据的索引也会发生变化，不利于React的渲染优化。

### 事件处理

* 在React中，事件的命名采用驼峰命名方式，而不是DOM元素中的小写字母命名方式。
* 处理事件的响应函数要以对象的形式赋值给事件属性，而不是DOM中的字符串形式。
* React中的事件是合成事件，并不是原生的DOM事件。
  * 在DOM事件中，可以通过处理函数返回的false来阻止事件的默认行为，但在React事件中，必须显示地调用事件对象的preventDefault方法来阻止事件的默认行为。
  * 可以通过React事件对象的nativeEvent属性获取。
* 处理函数中的this指向的问题，因为ES6 class并不会为方法自动绑定this到当前对象。
* React事件处理函数的写法主要有三种方式
  * 使用箭头函数
    * 因为箭头函数中的this指向的是函数定义时的对象，所以可以保证this总是指向当前组件的实例对象。
    * 直接在render方法中为元素事件定义事件处理函数，最大的问题是，每次render调用时，都会重新创建一个新的事件处理函数，带来额外的性能开销，组件所处层级越低，这种开销就越大，因为任何一个上层组件的变化都可能会触发这个组件的render方法。
  * 使用组件方法
    * 直接将组件的方法赋值给元素的事件属性，同时在类的构造函数中，将这个方法的this绑定到当前对象。
    * 这样每次render不会重新创建一个回调函数，没有额外的性能损失。但是存在多个事件处理函数需要绑定时，这种模板式的代码还是会显得反锁
    * 当使用行内bind绑定时，可以传递参数。
  * 属性初始化语法(property initializer syntac)
    * 使用ES7的property initializers会自动为class中定义的方法绑定this

### 表单

**如果一个表单元素的值是由React来管理的，那么他就是一个受控组件。**

**如果一个表单元素的值不是由React来管理的，那么他就是一个非受控组件。**

* 受控组件
  * 文本框
    * 文本框包含类型为text的input元素和textarea元素，它们受控的主要原理是，通过表单元素的value属性设置表单元素的值，通过表单元素的onChange事件监听值的变化，并将变化同步到React组件的state中。
  * 列表
    * React组件中的select的选中时在select元素上设置value属性或者defaultValue属性，原生的DOM元素实在option中设置selected属性。
  * 复选框和单选框
    * React控制的属性是checked属性非受控组件
* 非受控组件
  * 非受控组件看似简化了操作表单元素的过程，但这种方式破坏了React对组件状态管理的一致性，往往容易出现不容易排查的问题，因此非特殊情况下，不建议大家使用。

## React 16新特性

### render新的返回类型

* React16之前，render方法必须返回单个元素，现在，render方法支持两种新的返回类型：**数组（由React元素组成）和字符串。**

### 错误处理

* React16之前，组件在运行期间如果执行出错，就会阻塞整个应用的渲染，这时只有刷新页面才能恢复应用
* React16引入了新的错误处理机制，默认情况下，当组件中抛出错误时，这个组件会从组件树中卸载，从而避免整个应用的崩溃。
* React16还提供了一种更加友好的错误处理方式——错误边界（Error Boundaries）。错误边界是能够捕获子组件的错误并对其做优雅处理的组件。优雅的处理可以是输出错误日志、显示出错误提示等，显然这比直接卸载组件要更加友好。
  * 定义了componentDidCatch(error,info)这个方法的组件将成为一个错误边界。
  * React17.02中使用不正常。

### Portals

* React 16的Portals特性让我们可以把组件渲染到**当前组件树以外的DOM节点上**，这个特性典型的应用场景是渲染应用的全局弹框，使用Portals后，任意组件都可以将弹框组件渲染到根节点上，以方便弹框的显示。

### 自定义DOM属性

* React 16之前会忽略不识别的HTML和SVG属性。在以后的版本可以使用自定义属性。

## 深入理解组件

### 组件state

* 设计合适的state

  * 组件state必须代表一个组件UI呈现的完整状态集，即组件的任何UI改变都可以从state的变化中反映出来；
  * state中的所有状态都用于反映组件UI的变化，没有任何多余的状态，也不应该存在通过其他状态计算而来的中间状态。
  * state所代表的一个组件UI呈现的完整状态集又可以分成两类数据
    * 用作渲染组件时使用到的数据来源
    * 用作UI展现形式的判断依据
  * 除了state、props以外的其他组件属性称为组件的普通属性。
  * 当我们在组件中需要用到一个变量，它与组件的渲染无关时，应该将其定义成一个**普通变量，**并且直接挂在到this上**。**
* 正确修改state

  * 不能直接修改state
  * state的更新是异步的
    * 会将多次操作同时合并。
  * state的更新是一个合并的过程
  * state与不可变对象
    * 状态的类型时不可变类型（数字、字符串、布尔值、null、underfined），这种情况直接赋值修改。
    * 状态类型是数组
      * 新增时，可以使用concat方法或ES6的数组扩展语法
      * 截取部分，可以使用slice
      * 过滤部分元素，可以使用filter
      * 不要使用push、pop、shift、unshift、splice等方法修改数组类型的状态。使用上面的方法可以返回一个新的数组，而不是修改愿数组。
    * 状态类型时普通对象
      * 使用ES6的Object.assgin
      * 使用对象扩展语法

### 组件与服务器通信

* 组件挂载阶段通信
  * React组件的正常运转本质上是组件不同生命周期方法的有序执行
  * 一般在componentDidMount中与服务器进行通信的，这个组件已经挂载，真实DOM也已经渲染完成，也是调用服务器API最安全的方法，也是React官方推荐的进行服务器通信的地方
    * 在componentDidMount中执行服务器通信可以保证获取到数据时，组件已经处于挂载状态，这时即使要直接操作DOM也是安全的，而componentWillMount无法保证这一点。
    * 当组件在服务器端渲染时，componentWillMount会被调用两次，一次是在服务端，另一次是在浏览器端，而componentDidMount能保证在任何情况下只会被调用一次，从而不会发出多余的请求。
* 组件更新阶段通信
  * 在compenentWillReceiveProps的发起请求，请求前，先对比两个属性值是否发生了改变。

### 组件通信

* 父子通信
  * 父组件向子组件通信是通过父组件向子组件的props传递数据完成的。
  * 子组件向父组件通信是通过props的回调完成的。
* 兄弟组件通信
  * 通过共同的父组件来实现状态管理。
* Context
  * 当context中包含数组时，如果要修改context中的数据，一定不能直接修改，而是要通过setState修改，组件的state的变化会创建一个新的contenxt，然后重新传递给子组件
  * 过多的使用context会让应用中的数据流变得紊乱。context还是处于试验性阶段。

### 特殊的ref

* 使用ref会带来很多便利，但是在绝大多数场景下，应该避免使用ref，因为它破坏了React中以props为数据传递介质的典型数据流。
* 在DOM元素上使用ref
  * ref接收一个回调函数作为值，在组件被挂载或卸载时，回调函数会被调用，在组件被挂载时，回调函数会接收当前DOM元素作为参数；在组件被卸载时，回调函数会接收null作为参数。
