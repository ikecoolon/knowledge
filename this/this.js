var name = 'tiger';

function Animal() {
    var name = 'lion';
    console.log(this.name);
}

Animal.call({name: 'pig'});
Animal.bind({name: 'cat'})();


//1、利用call \ apply \bind 判断数据类型的方式
console.log(Object.prototype.toString.call([]) === '[object Array]');
console.log(Object.prototype.toString.bind([])() === '[object Array]');

//2、另一种用法
function Add() {
    return [].slice.apply(arguments).reduce(
        (a, b) => a + b
    );
}

console.log(Add(1, 20, 300, 4000));