
function test() {
}
test.prototype.str = '123';
var obj = new test();
console.log(obj.str);
//123 

console.log(obj.__proto__);
//test.protype

console.log(obj.prototype);
//Function     ？？？？   undefined

console.log(test.__proto__);
//Function.prototype

console.log(test.prototype);  
//obj.__proto__  


// ##### 2.
function test() {
    this.str = '123';
}
test.prototype.str = '456';
var obj = new test();
console.log(obj.str);
//123



// ##### 3.
function test() {
	this.str = '123';
}
var obj = {};
obj.prototype = new test(); 
console.log(obj.str);
//undefined  (在原型上找)



// ##### 4.

function test() {
	this.str = '123';
}
var obj = function() {
    
}
obj.prototype = new test(); 
console.log((new obj()).str);
//123


// ##### 5.

function test() {
	this.str = '123';
}
var obj = function(str) {
    this.str = str;
}
obj.prototype = new test(); 
var objInstance = new obj('456')
console.log(objInstance.str);
//456

console.log(objInstance instanceof obj);
//true

console.log(objInstance instanceof test);
//true


// ##### 6.

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
//123  ??? undefined

console.log(objInstance.str2);
//objStr

console.log(objInstance.str3);
//789

console.log(objInstance instanceof obj);
//true

console.log(objInstance instanceof test);
//true


// ##### 7.

Object.prototype.str = 123;
function test() {
    
}
console.log((new test()).str);
//123



// ##### 8.

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
//动物

console.log(cat1.str); 
//undefined



// ##### 9.
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
//动物

console.log(cat1.str); 
//123

console.log(animal.str); 
//123


// ##### 10.
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
//动物

console.log(cat1.str); 
//123

console.log(Animal.prototype.constructor);
//Function


