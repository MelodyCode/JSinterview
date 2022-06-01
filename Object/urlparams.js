//解析 urlparams 为js对象
//1.方法一

function queryToObj1() {
    const res = {}
    //从？后开始
    const search = location.search.substr(1)
    search.split('&').forEach(paramstr => {
        const arr = paramstr.split('=')
        const key = arr[0]
        //解决汉字乱码问题
        const val = decodeURIComponent(arr[1])
        res[key] = val
    })
    return res
}

//2.方法2利用API
function queryToObj2() {
    res = {}
    const plist = new URLSearchParams(location.search)
    plist.forEach((val,key) => {
        res[key] = val
    })
    return res
}
console.log(queryToObj2())

//查找url参数
//方法1
function query1(name) {
    const search = location.search.substr(1)
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`,'i')
    const res = search.match(reg)
    if(res == null) {
        return null
    }
    return res[2]
}
query1('q')
//方法2
function query2(name) {
    const search = location.search.substr(1)
    const p = new URLSearchParams(search)
    return p.get(name)
}
//传递url字符串进去
const url = 'https://a.b.com/c?d=e&f=g'
function getParams(url,name) {
    const p = new URL(url)
    return p.searchParams.get(name)
}
console.log(getParams(url,'d'))
