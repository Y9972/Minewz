#生命周期

#重要对象
XMLHttpRequest

#XMLHttpRequest
##常用属性
	```
	onreadystatechange
	readyState
	responseText
	```

#基础使用步骤
	```
	构造一个XMLHttpRequest对象
	调用 open() 方法
	调用 send() 方法
	```
let xhr = new XMLHttpRequest()
xhr.onreadystatechange = function(e){
    if(xhr.readyState === 4){
        if(xhr.status == 200 ){
            console.log(xhr.responseText)
        }
    }
}
xhr.open('get','https://www.22pq.com/scripts/xiaoshuo.js')
xhr.send()


#fetch
https://www.jianshu.com/p/d9bff9289018

var url = "https://www.22pq.com/scripts/xiaoshuo.js";
fetch(url).then(function(response){
	console.log(response.text());
}).then(json => console.log(json));
