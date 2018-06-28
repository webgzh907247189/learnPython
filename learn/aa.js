function test(num){
    console.log(num)
    this.count++;
}
test.count = 0;
var i = 0;
for(var i=0; i<3; i++){
    test(i)
}
console.log(test.count,'test.count')

// 0  1  2  0 "test.count"



function test(num){
	console.log(num)
	obj.count++;
}
var obj = {};
obj.count = 0;
var i = 0;
for(var i=0; i<3; i++){
	test(i)
}
console.log(obj.count,'obj.count')

// 0  1  2  3 "obj.count"



function test(num){
    console.log(num)
    test.count++;
}
test.count = 0;
var i = 0;
for(var i=0; i<3; i++){
    test(i)
}
console.log(test.count,'test.count')

// 0  1  2  3 "test.count"




function test(num){
    console.log(num)
    this.count++;
}
test.count = 0;
var i = 0;
for(var i=0; i<3; i++){
    test.call(test,i)
}
console.log(test.count,'test.count')

// 0  1  2  3 "test.count"




function test(){
   var str = '123'
   this.test2();
}

function test2(){
	console.log(this.str)
}
test()
//undefined




function test(){
	console.log(this.str)
}

var obj = {
	str: '123',
	test: test
}

var str = '456'
test()
setTimeout(obj.test,0)
obj.test()
//undefined  456
//456        123
//123        456



function test(){
	console.log(this.str)
}

var obj1 = {
	str: 123,
	test: test
}

var obj2 = {
	str: 456,
	test: test
}

obj1.test()
obj2.test()
obj1.test.call(obj2)
obj2.test.call(obj1)
// 123
// 456
// 456
// 123






function showThis(){
	console.log(this)
}

function showStrictThis(){
	'use strict'
	console.log(this)
}

showThis()
showStrictThis()
//window
// undefined






var boss = {
	name: 'boss',
	returnthis(){
		return this
	}
}
console.log(boss.returnthis() === boss)
//true


var boss1 = {
	name: 'boss1',
	returnthis(){
		return this
	}
}

var boss2 = {
	name: 'boss2',
	returnthis(){
		return boss1.returnthis()
	}
}

var boss3 = {
	name: 'boss3',
	returnthis(){
		var returnThis = boss1.returnthis()
		return returnthis()
	}
}

console.log(boss1.returnthis())
console.log(boss2.returnthis())
console.log(boss3.returnthis())
//boss1
//
//



function returnthis(){
	return this
}
var boss1 = {name: 'boss1'}
returnthis()
returnthis.call(boss1)
returnthis.apply(boss1)
//window
//boss1
//报错  boss1




function returnthis(){
	return this
}
var boss1 = {name: 'boss1'}
var boss1ReturnThis = returnthis.bind(boss1)
boss1ReturnThis()
// boss1

var boss2 = {name: 'boss2'}
boss1ReturnThis.call(boss2)
//boss1



function showThis () {
    console.log(this)
}
showThis() // window
new showThis() // showThis

var boss1 = { name: 'boss1' }
showThis.call(boss1) // boss1
new showThis.call(boss1) // boss1？  报错

var boss1showThis = showThis.bind(boss1)
boss1showThis() // 报错  
new boss1showThis() // ？





function callback (cb) {
	cb()
}
callback(() => { console.log(this) }) // ?
var boss1 = {
	name: 'boss1',
	callback: callback,
	callback2 () {
	  callback(() => { console.log(this) })
	}
}
boss1.callback(() => { console.log(this) }) // ?
boss1.callback2(() => { console.log(this) }) // ?