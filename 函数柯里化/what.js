/**
 * 普通用法
 */
function regExprOrg(value, expr) {
    return value.test(expr);
}

regExprOrg(/\d+/g, 'test')
regExprOrg(/[a-z]+/g, 'test')

/**
 *
 * 函数柯里化 =>  相当于将 a(b,c)=> a(b)(c)
 * @param expr
 * @returns {function(*): *}
 */
function regExpr(expr) {

    return function (value) {
        return expr.test(value);
    }
}

let hasNumber = regExpr(/\d+/g);
let hasString = regExpr(/[a-z]+/g);

console.log(hasNumber('123')); //true
console.log(hasString('jajajs'));//true
console.log(hasString('3'));//false
console.log(hasString('1222aa33'));//true
