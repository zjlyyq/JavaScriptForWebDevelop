// 序列化
const person = {
    name: '张三',
    age: 12,
    school: {

    },
    grade: undefined
}

console.log(JSON.stringify(person))   // {"name":"张三","age":12}

const filterFunction = (key, value) => {
    switch (key) {
        case 'name':
            return '李四';
        case 'age':
            if (value < 18) 
                return 18;
            else
                return value;
        case 'grade':
            return value ? value : 60;
        default:
            return value;
    }
}

console.log(JSON.stringify(person, filterFunction, 10))

// 自定义序列化
let customPerson = Object.assign(person, {
    toJSON: function() {
        return this.name;
    }
})

console.log(customPerson)
console.log(JSON.stringify(customPerson))

const jsonString = `{"name": "张三", "school":{"name": "zjgsu"}}`
// JSON 解析 接收额外参数
const parseHandle = (key, value) => {
    switch(key) {
        case 'name':
            return '李四';
        case 'school':
            return 'zjgsu';
        default:
            return value
    }
}
const me = JSON.parse(jsonString, parseHandle)
console.log(me)