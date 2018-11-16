{
	alert(a);
	yideng();
	var flag = true;
	if(!flag){
		var a = 1;
	}
	if (flag) {
		function yideng() {    
			console.log("yideng1");
		}
	} else {
		function yideng() {   
			console.log("yideng2");
		}
	}

	/**
	 * undefined
	 * 报错
	 */
}

{
	this.a = 20; 
	var test = {    
		a: 40,    
		init:()=> {        
			console.log(this.a);        
			function go() {            
				//this.a = 60;            
				console.log(this.a);        
			}        
			go.prototype.a = 50;
	        return go;        
        }
    }; 
    //var p = test.init(); 
    //p(); 
    new(test.init())()
    /**
     * 20
     * 50
     */
}

{
	this.a = 20; 
	var test = {    
		a: 40,
		init:()=>{
			console.log(this.a);        
			function go() {            
				this.a = 60;            
				console.log(this.a);        
			}        
			go.prototype.a = 50;
	        return go;        
        } 
    }; 
    var p = test.init(); 
    p(); 
    new(test.init())();

    /**
     * 20
     * 60
     * 20 xxx  60
     * 60
     */
}

{
	function test(){    
		var a = "yideng";    
		return function(){        
			eval("");    
		} 
	}
	test()(); 
	/**
	 * 不会被回收，因为形成闭包  子函数引用上层函数的变量
	 */
}


{
	Object.prototype.a = 'a'; 
	Function.prototype.a = 'a1'; 
	function Person(){}; 
	var yideng = new Person(); 
	console.log('p.a: '+ yideng.a);
	console.log(1..a); 
	console.log(1.a);

	/**
	 * 'p.a' a1  xxx   a
	 * undefined xxx   a
	 * 报错
	 */
}


{
	/**
	 * 汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。Cruze子 类实现父类颜色是红色，价格是140000,
	 * 售卖方法实现输出如下语句：将 红色的Cruze 买给了小王价格是14万。
	 */
	class Car{
		constructor(color,price){
			this.color = color;
			this.price = price;
		}

		seal(){
			console.log(`${this.color}的${this.constructor.name}卖给小王的价格是${this.price}`)
		}
	}

	class Cruze extends Car{
		constructor(color,price){
			super(color,price)
		}
	}

	let c = new Cruze('红色','140000')
	c.seal()
}


{
	// 请写出你了解的ES6元编程。（10分） 
	/**
	 * http://www.cnblogs.com/buzhiqianduan/p/9687804.html
	 * Reflect
	 * Proxy
	 */
}

{
	const timeout = ms => new Promise((resolve, reject) => {        
		setTimeout(() => {
			resolve();
		}, ms);
	});
	const ajax1 = () => timeout(2000).then(() => {
        console.log("1");        
        return 1;   
    });
    const ajax2 = () => timeout(1000).then(() => {        
    	console.log("2");        
    	return 2;    
    }); 
    const ajax3 = () => timeout(2000).then(() => {        
    	console.log("3");        
    	return 3;    
	});
	const mergePromise = async (ajaxArray) =>{
		// let resultlist = []
		// for(let item of ajaxArray){
		// 	resultlist = [..resultlist,await item()]
		// }
		// return resultlist

		return ajaxArray.reduce((result,item)=>{
			return result.then((d)=>{
				item()
			})
		},Promise.resolve())

	};
	mergePromise([ajax1, ajax2, ajax3]).then(data => {    
		console.log("done");
		console.log(data);
	});
	// 执行结果为： 1  2  3 done [1,2,3] 
}

{
	const timeout = ms => new Promise((resolve, reject) => {        
		setTimeout(() => {
			resolve();
		}, ms);
	});
	const ajax1 = () => timeout(2000).then(() => {
        console.log("1");        
        return 1;   
    });
    const ajax2 = () => timeout(1000).then(() => {        
    	console.log("2");        
    	return 2;    
    }); 
    const ajax3 = () => timeout(2000).then(() => {        
    	console.log("3");        
    	return 3;    
	});
	const mergePromise =  (ajaxArray) =>{
		let arr = [] 

		return ajaxArray.reduce((result,item)=>{
			return result.then((d)=>{
				arr = [...arr,d]
				return item()
			})
		},Promise.resolve('')).then((d)=>{
			return [...arr,d].filter((item)=>{
				return item
			})
		})
	};
	mergePromise([ajax1, ajax2, ajax3]).then(data => {    
		console.log("done");
		console.log(data);
	});
	// 执行结果为： 1  2  3 done [1,2,3] 
}

{	
	/**
	 * 请问点击<buttion id=“test”></button>会有反应么？为什么？能解决么 
	 */
	$('#test').click(function(argument) {    
		console.log(1); 
	}); 
	setTimeout(function() {    
		console.log(2);
	}, 0); 
	while (true) {    
		console.log(Math.random()); 
	}
	/**
	 * 不能  主线程一直处于阻塞状态  使用 webwork
	 */
	{
		/**
		 * webwork
		 */
		let work = new Work('./work')
		work.onmessage = function(e){
			console.log(e.data)
		}
		$('#test').click(function(argument) {    
			console.log(1); 
		}); 
		setTimeout(function(){    
			console.log(2);
		}, 0);

		//work.js
		while (true) {    
			postMessage(JSON.stringify({num: Math.random()}))
		}
	}

	/**
	 * genrator
	 */
	{
		function *gen(){
			while (true) {    
				console.log(Math.random()); 
			}
		}
		let g = gen()
		function run(){
			setTimeout(()=>{
				g.next()
				run()
			},500)
		}
		run()
	}
}


{
	//9.请用ES5实现ES6 Promise的原理
}


{
	var s = []; 
	var arr = s; 
	for (var i = 0; i < 3; i++) {    
		var pusher = {            
			value: "item"+i        
		},tmp;  
		if (i !== 2) {        
			tmp = []        
			pusher.children = tmp    
		} 
   		arr.push(pusher);    
   		arr = tmp; 
   	} 
	   console.log(s[0]);
	   /**
		* {value: "item"0,children: []}
	    */
}


{
	var Container = function(x) {  
		this.__value = x; 
	} 
	Container.of = x => new Container(x); 
	Container.prototype.map = function(f){    
		return Container.of(f(this.__value)) 
	} 
	Container.of(3).map(x => x + 1).map(x => 'Result is ' + x);     
	/**
	 * {__value: Result is 4}
	 */
}