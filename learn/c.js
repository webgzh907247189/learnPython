//1  Promise.race
function timeout(){
	return new Promise((resolve,reject)=>{
		setTimeout(function(){
			reject(new Error('超时'))
		},5000)
	})
}

function fetch(){
	return new Promise((resolve,reject)=>{
		setTimeout(function(){
			resolve('111111111111')
		},2000)
	})
}

await Promise.race([fetch(),timeout()])


$.ajax({
	url : 'xxx',
	timeout : 3000,
	error(xhr,textStatus){
		console.log(`error: ${textStatus}`);
	},
	seccess(data){
		console.log(`${data}`)
	}
});



//2 函数防抖
function getList(){
	console.log('获取到数据了')
}

let delay = 1000


function getDate(){
	let timer = null
	return function(){
		clearTimeout(timer)

		timer = setTimeout(function(){
			getList()
		},delay)
	}
}
let getDateList = getDate()


// 函数节流
function getDate(){
	let isFetch = true
	return function(){
		if(!isFetch){
			return
		}

		isFetch = false

		setTimeout(function(){
			getList()
			isFetch = true
		},delay)
	}
}
let getDateList = getDate()
