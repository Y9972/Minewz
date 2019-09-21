//原需求 当方法wait执行完后再输出执行结果 但这里wait方法不会等里面的setTimeout而直接结束方法　
/*var wait = function(){
　　　　var tasks = function(){
　　　　　　alert("执行完毕！");
　　　　};
　　　　setTimeout(tasks,1000);
　　};
　　$.when(wait())
　　.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); });*/

/*解决方法 deferred有三个状态（已成功，已失败，未完成）,分别对应（resolve，reject，progress）
resolve状态会调用done()方法,reject状态会调用fail()方法
*/
　　var dtd = $.Deferred(); // 新建一个deferred对象
　　var wait = function(dtd){
　　　　var tasks = function(){
　　　　　　alert("执行完毕！");
　　　　　　dtd.resolve(); // 改变deferred对象的执行状态
　　　　};
　　　　setTimeout(tasks,5000);
　　　　return dtd;
　　};
　　$.when(wait(dtd))
　　.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); });


//promise()
var dtd = $.Deferred(); // 新建一个Deferred对象
　　var wait = function(dtd){
　　　　var tasks = function(){
　　　　　　alert("执行完毕！");
　　　　　　dtd.resolve(); // 改变Deferred对象的执行状态
　　　　};
　　　　setTimeout(tasks,5000);
　　　　return dtd.promise(); // 返回promise对象
　　};
　　var d = wait(dtd); // 新建一个d对象，改为对这个对象进行操作
　　$.when(d)
　　.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); });
　　d.resolve(); // 此时，这个语句是无效的

        //将did对象变为wait函数的内部对象
　　var wait = function(dtd){
　　　　var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
　　　　var tasks = function(){
　　　　　　alert("执行完毕！");
　　　　　　dtd.resolve(); // 改变Deferred对象的执行状态
　　　　};
　　　　setTimeout(tasks,5000);
　　　　return dtd.promise(); // 返回promise对象
　　};
　　$.when(wait())
　　.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); });

      //构造函数写法
　　var wait = function(dtd){
　　　　var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
　　　　var tasks = function(){
　　　　　　alert("执行完毕！");
　　　　　　dtd.resolve(); // 改变Deferred对象的执行状态
　　　　};
　　　　setTimeout(tasks,5000);
　　　　return dtd.promise(); // 返回promise对象
　　};
       $.Deferred(wait)
　　.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); });

       //不知什么鬼写法
　　var dtd = $.Deferred(); // 生成Deferred对象
　　var wait = function(dtd){
　　　　var tasks = function(){
　　　　　　alert("执行完毕！");
　　　　　　dtd.resolve(); // 改变Deferred对象的执行状态
　　　　};
　　　　setTimeout(tasks,5000);
　　};
　　dtd.promise(wait);
　　wait.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); });
　　wait(dtd);


/*api
　　（1） $.Deferred() 生成一个deferred对象。
　　（2） deferred.done() 指定操作成功时的回调函数
　　（3） deferred.fail() 指定操作失败时的回调函数
　　（4） deferred.promise() 没有参数时，返回一个新的deferred对象，该对象的运行状态无法被改变；接受参数时，作用为在参数对象上部署deferred接口。
　　（5） deferred.resolve() 手动改变deferred对象的运行状态为"已完成"，从而立即触发done()方法。
　　（6）deferred.reject() 这个方法与deferred.resolve()正好相反，调用后将deferred对象的运行状态变为"已失败"，从而立即触发fail()方法。
　　（7） $.when() 为多个操作指定回调函数。
除了这些方法以外，deferred对象还有二个重要方法，上面的教程中没有涉及到。
　　（8）deferred.then()
有时为了省事，可以把done()和fail()合在一起写，这就是then()方法。
　　$.when($.ajax( "/main.php" ))
　　.then(successFunc, failureFunc );
如果then()有两个参数，那么第一个参数是done()方法的回调函数，第二个参数是fail()方法的回调方法。如果then()只有一个参数，那么等同于done()。
　　（9）deferred.always()
这个方法也是用来指定回调函数的，它的作用是，不管调用的是deferred.resolve()还是deferred.reject()，最后总是执行
	$.ajax( "test.html" ).always( function() { alert("已执行！");} );
*/

//参考 http://www.ruanyifeng.com/blog/2011/08/a_detailed_explanation_of_jquery_deferred_object.html
