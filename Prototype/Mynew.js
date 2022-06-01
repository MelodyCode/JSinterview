/* new 原理：
    1）创建一个新对象
    2）将对象与构造函数通过原型链链接起来
    3）将构建函数中this绑定到新建的函数对象上
    4）判断构建函数的返回类型，若原始值则忽略，若返回对象，则正常处理
*/
/* 针对返回值的处理：
1）当构造函数返回了非null对象时
执行var x = new X()，此时只是将X作为普通的函数执行，
函数执行的返回值直接作为变量x的值，变量x不是类X的实例化对象，X.prototype也不是变量x的原型。
2）其他情况（构造函数无返回值、返回值不是对象、返回值是null）
其他所有情况下执行var x = new X()时，
构造函数会将this赋值给变量x，
且会执行x.__proto__ = X.prototype，
将实例化对象的原型设置为对应的类的prototype对象，
从而实现对象的实例化。
*/
// 定义一个动物类
function Animal (name) {
    // 属性
    this.name = name || 'Animal';
    // 实例方法
    this.sleep = function(){
      console.log(this.name + '正在睡觉！');
    }
    return 1
    /*返回非null对象,则不会实例化，返回值是obj,此时result 的值为返回的obj

    obj = {
      a:1,
      b:2
    }
    return obj*/

  }
  // 原型方法
  Animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃：' + food);
  };

function myNew(cfunc,...args) {
    const obj = {}
    obj.__proto__ = cfunc.prototype
    let result = cfunc.apply(obj,args)
    //若有返回值切是个对象，返回执行的结果，否则返回创建的对象
    if (result instanceof Object) {
        return result
    } else {
        return obj
    }

}

let cat = myNew(Animal,'cat')
console.log(cat)
