> 希望通过此次习题，大家对原型链有一定的理解。写出答案，并参考初始的图，画出题目对应的图。



![](https://n1image.hjfile.cn/res7/2018/07/02/108864dcdae52ee2007e95333f1fdd94.jpeg)

##### 1.

```javascript
function test() {
}
test.prototype.str = '123';
var obj = new test();
console.log(obj.str);
console.log(obj.__proto__);
console.log(obj.prototype);
console.log(test.__proto__);
console.log(test.prototype);  
```



##### 2.

```javascript
function test() {
    this.str = '123';
}
test.prototype.str = '456';
var obj = new test();
console.log(obj.str);
```



##### 3.

```javascript
function test() {
	this.str = '123';
}
var obj = {};
obj.prototype = new test(); 
console.log(obj.str);
```



##### 4.

```javascript
function test() {
	this.str = '123';
}
var obj = function() {
    
}
obj.prototype = new test(); 
console.log((new obj()).str);
```



##### 5.

```javascript
function test() {
	this.str = '123';
}
var obj = function(str) {
    this.str = str;
}
obj.prototype = new test(); 
var objInstance = new obj('456')
console.log(objInstance.str);
console.log(objInstance instanceof obj);
console.log(objInstance instanceof test);
```



##### 6.

```javascript
function test() {
	this.str1 = '123';
  	this.str2 = '456';
}
test.prototype.str3 = '789';
function obj(str) {
    this.str2 = str;
}
obj.prototype = Object.create(test.prototype); 
var objInstance = new obj('objStr');
console.log(objInstance.str1);
console.log(objInstance.str2);
console.log(objInstance.str3);
console.log(objInstance instanceof obj);
console.log(objInstance instanceof test);
```



##### 7.

```javascript
Object.prototype.str = 123;
function test() {
    
}
console.log((new test()).str);
```



##### 8.

```javascript
function Animal(){
　　　this.species = "动物";
}
Animal.prototype.str = '123';
function Cat(name,color){
　　　　Animal.apply(this, arguments);
　　　　this.name = name;
　　　　this.color = color;
}
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species);
console.log(cat1.str); 
```



##### 9.

```javascript
function Animal(){
　　　this.species = "动物";
}
Animal.prototype.str = '123';
function Cat(name,color){
　　　　Animal.apply(this, arguments);
　　　　this.name = name;
　　　　this.color = color;
}
var cat1 = new Cat("大毛","黄色");
var animal = new Animal();
cat1.prototype = animal;
Cat.prototype.constructor = Cat;
console.log(cat1.species);
console.log(cat1.str); 
console.log(animal.str); 
```



##### 10.

```javascript
function Animal(){
　　　this.species = "动物";
}
Animal.prototype.str = '123';
function Cat(name,color){
　　　　Animal.apply(this, arguments);
　　　　this.name = name;
　　　　this.color = color;
}
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species);
console.log(cat1.str); 
console.log(Animal.prototype.constructor);
```



