#js异步编程的几种方法
##回调函数
##事件机制
##jquery的消息通知机制 （其实就是事件机制的加强）
##Promise（ES6的新东西 在jq中有封装包deferred,1.5版本以上即可用）
##async/await（ES7的新东西）
##generator,yield （生成器）



#array.indexOf(item,start) 查找数组中的位置
	item:要找的值
	start:可以指定查找时开始的位置
	找到返回位置，坐标从0开始;找不到返回-1。

#stringObject.match(searchvalue) 字符串匹配正则表达式
	searchvalue:正则表达式
	匹配到内容,它将返回一个数组,其中存放了与它找到的匹配文本有关的信息。该数组的第 0 个元素存放的是匹配文本;找不到则返回空
	测:tstr = '/book/123_456.html';
       id = tstr.match(/^\/book\/(\d+)_(\d+)\.html/); 如果想知道数组的具体内容,把这段代码丢到浏览器里面测试


#Sting.prototype.isEmail=function(){} 扩展js方法


#$(document).ready(function(){})  在网页加载后激活函数


#使用localStorage 创建一个本地存储的 name/value 对
	localStorage.setItem("lastname", "Smith");
	localStorage.getItem("lastname");


#！的作用：1.取反 ，2.将值转换为布尔值：true或false，单感叹号为相反的值，双感叹号为原值


# getxxx() ? alert('1') :alert('2')  若getxxx()返回值不为'',则输出1


#与，或，非
	```
	&&  结果为true，返回的第二个为真的值；结果为false，返回第一个为假的值。
	||  结果为true，返回第一个为真的值；结果为false，会返回第二个为假的值；


#target属性
	```
	_blank	在新窗口中打开被链接文档。
	_self	默认。在相同的框架中打开被链接文档。
	_parent	在父框架集中打开被链接文档。
	_top	在整个窗口中打开被链接文档。
	framename	在指定的框架中打开被链接文档
	```


#var xxx=function(){}   与 function(){}的区别
	前者用到才被加载 或者会在引入js文件的时候就被加载	


#onchange="window.location=this.value"  下拉框直接跳转

#jquery.deferred
$.wher()
resolved()
reject()


#匿名函数
##直接赋值给事件
window.onload = function() {
	alert("hha")
}
##匿名函数表达式
var func = function() {
	alert("hha")
}
fun();
##ES6的箭头函数也属于匿名函数	

#立即被执行的匿名函数  第1个() 是一个表达式，而这个表达式本身是一个匿名函数，所以在这个表达式后面加 () 就表示执行这个匿名函数。
##( function(){…} )()

##( function(){…}() )

##~function(){…}()


#剩余参数 在参数前加...  将参数从第二个开始转换为数组
function f1(name, ...numbers){
    console.log(numbers);
}
f1('a',2,4,5,6,78,89)


#箭头函数
##单参数
x => {
    if (x > 0) {
        return x * x;
    }
    else {
        return - x * x;
    }
}
##无参数
() => 3.14
##两个参数:
(x, y) => x * x + y * y
##可变参数:
(x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}
