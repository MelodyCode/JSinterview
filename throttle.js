//节流
//n秒内只运行一次，若在n秒内重复触发，只有一次生效
//函数节流的目的，是为了限制函数一段时间内只能执行一次。因此，定时器实现节流函数通过使用定时任务，延时方法执行。在延时的时间内，方法若被触发，则直接退出方法
//滚动加载，加载更多
function throttle(fn,delay){
    let timer
    return function() {
        let context = this
        let args = arguments
        //在delay时间内，方法被触发则退出方法
        if (timer)  return;
        timer = setTimeout(function() {
            fn.apply(context,args)
            timer = null// 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
        },delay)

    }
}
function testthrottle(e,content) {
    console.log(e,content)
}
var testthrottleFn = throttle(testthrottle,1000)
document.onmousemove = function(e) {
    testthrottleFn(e,'throttle')
}