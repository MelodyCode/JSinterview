//防抖debounce
//n秒后再执行该事件，若在n秒内被重复触发，则重新计时
//鼠标一直移动10秒，在10s + wait后执行函数func
//一段时间连续触发的时间只在最后执行一次
//使用场景：搜索框搜索输入
function debounce(func, wait) {
    let timeout;
    return function() {
        //取debounce的执行作用域this
        let context = this;
        let args = arguments
        //timer不为空，则重新计时,可用于取消setTimeout设置的函数，取消定时器
        if (timeout) clearTimeout(timeout);
        //apply指向调用debounce的对象，相当于context.func(args)
        //返回整型数值id,是setTimeout的唯一标识符
        timeout = setTimeout(function() {
            func.apply(context,args)
        },wait);
    }
}
//立即执行版
//测试
function testdebounce(e,content) {
    console.log(e,content)
}
var testdebounceFn = debounce(testdebounce,1000)
document.onmousemove = function(e) {
    testdebounceFn(e,'debounce')
}