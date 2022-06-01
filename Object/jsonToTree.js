//JSON对象转换为树形结构对象

function jsonToTree(data) {
    let result = []
    let map = {}
    if(!Array.isArray(data)) {
        return result 
    }
    data.forEach(item => {
        map[item.id] = item
    })
    data.forEach(item => {
        let parent = map[item.parentId]
        if(parent) {
            if (parent.children) {
                parent.children.push(item)
            } else {
                (parent.children = []).push(item)
            }
        } else {
            result.push(item)
        }
    })
    return result
}

//测试数据
let data = [
    {
        "id": 133,
        "name": "第三方补货公司",
        "parentId": 1,
        "parentName": null
    },
    {
        "id": 132,
        "name": "测试中",
        "parentId": 1,
        "parentName": null
    },
    {
        "id": 131,
        "name": "子公司",
        "parentId": 104,
        "parentName": null
    },
    {
        "id": 130,
        "name": "测试",
        "parentId": 1,
        "parentName": null
    },
    {
        "id": 1,
        "name": "总部",
        "parentId": 0,
        "parentName": null
    },
        {
        "id": 129,
        "name": "广州易堂有限公司",
        "parentId": 109,
        "parentName": null
    },
    {
        "id": 113,
        "name": "武汉优水",
        "parentId": 1,
        "parentName": null
    },
    {
        "id": 111,
        "name": "优水自选",
        "parentId": 1,
        "parentName": null
    },
    {
        "id": 109,
        "name": "广州宝露矿泉水饮料厂",
        "parentId": 1,
        "parentName": null
    },
    {
        "id": 104,
        "name": "广州保利物业",
        "parentId": 1,
        "parentName": null
    },
    {
        "id": 103,
        "name": "广州百川水业发展有限公司",
        "parentId": 1,
        "parentName": null
    }
];

console.log(jsonToTree(data))