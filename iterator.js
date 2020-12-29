let iterable = {
    // 迭代器协议 Iterator
    "next": function() {
        let r = Math.random();
        if (r > 0.5) return {done: true, value: r}
        else return {done: false, value: r}
    },
    // 可迭代协议 Iterable
    [Symbol.iterator]: function() {
        return this;
    }
}

let iterableFn = function(total) {
    this.total = total;
    this.count = 0;
    this[Symbol.iterator] = function() {
        return this;
    }
    this['next'] = function() {
        this.count ++;
        if (this.count > this.total) return {done: true};
        else return {done: false, value: this.count};
    }
}
let iterableFn2 = function(total) {
    this[Symbol.iterator] = function() {
        return {
            'count': 0,
            'next': function() {
                this.count ++;
                if (this.count > total) return {done: true};
                else return {done: false, value: this.count};
            },
            return: function() {
                console.log('提前退出喽');
                return {done: true}
            }
        };
    }
}
for (let i of iterable) {
    console.log(i);
}
console.log('again');
for (let i of iterable) {
    console.log(i);
}

console.log('new it');
let it = new iterableFn(5);
let it2 = new iterableFn2(5);
for (let i of it) {
    console.log(i);
}
for (let i of it) {
    console.log(i);
}
console.log('new it2')
for (let i of it2) {
    console.log(i);
    if (i > 2) break;
}
for (let i of it2) {
    console.log(i);
}


console.log('array 迭代器不能提前退出');
let arr = [1, 2, 3, 4, 5];
let arr_it = arr[Symbol.iterator];
it.return = function() {
    console.log('')
}