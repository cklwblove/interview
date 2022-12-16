最为重要的两个概念
- plugin：api,实例
- preset：允许我们在项目中使用最新的 JavaScript 语法，而无需考虑目标浏览器兼容性, 主要是语法层面的转化。转译我们的高版本 JavaScript 语法成为低版本浏览器可支持的语法。

- 最新ES语法，比如：箭头函数，let/const。
- 最新ES Api，比如Promise
- 最新ES实例/静态方法，比如String.prototype.include


当我们需要开发一款属于自己的babel插件时，通常我们会借助babel的一些库去进行代码的parser以及transform ast，generator code，并不需要我们去手动对代码进行词法/语法分析过程。
插件开发通常会涉及这些库:


@babel/core:上边我们说过babel/core是babel的核心库，核心的api都在这里。比如上边我们讲到的transform，parse方法。


@babel/parser:babel解析器。


@babel/types: 这个模块包含手动构建 AST 和检查 AST 节点类型的方法(比如通过对应的api生成对应的节点)。


@babel/traverse: 这个模块用于对Ast的遍历，它维护了整棵树的状态(需要注意的是traverse对于ast是一种深度遍历)。


@babel/generator: 这个模块用于代码的生成，通过AST生成新的代码返回。


babel的工作流程
在日常前端项目中，绝大多数时候我们使用babel进行js代码的转化。
它的工作流程大概可以概括称为以下三个方面:


Parse（解析）阶段：这个阶段将我们的js代码(字符串)进行词法分析生成一系列tokens，之后再进行语法分析将tokens组合称为一颗AST抽象语法树。(比如babel-parser它的作用就是这一步)


Transform（转化）阶段：这个阶段babel通过对于这棵树的遍历，从而对于旧的AST进行增删改查，将新的js语法节点转化称为浏览器兼容的语法节点。(babel/traverse就是在这一步进行遍历这棵树)


Generator（生成）阶段：这个阶段babel会将新的AST转化同样进行深度遍历从而生成新的代码。(@babel/generator)

babel中AST的遍历过程


AST是所谓的深度优先遍历，关于何谓深度优先不了解的同学可以自行查阅相关资料～


babel中AST节点的遍历是基于一种访问者模式(Visitor)，不同的访问者会执行不同的操作从而得到不同的结果。


visitor上挂载了以每个节点命名的方法，当进行AST遍历时就会触发匹配的方法名从而执行对应方法进行操作。

## babel.config.js
### babel-preset-env(@babel/preset-env)
- useBuiltIns:entry 配置时，babel 会根据配置的 targets 浏览器兼容性列表来决定。从而将目标浏览器下不支持的内容在项目入口处进行全量引入，分别挂载在对应全局对象上从而达到 polyfill 的作用。使用 entry 的方式，假使我们代码中仅使用到了 Array.prototype.includes 方法但是它会将目标浏览器中所有不兼容的 polyfill 全部实现并且引入进项目，造成包体积过大。
- useBuiltIns: usage 配置时，表示它会分析我们的源代码，判断如果目标浏览器不支持并且我们代码中使用到的情况下才会在模块内进行引入对应的 polyfill。会剔除没有使用到的 polyfill 内容。相对于 entry 选项，usage 看起来更加智能化也更加的轻量。
- usage 的确更加轻量和智能化，但是假如这样的业务场景下：
  通常，我们在使用 Babel 时会将 Babel 编译排除 node_modules 目录（第三方模板）。
  此时如果使用 usage 参数，如果我们依赖的一些第三方包中使用到了一些比较新的 ES 内置模块，比如它使用了Promise。
  但此时我们的代码中并没有使用 Promise ，如果使用 usage 参数那么问题就来了。
  代码中没有使用 Promise 自然 Promise 的 polyfill 并不会编译到最终的输出目录中，而第三种模块依赖了 Promise 但此时没有 Polyfill 浏览器并不认识这个东西。
  也许你会强调，那么我使用 babel 编译我的第三方模块呢，又或者我在入口处额外单独引入 Promise 的 polyfill 总可以吧。
  首先，在入口文件中单独引入 Promise 是假设在已知前提下既是说我了解第三方库代码中使用 Promise 而我的代码中没有 Promise 我需要 polyfil。
  这样的情况在多人合作的大型项目下只能说一种理想情况。
  其次使用 Babel 编译第三方模块我个人是强烈不推荐的，抛开编译慢而且可能会造成重复编译造成体积过大的问题。
  这种情况下，使用 entry 配置它不香吗？
  usage 相比 entry 固然更加轻量和智能，但是针对于业务场景下如果对于包体积没有强烈的要求下，我更加推荐你使用 entry 配合在入口处引入项目中所需 polyfill 因为这会避免很多第三方模块没有对应 polyfill 的造成的奇怪问题。
### 小结
无论是 entry 还是 usage 本质上都是通过注入浏览器不支持的 polyfill 在对应的全局对象上增加功能实现，这样无疑是会污染全局环境。举个例子，开发一个类库 使用到 Array.prototype.includes ，放到 npm 包，业务工程正好重写了此方法的实现，并且加了些额外的逻辑。不出意外，业务工程会报错，因为安装的库中 Array.prototype.includes polyfill 实现污染了全局，影响了业务工程自定义的代码（这个方法）。
在开发类库时我们迫切的需要一种并不会污染全局的 polyfill ，@babel/runtime 的出现拯救了我于水深火热之中

### @babel/runtime
简单来说 @babel/runtime 提供了一种不污染全局作用域的 polyfill 的方式，但不够智能，需要我们自己在代码中手动引入相关 polyfill 对应的包。
同时 @babel/runtime 在转译会在每个模块中各自实现一遍一些 _extend()， classCallCheck() 之类的辅助工具函数，当我们项目中的模块比较多时每个项目中都实现一次这些方法，这无疑是一种噩梦。这些工具类函数会造成重复的问题。
@babel/plugin-transform-runtime 这个插件正式基于 @babel/runtime 可以更加智能化的分析我们的代码，同时 @babel/plugin-transform-runtime 支持一个 helper 参数默认为 true 它会提取 @babel/runtime 编译过程中一些重复的工具函数变成外部模块引入的方式。

## @babel/runtime 为什么不适合业务项目
说了这么多，那么 transform runtime 真的如我们想象中的那么完美无瑕嘛？
@babel/runtime 配合 @babel/plugin-transform-runtime 的确可以解决 usage 污染全局作用域的问题，使用它来开发类库看起来非常完美。
有些小伙伴可能就会想到，既然它提供和 usage 一样的智能化按需引入同时还不会污染全局作用域。
那么，为什么我不能直接在业务项目中直接使用 @babel/runtime ，这样岂不是更好吗？
需要额外注意的是 transform runtime 与环境无关，它并不会因为我们的页面的目标浏览器动态调整 polyfill 的内容，而 useBuiltIns 则会根据配置的目标浏览器而决定是否需要引入相应的 polyfill。

## 总结
需要结合不同的业务场景下寻找最适合的配置落地方案。

### 业务
在日常业务开发中，对于全局环境污染的问题往往并不是那么重要。而业务代码最终的承载大部分是浏览器端，所以如果针对不同的目标浏览器支持度从而引入相应的 polyfill 无疑会对我们的代码体积产生非常大的影响，此时选择 preset-env 开启 useBuiltIns 的方式会更好一些。
所以简单来讲，我个人强烈推荐在日常业务中尽可能使用 @babel/preset-env 的 useBuiltIns 配置配合需要支持的浏览器兼容性来提供 polyfill 。
同时关于业务项目中究竟应该选择 useBuiltIns 中的 entry 还是 usage ，我在上边已经和大家详细对比过这两种方式。究竟应该如何选择这两种配置方案，在不同的业务场景下希望大家可以根据场景来选择最佳方案。而不是一概的认为 entry 无用无脑使用 usage 。

### 类库

在我们开发类库时往往和浏览器环境无关所以在进行 polyfill 时最主要考虑的应该是不污染全局环境，此时选择 @babel/runtime 无疑更加合适。
在类库开发中仅仅开启 @babel/preset-env 的语法转化功能配合 @babel/runtime 提供一种不污染全局环境的 polyfill 可能会更加适合你的项目场景。

### 提示
关于提供 polyfill 的方法，我强烈建议大家不要同时开启两种polyfill，这两个东西完全是 Babel 提供给不同场景下的不同解决方案。
它不仅会造成重复打包的问题还有可能在某些环境下直接造成异常，具体你可以参考这个 Issue。
当然，你同样可以在业务项目中配合 @babel/preset-env 的 polyfill 同时使用 @babel/plugin-transform-runtime 的 helper 参数来解决多个模块内重复定义工具函数造成冗余的问题。
但是切记设置 runtime 的 corejs:false 选项，关闭 runtime 提供的 polyfill 的功能，仅保留一种 polyfill 提供方案。
最后，无论是哪一种 polyfill 的方式，我强烈推荐你使用 corejs@3 版本来提供 polyfill。

作者：19组清风
链接：https://juejin.cn/post/7051355444341637128
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
