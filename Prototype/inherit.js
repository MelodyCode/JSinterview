//继承实现
//创建一个父类
// 定义一个动物类
function Animal (name) {
    // 属性
    this.name = name || 'Animal';
    // 实例方法
    this.sleep = function(){
      console.log(this.name + '正在睡觉！');
    }
  }
  // 原型方法
  Animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃：' + food);
  };
  
//方法1.基于原型链的继承

