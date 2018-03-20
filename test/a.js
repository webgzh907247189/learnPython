var someObj = {
    a: {
        b: 123
    },
    b: 456
};
get(someObj, 'b'); // 456
get(someObj, 'c'); // undefined
get(someObj, 'a.b'); // 123
get(someObj, 'a.b.c.d'); // undefined

function get() {
	let [target,keys=''] = Array.from(arguments) // ??
	let num;
	return keys.split('.').map((item,index)=>{
		let value = Reflect.get(target,item)
		if(value && Object.keys(value).length){
			target = value
		}
		num = index
		return value 
	})[num]



/**
 * @param {Number} x 将要比较的数值。
 * @param {Number} y 将要比较的数值。
 * @param {?} 若需要其他参数，可自行设计。
 * @returns {Boolean} x 与 y 是否在精度范围内相等
*/

// equal(1, 1) // true
// equal(1, 2) // false
// equal(0.2 + 0.1 , 0.3) // true
// equal(0.2 * 0.1 , 0.02) // true



/**
 * @param {String} source 源段落文本。
 * @param {?} 若需要其他参数，可自行设计。
 * @returns {Array} 排序后的数组
*/


var source = `Since his code is opensource, I have decided to fix it and integrate it into my extension SteemPlus. Our code structures being very different, this was a two men jobs for several weeks but we're finally done.`
dictionary(source);
// ["A", "And", "Being"... "Since", "SteemPlus.", "Structures", "This", "To", "Two", "Very", "Was", "We're", "Weeks"]




// var someObj = {
//     a: {
//         b: 123
//     },
//     b: 456
// };
// get(someObj, 'b'); // 456
// get(someObj, 'c'); // undefined
// get(someObj, 'a.b'); // 123
// get(someObj, 'a.b.c.d'); // undefined

function getValue(target,key,value){
    let obj = new Proxy(target,{
        set(target,key,value){
            return target[key] = '1111'
        },
        get(target,key){
            return target[key] = '222'
        }
    })
    return obj[key] = value

}
var obj = {name: '1111'}
getValue(obj,'name','88888')


function getValue(target,key){
    let obj = new Proxy(target,{
        set(target,key,value){
            return target[key] = '1111'
        },
        get(target,key){
            return target[key]
        }
    })
    return obj[key]
}
var someObj = {a: {b: 123},b: 456};
getValue(someObj,'name')


function getValue(target,key){
    let obj = new Proxy(target,{
        get(target,key){
            let keys = key.split('.')
            return keys.map((item,index)=>{

                // if(target){
                //     return target = target[item]
                // }
                // return undefined

                return target && (target = target[item]) || undefined
            })[keys.length-1]
        }
    })
    return obj[key]
}
var someObj = {a: {b: 123},b: 456};
getValue(someObj,'a.b.c')


/**
 * @param {Array|Object} arr 目标数组或类数组。
 * @param {Function} 循环操作。
 * @param {?} 若需要其他参数，可自行设计。
 * @returns {undefined}
*/

var someArr = [1,2,3];
var anotherArr = [{
    key: 'foo'
}, {
    key: 'bar'
}];
var arrLike = {
    '0': 'foo',
    '1': 'bar',
    '2': 'baz',
    'lenth': 3
}

forEach(someArr, (v) => {
    console.log(v);
});
// 1
// 2
// 3
forEach(anotherArr, (v) => {
    console.log(v.key);
});
// foo
// bar
forEach(arrLike, (v.key) => {
    console.log(v)
});
// foo
// bar
// baz

function forEach(){
    let [target,fn] = Array.from(arguments)
    Array.from(target,fn)
}

function forEach(){
    let [target,fn] = Array.from(arguments)
    Array.from(target).map(fn)
}

function forEach(){
    let [target,fn] = Array.from(arguments)
    Array.from(target).map(fn)
}




/**
 * @param {Number|String} adder 累加数或字符串。
 * @param {?} 若需要其他参数，可自行设计。
 * @returns {Number|String} 累加结果
*/

sum() //0
sum(1) //1
sum(1, -2, 3) //2

var times = Math.floor(Math.random() * 10);
var args = [];
for(var idx = 0; idx < times; idx++) {
    args.push(1);
}
sum(...args) // 如果 times 随机为 3，则输出结果为 3 。


function sum(){
    return Array.from(arguments).reduce((result,item)=>{
        return result += item
    },0)
}

function sum(){
    return Array.from(arguments,function(item){
        return this.sum += item
    },{sum: 0})[arguments.length - 1] || 0
}

function sum(){
    let sum = 0
    for(let item of Array.from(arguments)){
        sum += item
    }
    return sum
}







/**
 * @param {ALL} target 累加数或字符串。
 * @param {?} 若需要其他参数，可自行设计。
 * @returns {String} 目标的类型         ?指责连
*/

getType(1); //"Number"
getType('1'); //"String"
getType({}); //"Object"
getType([]); //"Array"
getType(null); //"null"
getType(() => {}); //"function"

function getType(params){
    let str = typeof(params)
    if(Object.is(typeof(params),'object')){
        return Array.isArray(params) ? "Array" : Object.is(params,null) ? null : 'Object'
    }
    return str
}

function getType(params){
    let str = typeof(params)
    return Object.is(typeof(params),'object')) && Array.isArray(params) && "Array" || Object.is(params,null) && null || 'Object'
}

function getType(params){
    return {
        'number': 'Number',
        'string': 'String',
        'function': 'function',
        'object': Array.isArray(params) ? "Array" : Object.is(params,null) ? null : 'Object'
    }[typeof(params)]
}