/* 
fun.bind(thisArg[, arg1[, arg2[, ...]]])
方法创建一个新的函数， 
当这个新函数被调用时其this置为提供的值，
其参数列表前几项置为创建时指定的参数序列。
*/
/*步骤：
1）改变this指向
2）返回一个绑定this的函数
3）接收多个参数
4）支持柯里化传参
*/

Function.prototype.mybind = function(obj) {
    if (typeof this !== 'function') {
        throw new TypeError("Error")
    }
    //保存this
    let self = this
    let args = [...arguments].slice(1)
    return function(){
        return self.apply(obj,args.concat([...arguments]))
    }
}
//测试
let Person = {
    name: 'Tom',
    say(age) {
        console.log(this)
        console.log(`我叫${this.name}我今年${age}`)
    }
}

// 先看代码执行效果
Person.say() //我叫Tom 
Person1 = {
    name: 'Tom1'
}
let fn = Person.say.mybind(Person1)
fn()
fn(18)

// 我们尝试用原生方法call来实现this指向Person1
//Person.say.call(Person1) //我叫Tom1

