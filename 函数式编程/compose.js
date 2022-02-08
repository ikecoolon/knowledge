//需求  实现(10+10)*10
let caculate = x => (x + 10) * 10;
console.log(caculate(10));

let add = x => x + 10;
let multiple = x => x * 10;

let calculate = multiple(add(10));
console.log(calculate);

//聚合函数的雏形,这里只能传 2 个参数，如何适应未知个数的函数聚合呢？
let composeStar = (afn, bfn) => {
    return function (x) {
        return afn(bfn(x));
    }
};
let calEnd = composeStar(multiple, add);
console.log(calEnd(10));
/**
 * 更好的封装
 * @returns {function(*=): T}
 */
let compose = function () {
    let args = [].slice.call(arguments);
    return function (x) {
        return args.reduceRight(function (pre, cur) {
            return cur(pre);
        }, x);
    }
};

//es6写法
// let composeES6 = (...args) => x => args.reduceRight((p, c) => c(p), x);
//第二种写法
let composeES6 = (...args) => args.reduceRight((p, c) => x => c(p(x)));
// let composeES6 = (...args) => x => {
//     return args.reduceRight((p, c) => {
//         return c(p);
//     }, x);
// };


let minus = x => x - 10;
let caltest = compose(multiple, add);
let caltest2 = compose(minus, multiple, add);
console.log(caltest(10));
console.log(caltest2(10));
let calES6test = composeES6(multiple, add);
let calES6test2 = composeES6(minus, multiple, add);
console.log('-------es6------');
console.log(calES6test(10));
console.log(calES6test2(10));
console.log('-------------');


/**
 * Compose Function from right to left
 * compose(a,b,c) = (...args) => a(b(c(...args)));
 *
 * 在數學中，複合函數（英語：function composition）是指逐點地把一個函數作用於另一個函數的結果，
 * 所得到的第三個函數。例如，函數 f : X → Y 和 g : Y → Z 可以複合，得到從 X 中的 x 映射到 Z 中 g(f(x)) 的函數。
 * 直觀來說，如果 z 是 y 的函數，y 是 x 的函數，那麼 z 是 x 的函數。
 * 得到的複合函數記作 g ∘ f : X → Z，定義為對 X 中的所有 x，(g ∘ f )(x) = g(f(x))。[note 1] 直觀地說，
 * 複合兩個函數是把兩個函數連結在一起的過程，內函數的輸出就是外函數的輸入。 by: https://zh.wikipedia.org/wiki/复合函数
 *
 *
 * usage:
 *  - Redux,  compose(Middleware)
 *  - React const TodoList = compose(Container, List, R.map(ListItem), items);
 *
 *  pipi 函数正好与 compose 相反，从左往右执行
 */




