//判断一个数组是不是另一个数组的子集

var arr=[1,4,5,null,NaN,undefined,Infinity,'']
var brr=[0,1,2,3,4,null,NaN,undefined,Infinity,'']


Array.prototype.subsetTo= function(arr) {
    return this.every(v => arr.includes(v))
}


console.log(arr.subsetTo(brr))