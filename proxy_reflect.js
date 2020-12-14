let target = {
    foo: 'bar',
    bar: 'foo'
}
let handler = {
    get() {
        console.log('get')
        return Reflect.get(...arguments);
    },
    set() {
        console.log('set()');
    }
}
let proxy = new Proxy(target, handler)
console.log(proxy.foo);

let proxy2 = new Proxy(target, handler)
console.log(proxy2.foo);


console.log(target.foo);

// 可撤销代理
let { proxy3, revoke } = Proxy.revocable(target, handler);
console.log(proxy3);
console.log(Reflect.get(target, 'foo'));


// 实用Reflect API
// 返回状态标记
if (Reflect.defineProperty(target, 'name', {
    value: 'target'
})) {
    console.log('success');
} else {
    console.log('failure');
}

// 替代操作符的一等函数
console.log(Reflect.get(target, 'foo'));
Reflect.set(target, 'foo', 'foo');
console.log(Reflect.get(target, 'foo'));



function applyFun() {
    console.log(this.foo);
}
applyFun.apply = function(){console.log('opps')};
applyFun.apply(target, []);
// 安全的apple函数
Reflect.apply(applyFun, target, []);

proxy2.foo = '233'