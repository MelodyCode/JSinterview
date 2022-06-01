//给定一个数组，返回数组中重复出现的元素
function deplicate(arr) {
    var a = arr.sort()
    var result = []
    for (let i = 0; i < a.length;i++) {
        if(a[i] == a[i-1] && result.indexOf(a[i] == -1))
            result.push(a[i])
    }
    return result
}
arr = [1,2,3,6,7,3,4,0,2]
arr2 = ['lll','a','g','b','lll','a']
console.log(deplicate(arr2))