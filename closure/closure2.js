function f1() {
    var n = 999;
    nAdd = function () {
        n += 1
    };
    function f2() {
        console.log(n);
    }
    return f2;

}
var result = f1();
result(); // 999

nAdd();
result(); // 1000

// 对内存占用的原理：
// f1是f2的父函数，而f2被赋给了一个全局变量，
// 这导致f2始终在内存中，而f2的存在依赖于f1，
// 因此f1也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收

//和java对象没多大区别，相当于将f1中的n当私有属性  nAdd、f2当做公共方法