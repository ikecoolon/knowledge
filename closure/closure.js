function foo1(x) {
    var tmp = 3;

    function bar(y) {
        console.log(x + y + (++tmp));
    }

    bar(10);
}

foo1(2);
foo1(2);


function foo(x) {
    var tmp = 3;
    return function (y) {
        console.log(x + y + (++tmp));
    }
}

var bar = foo(2); // bar 现在是一个闭包
bar(10);
bar(10);


function fooObj(x) {
    var tmp = 3;
    return function (y) {
        console.log(x + y + tmp);
        x.memb = x.memb ? x.memb + 1 : 1;
        console.log(x.memb);
    }
}

var age = new Number(2);
var barObj = fooObj(age); // bar 现在是一个引用了age的闭包
barObj(10);
barObj(10);


//--------------------------

var db = (function () {//匿名自执行函数
// 创建一个隐藏的object, 这个object持有一些数据
// 从外部是不能访问这个object的
    var data = {};
// 创建一个函数, 这个函数提供一些访问data的数据的方法
    return function (key, val) {
        if (val === undefined) {
            console.log(data);
            return data[key]
        } // get
        else {
            console.log(data);
            return data[key] = val
        } // set
    }
// 我们可以调用这个匿名方法
// 返回这个内部函数，它是一个闭包
})();

db('x'); // 返回 undefined
db('x', 1); // 设置data['x']为1
db('x'); // 返回 1
// console.log(db('x'));
// 我们不可能访问data这个object本身
// 但是我们可以设置它的成员

//闭包的用途
//1、将函数内部和函数外部连接起来的一座桥梁、函数读取外部变量容易，外部读取函数内部变量就无法办到
//2、让这些变量的值始终保持在内存中（用多了会导致内存泄漏影响页面性能），能利用这个特性缓存一些数据加快调用效率
//以下是例子

var CachedSearchBox = (function(){
    var cache = {},
        count = [];
    return {
        attachSearchBox : function(dsid){
            if(dsid in cache){//如果结果在缓存中
                return cache[dsid];//直接返回缓存中的对象
            }
            var fsb = new uikit.webctrl.SearchBox(dsid);//新建
            cache[dsid] = fsb;//更新缓存
            if(count.length > 100){//保正缓存的大小<=100
                delete cache[count.shift()];
            }
            return fsb;
        },

        clearSearchBox : function(dsid){
            if(dsid in cache){
                cache[dsid].clearSelection();
            }
        }
    };
})();

CachedSearchBox.attachSearchBox("input");
