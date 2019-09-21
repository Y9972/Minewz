来源：http://es6.ruanyifeng.com/#docs/promise

Promise对象
#方法
```
then()
catch()
finally()
all()
race()
resolve()
reject()
try()
```

#基本用法
const helloW = new Promise(function(resolve , reject) {
	/* 某个条件执行成功*/
	if(true){
		resolve("成功");
	}else{
		reject("失败");
	}
})
console.log(helloW);
helloW.then(function(value) {
  	console.log("success");
}, function(error) {
  	console.log("failed");
});

function timeout(ms) {
  return new Promise((resolve, reject) => {
    resolve("done")
  });
}
timeout(100).then((value) => {
  console.log(value);
});


#then()   
then(function suc(val){},function fal(val){} )
then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数
##then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。


#catch()
catch方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。
##例子
function timeout(ms) {
  return new Promise((resolve, reject) => {
    reject("fuck")
  });
}
timeout(100).then((value) => {
  console.log(value);
}).catch((value)=>{
	console.log(value);
})

也可以直接catch
function timeout(ms) {
  return new Promise((resolve, reject) => {
    reject("fuck")
  });
}
timeout(100).catch((value)=>{
	console.log(value);
})

也等同于 但是用catch的写法会比较好
function timeout(ms) {
  return new Promise((resolve, reject) => {
    reject("fuck")
  });
}
timeout(100).then((value) => {
  console.log(value);
},(value)=>{
  console.log("faile  "+value);
})


#finally()
不管 Promise 对象最后状态如何，都会执行的操作
function timeout(ms) {
  return new Promise((resolve, reject) => {
    reject("fuck")
  });
}
timeout(100).then((value) => {
  console.log(value);
},(value)=>{
  console.log("faile  "+value);
}).finally((val)=>{
	console.log("finish")
})

#all()


#race() 和all()类似


#resolve()将一个对象转化为promise实例,状态为resolve

#reject()将一个对象转化为promise实例,状态为reject
