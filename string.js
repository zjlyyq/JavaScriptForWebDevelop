let str = "This is the letter sigma:\u0020\u03a3.";
console.log(`str = '${str}', str's length = ${str.length}`);

// tag Function
function tagFunction(strings, ...expressions) {
    console.log(strings);
    console.log(expressions);
}

let a = 3, b = 4, c = 5;
// 函数直接作为模板字符串前缀就成了所谓的标签函数(TagFunction)
tagFunction`${a} + ${b} + ${c} = ${a+b+c}`;

tagFunction(`${a} + ${b} + ${c} = ${a+b+c}`);