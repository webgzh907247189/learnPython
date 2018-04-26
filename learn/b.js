function bingo(arrN,m){
	//数组有m个元素，下表从0 - m-1
	return arrN.reduce((result,item)=>{
		let ran = Math.floor(Math.random() * arrN.length);
		if(result.length < m){
			result.push(arrN.splice(ran, 1)[0]);
		}
		return result
	},[])
}



function transformDateToStringByFomart(date,format){
	date.toLocaleString('zh');    // 2018/4/4 下午15:08:38
	date.toLocaleString('en');    // 4/4/2018, 3:08:38 PM
	date.toLocaleString('zh', { hour12: true });        //2018/4/4 下午6:57:36
	date.toLocaleString('zh', { hour12: false });       //2018/4/4 18:57:36
	date.toLocaleString('zh', { timeZoneName: 'short' });   //2018/4/5 GMT+8 下午7:18:26
	date.toLocaleString('zh', { timeZoneName: 'long' });    //2018/4/5 中国标准时间 下午7:18:26
	date.toLocaleString('zh', { year: 'numeric',  month: 'numeric',  day: 'numeric',  hour: 'numeric',  minute: 'numeric',  second: 'numeric', });   //2018/4/5 下午7:30:17
	date.toLocaleString('zh', { year: '2-digit',  month: '2-digit',  day: '2-digit',  hour: '2-digit',  minute: '2-digit',  second: '2-digit'  });   //18/04/05 下午7:30:17

	let [ymd,hms] = date.toLocaleString('zh', { hour12: false }).split(' ')
	return `${hms} ${ymd}`
}




{
	function getBoundObj(obj,arr){
		let targetObj = Object.keys(obj).reduce((result,item)=>{
			if(arr.includes(item)){
				result[item] = obj[item]
			}

			return result
		},Object.create(null))

		return new Proxy(targetObj,{
			set(targetObj,key,value){
				let result = Reflect.set(obj,key,value)
				return result
			}
		})
	}

	let sourceObj = {keyA: 'valueA',keyB: 'valueB',keyC: 'valueC'}
	let targetObj = getBoundObj(sourceObj,['keyA', 'keyB'])
	console.log(targetObj,'targetObj') // {keyA: 'valueA', keyB: 'valueB'}

	targetObj.keyA = 'valueA for targetObj'
	console.log(sourceObj.keyA,'22') //'valueA for targetObj'

	sourceObj.keyB = 'valueB for sourceObj'
	console.log(sourceObj.keyB,'33') //'valueB for sourceObj'
}



// {
// 	function getBoundObj(obj,arr){
// 		return Object.keys(obj).reduce((result,item)=>{
// 			if(arr.includes(item)){
// 				result[item] = obj[item]
// 			}

// 			defineReactive(obj,item,obj[item])
// 			return result
// 		},{})
// 	}

// 	function defineReactive(targetObj,key,value){
// 		Object.defineProperty(targetObj,key,{
// 			set(value){
// 				// let result = Reflect.set(targetObj,key,value)
// 				return result[key] = targetObj[key]
// 			}
// 		})
// 	}

// 	let sourceObj = {keyA: 'valueA',keyB: 'valueB',keyC: 'valueC'}
// 	let targetObj = getBoundObj(sourceObj, ['keyA', 'keyB'])

// 	console.log(targetObj,'targetObj') // {keyA: 'valueA', keyB: 'valueB'}

// 	targetObj.keyA = 'valueA for targetObj'
// 	console.log(sourceObj.keyA,'22') //'valueA for targetObj'

// 	sourceObj.keyB = 'valueB for sourceObj'
// 	console.log(sourceObj.keyB,'33') //'valueB for sourceObj'
// }