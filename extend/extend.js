//原型链实现
function Person() {
    var name = "default";
    var friends = ['Jonh'];

    return {
        getName: function () {
            return name;
        },
        setName: function (newName) {
            name = newName;
        },
        getFriends: function () {
            return friends;
        },
        addFriends: function (who) {
            friends.push(who);
        }
    }
};

var p = new Person();
p.setName("Tom");
console.log(p.getName());

var Jack = function () {
    this.Laugh = function () {
        console.log('hahahaha');
    }
};

//继承自Person
Jack.prototype = new Person();
//给子类动态添加私有方法，注意要在实例化之后，如果将下面的代码放在实例化之前j.Say()会不存在
Jack.prototype.Say = function () {
    console.log("Hello,my name is Jack");
};
var j = new Jack();
j.setName("Jack");
j.Say();
j.Laugh();
j.addFriends('Peter');

console.log(j.getName());
console.log(j.getFriends());

var k = new Jack();
k.addFriends('Love');
k.setName('June');
console.log("k's friends: " + k.getFriends());
console.log("j's friends: " + j.getFriends());


//存在的问题
//1、由于子类型的原型是父类型的实例，也就是子类型的原型中包含的父类型的属性，从而导致引用类型值的原型属性会被所有实例所共享
//2、在创建子类型的实例时，不能向超类型的构造函数中传递参数