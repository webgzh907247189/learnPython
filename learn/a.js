// https://cloud.tencent.com/developer/labs/gallery?page=2




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

function equal(arg1,arg2){
    return Math.abs(arg1 - arg2).toFixed(2) == 0
}

function equal(arg1,arg2){
    return Object.is(Math.trunc(arg1),Math.trunc(arg2))   //法用于去除一个数的小数部分，返回整数部分
}

function equal(arg1,arg2){
    return Math.abs(arg1 - arg2) < Number.EPSILON // JavaScript 能够表示的最小精度 （小数点后面有连续 51 个零。这个值减去 1 之后，就等于 2 的 -52 次方）
}










/**
 * @param {String} source 源段落文本。
 * @param {?} 若需要其他参数，可自行设计。
 * @returns {Array} 排序后的数组
*/


var source = `Since his code is opensource, I have decided to fix it and integrate it into my extension SteemPlus. Our code structures being very different, this was a two men jobs for several weeks but we're finally done.`
dictionary(source);
// ["A", "And", "Being"... "Since", "SteemPlus.", "Structures", "This", "To", "Two", "Very", "Was", "We're", "Weeks"]
function dictionary(str){
    return [...new Set(str.split(' '))].map( item => `${item[0].toUpperCase()}${item.slice(1)}` ).sort()
}

function dictionary(str){
    return [...new Set( str.split(' ').reduce((result,item)=>{
        return result = [...result,`${item[0].toUpperCase()}${item.slice(1)}`]
    },[]) )].sort()
}













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



function getValue(target,key){
    let obj = new Proxy(target,{
        get(target,key){
            return key.split('.').map((item,index)=>{
                return target && (target = target[item]) || undefined
            }).pop()
        }
    })
    return obj[key]
}


function getValue(target,key){      
    let obj = new Proxy(target,{
        get(target,key){
            return key.split('.').reduce((result,item)=>{
                return result && (result = result[item]) || undefined
            },target)
        }
    })
    return obj[key]
}


function getValue() {
    let [target,keys=''] = [].slice.call(arguments)
    return keys.split('.').map((item,index)=>{
        let value = Reflect.get(target,item)
        if(value && Object.keys(value).length){
            target = value
        }
        return value 
    }).slice(-1)[0]
}


function getValue(target,key){
    let keys = key.split('.')    
    if(keys.length == 1){
        return target[key]
    }
    
    Object.defineProperty(target,key,{
        get(){
            return key.split('.').map((item,index)=>{
                return target && (target = target[item]) || undefined
            }).pop()
        }
    })
    return target[key]
}








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
    length: 3
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
forEach(arrLike, (v) => {
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
    let [target,fn] = [].slice.call(arguments)
    for (let item of Array.from(target)){
    	fn(item)
    }
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

function sum(){
    let sum = 0
    let next = true
    let resultArr = Array.from(arguments).entries()
    while(next){
        let result = resultArr.next()
        // if(!result.done){
        //     sum += result.value[1]
        // }else{
        //     next = false
        // }

        result.done && (next = false) || (sum += result.value[1])
    }
    return sum
}




/*  ????????????  https://www.jianshu.com/p/a8b4eaa21f98
http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84-entries%EF%BC%8Ckeys-%E5%92%8C-values*/
function sortArr(arr){
    var goNext = true;
    var entries = arr.entries();
    while(goNext){
        var result = entries.next();
        if(result.done !== true){
            result.value[1].sort((a,b) => a-b);
            goNext = true;
        }else{
            goNext = false;
        }
    }
    return arr;
}







/**
 * @param {ALL} target 累加数或字符串。
 * @param {?} 若需要其他参数，可自行设计。
 * @returns {String} 目标的类型         
*/

getType(1); //"Number"
getType('1'); //"String"
getType({}); //"Object"
getType([]); //"Array"
getType(null); //"null"
getType(() => {}); //"function"

function getType(params){
    if(Object.is(typeof(params),'object')){
        return Array.isArray(params) ? "Array" : Object.is(params,null) ? null : 'Object'
    }
    return typeof(params)
}


function getType(params){
    function getWord(str){
        return `${str[0].toUpperCase()}${str.slice(1)}`
    }

    return Array.isArray(params) && "Array" || !Object.is(params,null) && getWord(typeof(params)) || null
}


function getType(params){
    return {
        'number': 'Number',
        'string': 'String',
        'function': 'function',
        'object': Array.isArray(params) ? "Array" : Object.is(params,null) ? null : 'Object'
    }[typeof(params)]
}


{   
    function getTypeArray(params){
        return Array.isArray(params) && 'Array' || 'nextSuccessor'
    }

    function getTypeNull(params){
        return !Object.is(params,null) && 'nextSuccessor' || null
    }

    function getTypeOther(params){
        function getWord(str){
            return `${str[0].toUpperCase()}${str.slice(1)}`
        }
        return getWord(typeof(params))
    }

    class accusationChain{
        constructor(fn,successor){
            this.fn = fn
            this.successor = null
        }

        setNextSuccessor(successor){
            return this.successor = successor;
        }

        passRequest(){
            let result = this.fn.apply(this,arguments)

            if(result == 'nextSuccessor'){
                return this.successor.passRequest.apply(this.successor,arguments)
            }
            return result
        }
    }

    let getTypeArrayChain = new accusationChain(getTypeArray)
    let getTypeNullChain = new accusationChain(getTypeNull)
    let getTypeOtherChain = new accusationChain(getTypeOther)

    getTypeArrayChain.setNextSuccessor(getTypeNullChain)
    getTypeNullChain.setNextSuccessor(getTypeOtherChain)

    function getType(params){
        return getTypeArrayChain.passRequest(params)
    }
}










function getDownUrl(url,paraObj={}){
    return Object.keys(paraObj).reduce((result,item)=>{
        return result += paraObj[item] && `${item}=${encodeURIComponent(paraObj[item])}&` || ''
    },`${url}?`).slice(0,-1)
}