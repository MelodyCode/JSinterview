Array.prototype.myMap = function(fn,thisvalue) {
    let rea = []
    thisvalue = thisvalue || []
    let arr = this
    for (let i = 0;i < arr.length;i++) {
        res.push(fn.call(thisvalue,arr[i],i,arr))
    }
    return res

}