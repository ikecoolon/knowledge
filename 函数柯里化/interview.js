/**
 * // 实现一个add方法，使计算结果能够满足如下预期：
 add(1)(2)(3) = 6;
 add(1, 2, 3)(4) = 10;
 add(1)(2)(3)(4)(5) = 15;
 */

function add(val) {

    //传入参数数组化
    let _args = [].slice.call(arguments);
    // debugger;
    let _add = function () {
        //利用闭包暂存所有调用参数
        _args.push(...arguments);
        //为了让该函数可以连续调用返回自己
        return _add;
    };
    //重写 toString 方法利用隐式转换输出
    _add.toString = function () {
        //将数组中所有参数相加
        return _args.reduce(function (a, b) {
            return a + b;
        })

    };
    return _add;
}


console.log(add(1)(2)(3));
// console.log(add(1, 2, 3)(4));
// console.log(add(1)(2)(3)(4)(5));
