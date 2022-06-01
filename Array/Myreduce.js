//自己实现reduce方法
/*
reduce(function(previousValue, currentValue, currentIndex, array) { .... }, initialValue)
----callbackFn-----
一个 “reducer” 函数，包含四个参数：

previousValue：上一次调用 callbackFn 时的返回值。在第一次调用时，若指定了初始值 initialValue，其值则为 initialValue，否则为数组索引为 0 的元素 array[0]。
currentValue：数组中正在处理的元素。在第一次调用时，若指定了初始值 initialValue，其值则为数组索引为 0 的元素 array[0]，否则为 array[1]。
currentIndex：数组中正在处理的元素的索引。若指定了初始值 initialValue，则起始索引号为 0，否则从索引 1 起始。
array：用于遍历的数组。
----initialValue 可选----
作为第一次调用 callback 函数时参数 previousValue 的值。若指定了初始值 initialValue，则 currentValue 则将使用数组第一个元素；否则 previousValue 将使用数组第一个元素，而 currentValue 将使用数组第二个元素。
*/
Array.prototype.MyReduce = function(callbackFn,initialValue) {
    const arr = this;
    let total = initialValue || arr[0]
    for (let i  = initialValue ? 0:1;i < arr.length;i++) {
        total = callbackFn(total,arr[i],i,arr)
    }
    return total;
    
}
arr = [1,2,3,4,5]
sum = arr.MyReduce((pre,cur) => {return pre + cur},0)
console.log(sum)