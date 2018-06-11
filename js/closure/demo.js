/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/6 上午10:48
 * @version $ 闭包
 */
// 闭包，是一个函数。在js中，是在另一个函数主体内定义的函数。

(function outerFunc(outerArg) {
  var outerVar = 3;
  console.log(this instanceof window);
  (function middleFunc(middleArg) {
    var middleVar = 4;

    (function innerFunc(innerArg) {
       var innerVar = 5;
      // EXAMPLE OF SCOPE IN CLOSURE:
      // Variables from innerFunc, middleFunc, and outerFunc,
      // as well as the global namespace, are ALL in scope here.
      console.log("outerArg="+outerArg+
        " middleArg="+middleArg+
        " innerArg="+innerArg+"\n"+
        " outerVar="+outerVar+
        " middleVar="+middleVar+
        " innerVar="+innerVar);
      // --------------- THIS WILL LOG: ---------------
      //    outerArg=123 middleArg=456 innerArg=789
      //    outerVar=3 middleVar=4 innerVar=5
    })(789);
  })(456);
})(123);

function addButton(numButtons) {
 for(var i = 0; i < numButtons; i++) {
   var button = document.createElement('button');
   button.type = 'button';
   button.value = 'Button ' + (i + 1);
   button.onclick = function () {
     console.log('Button '  + (i + 1) + ' clicked');
   };
   document.body.appendChild(button);
   document.body.appendChild(document.createElement('br'));
 }
}

window.onload = function () {
  addButton(5);
}
// 当用户点击五个按钮中的任何一个，都将显示“Button 6 clicked”。这是因为，在调用 onclick 方法时（对于任意一个按钮），for 循环已经完成并且变量 i 的值已经是 5。
// 6

// 解决方案
function addButtonBetter(numButtons) {
  for(var i = 0; i < numButtons; i++) {
    var button = document.createElement('button');
    button.type = 'button';
    button.value = 'Button ' + (i + 1);
    button.onclick = function (buttonIndex) {
      return function () {
        console.log('Button '  + (buttonIndex + 1) + ' clicked');
      }
    }(i);
    document.body.appendChild(button);
    document.body.appendChild(document.createElement('br'));
  }
}
