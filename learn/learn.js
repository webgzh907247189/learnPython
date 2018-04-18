function reverseString(str) {
	return [...str].reverse().join('')
}



function filter(arr,cb){
	return arr.reduce((result,item)=>{
		return result = item && [...result,item] || result
	},[]).filter(cb)
}

function filter(arr,cb){
	return Array.from(arr,item => item && item || false).filter( item => item && item).filter(cb)
}

function filter(arr,cb){
	return arr.filter( item => item && item).filter(cb)
}






function getElementsByClassName(HTMLElement,className){
	return Array.from(document.querySelector(HTMLElement).querySelectorAll(className))
}



function getBoundObj(obj,arr){
	Object.keys(obj).reduce((result,item)=>{
		if(!result.includes(item)){
			Reflect.deleteProperty(obj,item)
		}
		return result
	},arr)
	return obj
}


function getBoundObj(obj,arr){
	let object = Object.create(null)
	for(let item of arr){
		object[item] = obj[item]
	}
	return object
}

// Object.defineProperty(target,key,{
//     get(){
//         return key.split('.').map((item,index)=>{
//             return target && (target = target[item]) || undefined
//         }).pop()
//     }
// })




function deepClone(targetObj,obj = {}){
	for (let item of Object.keys(targetObj)){
		if(typeof targetObj[item] === 'object'){  //keyB.keyBB.constructor 正则
			obj[item] = Array.isArray(obj[item]) ? [] : {}
			deepClone(targetObj[item],obj[item])
		}else{
			obj[item] = targetObj[item]
		}
	}
	return obj
}
function assign(targetObj,sourceObj,isDeepCopy = false){
	if(!isDeepCopy){
		return Object.assign(targetObj,sourceObj)
	}else{	
		//深拷贝
		return deepClone(Object.assign(targetObj,sourceObj))
	}
}


function assign(targetObj,sourceObj,isDeepCopy = false){
	if(!isDeepCopy){
		return {
			...targetObj,
			...sourceObj
		}
	}else{	
		//深拷贝
		return deepClone(Object.assign(targetObj,sourceObj))
	}
}





function sum(){
	let result = Array.from(arguments,(item)=>{
		return this.sumNumber += item
	},{sumNumber: 0})
	return function(){

	}
}

function sum(){
	return new Count()
}