//实现深拷贝
//对比浅拷贝，浅拷贝，指的是创建新的数据，这个数据有着原始数据属性值的一份精确拷贝
//如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址
//即浅拷贝是拷贝一层，深层次的引用类型则共享内存地址
//深拷贝开辟一个新的栈，两个对象属完成相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性
const obj1 = {
	age:20,
	name:'XXX',
	address:{
		city:'Beijing'
	},
	arr:['a','b','c']
}

//const obj2 = obj1;//浅拷贝
//obj2.address.city = "Shanghai"
//console.log(obj1,obj2)
function deepClone(obj) {
    // obj是null，或者不是对象和数组，直接返回
    if (typeof obj !== 'object' || obj == null)
        return obj
    //初始化
    let result;
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        // 保证key不是原型的属性
        //是用来判断一个对象是否有你给出名称的属性或对象。不过需要注意的是，此方法无法检查该对象的原型链中是否具有该属性，该属性必须是对象本身的一个成员
    	if (obj.hasOwnProperty(key)) {
    		//递归调用!!!!!处理深层
    		result[key] = deepClone(obj[key])
    	}
    }
    return result

}
const obj3 = deepClone(obj1)
obj3.address.city = '上海'
console.log(obj1,obj3)
