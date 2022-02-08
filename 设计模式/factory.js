/**
 * 用自执行匿名函数使该实现只对外暴露 Pop函数，挂载到 window 下
 */
(function () {
//需求： 3种类型的弹窗，3 个确认、取消、分别不同颜色
    function Pop(type, content, color) {
        if (this instanceof Pop) {
            //健壮性：过滤掉不存在弹窗类型
            if (this[type] === undefined) return;
            return this[type](content, color);
        } else {
            new Pop(type, content, color);
        }
    }

    /**
     *
     * 这个部分可以通过读取约定格式的js文件动态增减可创建的类型，
     * 并将类型暴露给调用方以便调用方知道有哪些可用
     *
     */
    Pop.prototype = {
        infoPop: function (content, color) {
            // console.log(arg);
            return [].slice.call(arguments);
        },
        confirmPop: (content, color) => {
            let arg = [].slice.call(arguments);
            console.log(arg);
        },
        cancelPop: (content, color) => {
            let arg = [].slice.call(arguments);
            console.log(arg);
        }
    };


    window.Pop = Pop;

})();
Pop("infoPop", 'hello', 'blue');
Pop("xxooPop", 'hello', 'blue');//不会中断
