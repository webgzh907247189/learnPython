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