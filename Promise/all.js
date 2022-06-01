//传入Promise数组，等待所有的都fulfilled后，返回新的Promise
Promise.all = function (promiseList) {
    return new Promise((resolve,reject) => {
        const result = []
        let resolvedCount = 0
        promiseList.forEach( p => {
            Promise.resolve(p).then(res => {
                result.push(res);
                resolvedCount++;
                if(resolvedCount === length) {
                    resolve(result)
                }
            }).catch(err => {
                reject(err)
            })
        });
    })
}