//给Object扩展方法实现 //error
Object.prototype.customExtend = function (parObj) {
    for (var i in parObj) {//通过for-in循环，把父类的所有属性方法，赋值给自己
        console.log(i);
        this[i] = parObj[i];
    }
};

function Parent() {
    this.age = '50';

    function laugh() {
        console.log('I have a good son');
    }
}

function Son() {
    return {
        Say: function () {

            console.log('my father is ' + this.age);
        }
    }

}

Son.customExtend(Parent);

var son = new Son();
son.Say();