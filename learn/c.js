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




let delay = 500
//2 函数防抖
{
	let timer = null
	function getDate(){
		clearTimeout(timer)

		timer = setTimeout(function(){
			getList()
		},delay)
	}
}

// 函数节流
{
	let isFetch = true
	function getDate(){
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