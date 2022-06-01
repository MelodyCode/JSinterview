//instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
//语法object instanceof constructor
function Myinstanceof(obj,constructor) {
    //如果是基本数据类型直接返回false
    if(typeof obj !== 'object' || obj === null) return false
    while (obj.__proto__) {
        if (obj.__proto__ === constructor.prototype){
            return true
        }
        obj = obj.__proto__
    }
    return false
}
//test
var simpleStr = "This is a simple string";//false
var myString  = new String();
var newStr    = new String("String created with constructor");
var myDate    = new Date();
var myObj     = {};
var myNonObj  = Object.create(null);//false

