let o = {};
let s1 = Symbol('firstName');
let s2 = Symbol('lastName');
o[s1] = 'Zhang';
o[s2] = 'San';
o.age = 24;
o.id = 1;
console.log(Object.getOwnPropertyNames(o));
console.log(Object.getOwnPropertySymbols(o));
console.log(Object.getOwnPropertyDescriptors(o));

// it 对象实现了可迭代协议，成为可迭代对象。
let it = {
    next: function() {
        let ret = Math.random();
        if (ret > 0.5) return {value: -1, done: true};
        else return {value: ret, done: false};
    },
    [Symbol.iterator]: function() {
        return this;
    }
}

for(let r of it) {
    console.log(r);
}

let functionName = "main";
let obj = {
    // 计算属性
    *[functionName]() {
        console.log('helloworld');
    }
}

console.log(obj);

// 生成器迭代器
// function* gengertor1() {
//     for(let i = 0;i < 1000;i ++) {
//         yield i;
//     }
// }

// for (let i of gengertor1()) {
//     console.log(i);
// }

// console.log('gengertor exit')



// 异步生成器迭代器
async function* gengertor2() {
    for(let i = 0;i < 10;i ++) {
        yield i;
    }
}

(async function() {
    for await(let i of gengertor2()) {
        console.log(i);
    }
})();

console.log('async gengertor exit')