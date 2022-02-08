//不同文字弹出窗
function Pop() {

}

Pop.prototype.show = function () {
    let popParam = arguments[0];
    //伪代码
    //popParam.text;
    //popParam.style;
};

let popArr = [
    {text: 'haha', style: [400, 299]},
    {text: 'xixi', style: [200, 399]}
];
let pop = new Pop();
for (let i = 0; i < popArr.length; i++) {
    pop.show(popArr[i]);

}


// jq 里的 extends函数
//$.extends({a:123});  结果：会把a扩展到$上
//$.extends({a:123},{b:111})  结果：会合并{a:123}{b:111}==>返回：{a:123,b:111}

let $ = Object.create(null);

$.exptends = function () {
    if (arguments.length === 1) {
        Object.assign(this, arguments[0]);
    } else {
        return Object.assign(arguments[0], arguments[1]);
    }
};

/**
 * 这个例子享元模式在 es6 下没有什么意义。
 */
$.exptends = function () {
    let target = arguments[0],
        source;
    if (arguments.length === 1) {
        target = 0;
        source = this;
    } else {
        source = arguments[1];
    }
    return Object.assign(source, target);
};

$.exptends({a: 123});
console.log($);
console.log($.exptends({a: 123}, {b: 111}));
