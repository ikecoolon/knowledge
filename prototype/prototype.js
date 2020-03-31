
//在Javascript中每个函数都有一个Portotype属性，对象没有

function A(a) {
    this.color = 'aaaa';
}


function b() {

}

console.log(A.prototype.constructor === A);



console.log((new Function(A)).__proto__ === Function.prototype);