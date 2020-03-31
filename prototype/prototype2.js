//__proto__是每个对象都有的一个属性，而prototype是函数才会有的属性!!!
function Foo() {
}

var Boo = {name: "Boo"};
Foo.prototype = Boo;
var f = new Foo();
//一个对象的隐式原型指向构造该对象的构造函数的原型，
console.log(f.__proto__ === Foo.prototype); // true
console.log(f.__proto__ === Boo);   // true
//使用Object.getPrototypeOf()代替__proto__!!!
Object.getPrototypeOf(f) === f.__proto__;   // true

//原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。

