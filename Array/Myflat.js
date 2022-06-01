//数组扁平化

//1.reduce方法
function flat(arr) {
    return arr.reduce((pre,cur) => {
        if (Array.isArray(cur)) {
            return pre.concat(flat(cur))
        } else {
            return pre.concat(cur)
        }
    },[])
}
//2.ES6语法
//参数是depth = 维数-1，不知维度参数是Infinity
//console.log(arr.flat(1))

//3.for循环
function flatten(arr) {
    var res = []
    for (let i = 0; i < arr.length;i++) {
        if (Array.isArray(arr[i])) {
            //res = res.concat(flatten(arr[i]))
            res.push(...flatten(arr[i]))
        } else {
            res.push(arr[i])
        }
    }
    return res
}
//测试代码
arr = [1,2,[3,4],[5,6,[7,8]]]
console.log(flat(arr))
console.log(flatten(arr))