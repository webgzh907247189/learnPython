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



function transformDateToStringByFomart(){
	//https://juejin.im/post/5ac472016fb9a028c22afa9d
}