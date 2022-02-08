let a = {
    b: function () {

    }
};

function newb() {

    a.b();
    //扩展的操作
}


//例如新去公司，接手别人代码，
//绑定了 onclick,产品要求 dom1,dom2,dom3
//思路： 找到 onclick

function newClick(dom, fn) {
    //说明已绑定方法
    if (typeof dom.onclick === "function") {
        let _oldClick = dom.onclick;
        dom.onclick = function () {
            _oldClick();
            //做新增的操作
            fn();

        }
    } else {
        dom.click = fn;
    }
}

newClick(dom1, function () {
    //做操作 1
});
newClick(dom1, function () {
    //做操作 2
});

newClick(dom2, function () {
    //做操作 2
});

