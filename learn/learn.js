function reverseString(str) {
	return [...str].reverse().join('')
}


function filter(arr,cb){
	return arr.filter(cb)
}

function getElementsByClassName(){

}

function getBoundObj(obj,arr){
	for(let item of arr){
		obj[item]
	}
	return 
}

function sum(){
	Array.from(arguments,(item)=>{
		return this.sumNumber += item
	},{sumNumber: 0})
	return sum()
}