//if else 太多了之后精简 if else。 与用switch 替换有点相似，
function Strategy(type, a, b) {
    let Strategyer = {
        add: function (a, b) {
            return a + b;
        },
        minus: function (a, b) {
            return a - b;
        },
        division: function (a, b) {
            return a / b;
        }
    }
    return Strategyer[type](a, b);
}

