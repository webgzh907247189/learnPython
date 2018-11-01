alert(a)
a();
var a=3;
function a(){
	alert(10)
}
alert(a)
a=6;
a();



/**
 *	function
 *  10
 *  3
 *  报错
 */


/**
 * 词法作用域
 * 变量的名字 和 函数的名字 相同  ->  并且变量未赋值  ->  此变量被忽略
 *
 * 三种阻止GC回收变量   eval + try catch + 闭包
 */
function a(){}
var a
console.log(a)

/**
 * function a(){}
 */



this.a = 20;
var test = {
	a: 40,
	init:()=> {
	 	console.log(this.a);
		function go() {
		 	// this.a = 60;
		 	console.log(this.a);
		}
	 	go.prototype.a = 50;
		return go;
	}
};
// var p = test.init(); 
// p();
// new(test.init())();  new p()

/**
 * 20
 * 20
 *
 * 20 50
 */



<ul>
	<li>1</li>
	<li>2</li>
	<li>3</li>
	<li>4</li>
	<li>5</li>
	<li>6</li>
</ul>
{
	var list_li = document.getElementsByTagName("li");
	for (let i = 0; i < list_li.length; i++) {
		list_li[i].onclick = function() {
			console.log(i);
		}
	}
}
{
	var list_li = document.getElementsByTagName("li");
	for (var i = 0; i < list_li.length; i++) {
		function(i){
			list_li[i].onclick = function() {
				console.log(i);
			}
		}(i)
	}
}
{
	var list_li = document.getElementsByTagName("li");
	for (var i = 0; i < list_li.length; i++) {
		list_li[i].onclick = function() {
			console.log(this.innereHTML);
		}
	}
}

function test(m) {
	m = {v:5}
}
var m = {k: 30};
test(m);
alert(m.v); 

/**
 * undefined 值引用
 */


function yideng() {
	console.log(1);
}
(function () {
	if (false) {
		function yideng() {
			console.log(2);
		}
	}
	yideng();
})();
/**
 * 2 xxx  报错
 */


var x = 50
10 - parseInt(x/100*10)




var a = 'abc'
/**
 * [...a]
 * a.split('')
 *
 * Array.from(a,(item)=>{
 * 	return item
 * })
 */


/**
 * 汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。
 * Cruze子类实现父类颜色是红色，价格是140000,售卖方法实现输出如下语句
 * ：将 红色的Cruze买给了小王价格是14万。
 */


class Car{
	constructor(color,price){
		this.color = color;
		this.price = price;
	}

	seal(){
		console.log('父类的售卖')
	}
}

class Cruze extends Car{
	constructor(color,price){
		super(color,price)
	}

	seal(){
		// console.log(`${this.color}的${this.constructor.name}让老王接盘了，价格是${this.price}`)
	}
}

let a = new Cruze('red','14000')
a.seal()



class Car{
	constructor(color,price){
		this.color = color;
		this.price = price;
	}

	seal(){
		 console.log(`${this.color}的${this.constructor.name}让老王接盘了，价格是${this.price}`)
	}
}

class Cruze extends Car{
	constructor(color,price){
		super(color,price)
	}
}

let a = new Cruze('red','14000')
a.seal()


class Car{
	constructor(color,price){
		this.color = color;
		this.price = price;
	}

	@a
	seal(){
		 console.log(`${this.color}的${this.constructor.name}让老王接盘了，价格是${this.price}`)
	}
}

function a(traget,value,descripton){
	let fn = descriptor.value
	descriptor.value = (...argums)=>{
		console.log(argums)  //argums 是一个数组 
		return fn.apply(null,argums)
	}

	return descriptor
}

class Cruze extends Car{
	constructor(color,price){
		super(color,price)
	}
}

let a = new Cruze('red','14000')
a.seal()



// async await Promise


var length = 10;
function fn() {
	console.log(this.length);
}
var yideng = {
	length: 5,
	method: function (fn) {
		fn();
		arguments[0]();
	}
};
yideng.method(fn, 1);

/**
 * 10
 * 2  arguments 指的是实参的长度  ->  函数的this指向 arguments
 */