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
}