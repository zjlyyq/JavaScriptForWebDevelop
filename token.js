// "use strict"

let func = () => {
    message = "Hello World";
}
func();
console.log(message);


let a = null;
console.log(typeof a);  // null 实际上是指空对象指针，所以是object
a.name = "null";        // TypeError: Cannot set property 'name' of null

console.log(a);    