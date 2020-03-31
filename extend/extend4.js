//注意this的指向

var o = {
    a: 2,
    b: function () {
        return this.a + 1;
    }
};


console.log(o.b());
var p = Object.create(o);
p.a = 12;
console.log(p.b());
console.log(o.b());