var Person = function(){};
var p = new Person();

//*new的过程拆分成以下三步：*
//(1) var p={}; 也就是说，初始化一个对象p;
//(2) p. __ proto __ = Person.prototype;
//(3) Person.call(p); 也就是说构造p，也可以称之为初始化p



var Person = function() {};
Person.prototype.say = function() {
    console.log("Person say");
}
Person.prototype.salary = 50000;

var Programmer = function() {};
Programmer.prototype = new Person();
Programmer.prototype.writeCode = function() {
    console.log("Programmer writes code");
};
Programmer.prototype.salary = 500;

var p = new Programmer();
p.say();    // Person say
p.writeCode();  // Programmer writes code
console.log(p.salary); // 500

// 推导过程一 -->
// Programmer.prototype = {};
// Programmer.prototype.__proto__ = Person.prototype;
// Person.call(Programmer.prototype);
// 推导过程二 -->
// var p = {};
// p.__proto__ = Programmer.prototype;
// p.__proto__ = new Person();
// p.__proto__.__proto__ = Pserson.prototype;
// Person.call(p.__proto__);
// Programmer.call(p);

//相当于继承了