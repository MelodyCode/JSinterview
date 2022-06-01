//数组去重
//1.ES6 set关键字
function unique1(arr) {
    return [...new Set(arr)]
}
function unique2(arr) {
    return Array.from(new Set(arr))
}
//2.Es5中最常用的
function unique3(arr) {
    for(i = 0;i < arr.length;i++) {
        for (j = i + 1; j < arr.length;j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j,1)
                j--;
            }
        }
    }
    return arr
}
//3.includes
function unique4(arr) {
    var res = []
    for (let i = 0; i < arr.length;i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}
//4.filter
function unique5(arr) {
    return arr.filter(function(item,index,arr) {
        //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
        return arr.indexOf(item,0) === index
    })
    
}
//5.indexOf
function unique6(arr) {
   if (!Array.isArray(arr)) {
       return
   }
   var res = []
   for (let i = 0;i < arr.length;i++) {
       //res数组中不含当前元素则push
       if(res.indexOf(arr[i]) === -1) {
           res.push(arr[i])
       }
   }
   return res
    
}
//6.includes + reduce
function unique7(arr) {
    return arr.reduce((pre,cur) => {
        if (pre.includes(cur)) {
            return pre
        } else {
            return [...pre,cur]
        }
    },[])
}

arr  = [1,2,2,2,2,2,4,4,4,5,6,7,3,2]
console.log(unique7(arr))