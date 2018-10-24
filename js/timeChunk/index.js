/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/29 上午11:24
 * @description 分时加载，数组分片
 * 当一次性获取几千条数据时如何渲染DOM？
 * https://segmentfault.com/q/1010000009177441
 */

// 一个例子是创建 WebQQ 的 QQ 好友列表。列表中通常会有成百上千个好友，如果一个好友
// 用一个节点来表示，当我们在页面中渲染这个列表的时候，可能要一次性往页面中创建成百上千
// 个节点。
// 在短时间内往页面中大量添加 DOM 节点显然也会让浏览器吃不消，我们看到的结果往往就
// 是浏览器的卡顿甚至假死。代码如下：

// var ary = [];
// for ( var i = 1; i <= 1000; i++ ){
//   ary.push( i ); // 假设 ary 装载了 1000 个好友的数据
// };
// var renderFriendList = function( data ){
//   for ( var i = 0, l = data.length; i < l; i++ ){
//     var div = document.createElement( 'div' );
//     div.innerHTML = i;
//     document.body.appendChild( div );
//   }
// };
// renderFriendList( ary );
// 这个问题的解决方案之一是下面的 timeChunk 函数， timeChunk 函数让创建节点的工作分批进
// 行，比如把 1 秒钟创建 1000 个节点，改为每隔 200 毫秒创建 8 个节点。

// data 数据  func 插入操作  interval 时间周期  该周期插入的项目数
var timeChunk = function(data, func, interval, count){
  var obj, timer;

  var start = function(){
    for(var i = 0; i < Math.min(count || 1, data.length); i++){
      obj = data.shift();
      func(obj);
    }
  };

  return function(){
    timer = setInterval(function(){
      if(data.length === 0){
        return clearInterval(timer);
      }

      start();
    }, interval);
  };
}


var data= [];
for ( var i = 1; i <= 1000; i++ ){
  data.push( i );
};

renderFriendList = timeChunk(data, function(n){
  var div = document.createElement( 'div' );
  div.innerHTML = n;
  document.body.appendChild( div );
}, 200, 10);

renderFriendList();

