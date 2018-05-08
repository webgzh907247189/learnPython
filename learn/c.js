//2 函数防抖
{
	let timer = null
	function getDate(){
		clearTimeout(timer)

		timer = setTimeout(function(){
			getList()
		},500)
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
		},500)
	}
}


//代理模式