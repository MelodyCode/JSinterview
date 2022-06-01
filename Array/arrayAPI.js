//数组常见API

//————————影响原数组——————
//1.增
//push
arr1 = [1,2,3,6,7]
console.log('push()接受任意参数并添加至末尾，返回数组最新长度',arr1.push(1,3,4,5,6),arr1.push(10))
console.log('push方法影响原数组',arr1)
//unshift
arr2 = [1,2,3,4,5]
console.log('unshift()接受任意参数并添加至前面，返回数组最新长度',arr2.unshift(999,9999,9999),arr2.unshift(10101))
console.log('unshift方法影响原数组',arr2)
//splice(开始位置，要删除元素数量，插入的元素)
arr3 = [5,4,3,2,1]
arr3.splice(1,0,'insert')
console.log('splice插入元素，影响原数组',arr3)
//2.删
//pop
arr4 = [0,9,8,7,6]
console.log('pop()删除最后一项，返回被删除的值',arr4.pop(),arr4)
//shift
arr5 = ['a','b','c','d']
console.log('shift删除第一项，返回被删除的值',arr5.shift(),arr5)
//splice(开始位置，要删除元素数量，插入的元素)
arr6 = ['d','c','b','a']
console.log('splice，返回包含删除元素数组',arr6.splice(1,2),arr6)
//3.改
arr7 = [10,9,8,7,6]
console.log('splice，返回包含删除元素数组',arr7.splice(1,2,1,2),arr7)
//4.查
arr8 = [1,2,3,4,5,6,7,8]
console.log('返回要查找元素在数组中的位置，未找到则返回-1',arr8.indexOf(2))
console.log('找到返回true，未找到则返回false',arr8.includes(2))
console.log('找到返回第一个匹配的元素',arr8.find(item => item>2))

// ------不改变原数组----
//1.增
arr9 = [1,2,2,3,3,3]
console.log('concat创建一个当前数组的副本，并把他的参数添加到副本末尾，返回新数组',arr9.concat([4,5,5]),arr9)
//2.删
//slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
arr10 = [333,222,1,10,99]
console.log('slice方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝，返回新数组',arr10.slice(-1),arr10.slice(2),arr10.slice(0,2),arr10)

//-----排序---
//1.reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。
arr11 = [111,222,333]
console.log('reverse反转数组并改变原数组',arr11.reverse(),arr11)
//2.sort()
arr12  =[1,2,3,6,7,1,2]
console.log('sort数组排序',arr12.sort(),arr12)

//----迭代----
//都不改变原数组
//1.map方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
//2.filter中callback返回true的item会组成数组之后返回
//3.every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
//4.some()若有一项函数返回true，这个方法返回true
//5.forEach()对每一项运行传入的函数，无返回值



