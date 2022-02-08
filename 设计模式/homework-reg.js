//需求：表单验证工具，告诉该工具，哪个 dom 和验证规则，就可以验证表单的输入。


(function () {

    let regExpr = expr => value => expr.test(value);

    function RegDom(dom, reg) {
        if(!dom instanceof HTMLElement){
            return new Error()
        }
        return reg(dom.value);
    }

    RegDom.regHasNumber = regExpr(/\d+/g);
    RegDom.regHasString = regExpr(/[a-z]+/g);


    window.RegDom = RegDom;
})();

window.onload = function () {
    //模拟2 个 dom
    let dom1, dom2;
    dom1 = document.querySelector('#dom1');
    dom2 = document.querySelector('#dom2');
    console.log(RegDom(dom1, RegDom.regHasNumber));
    console.log(RegDom(dom2, RegDom.regHasString));
}
