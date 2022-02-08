class PersonClass {
    constructor(personName) {
        this.personName = personName;
    }

    sayHello() {
        console.log(`hello ${this.personName}`)
    }
}

let person = new PersonClass('Peter');
person.sayHello();

// 以上类基本用法等同于 以下

let PersonClass2 = (function () {
    "use strict";
    const PersonType2 = function (name) {
        if (typeof new.target === 'undefined') {
            throw new Error("必须通过 new 调用构造函数");
        }
        this.name = name;
    };
    Object.defineProperty(PersonType2.prototype, "sayHello", {
        value: function () {
            if (typeof new.target !== "undefined") {
                throw new Error("不可使用 new 调用")
            }
            console.log(this.name);
        },
        enumerable: false,
        writable: true,
        configurable: true
    });
    return PersonType2;
})();
let tempPer = new PersonClass2('long');
tempPer.sayHello();
