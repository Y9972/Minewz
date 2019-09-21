generator（生成器）
#方法声明
function* helloworld(){
  yield 'hello';
  yield 'world';
  return 'ending';
  }   //*号位置不重要

#方法调用
var hw = helloworld();
hw.next();  // { value: 'hello', done: false }
hw.next();  // { value: 'world', done: false }
hw.next();  // { value: 'ending', done: true }
hw.next();  // { value: undefined, done: true }


#流程解释
function* foo(x) {
	console.log(x);
  var y = 2 * (yield (x + 1));
	console.log(x+"|||"+y)
  var z = yield (y / 3);
	console.log(z+"|||"+y)
  return (x + y + z);
}
var a = foo(5);
a.next();	//输出5 返回{value: 6, done: false}  函数遇到yield语句后返回
a.next(7);	//输出5|||14 返回{value: 4.666666666666667, done: false} 
		出现的值替代了上一次yield语句的位置,有点能理解为什么yield一定要加括号了
a.next(1);	//输出1|||14 返回{value: 20, done: true}

